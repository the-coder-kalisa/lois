import React from 'react'
import Navigation from '../../Components/Navigation'
import Bottomer from '../../Components/Footer'
import Quotations from '../../IMAGES/Quotations'
import People from '../../IMAGES/people_eating.png'
import Bulb from '../../IMAGES/Bulb.jsx'
import Triangle from '../../IMAGES/Triangle.jsx'
import Up from '../../IMAGES/Up.jsx'
import Rest from '../../IMAGES/Rest.png'
import Stars from '../../IMAGES/Stars.jsx'
export default function First(){
    const numbers = [
        {icon: <Bulb />, h1: "Led Ask Possible Mistress", p: "Connection has put impossible own apartments boisterous. At jointure ladyship an interested so humanity he. Friendly bachelor entrance to on by."},
        {icon: <Triangle />, h1: "Elegance Eat Likewise", p: 'From they line john he give of rich he. They age and draw mrs like. improving end distructs may instantly was household applauded incommode'},
        {icon: <Up/>, h1: "Message Oram Nothing", p: "Why kept very every home mrs. Considered sympathize ten uncomonly occational assistance sufficient not. Letter of on become he tended active  unable to."}
    ]
    return(
        <div>
            <Navigation />
            <div className="py-[5rem] flex items-center px-16">
                <div className="flex flex-col gap-6">
                    <h1 className="text-4xl font-bold w-[28rem] text-[#313aa5]">Food has never been easier to get than today.</h1>
                    <p className="text-xl w-[30rem] font-medium text-[#444444dc]">Yet bed any for travelling assistance indulgence unpleasant. Not thoughts all exercises blessing. indulgence way everything.</p>
                    <div className="flex flex-col">
                        <Quotations color={"#EA962B"} size={"50"}/>
                        <div className="ml-16">
                            <h1 className="font-bold text-5xl">Previewed</h1>
                            <p className="text-[#444444dc] text-2xl font-[500] w-[20rem]">Save your money and order your favorite food.</p>
                        </div>
                    </div>
                </div>
                <img src={People} alt="people_eating"/>
            </div>
            <div className="flex flex-col items-center pb-10">
                <h1 className="text-[#313aa5] font-bold text-5xl pb-5">Believing neglected so allowance</h1>
                <Stars />
                <p className="text-[#444444dc] text-xl pt-5 pb-10 font-semibold w-[48rem] text-center">You'll feel excited in front of your dish. Whole front do of plate heard oh ought. His defective nor convinced resistence own.</p>
                <div className="px-20 flex flex-col gap-10">
                    {numbers.map((number, index)=>(
                    <div key={index} className="flex items-center gap-10">
                        <div className="relative">
                            <img className="max-w-[28rem] rounded-[10px]" src={Rest} alt="rest"/>
                            <div className="absolute -right-8 top-[40%] bg-[#F59821] rounded-full w-[4rem] flex items-center justify-center h-[4rem]"><Quotations color={"white"} size={"35"}/></div>
                        </div>
                        <div className="relative shadow-md drop-shadow-md pb-10 rounded-[20px] w-full flex flex-col pt-32 px-5  bg-[#D8DFE3] max-w-[30rem]">
                            <div className="bg-[#F59821] absolute top-7 left-7 w-fit rounded-[10px] p-3">{number.icon}</div>
                            <div className="ml-3">
                              <h1 className="font-bold text-xl py-5">{number.h1}</h1>
                              <p className="w-[20rem]  text-lg">{number.p}</p>
                              <h2 className="absolute text-[10rem] text-[#CBC9C9] font-bold right-5 -top-10">{index+1}</h2>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
            <Bottomer />
        </div>
    )
}