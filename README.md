# cov-stats

This web application was developped with educational purpose in mind to demonstrate how easy it is to develop a web app integrating Waves Blockchain.

It allows anyone to set up a web page to track COVID-19 case in a city, region, company or anything in a publicly transparent and immutable way.

## Installation

```
git clone https://github.com/christopheSeeka/cov-stats.git
npm install
```

edit the settings.js file:

```
this.network = "T"
this.nodeURL = "https://nodes-testnet.wavesnodes.com"
this.providerUrl = "https://testnet.waves.exchange/signer/"
this.userAddress = "3NBSNZiKU3h51dyTyMGX2sPdPfyjqBKf2F4"
this.dappAddress = "3NBbHi3Vj5yt37Yv9XZtfwMy7KnZUWSY3uM"
```

**network** define the network you want use, T for Testnet and W for Mainnet
**nodeURL** define the node that will be used to broadcast and request data, https://nodes-testnet.wavesnodes.com for testnet and https://nodes.wavesplatform.com for Mainnet
**providerUrl** is the provider used with Waves Signer to signer your transactions, https://testnet.waves.exchange/signer/ for testnet and "https://waves.exchange/signer/" for Mainnet
**userAddress** is the address of your Waves account, the account you use to add data into the dApp storage
**dappAddress** is the dApp address, the account where you deployed the smart contract, if you want use our public dApp just use 3NBbHi3Vj5yt37Yv9XZtfwMy7KnZUWSY3uM for testnet and ********************************* for mainnet

## Deploy the smart contract

The easiest way to deploy the smart contract is to go to https://ide.wavesplatform.com, the network you want use (upper right), create a new account (upper right), create a new dApp script (bottom left) and copy / paste the code from ./ride/covid.ride in this repo.
Then deploy ether by clicking deploy (bottom right) or typing deploy() in the console.
The address of this account is the address to put in settings.js > this.dappAddress

## Start the web app

Simply run the command:

```
npm start
```
