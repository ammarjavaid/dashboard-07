import React from 'react'
import "./wallets.scss"
import { BsThreeDots } from "react-icons/bs"
import wallet1 from "../../images/wallet1.png"
import wallet2 from "../../images/wallet2.png"
import Expenses from '../expenses/Expenses'
import Transaction from '../transaction/Transaction'

export default function Wallets() {

  const wallets = [
    {
      name: "BTC (Bitcoin)",
      blance: "1,777.10",
      USD: "9,241,123,31",
      img: wallet1,
    },
    {
      name: "ETH (Ether)",
      blance: "4,251.51",
      USD: "21,112.31",
      img: wallet2,
    },
  ]

  return (
    <>
      <div className='wallets'>

        <div className='wallets__info'>
          <h4> Wallets </h4>
          <BsThreeDots />
        </div>

        <div className='wallets__container'>
            <div className='wallets__left'>
                <img src={wallet1} alt=''/>
                <div>
                <h4> BTC (Bitcoin) </h4>
                <h6> <span className="span"> Balance </span> 1,777.10 </h6>
                <h6> <span> USD </span> 9,241,123.31 </h6>
                </div>
            </div>
            <div className='wallets__right'>
                <img src={wallet2} alt='' />
                <div>
                <h4> ETH (Ether) </h4>
                <h6> <span className='span'> Balance </span> 4,251.51 </h6>
                <h6> <span className='span'> USD </span> 21,112.67 </h6>
                </div>
            </div>
        </div>
            
        {/* <div className='wallets__container'>
          {
            wallets.map((wallet) => {
              return (
                <>
                  <div className='wallet'>
                    <img src={wallet.img} alt="" />
                    <div className='wallet__info'>
                      <h3 className='wallet__info__title'>
                        {wallet.name}
                      </h3>
                      <div className='wallet__info__balance'>
                        <h4> Balance </h4>
                        <h3> {wallet.blance} </h3>
                      </div>
                      <div className='wallet__info__price'>
                        <h4> USD </h4>
                        <h4> {wallet.USD} </h4>
                      </div>
                    </div>
                  </div>
                </>
              )
            })
          }
        </div> */}
      </div>
    </>
  )
}
