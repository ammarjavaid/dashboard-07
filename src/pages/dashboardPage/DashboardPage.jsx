import React, { useState } from 'react'
import "./dashboardPage.scss"
import Overview from '../../components/overview/Overview'
import Wallets from "../../components/wallets/Wallets"
import Expenses from '../../components/expenses/Expenses'
import Transaction from '../../components/transaction/Transaction'
import Activity from '../../components/activity/Activity'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'

export const DashboardPage = () => {

  const [open, setOpen] = useState(false);

  const handle = ()=>{
    setOpen(!open)
  }

  return (
    <>
    <Sidebar open={open} setOpen={setOpen} handle={handle}/>
      <div className='main'>
      <Navbar open={open} setOpen={setOpen} handle={handle}/>
      <div className='main__layout'>
        <div className='layout'>
          <Wallets />
          <Expenses />
          <Transaction />
        </div>

        <div className='layout__1'>
          <Overview />
          <Activity />
        </div>

      </div>
      </div>

      {/* <div className='layout'>
        <Wallets />
        <Overview />
      </div>

      <div className='layout'>
        <Expenses />
        <Activity />
      </div>
      
      <div className='layout'>
        <Transaction />
      </div> */}
    </>
  )
}
