import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'

export const SendMoney = () => {

  const [open, setOpen] = useState(false);

  const handle = () => {
    setOpen(!open)
  }

  return (
    <>
      <Sidebar open={open} setOpen={setOpen} handle={handle} />
      <div className='main'>
        <Navbar open={open} setOpen={setOpen} handle={handle} />
        <h1> SendMoney </h1>
      </div>
    </>
  )
}
