import {SignerWithAddress} from '@nomiclabs/hardhat-ethers/signers'
import {minTokenWhitelistTransactionAmount, MintStatus,} from '../utils/constant'
import {deploy} from '../utils/deploy'
import {ethers} from "hardhat";
import {
    MagicLamp,
    TalentLayerEscrow,
    TalentLayerID,
    TalentLayerPlatformID,
    TalentLayerService
} from "../typechain-types";
import {expect} from "chai";
//TODO Ajouter test fonction update metadata

const platformId = 1
const aliceTlId = 1
const bobTlId = 2
const carolPlatformId = 1
const serviceId = 1
const proposalId = 1
const transactionId = 1
const accountantGenieId = 1;
const doctorGenieId = 2;
const wrongGenieId = 3;
const accountantWishId = 1;
const doctorWishId = 2;
const transactionAmount = ethers.utils.parseEther('1000')
const tokenAddress = ethers.constants.AddressZero
const geniePrice = 100;
const schemaCid = 'QmWrMtWivQNxVd82Si3Ptq5kAzvr2AGui3iD8TfGW2cRD7';
const serviceCid = 'QmWrMtWivQNxVd82Si3Ptq5kAzvr2AGui3iD8TfGW2cRD7';
const proposalCid = 'QmWrMtWivQNxVd82Si3Ptq5kAzvr2AGui3iD8TfGW2cRD7';

/**
 * Deploys contract and sets up the context for genie testing.
 * @returns the deployed contracts
 */
async function deployAndSetup(): Promise<
    [TalentLayerID, TalentLayerEscrow, TalentLayerService, TalentLayerPlatformID, MagicLamp]
> {
    const [deployer, alice, bob, carol] = await ethers.getSigners()
    const [
        talentLayerID,
        talentLayerPlatformID,
        talentLayerEscrow,
        ,
        talentLayerService,
        talentLayerReview,
        simpleERC20,
        magicLamp,
    ] = await deploy(false)

    // Grant Platform Id Mint role to Deployer and Bob
    const mintRole = await talentLayerPlatformID.MINT_ROLE()
    await talentLayerPlatformID.connect(deployer).grantRole(mintRole, deployer.address)

    // Deployer mints Platform Id for Carol
    const platformName = 'magic_lamp'
    await talentLayerPlatformID.connect(deployer).whitelistUser(deployer.address)
    await talentLayerPlatformID.connect(deployer).mintForAddress(platformName, carol.address)

    // Disable whitelist for reserved handles
    await talentLayerID.connect(deployer).updateMintStatus(MintStatus.PUBLIC)

    // Set service contract address on ID contract
    await talentLayerID.connect(deployer).setIsServiceContract(talentLayerService.address, true)

    // Mint TL Id for Alice and Bob
    await talentLayerID.connect(alice).mint(carolPlatformId, 'alice')
    await talentLayerID.connect(bob).mint(carolPlatformId, 'bob__')

    return [talentLayerID, talentLayerEscrow, talentLayerService, talentLayerPlatformID, magicLamp]
}

async function getTotalPrice(talentLayerPlatformID: TalentLayerPlatformID, talentLayerEscrow: TalentLayerEscrow, genieAmount: number) {
    const platformData = await talentLayerPlatformID.platforms(platformId)
    const protocolEscrowFeeRate = await talentLayerEscrow.protocolEscrowFeeRate()
    const originServiceFeeRate = platformData.originServiceFeeRate
    const originValidatedProposalFeeRate = platformData.originValidatedProposalFeeRate

    return genieAmount + (genieAmount * (protocolEscrowFeeRate + originValidatedProposalFeeRate + originServiceFeeRate)) / 10000
}

