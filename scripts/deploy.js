const hre = require("hardhat");

async function main() {
  const IPT = await hre.ethers.getContractFactory("IPT");
  const ipt = await IPT.deploy("IPT", "IPT");

  await ipt.deployed();
  console.log("Successfully deployed smart contract to: ", ipt.address);

  await ipt.mint("https://ipfs.io/ipfs/QmfKE1FC8aZ6J6pwRhfjfAGazeLMzm5ev3xk3bvMDPgJJ5");
  console.log("NFT successfully minted");
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
  