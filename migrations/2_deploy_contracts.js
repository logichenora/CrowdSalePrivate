require('dotenv').config()

const Coin = artifacts.require('./EventaToken.sol');
const CoinCrowdsale = artifacts.require('./EventaCrowdsale.sol');


const { openingTime } = process.env
const { }=  process.env  //"0xE019f215BD91770f2a6C62CFdA2FE140e50d4048";


module.exports = function(deployer, network, accounts) {
    
//    const openingTime =   web3.eth.getBlock('latest').timestamp + 2; // two secs in the future
//    const wallet = accounts[1]


    const closingTime = openingTime + 86400 * 20; // 20 days
    const rate = new web3.BigNumber(1000);
    const cap = 3000000000000000000000000000;
    const goal = 1000000000000000000000000000;



         return deployer
        .then(() => {
            return deployer.deploy(Coin);
        })
        .then(() => {
            return deployer.deploy(
                CoinCrowdsale,
                openingTime,
                closingTime,
                rate,
                wallet,
                cap,
                Coin.address,
                goal
            );
        });
};