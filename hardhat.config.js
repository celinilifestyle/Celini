require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

const { BSC_RPC, BSC_PRIVATE_KEY, BSCSCAN_API_KEY } = process.env;

module.exports = {
  solidity: "0.8.20",
  networks: {
    bsc: {
      url: BSC_RPC || "https://bsc-dataseed.binance.org/",
      accounts: BSC_PRIVATE_KEY ? [BSC_PRIVATE_KEY] : []
    }
  },
  etherscan: {
    apiKey: {
      bsc: BSCSCAN_API_KEY || ""
    }
  }
};
