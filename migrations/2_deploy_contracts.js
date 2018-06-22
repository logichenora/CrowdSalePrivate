require('dotenv').config()

const Coin = artifacts.require('./EventaToken.sol');
const CoinCrowdsale = artifacts.require('./EventaCrowdsale.sol');


//const { openingTime } = process.env
//const { }=  process.env  //"0xE019f215BD91770f2a6C62CFdA2FE140e50d4048";


module.exports = function(deployer, network, accounts) {
    console.log("Web3 Version: " + web3.version.api);
    web3.eth.getBlock('latest', function(e, r) {
        //10 minutes to avoid require (_openingTime > block.timestamp) to fail during CoinCrowdsale deployment
        var openingTime=  r.timestamp + 60 * 10;
        const wallet = accounts[0];

        const closingTime = openingTime + 86400 * 20; // 20 days
        const rate = new web3.BigNumber(1000);
        const cap = 3000000000000000000000000000;
        const goal = 1000000000000000000000000000;

        return deployer
            .then(() => {
                return deployer.deploy(Coin);
            })
            .then(() => {
                CoinCrowdsale.web3.eth.getGasPrice(function(error, result) {
                    var gasPrice = Number(result);
                    console.log("Gas Price is " + gasPrice + " wei"); // "10000000000000"
                });


                console.log("OpeningTime: " +openingTime);
                console.log("ClosingTime: " +closingTime);
                console.log("Rate: " +rate);
                console.log("Wallet: " +wallet);
                console.log("Cap: " +cap);
                console.log("Coin Address: "+Coin.address);
                console.log("Goal: "+ goal);
                return deployer.deploy(
                    CoinCrowdsale,
                    openingTime,
                    closingTime,
                    rate,
                    wallet,
                    cap,
                    Coin.address,
                    goal,
                    { gas: 4712388 }
                );
            });
    }) // two secs in the future






};