//https://eth-ropsten.alchemyapi.io/v2/Fu2IU4La2pXWtv9ahvFZeheiSxwegqE5

require('@nomiclabs/hardhat-waffle');

module.exports={
  solidity:'0.8.0',
  networks:{
    ropsten:{
      url:'https://eth-ropsten.alchemyapi.io/v2/Fu2IU4La2pXWtv9ahvFZeheiSxwegqE5',
      accounts:['e081d7cc733a0ce8787cbe7c0b6604cced8d2741ad608c240add94d27c6e2716']
    }
  }

}