// SPDX-License-Identifier: MIT
pragma solidity >=0.5.16;

contract Message{
    address sender;
    address receiver;
    string message;

    event notifyMessage(address receiver,string message);

    function sendMessage(address whom,string memory _message) public{
        sender=msg.sender;
        receiver=whom;
        message=_message;
        emit notifyMessage(whom,message);
    }

}
