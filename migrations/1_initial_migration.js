var Migrations = artifacts.require("./Migrations.sol");

module.exports = function(deployer) {
    web3.eth.getAccounts(function(e, r){
          deployer.account= r;
      console.log("Account: " + deployer.account[0]);
      web3.eth.getBalance(deployer.account[0], function(e, r){
          deployer.balance = r;
          console.log("Balance: " + deployer.balance);
          deployer.deploy(Migrations);
      });
      //web3.personal.unlockAccount(web3.personal.listAccounts[0],"", 15000);
    });
};




