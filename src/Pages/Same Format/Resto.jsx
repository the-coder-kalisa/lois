import React from 'react'
import TopNav from '../../Components/TopNav'
import { Done } from '@mui/icons-material'

function Resto() {
  const orders = [
      {h1: "Restaurant Information", label: ["Restaurant Full Name", "Restaurant Contact Number", "Owner Name", "Owner Email", "Owner Phone Number"]},
      {h1: "Restaurant Information", label: [
          {h1: "Restaurant Specialty", label: "Select"},
          {h1: "Restaurant Specialty", label: "Select (eg Asian, etc)"},
          {h1: "Open from", label: ["Day", "Hour"]},
          {h1: "Upload pictures or logo", label: "Choose Images"}
      ]},
      {h1: "Create Menu", label: [
          {h1: "Item name", label: "Item Name"},
          {h1: "Item Price", label: "RWF"},
          {h1: "Item description", label: "Ingredients"},
          {h1: "Item image", label: "Choose Images"}
      ]}
  ]
  return (
    <div className="w-full">
      <TopNav title="Create Restaurant Profile" />
      <div>
          {orders.map(({h1, label}, index)=>(
              <div key={index} className='flex items-center gap-10'>
                  <div className='flex flex-col items-center'>
                      <div className='bg-[#FF8C1A] rounded-full font-bold text-3xl h-[3rem] w-[3rem] flex items-center justify-center text-white'>{index+1}</div>
                      <div className={`border-l-2 h-[15rem] border-solid`}></div>
                  </div>
                  <div className='flex flex-col gap-5'>
                      <h1 className='text-lg selection:bg-[#1d1da8] selection:text-white  font-bold'>{h1}</h1>
                      <div className='flex flex-col gap-2'>
                          {label.map((label, index)=>(
                              <div className={`flex items-center justify-between gap-2 `} key={index}>
                                  <h1>{label.h1}</h1>
                                  <div>
                                      {typeof(label.label) !== "object" ? 
                                      <div>
                                          <input type="text" placeholder={label.label || label} className="outline-none border-2 rounded-md px-3 py-2 w-[25rem] border-solid border-[#d2d2d2f4]"/>
                                      </div>
                                      : 
                                      <div className='flex gap-2 items-center'>
                                          {label.label.map((label, index)=>(<div key={index}><input type="text" className="outline-none border-2 rounded-md px-1 py-1 border-solid border-[#d2d2d2f4] w-[4rem]" placeholder={label}/></div>))}
                                          <span className='text-lg'>to</span>
                                          {label.label.map((label, index)=>(<div key={index}><input type="text" className="outline-none border-2 rounded-md px-1 py-1 border-solid border-[#d2d2d2f4] w-[4rem]" placeholder={label}/></div>))}
                                      </div>
                                  }
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>
              </div>
          ))}
        <div className='flex items-center gap-10'>
            <div className='bg-[#FF8C1A] rounded-full font-bold text-3xl h-[3rem] w-[3rem] flex items-center justify-center text-white'><Done sx={{width: "2rem", height: "2rem"}}/></div>
            <input type="submit" className='bg-[#FF8C1A] text-white py-2 px-14 rounded-[8px]' value="Submit"/>
        </div>
      </div>
    </div>
  )
}

export default Resto