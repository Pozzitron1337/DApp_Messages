let Web3 = require('web3')
var path = require('path');
var account_from=process.argv[2];
var account_to=process.argv[3];
var message=process.argv[4];
console.log('from: '+ account_from);
console.log('to: '+ account_to);
console.log('message: '+ message);

var path_to_contract='build/contracts/Message.json';
var network_id=5777;
var addres_to_blockchain='ws://127.0.0.1:8545';

const { exit } = require('process');
var contractJSON = require(path.join(__dirname, path_to_contract));
var decoded = JSON.parse(JSON.stringify(contractJSON.networks,undefined, 2));
var contract_address = decoded[network_id].address;
var abi = contractJSON.abi;
const web3 = new Web3(new Web3.providers.WebsocketProvider(addres_to_blockchain));
let MessageContract = new web3.eth.Contract(abi, contract_address);
MessageContract.methods
.sendMessage(account_to,message)
.send({from: account_from,gas: 100000, gasPrice: "2000000000"})
.on('error', (error)=>{
    console.log(error);
    exit();
})
.once('transactionHash', (hash) => {
    console.log('transaction hash: ' + hash);
    exit();
})
