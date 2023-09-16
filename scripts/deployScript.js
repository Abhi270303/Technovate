const { ethers } = require("hardhat");

async function main() {
  const MyToken = await ethers.getContractFactory("MyToken");
  const myToken = await MyToken.deploy();
  await myToken.waitForDeployment();
  const myTokenDeploymentTransaction = await myToken.deployTransaction;

  console.log("MyToken deployed to:", myToken.target);
  console.log("Deployer's address:", myTokenDeploymentTransaction.from);

  const ReliefDAO = await ethers.getContractFactory("ReliefDAO");
  const reliefDAO = await ReliefDAO.deploy(myToken.target);
  await reliefDAO.waitForDeployment();
  const reliefDAODeploymentTransaction = await reliefDAO.deployTransaction;

  console.log("ReliefDAO deployed to:", reliefDAO.target);
  console.log("Deployer's address:", reliefDAODeploymentTransaction.from);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
