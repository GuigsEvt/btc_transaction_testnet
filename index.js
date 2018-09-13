const bitcoin = require('bitcoinjs-lib')
const blocktrail = require('blocktrail-sdk')
const client = blocktrail.BlocktrailSDK(
  {
    apiKey: '70b628e67e84d54aed84361f4990540cdfd29dca',
    apiSecret: '62dcca80264ba4897ed2bb2f03a8922fb79b301c',
    network: 'tBTC',
    testnet: false
  })
const BlockCypher = require('blockcypher')

// Connect to testnet network
const testnet = bitcoin.networks.testnet

// Import your bitcoin address from wif
//const keyPair = bitcoin.ECPair.makeRandom({ network: testnet })
const keyPair = bitcoin.ECPair.fromWIF('cPBCUQqvmuuz5q54JGeLhqik3APFMeK9iJFm9UPtZSmW8r7U4sUi', testnet);
const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey, network: testnet })

// Function to get the input for the new transaction (txhash, index)
function getInputNewTx (address) {
  /* To be defined...
   The function must return txhash of previous transaction and the index of the output
   Must use client.addressUnspentOutputs to get unspent output */

}

// Function to create the transaction
function createTransaction (addressFrom, addressTo, changeAddress) {
  /* To be defined...
  1) Create an empty tx object
  2) Add each output with address and amount
  3) Add input with hash and index
  4) Add change address without the fees
  */

}

// Function to send the transaction
function signTx (wif, output) {
  /* To be defined...
  Use built in tx.sign function */
}

// Function to broadcast the transaction to the network
function broadcastTx(txHex, callback) {
  var cypherApi = new BlockCypher('btc', 'test3', '1ebe95fa2ef04389aa5434f5362ad3ec')
  var pushTx = {
    tx: txHex
  }
  cypherApi.pushTX(pushTx.tx, function (err, response) {
    if (err) return callback(err)
    callback(err, response)
  })
}

// Function to get balance
function getBalance (address) {
    var amount = 0
    client.addressUnspentOutputs(address, function (err, utxos) {
      if (err) {
        throw new Error(err)
      }
      utxos.data.forEach(function (item) {
        //console.log(item.value)
        amount += item.value
      })
      console.log('Bal ' + address + ' : ' + amount)
    })
}
