require('dotenv').config();
const Web3 = require("web3");
const web3 = new Web3();
const WalletProvider = require("truffle-wallet-provider");
const HDWalletProvider = require("truffle-hdwallet-provider");
const Wallet = require('ethereumjs-wallet');

module.exports = {
    networks: {
        local: {
            provider: function() {
                var mnemonic = "opinion destroy betray ...";
                return new HDWalletProvider(mnemonic, "http://127.0.0.1:8545/");
            },
            network_id: '*',
        },
        ropsten: {
            provider: function() {
                const privateKey = process.env["ROPSTEN_PRIVATE_KEY"];
                if (privateKey !== null){
                    let ropstenPrivateKey = new Buffer(privateKey, "hex")
                    let ropstenWallet = Wallet.fromPrivateKey(ropstenPrivateKey);
                    return new WalletProvider(ropstenWallet, "https://ropsten.infura.io/");
                }
            },
            // You can get the current gasLimit by running
            // truffle deploy --network rinkeby
            // truffle(rinkeby)> web3.eth.getBlock("pending", (error, result) =>
            //   console.log(result.gasLimit))
            gas: 4600000,
            gasPrice: web3.toWei("20", "gwei"),
            network_id: "3",
        },
        mainnet: {
            provider: function() {
                let mainnetPrivateKey = process.env["MAINNET_PRIVATE_KEY"];
                if (mainnetPrivateKey) {
                    let mainNetPrivateKey = new Buffer(mainnetPrivateKeyn, "hex");
                    let mainNetWallet = Wallet.fromPrivateKey(mainNetPrivateKey);
                    return new WalletProvider(mainNetWallet, "https://mainnet.infura.io/");
                }
            },
            gas: 4600000,
            gasPrice: web3.toWei("20", "gwei"),
            network_id: "1",
        }
    }
};

