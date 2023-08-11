require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  defaultNetwork: "polygon_mumbai",
  solidity: "0.8.17",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    polygon_mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: process.env.POLYGONSCAN_API_KEY
  },
};


// GPTMembership: 0x5FbDB2315678afecb367f032d93F642f64180aa3
//GPTMembership polygon: 0x373917004d664117D6e04b27f2EE7392D1e65117