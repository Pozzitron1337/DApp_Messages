let Web3 = require('web3')

var listening_account_adderss=process.argv[2];
console.log('Account: ' + listening_account_adderss);

var path_to_contract='build/contracts/Message.json';
var network_id = 5777;
var addres_to_blockchain='ws://127.0.0.1:8545';

var path = require('path');
var contractJSON = require(path.join(__dirname, path_to_contract));
var decoded = JSON.parse(JSON.stringify(contractJSON.networks,undefined, 2));
var contract_address = decoded[network_id].address;
var abi = contractJSON.abi;
const web3 = new Web3(new Web3.providers.WebsocketProvider(addres_to_blockchain));
var MessageContract = new web3.eth.Contract(abi, contract_address);

MessageContract.events
.notifyMessage(function(error, event){
    if(listening_account_adderss==event.returnValues.receiver){
        console.log(">>> Event: received the message!");
        console.log('message: '+event.returnValues.message);
        console.log();
    }  
})
.on('error', console.error);


