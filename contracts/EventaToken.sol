pragma solidity 0.4.24;


import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/MintableToken.sol";

// ----------------------------------------------------------------------------
// 'Eventa' CROWDSALE token contract
//
// Deployed to : XXXXXXXXXXXXXXXXXXX
// Symbol      : EVENTA
// Name        : Eventa Token
// Total supply: 3000000000000000000000000000
// Decimals    : 18
//
// (c) by Andrea Zanda, Eventa SRL, April 2018. The MIT Licence.
// ----------------------------------------------------------------------------

contract EventaToken is MintableToken {

  string public constant name = "Eventa Token";
  string public constant symbol = "EVTA";
  uint8 public constant decimals = 18;


}
