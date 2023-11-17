import { ethers } from "hardhat";

async function main() {

  //TODO: Deploy All TalentLayer Contracts
  //TODO: Deploy MagicLamp Contract
  const magicLamp = await ethers.deployContract("MagicLamp");

  await magicLamp.waitForDeployment();

  console.log(`MagicLamp deployed to: ${magicLamp.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
