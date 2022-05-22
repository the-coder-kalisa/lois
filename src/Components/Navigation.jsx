import React from 'react'
import Logo from '../IMAGES/logo.png'
import {Button} from '@mui/material'
import {Link} from 'react-router-dom'

function Navigation() {
  const navs = ["Product", "Pricing", "Blog"]
  return (
    <div className="flex z-50 fixed w-full py-3 items-center bg-white shadow-md px-10 justify-between">
        <img className="h-[4rem]" src={Logo} alt="logo"/>
        <div className="flex items-center gap-10">
            {navs.map((nav, index)=>(
                <Link className="font-bold text-xl" key={index} to={`/${nav.toLowerCase()}`}>{nav}</Link>
            ))}
            <Link to="/login"><Button variant="contained" style={{background: "#FF8C1A"}}>LOGIN</Button></Link>
            <Link to="/signup"><Button variant="contained" style={{background: "#FF8C1A"}}>Signup</Button></Link>
        </div>
    </div>
  )
}

export default Navigation