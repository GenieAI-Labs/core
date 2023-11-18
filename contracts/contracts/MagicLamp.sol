// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {ITalentLayerService} from "./interfaces/ITalentLayerService.sol";
import {ITalentLayerID} from "./interfaces/ITalentLayerID.sol";
import {ITalentLayerEscrow} from "./interfaces/ITalentLayerEscrow.sol";
import {ITalentLayerPlatformID} from "./interfaces/ITalentLayerPlatformID.sol";



contract MagicLamp is Ownable {

    uint8 private constant GENIE_PLATFORM_ID = 1;

    uint256 private MAX_INT =
    0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff;

    string private META_EVIDENCE_CID ="QmWrMtWivQNxVd82Si3Ptq5kAzvr2AGui3iD8TfGW2cRD7";

    /**
     * @notice The fee divider used for every fee rates
     */
    uint16 private constant FEE_DIVIDER = 10000;

    /**
     * @notice Wish status
     */
    enum WishStatus {
        Pending,
        Confirmed,
        Cancelled
    }

    // =========================== Structs ==============================

    /**
     * @notice Genie struct
     * @param id Genie Id
     * @param genieAddress Address of the Genie
     * @param ownerAddress Address of the owner
     * @param ownerTalentLayerId TalentLayer Id of the owner
     * @param price Price of the Genie
     * @param schemaCid IPFS cid of the data schema required by the genie
     * @param serviceCid IPFS cid of the Genie service description
     * @param proposalCid IPFS cid of the Genie proposal description
     */
    struct Genie {
        uint256 id;
        address genieAddress;
        address ownerAddress;
        uint256 ownerTalentLayerId;
        uint256 price;
        string schemaCid;
        string serviceCid;
        string proposalCid;
    }

    /**
     * @notice Wish struct
     * @param id Wish Id
     * @param status Wish status
     * @param genieId associated Genie Id
     * @param userId TalentLayer Id of the user
     * @param serviceId Id of the associated service
     * @param transactionId Id of the associated transaction
     */
    struct Wish {
        uint id;
        WishStatus status;
        uint256 genieId;
        uint256 userId;
        uint256 serviceId;
        uint256 transactionId;
    }

    /**
     * @notice Rating struct
     * @param rating Genie rate between 1 & 5
     * @param hasRated true if user already interacted with the genie
     */
    struct Rating {
        uint8 rating;
        bool hasRated;
    }

    // =========================== Mappings & variables ==============================

    /**
     * @notice Genie Id to Genie struct
     */
    mapping (uint256 => Genie) public genies;

    /**
     * @notice Wish Id to Wish Struct
     */
    mapping (uint256 => Wish) public wishes;

    /**
     * @notice Mapping from genieId to a mapping of userAddress to Rating
     */
    mapping(uint256 => mapping(address => Rating)) private ratings;

    /**
     * @notice user address to genieId to "has executed a genie at least once"
     */
    mapping(address => mapping(uint256 => bool)) private hasExecutedGenie;

    /**
     * @notice Genie Id counter
     */
    uint256 private genieId = 1;

    /**
     * @notice Wish Id counter
     */
    uint256 private wishId = 1;

    /**
    * @notice Instance of TalentLayerService.sol
     */
    ITalentLayerService private talentLayerServiceContract;

    /**
     * @notice Instance of TalentLayerID.sol
     */
    ITalentLayerID private talentLayerIdContract;

    /**
     * @notice Instance of TalentLayerEscrow.sol
     */
    ITalentLayerEscrow private talentLayerTalentLayerEscrowContract;

    /**
     * @notice Instance of TalentLayerPlatformID.sol
     */
    ITalentLayerPlatformID private talentLayerPlatformIdContract;

    // =========================== Errors ==============================

    /**
     * @notice error thrown when proper delegations not initiated.
     */
    error NotDelegate();


    // =========================== Events  ==============================

    event NewGenie(uint256 genieId, address genieAddress, address ownerAddress, uint256 ownerTalentLayerId, uint256 price, string schemaCid, string serviceCid, string proposalCid);

    event NewWish(uint256 wishId, uint256 userId, uint256 genieId, uint256 serviceId, uint256 proposalId, uint256 transactionId);

    event WishCompleted(uint256 wishId);

    event WishCancelled(uint256 wishId);

    event NewRating(uint256 genieId, address userAddress, uint8 _rating);

    event UpdateRating(uint256 genieId, address userAddress, uint8 _rating, int8 diffRating);


    constructor(
        address _talentLayerServiceAddress,
        address _talentLayerIDAddress,
        address _talentLayerEscrowAddress,
        address _talentLayerPlatformIdAddress
    ) payable {
        talentLayerIdContract = ITalentLayerID(_talentLayerIDAddress);
        talentLayerServiceContract = ITalentLayerService(_talentLayerServiceAddress);
        talentLayerTalentLayerEscrowContract = ITalentLayerEscrow(_talentLayerEscrowAddress);
        talentLayerPlatformIdContract = ITalentLayerPlatformID(_talentLayerPlatformIdAddress);
    }

    // =========================== View Functions ==============================

    /**
     * @notice Returns the genie struct
     * @param _genieId Genie Id
     * @return Genie struct
     */
    function getGenie(uint256 _genieId) external view returns (Genie memory) {
        return genies[_genieId];
    }

    /**
     * @notice Returns whether an address has executed a genie at least once
     * @param _userAddress Address of the user
     * @param _genieId Genie Id
     * @return Genie struct
     */
    function getHasUsedGenie(address _userAddress, uint256 _genieId) external view returns (bool) {
        return hasExecutedGenie[_userAddress][_genieId];
    }

    /**
     * @notice Returns the wish struct
     * @param _wishId Wish Id
     * @return Wish struct
     */
    function getWish(uint256 _wishId) external view returns (Wish memory) {
        return wishes[_wishId];
    }

    // =========================== Public & External Functions ==============================

    /**
     * @notice Creates a new Genie
     * @param _genieAddress Address of the Genie
     * @param _ownerAddress Address of the owner
     * @param _ownerTalentLayerId TalentLayer Id of the owner
     * @param _price Price of the Genie
     * @param _schemaCid IPFS cid of the Genie schema
     * @param _serviceCid IPFS cid of the Genie service description
     * @param _proposalCid IPFS cid of the Genie proposal description
     * @return newGenieId id of the new created genie
     * @dev emits NewGenie event
     * @dev Owner needs to delegate this contract on the TalentLayerId contract
     */
    function createGenie(
        address _genieAddress,
        address _ownerAddress,
        uint256 _ownerTalentLayerId,
        uint256 _price,
        string calldata _schemaCid,
        string calldata _serviceCid,
        string calldata _proposalCid
    ) external returns (uint256 newGenieId) {
        require(_genieAddress != address(0), "Genie address cannot be 0");
        require(_ownerAddress != address(0), "Owner address cannot be 0");
        require(talentLayerIdContract.ownerOf(_ownerTalentLayerId) == _ownerAddress, "Owner address does not own the ownerTalentLayerId");

        uint256 currentId = genieId;

        genies[currentId] = Genie(currentId, _genieAddress, _ownerAddress, _ownerTalentLayerId, _price, _schemaCid, _serviceCid, _proposalCid);

        emit NewGenie(genieId, _genieAddress, _ownerAddress, _ownerTalentLayerId, _price, _schemaCid, _serviceCid, _proposalCid);
        ++genieId;

        return currentId;
    }

    /**
     * @notice Creates a new wish
     * @param _userId TalentLayer Id of the user
     * @param _genieId Genie Id
     * @return newWishId id of the new created wish
     * @dev emits NewWish event
     * @dev Owner needs to delegate this contract on the TalentLayerId contract
     */
    function makeWish(
        uint256 _userId,
        uint256 _genieId
    ) external payable returns (uint256 newWishId) {
        Genie memory genie = genies[_genieId];
        address userAddress = talentLayerIdContract.ownerOf(_userId);
        require(userAddress == msg.sender, "Sender address does not own the userId");

        ITalentLayerPlatformID.Platform memory platform = talentLayerPlatformIdContract
            .getPlatform(GENIE_PLATFORM_ID);

        uint256 protocolFee = talentLayerTalentLayerEscrowContract.getProtocolEscrowFeeRate();

        uint256 totalPrice = genie.price +
            (((genie.price * protocolFee) +
            (genie.price * platform.originServiceFeeRate) +
                (genie.price * platform.originValidatedProposalFeeRate)) / FEE_DIVIDER);


        require(totalPrice == msg.value, "msg.value does not match the genie price");

        //User creates a service
        uint256 serviceId = talentLayerServiceContract.createService(_userId, GENIE_PLATFORM_ID, genie.serviceCid, "");
        //Owner create a proposal
        uint256 proposalId = talentLayerServiceContract.createProposal(genie.ownerTalentLayerId, serviceId, address(0), genie.price, GENIE_PLATFORM_ID, genie.proposalCid, MAX_INT, "");
        //User validates proposal
        uint256 transactionId = talentLayerTalentLayerEscrowContract.createTransaction{value: totalPrice}(_userId, serviceId, proposalId, META_EVIDENCE_CID, genie.proposalCid);

        uint256 currentWishId = wishId;

        //Create Wish
        wishes[currentWishId] = Wish(currentWishId, WishStatus.Pending, _genieId, _userId, serviceId, transactionId);

        emit NewWish(currentWishId, _userId, _genieId, serviceId, proposalId, transactionId);
        ++wishId;

        return currentWishId;
    }

    /**
     * @notice Confirms a wish execution & releases funds
     * @param _genieId Genie Id
     * @param _wishId wish Id
     * @dev emits WishCompleted event
     */
    function confirmExecution(uint256 _genieId, uint256 _wishId) external OnlyGenie(_genieId) {
        Wish storage wish = wishes[_wishId];
        address userAddress = talentLayerIdContract.ownerOf(wish.userId);

        require(wish.genieId == _genieId, "Wish does not belong to the right genie");
        require(wish.status == WishStatus.Pending, "Wish is not pending");

        Genie memory genie = genies[_genieId];

        //User releases funds
        talentLayerTalentLayerEscrowContract.release(wish.userId, wish.transactionId, genie.price);

        wish.status = WishStatus.Confirmed;
        hasExecutedGenie[userAddress][_genieId] = true;

        emit WishCompleted(_wishId);
    }

    /**
     * @notice Cancels a wish execution & reimburses funds
     * @param _genieId Genie Id
     * @param _wishId wish Id
     * @dev emits WishCancelled event
     */
    function cancelExecution(uint256 _genieId, uint256 _wishId) external OnlyGenie(_genieId) {
        Wish storage wish = wishes[_wishId];
        require(wish.genieId == _genieId, "Wish does not belong to the right genie");
        require(wish.status == WishStatus.Pending, "Wish is not pending");

        Genie memory genie = genies[_genieId];

        //Genie reimburses funds
        talentLayerTalentLayerEscrowContract.reimburse(genie.ownerTalentLayerId, wish.transactionId, genie.price);

        wish.status = WishStatus.Cancelled;

        emit WishCancelled(_wishId);
    }

    /**
     * @notice Called to rate a genie
     * @param _genieId Genie Id
     * @param _rating rate between 1 & 5
     * @dev emits NewRating or UpdateRating event | user must have executed the genie at least once to rate
     */
    function rate(uint256 _genieId, uint8 _rating) external hasExecuted(_genieId) {
        require(_rating > 0 && _rating <= 5, "Rating must be between 1 and 5");

        Rating storage userRating = ratings[_genieId][msg.sender];

        if (!userRating.hasRated) {
            // Case: New Rating
            userRating.rating = _rating;
            userRating.hasRated = true;
            emit NewRating(_genieId, msg.sender, _rating);
        } else {
            // Case: Update Rating
            int8 diffRating = int8(_rating) - int8(userRating.rating);
            userRating.rating = _rating;
            emit UpdateRating(_genieId, msg.sender, _rating, diffRating);
        }
    }

    // =========================== Private Functions ==============================



    // =========================== Modifier Functions ==============================

    /**
     * @notice Modifier restrict the execution to a specific genie
     * @param _genieId Genie Id
     */
    modifier OnlyGenie(uint256 _genieId) {
        require(genies[_genieId].genieAddress == msg.sender, "Only the right Genie can call this function");
        _;
    }

    /**
     * @notice Modifier to check if a user has executed a genie at least once
     * @param _genieId Genie Id
     */
    modifier hasExecuted(uint256 _genieId) {
        require(hasExecutedGenie[msg.sender][_genieId], "User has not executed this genie");
        _;
    }
}
