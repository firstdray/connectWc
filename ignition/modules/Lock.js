const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const ownerAd = "0x36449d413789c6Df27D21bD19De3732A1F63CC4C";

module.exports = buildModule("TokenModule", (m) => {
  const address = m.getParameter('owner', ownerAd);


  const lock = m.contract("token", [address]);

  return { lock };
});