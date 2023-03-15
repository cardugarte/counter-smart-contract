require('@nomicfoundation/hardhat-toolbox')

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/OPYMF81anHOJllOLi_bbhwoLX4XBEec4",
      accounts: [
        "ce8f1c9f5beb36fcaa3bed504cd81faafbd76915a0d1d329f5584f6991171c51"
      ]
    }
  }
};
