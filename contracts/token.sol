// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract token is ERC20("token", "TOKEN") {

    constructor(address owner) {
        _mint(owner, 100000 * 10 ** decimals());
    }
}
