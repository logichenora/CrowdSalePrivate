pragma solidity 0.4.24;

import "../node_modules/openzeppelin-solidity/contracts/crowdsale/validation/CappedCrowdsale.sol";
import "../node_modules/openzeppelin-solidity/contracts/crowdsale/distribution/RefundableCrowdsale.sol";
import "../node_modules/openzeppelin-solidity/contracts/crowdsale/emission/MintedCrowdsale.sol";
import "../node_modules/openzeppelin-solidity/contracts/ownership/Ownable.sol";
import './EventaToken.sol';



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




// ----------------------------------------------------------------------------
// ERC20 Token, with the addition of symbol, name and decimals and assisted
// token transfers
// ----------------------------------------------------------------------------


contract EventaCrowdsale is CappedCrowdsale, RefundableCrowdsale, MintedCrowdsale {


  constructor(
    uint256 _openingTime,
    uint256 _closingTime,
    uint256 _rate,
    address _wallet,
    uint256 _cap,
    MintableToken _token,
    uint256 _goal
  )
    
    public
    Crowdsale(_rate, _wallet, _token)
    CappedCrowdsale(_cap)
    TimedCrowdsale(_openingTime, _closingTime)
    RefundableCrowdsale(_goal)
  {
    //As goal needs to be met for a successful crowdsale
    //the value needs to less or equal than a cap which is limit for accepted funds

    require(_goal <= _cap);
  }
}


