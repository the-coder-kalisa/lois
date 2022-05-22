import React from 'react'
import Logo from '../IMAGES/logo.png'
import {Link} from 'react-router-dom'

function Bottomer() {
    const botooms = [
        {h1: "Learn More", bots: ["Plans and pricing", "Tips and Tricks", "Plugins and apps", "Privacy Policy"]},
        {h1: "Company", bots: ["About us", "Press", "Owner"]},
        {h1: "Support", bots: ["Contact us", "FAQ"]}
    ]
  return (
    <div className="bg-[#FF8C1A] relative w-full py-[2rem] items-center justify-center flex gap-24">
        <Link to="/"><img src={Logo} alt="logo" className="h-[7rem]" style={{filter: "brightness(0.1)"}}/></Link>
        <div className="flex pb-7 gap-32">
            {botooms.map((bot, index)=>(
                <div key={index}>
                    <h1 className="font-bold text-3xl">{bot.h1}</h1>
                    <div className="text-lg font-medium">
                        {bot.bots.map((bot, index)=>(
                            <div key={index}>{bot}</div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        <div className="w-full font-semibold absolute bottom-0 pb-4 text-center">&copy; 2022 Food Planet. All rights reserved</div>
    </div>
  )
}

export default Bottomer