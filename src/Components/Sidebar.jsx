import React from 'react'
import Logo from '../IMAGES/logo.png'
import {Language, Chair, LocalMall, MenuOpen} from '@mui/icons-material'

function Sidebar() {
    const sides = [
        {icon: <Language />, text: "Overview"},
        {icon: <Chair />, text: "Tables"},
        {icon: <LocalMall />, text: "Orders"},
        {icon: <MenuOpen />, text: "Menu"}
    ]
  return (
    <div className="bg-[#0C0101] w-[15rem] flex flex-col gap-4 items-start pl-3 h-[50rem]">
        <img src={Logo} alt="logo" className="h-[5rem]"/>
        <div className="flex flex-col gap-5">
            {sides.map((side, index)=>(
                <div key={index} className="bg-[#211C1C] px-3 py-2 text-lg font-semibold hover:bg-black cursor-pointer flex text-white">
                    {side.icon}
                    <div>{side.text}</div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Sidebar