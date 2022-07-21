require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const ALCHEMY_API_KEY = "MBoi2Gjcw_WyZbKgT3ZwfVBhsQ-Ia5Tq"
const GOERLI_PRIVATE_KEY = "7fcb03322788933e1aec709220f854e448758065356dc1126cb08d079d1a3cb1"

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY]
    }
  }
};