describe('Creation & Execution of Genies', function () {
    let deployer: SignerWithAddress,
        alice: SignerWithAddress,
        bob: SignerWithAddress,
        carol: SignerWithAddress,
        dave: SignerWithAddress,
        accountantGenieSigner: SignerWithAddress,
        doctorGenieSigner: SignerWithAddress,
        talentLayerID: TalentLayerID,
        talentLayerEscrow: TalentLayerEscrow,
        talentLayerService: TalentLayerService,
        talentLayerPlatformID: TalentLayerPlatformID,
        magicLamp: MagicLamp

    before(async function () {
        ;[deployer, alice, bob, carol, dave, accountantGenieSigner, doctorGenieSigner] = await ethers.getSigners()
        ;[talentLayerID, talentLayerEscrow, talentLayerService, talentLayerPlatformID, magicLamp] =
            await deployAndSetup()

        // Deployer whitelists a list of authorized tokens
        await talentLayerService
            .connect(deployer)
            .updateAllowedTokenList(tokenAddress, true, minTokenWhitelistTransactionAmount)
    })

    describe('CreateGenie function', async function () {
        it("should create a new genie and emit NewGenie event", async () => {
            const tx = await magicLamp.connect(alice).createGenie(
                accountantGenieSigner.address,
                alice.address,
                aliceTlId,
                geniePrice,
                schemaCid,
                serviceCid,
                proposalCid,
            );

            const genie: MagicLamp.GenieStruct = await magicLamp.getGenie(accountantGenieId);
            expect(genie.genieAddress).to.equal(accountantGenieSigner.address);
            expect(genie.ownerAddress).to.equal(alice.address);
            expect(genie.ownerTalentLayerId).to.equal(aliceTlId);
            expect(genie.price).to.equal(geniePrice);
            expect(genie.schemaCid).to.equal(schemaCid);
            expect(genie.serviceCid).to.equal(serviceCid);
            expect(genie.proposalCid).to.equal(proposalCid);
            await expect(tx).to.emit(magicLamp, 'NewGenie').withArgs(genie.id, genie.genieAddress, alice.address, aliceTlId, geniePrice, schemaCid, serviceCid, proposalCid);
        });

        it("should fail if genie address is zero", async () => {
            await expect(magicLamp.connect(alice).createGenie(
                "0x0000000000000000000000000000000000000000",
                alice.address,
                aliceTlId,
                geniePrice,
                schemaCid,
                serviceCid,
                proposalCid,
            )).to.be.rejectedWith("Genie address cannot be 0");
        });

        it("should fail if owner address is zero", async () => {
            await expect(magicLamp.connect(alice).createGenie(
                accountantGenieSigner.address,
                "0x0000000000000000000000000000000000000000",
                aliceTlId,
                geniePrice,
                schemaCid,
                serviceCid,
                proposalCid,
            )).to.be.rejectedWith("Owner address cannot be 0");
        });

        it("should fail if owner does not own the ownerTalentLayerId", async () => {
            await expect(magicLamp.connect(dave).createGenie(
                accountantGenieSigner.address,
                dave.address,
                2,
                geniePrice,
                schemaCid,
                serviceCid,
                proposalCid,
            )).to.be.rejectedWith("Owner address does not own the ownerTalentLayerId");
        });
    })

    describe('MakeWish function', async function () {
        it("should fail if the sender does not own the userId", async () => {
            const totalAmount = await getTotalPrice(talentLayerPlatformID, talentLayerEscrow, geniePrice);

            await expect(magicLamp.connect(bob).makeWish(aliceTlId, accountantGenieId,{ value: totalAmount })
        )
                .to.be.rejectedWith("Sender address does not own the userId");
        });

        it("should fail if msg.value does not match the genie price", async () => {
            const incorrectValue = geniePrice - 1; // Less than required
            await expect(magicLamp.connect(bob).makeWish(bobTlId, accountantGenieId,{ value: incorrectValue }))
                .to.be.rejectedWith("msg.value does not match the genie price");
        });

        it("should fail if MagicLamp contract is not a delegate of the genie owner", async () => {
            const totalAmount = await getTotalPrice(talentLayerPlatformID, talentLayerEscrow, geniePrice);

            await expect(magicLamp.connect(bob).makeWish(bobTlId, accountantGenieId,{ value: totalAmount }))
                .to.be.rejectedWith("Not owner or delegate");
        });

        it("should fail if MagicLamp contract is not a delegate of the user", async () => {
            const totalAmount = await getTotalPrice(talentLayerPlatformID, talentLayerEscrow, geniePrice);

            // Add MagicLamp contract as delegate of alice
            await talentLayerID.connect(alice).addDelegate(aliceTlId, magicLamp.address);
            await expect(magicLamp.connect(bob).makeWish(bobTlId, accountantGenieId,{ value: totalAmount }))
                .to.be.rejectedWith("Not owner or delegate");
        });

        it("should create a new wish and emit NewWish event", async () => {
            const totalAmount = await getTotalPrice(talentLayerPlatformID, talentLayerEscrow, geniePrice);

            // Add MagicLamp contract as delegate of bob
            await talentLayerID.connect(bob).addDelegate(bobTlId, magicLamp.address);
            const tx = await magicLamp.connect(bob).makeWish(bobTlId, accountantGenieId,{ value: totalAmount });

            const wish: MagicLamp.WishStruct = await magicLamp.getWish(accountantWishId);

            expect(wish.id).to.equal(accountantWishId);
            expect(wish.userId).to.equal(bobTlId);
            expect(wish.genieId).to.equal(accountantGenieId);
            expect(wish.status).to.equal(0);
            expect(wish.transactionId).to.equal(transactionId);
            await expect(tx).to.emit(magicLamp, 'NewWish').withArgs(wish.id, bobTlId, accountantGenieId, serviceId, proposalId,transactionId);

            await expect(tx).to.changeEtherBalances(
                [bob.address, talentLayerEscrow.address],
                [-totalAmount, totalAmount],
            )
        });
    })

    describe("confirmExecution function", function () {
        it("should fail if signer is not the right genie address", async function () {
            await expect(magicLamp.connect(alice).confirmExecution(accountantGenieId, accountantWishId))
                .to.be.rejectedWith("Only the right Genie can call this function");
        });

        it("should fail if the wish does not belong to the right genie", async function () {
            // Create another genie
            await magicLamp.connect(alice).createGenie(
                doctorGenieSigner.address,
                alice.address,
                aliceTlId,
                geniePrice,
                schemaCid,
                serviceCid,
                proposalCid,
            );
            await expect(magicLamp.connect(doctorGenieSigner).confirmExecution(doctorGenieId, accountantWishId))
                .to.be.rejectedWith("Wish does not belong to the right genie");
        });

        it("should confirm a wish execution and emit WishCompleted event", async function () {
            const tx = await magicLamp.connect(accountantGenieSigner).confirmExecution(accountantGenieId, accountantWishId);

            const wish = await magicLamp.getWish(accountantWishId);
            const genie: MagicLamp.GenieStruct = await magicLamp.getGenie(wish.genieId);

            expect(wish.status).to.equal(1);
            expect(await magicLamp.getHasUsedGenie(bob.address, wish.genieId)).to.equal(true);
            await expect(tx).to.emit(magicLamp,'WishCompleted').withArgs(accountantWishId);

            await expect(tx).to.changeEtherBalances(
                [talentLayerEscrow.address, genie.ownerAddress],
                [-genie.price, genie.price],
            )

        });

        it("should fail if the wish is not pending", async function () {
            await expect(magicLamp.connect(accountantGenieSigner).confirmExecution(accountantGenieId, accountantWishId))
                .to.be.rejectedWith("Wish is not pending");
        });
    });

    describe("cancelExecution function", function () {
        it("should fail if the wrong genie is calling the function", async function () {
            const totalAmount = await getTotalPrice(talentLayerPlatformID, talentLayerEscrow, geniePrice);

            await magicLamp.connect(bob).makeWish(bobTlId, doctorGenieId,{ value: totalAmount });

            await expect(magicLamp.connect(accountantGenieSigner).cancelExecution(doctorGenieId, accountantWishId))
                .to.be.rejectedWith("Only the right Genie can call this function");
        });

        it("should fail if the wish does not belong to the right genie", async function () {
            const totalAmount = await getTotalPrice(talentLayerPlatformID, talentLayerEscrow, geniePrice);

            await magicLamp.connect(bob).makeWish(bobTlId, accountantGenieId,{ value: totalAmount });

            await expect(magicLamp.connect(accountantGenieSigner).cancelExecution(accountantGenieId, doctorWishId))
                .to.be.rejectedWith("Wish does not belong to the right genie");
        });

        it("should fail if the wish is not pending", async function () {
            await expect(magicLamp.connect(accountantGenieSigner).cancelExecution(accountantGenieId, accountantWishId))
                .to.be.rejectedWith("Wish is not pending");
        });

        it("should cancel a wish execution and emit WishCancelled event", async function () {
            const totalAmount = await getTotalPrice(talentLayerPlatformID, talentLayerEscrow, geniePrice);

            const tx = await magicLamp.connect(doctorGenieSigner).cancelExecution(doctorGenieId, doctorWishId);

            // Check the event emission
            await expect(tx).to.emit(magicLamp, "WishCancelled").withArgs(doctorWishId);

            // Fetch the wish state after cancellation
            const wish: MagicLamp.WishStruct = await magicLamp.wishes(doctorWishId);

            // Assert the state changes
            expect(wish.genieId).to.equal(doctorWishId);
            expect(wish.status).to.equal(2);

            await expect(tx).to.changeEtherBalances(
                [talentLayerEscrow.address, bob.address],
                [-totalAmount, totalAmount],
            )
        });
    });

    describe("rate function", function () {
        it("should fail if the user has not executed the genie", async function () {
            await expect(magicLamp.connect(bob).rate(doctorGenieId, 3))
                .to.be.revertedWith("User has not executed this genie");
        });

        it("should fail if the rating is not between 1 and 5", async function () {
            await expect(magicLamp.connect(bob).rate(accountantGenieId, 0))
                .to.be.revertedWith("Rating must be between 1 and 5");
            await expect(magicLamp.connect(bob).rate(accountantGenieId, 6))
                .to.be.revertedWith("Rating must be between 1 and 5");
        });

        it("should emit NewRating when rating for the first time", async function () {
            const tx = await magicLamp.connect(bob).rate(accountantGenieId, 4);
            await expect(tx).to.emit(magicLamp, "NewRating").withArgs(accountantGenieId, bob.address, 4);
        });

        it("should emit UpdateRating when updating the rating", async function () {
            const tx = await magicLamp.connect(bob).rate(accountantGenieId, 2);
            await expect(tx).to.emit(magicLamp, "UpdateRating").withArgs(accountantGenieId, bob.address, 2, -2);
            const tx2 = await magicLamp.connect(bob).rate(accountantGenieId, 5);
            await expect(tx2).to.emit(magicLamp, "UpdateRating").withArgs(accountantGenieId, bob.address, 5, +3);
        });
    });
})
