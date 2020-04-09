# cov-stats

This web application was developped with educational purpose in mind to demonstrate how easy it is to develop a web app integrating Waves Blockchain. 

You can deploy your own version by following the described steps here or simply use it with our online version at https://cov-stats.sign-web.app

## Installation

```
git clone https://github.com/christopheSeeka/cov-stats.git
npm install
```

Copy settings.js.sample and rename it into settings.js then edit the following:

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
is the dApp address, the account where you deployed the smart contract and where the data will be stored, if you want use our public dApp just use 3NBbHi3Vj5yt37Yv9XZtfwMy7KnZUWSY3uM for testnet and ********************************* for mainnet

## Deploy the smart contract

The easiest way to deploy the smart contract is to go to https://ide.wavesplatform.com, choose the network you want use (upper right settings icon, testnet by default), create a new account (upper right "add account")

**You needs to load your account with waves token:**

For testnet got to the faucet: [https://wavesexplorer.com/testnet/faucet](https://wavesexplorer.com/testnet/faucet) &nbsp;For mainnet you can get at: https://www.waves.exchange 

Now create a new dApp script (bottom left + sign) and copy / paste the code from ./ride/covid.ride from this repo.

Then deploy ether by clicking deploy (bottom right) or typing deploy() in the console.

The address of this dApp account is the address to put in settings.js > this.dappAddress\

## Start the web app

Simply run the command:

```
npm run build
npm start
```

## Using the web app

```Got to localhost:3000/admin```

Click on **START**

If you dont have any Waves account yet, you will have to define a password and click sign up

You are now connected with your new account with the address displayed on top, copy it and past it in the settings.js as this.userAddress

You can now configure the page and start add entries (make sure to have some waves on this account too)

You can acces your page at localhost:3000
