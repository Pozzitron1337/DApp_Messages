0.Blockchain should be run and the contracts sould be deployed in blockchain
To do this type:
```
$ truffle develop
> migrate -all
```
Or run the server on ganache.There are easy to watch the transactions on blockchain.

1.Open the second terminal.To listen the messages,you should type:
```
$node listenMessages <account address that you want to listen>
```

2.Open the third terminal.To send the message type:
```
$ node node sendMessage.js <account address from>  <account address to> <message>
```
