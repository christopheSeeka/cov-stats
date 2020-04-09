class Config{
  constructor(opts) {
    this.network = "T"
    this.nodeURL = "https://nodes-testnet.wavesnodes.com"; // https://nodes.wavesplatform.com
    this.providerUrl = "https://testnet.waves.exchange/signer/"; // "https://waves.exchange/signer/"
    this.userAddress = "3NBSNZiKU3h51dyTyMGX2sPdPfyjqBKf2F4"; // 3P...
    this.dappAddress = "3NBbHi3Vj5yt37Yv9XZtfwMy7KnZUWSY3uM"; // 3P...
  }

  get(key) {
    return this[key];
  }

  set(key, val) {
    this[key] = val;
  }

}
module.exports = Config