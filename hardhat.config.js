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
      accounts: ["Your private key"]
    }
  }
};

