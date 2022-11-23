import React from 'react'
import "./sidebar.scss"
import { SiGoogleanalytics } from "react-icons/si"
import { BiNews, BiRocket } from "react-icons/bi"
import { FaWallet } from "react-icons/fa"
import { AiFillSetting, AiFillAppstore } from "react-icons/ai"
import { BsCashStack } from "react-icons/bs"
import { MdAccountCircle } from "react-icons/md"
import { VscArrowSwap } from "react-icons/vsc"
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineLogout } from 'react-icons/ai';
import { getAuth, signOut } from "firebase/auth";
import { auth } from "../../Firebase";

export default function Sidebar({open, setOpen, handle}) {

  const navigate = useNavigate();
  const logout = () => {
      const auth = getAuth();
      signOut(auth).then((res) => {
          navigate("/");
      }).catch((error) => {
          console.log(error);
      });
  }

const links = [
  {
    path: "/home",
    title: "Dashboard",
    icon: SiGoogleanalytics,
  },
  {
    path: "/buy",
    title: "Buy / Sell",
    icon: AiFillAppstore,
  },
  {
    path: "/news",
    title: "News",
    icon: BiNews,
  },
  {
    path: "/sendmoney",
    title: "Send Money",
    icon: BiRocket,
  },
  {
    path: "/deposit",
    title: "Deposit",
    icon: BsCashStack,
  },
  {
    path: "/transaction-page",
    title: "Transactions",
    icon: FaWallet,
  },
  {
    path: "/account",
    title: "Account",
    icon: MdAccountCircle,
  },
  {
    path: "/settings",
    title: "Settings",
    icon: AiFillSetting,
  },
]

  return (
    <>
      <div className={`sidebar ${open ? "sidebar__open" : ""}`}>
        <div className='brand'>
          <h2> FINN <span> CHECK </span> </h2>
        </div>
        <ul className='link'>
          {
            links.map((link)=>{
              return(
                <>
                  <li>
                    <Link to={link.path} onClick={handle}> {<link.icon/>} {link.title} </Link>
                  </li>
                </>
              )
            })
          }
        </ul>

        <div className='quick'>
          <button> <VscArrowSwap/> Quick Transactions </button>
        </div>

        <div className="btn__logout" onClick={logout}>
            <button> <AiOutlineLogout/> Logout </button> 
        </div>

      </div>
    </>
  )
}
