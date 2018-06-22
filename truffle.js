require('dotenv').config()


var HDWalletProvider = require("truffle-hdwallet-provider");


const { mnemonic } = process.env
const { infuraUrl } = process.env

module.exports = {
    solc: {
        optimizer: {
            enabled: true,
            runs: 200
        }
    },networks: {
    development: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*"
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, infuraUrl)
      },
      network_id: 3,
        gas: 4e6,
        gasPrice: 2e10
    }  
  },mocha: {
        reporter: 'eth-gas-reporter',
        reporterOptions : {
            currency: 'CHF',
            gasPrice: 21
        }
    }
  ,rpc: {
    host: 'localhost',
    post:8080
   },
  description: "Eventa Pre-ICO Smart Contract",
  authors: [
          "Andrea Zanda <andrea.zanda@eventa.it>"
      ],
  license: "MIT"
};

