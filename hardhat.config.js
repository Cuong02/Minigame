require("@nomiclabs/hardhat-ethers");
require("dotenv").config
const privateKey = "69e6bab0dbe872a7aa2bb79639d93de6c3fb1dbdb0ebf0a39e941ed6e5c9992d";
module.exports = {
  defaultNetwork: "matic",
  networks: {
    hardhat: {
    },
    matic: {
      url: "https://rpc-amoy.polygon.technology",
      accounts: [privateKey]
    }
  },
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
}