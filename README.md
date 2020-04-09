# cov-stats

This web application was developped with educational purpose in mind to demonstrate how easy it is to develop a web app integrating Waves Blockchain.

It allows anyone to set up a web page to track COVID-19 case in a city, region, company or anything in a publicly transparent and immutable way.

You can deploy your own version by following the described steps here or simply use it with our online version at https://cov-stats.sign-web.app

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

**network**\
define the network you want use, T for Testnet and W for Mainnet

**nodeURL**\
define the node that will be used to broadcast and request data, https://nodes-testnet.wavesnodes.com for testnet and https://nodes.wavesplatform.com for Mainnet

**providerUrl**\
is the provider used with Waves Signer to signer your transactions, https://testnet.waves.exchange/signer/ for testnet and "https://waves.exchange/signer/" for Mainnet

**userAddress**\
is the address of your Waves account, the account you use to add data into the dApp storage

**dappAddress**\
is the dApp address, the account where you deployed the smart contract, if you want use our public dApp just use 3NBbHi3Vj5yt37Yv9XZtfwMy7KnZUWSY3uM for testnet and ********************************* for mainnet

## Deploy the smart contract

The easiest way to deploy the smart contract is to go to https://ide.wavesplatform.com, choose the network you want use (upper right settings icon, testnet by default), create a new account (upper right "add account")

You needs to load your account with waves token:\

For testnet got to the faucet: https://wavesexplorer.com/testnet/faucet\
For mainnet you can get at: https://www.waves.exchange 

Now create a new dApp script (bottom left + sign) and copy / paste the code from ./ride/covid.ride from this repo.

Then deploy ether by clicking deploy (bottom right) or typing deploy() in the console.

The address of this dApp account is the address to put in settings.js > this.dappAddress\
We recommand to create a second account to use the webapp as the fee will be lower (smart account transaction fee are higher than regular accounts).\
So create a second account and add the address of theis account in the settings.js for this.userAddress, also load it with some waves for the transaction fee.

## Start the web app

Simply run the command:

```
npm run build
npm start
```
