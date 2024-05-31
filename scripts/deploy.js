const hre = require("hardhat");

async function main() {
  const IPT = await hre.ethers.getContractFactory("MyCar");
  const ipt = await IPT.deploy("CarNFT1", "CCar1");

  await ipt.deployed();
  console.log("Successfully deployed smart contract to: ", ipt.address);

  await ipt.mint("https://ipfs.io/ipfs/QmV5LTKhwpsKq8TLPPcHrbhPuzLBkLvDYTfvVXKg2EexKh");
  console.log("NFT successfully minted");
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
  