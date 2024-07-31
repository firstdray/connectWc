require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    hardhat: {
      chainId: 1337
    },
    bnb: {
      url: "https://bsc-testnet-rpc.publicnode.com/",
      accounts: ["8fe0b6c70127720d13456d9f4b4ed0dbda2ff4600c12950c496ca664db47e9af"]
    }
  }
};

