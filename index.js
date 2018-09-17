const bitcoin = require('bitcoinjs-lib')
const async = require('async')
const BlockCypher = require('blockcypher')
const cypherApi = new BlockCypher('btc', 'test3', '1ebe95fa2ef04389aa5434f5362ad3ec')

// Connect to testnet network
const testnet = bitcoin.networks.testnet

// Import your bitcoin address from wif

// Helper to print out result for balance and address informations
function printResponse(err, data) {
  if (err !== null) {
    console.log(err)
  } else {
    console.log(data)
  }
}


// Check out node modules library for cypher api
// Get balance of your balance
/* .... */

// Get address informations
/* .... */


// Launch program to create and push tx
createTransaction(address, 'msfQtj6q9wbDZV9RPHdWZSgh8q9r7rWXtU', function(unsignedtx) {
  // Sign transaction ...
  /* .... */

  // Broadcast tx
  /* .... */
})


// Function to get the input for the new transaction (txhash, index)
function getInputNewTx (balance, address, callback) {
  /* To be defined...
   The function must return txhash of previous transaction and the index of the output
   Must use cypher address API endpoint to get unspent output */
}

// Function to create the transaction
function createTransaction (addressFrom, addressTo, callback) {
  /* To be defined...
  1) Get balance
  2) Create an empty tx object on testnet
  3) Add each output with address and amount
  4) Add input with hash and index
  5) Add change address without the fees
  */
}

// Function to broadcast the transaction to the network
function broadcastTx(txHex, callback) {
  // Use cypherApi.pushTX
}

// Function to get balance
function getBalance (address, callback) {
    cypherApi.getAddr(address, { }, function(err, result) {
      return callback(err, result.balance)
    });
}
