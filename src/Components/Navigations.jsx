import React from 'react'
import {Search, Notifications} from '@mui/icons-material'
import {Avatar} from '@mui/material'
function Navigation({title}) {
  return (
    <div className="flex justify-between">
            <h1>{title}</h1>
            <div>
                <div className="relative"><input type="search" placeholder="Search..."/><Search className="absolute"/></div>
                    <Notifications className="border-r-2 border-solid border-black py-4"/>
                    <div>Giovanni Coder</div>
                <Avatar/>
            </div>
    </div>
  )
}

export default Navigation