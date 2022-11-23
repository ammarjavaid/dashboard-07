import React from 'react'
import "./expenses.scss"
import { BsThreeDots } from "react-icons/bs"
import expenseLogo1 from "../../images/expenseLogo1.png"
import expenseLogo2 from "../../images/expenseLogo2.png"
import expenseLogo3 from "../../images/expenseLogo3.png"
import expenseLogo4 from "../../images/expenseLogo4.png"
import expenseLogo5 from "../../images/expenseLogo5.png"
import expenseLogo6 from "../../images/expenseLogo6.png"
import expenseLogo7 from "../../images/expenseLogo7.png"
import Transaction from '../transaction/Transaction'

export default function Expenses() {

  const data = [
    {
      logo: expenseLogo1,
      name: "Amazon",
      price: "-$5k"
    },
    {
      logo: expenseLogo2,
      name: "Spotify",
      price: "$50"
    },
    {
      logo: expenseLogo3,
      name: "Netflix",
      price: "$200"
    },
    {
      logo: expenseLogo4,
      name: "Adobe",
      price: "-$20k"
    },
    {
      logo: expenseLogo5,
      name: "Apple",
      price: "-$30k"
    },
    {
      logo: expenseLogo6,
      name: "Airbnb",
      price: "-$7k"
    },
    {
      logo: expenseLogo7,
      name: "Google",
      price: "-$70k"
    },
  ]

  return (
    <>
      <div className='expenses'>

        <div className='expenses__info'>
          <h4> Expenses </h4>
          <BsThreeDots />
        </div>

        <div className='expenses__container'>
          {
            data.map((expense) => {
              return (
                <>
                  <div className='expense'>
                    <img src={expense.logo} alt="" />
                    <h4 className='expense__title'> {expense.name} </h4>
                    <h6 className='expense__price'> {expense.price} </h6>
                  </div>
                </>
              )
            })
          }
        </div>

      </div>
      {/* <Transaction /> */}
    </>
  )
}
