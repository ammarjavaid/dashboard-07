import React from 'react'
import "./navbar.scss"
import { VscArrowSwap } from "react-icons/vsc"
import { IoMdNotificationsOutline } from "react-icons/io"
import { FaSearch } from "react-icons/fa"
import { FiMail } from "react-icons/fi"
import { HiOutlineMenu,HiOutlineMenuAlt3 } from "react-icons/hi";
import profile from "../../images/2.jpg"

export default function Navbar({open, setOpen, handle}) {
  return (
    <>
      <div className='navbar'>
        <div className='avatar'>
          <img src={profile} alt="" />

          <div className='info'>
            <h4 className='title'> Ammar Javaid </h4>
            <h6 className='status'> Online </h6>
          </div>

        </div>

        <div className='quick'>
          <button> <VscArrowSwap/> Quick Transactions </button>
        </div>

        <div className='navbar__info'>
          <IoMdNotificationsOutline />
          <FiMail />
          { open ? <HiOutlineMenuAlt3 onClick={handle} className="bars"/> : <HiOutlineMenu onClick={handle} className="bars"/> }          
          <div className='search__bar'>
            <input type="text" placeholder='Search' />
            <FaSearch />
          </div>
        </div>
      </div>
    </>
  )
}
