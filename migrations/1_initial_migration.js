var Migrations = artifacts.require("./Migrations.sol");

//console.log(web3.personal.listAccounts[0])
//web3.personal.unlockAccount(web3.personal.listAccounts[0],"", 15000);


module.exports = function(deployer) {
  deployer.deploy(Migrations);
};

