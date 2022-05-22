import React from 'react'
import Bottomer from '../components/Bottomer'
import Sidebar from '../components/Sidebar'
import Navigations from '../components/Navigations'
import {Add} from '@mui/icons-material'
export default function Client(){
    return(
        <div className="bg-[#F6F7FB]">
            <Sidebar />
            <Navigations title="Client"/>
            <div className="bg-white flex flex-col items-center">
                <div>
                    <h1>New Client</h1>
                    <div className="relative"><input type="text"/><Add className="absolute"/></div>
                </div>
            </div>
            <Bottomer />
        </div>
    )
}