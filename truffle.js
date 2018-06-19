require('dotenv').config()


var HDWalletProvider = require("truffle-hdwallet-provider");


const { mnemonic } = process.env
const { infuraUrl } = process.env


module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, infuraUrl)
      },
      network_id: 3,
      gas: 2900000
    }  
  },
    rpc: {
    host: 'localhost',
    post:8080
   },
  description: "Eventa Pre-ICO Smart Contract",
  authors: [
          "Andrea Zanda <andrea.zanda@eventa.it>"
      ],
  license: "MIT"
};

