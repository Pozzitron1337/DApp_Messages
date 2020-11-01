const MessageContract = artifacts.require("Message");

module.exports = function (deployer) {
  deployer.deploy(MessageContract);
};