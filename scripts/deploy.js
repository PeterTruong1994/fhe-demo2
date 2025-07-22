const hre = require("hardhat");

async function main() {
  const EncryptedStore = await hre.ethers.getContractFactory("EncryptedStore");
  const store = await EncryptedStore.deploy();

  await store.waitForDeployment();
  console.log("EncryptedStore deployed to:", store.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
