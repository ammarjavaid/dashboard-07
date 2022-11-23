import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Account } from './pages/account/Account';
import { Buy } from './pages/buy/Buy';
import { DashboardPage } from './pages/dashboardPage/DashboardPage';
import { Deposite } from './pages/deposit/Deposite';
import { News } from './pages/news/News';
import { SendMoney } from './pages/sendMoney/SendMoney';
import { Settings } from './pages/settings/Settings';
import { TransactionPage } from './pages/transactionPage/TransactionPage';
import Signup from './pages/signup/Signup';
import Login from "./pages/login/Login";

const App = () => {

  const [open, setOpen] = useState(false);

  const handle = () => {
    setOpen(!open)
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/home' element={<DashboardPage />} />
          <Route path='/buy' element={<Buy />} />
          <Route path='/news' element={<News />} />
          <Route path='/sendmoney' element={<SendMoney />} />
          <Route path='/deposit' element={<Deposite />} />
          <Route path='/transaction-page' element={<TransactionPage />} />
          <Route path='/account' element={<Account />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='*' element={<h1> Page Not Found! </h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App