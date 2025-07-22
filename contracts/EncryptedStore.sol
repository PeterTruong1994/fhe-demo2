// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract EncryptedStore {
    string private secret;

    function store(string memory _secret) public {
        secret = _secret;
    }

    function retrieve() public view returns (string memory) {
        return secret;
    }
}
