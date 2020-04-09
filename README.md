# cov-stats

This web application was developped with educational purpose in mind to demonstrate how easy it is to develop a web app integrating Waves Blockchain.
It allows anyone to set up a web page to track COVID-19 case in a city, region, company or anything.

## Installation

```
git clone https://github.com/christopheSeeka/cov-stats.git
npm install
```

edit the settings.js file:

```
this.network = "T" // T for Testnet and W for Mainnet
this.nodeURL = "https://nodes-testnet.wavesnodes.com"; // https://nodes.wavesplatform.com for Mainnet
this.providerUrl = "https://testnet.waves.exchange/signer/"; // "https://waves.exchange/signer/" for Mainnet
this.userAddress = "3NBSNZiKU3h51dyTyMGX2sPdPfyjqBKf2F4"; // 3P...
this.dappAddress = "3NBbHi3Vj5yt37Yv9XZtfwMy7KnZUWSY3uM"; // 3P...
```

Then run the command:

```
npm start
```
