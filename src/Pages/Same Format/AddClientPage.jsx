import React from "react";
import {Button} from '@mui/material'
export default function AddClient() {
  const handleforms = (e) =>{
    e.preventDefault();
  }
  return (
    <form onSubmit={handleforms} className="flex flex-col  w-[50%] h-[100%]">
      <h1 className='client text-orange-400 ml-[50rem] mt-[5rem] text-4xl'>Client</h1>
      <div className='client-content ml-[40rem] mt-[5rem]'>
        <h1 className='clients text-2xl w-[15rem]'>Client</h1>
        <input type='text' className='client-input text-400xl border-b-2 border-solid py-2 w-[30rem] none mt-4' placeholder='Choose category'/>
        

      </div>
      <div className='client-content ml-[40rem] mt-[5rem]'>
        <h1 className='clients text-2xl w-[15rem]'>Category</h1>
        <input type='text' className='client-input text-400xl border-b-2 border-solid py-2 w-[30rem] none mt-4' placeholder='Client name'/>

      </div>
      <div className='client-content ml-[40rem] mt-[5rem]'>
        <h1 className='clients text-2xl w-[15rem]'>Represntation</h1>
        <input type='text' className='client-input text-400xl border-b-2 border-solid py-2 w-[30rem] none mt-4' placeholder='full names'/>
        

      </div>
      <div className='client-content ml-[40rem] mt-[5rem]'>
        <h1 className='clients text-2xl w-[15rem]'>Date of creation</h1>
        <input type='text' className='client-input text-400xl border-b-2 border-solid py-2 w-[30rem] none mt-4' placeholder='Month and a year'/>
        

      </div>
      <div className='client-content ml-[40rem] mt-[5rem]'>
        <h1 className='clients text-2xl w-[15rem]'>Address</h1>
        <input type='text' className='client-input text-400xl border-b-2 border-solid py-2 w-[30rem] none mt-4' placeholder='Province,District and sector'/>
        

      </div>
      <div className='client-content ml-[40rem] mt-[5rem]'>
        <h1 className='clients text-2xl w-[15rem]'>Email</h1>
        <input type='text' className='client-input text-400xl border-b-2 border-solid py-2 w-[30rem] none mt-4' placeholder='Email adress'/>
        

      </div>
      <div className='client-content ml-[40rem] mt-[5rem]'>
        <h1 className='clients text-2xl w-[15rem]'>Phone number</h1>
        <input type='text' className='client-input text-400xl border-b-2 border-solid py-2 w-[30rem] none mt-4' placeholder='phone number'/>
        

      </div>
      <div className='client-content ml-[40rem] mt-[5rem]'>
        <h1 className='clients text-2xl w-[15rem]'>Bank Account(IBAN)</h1>
        <input type='text' className='client-input none text-400xl border-b-2 border-solid py-2 w-[30rem]  mt-4' placeholder='Account number'/>
        

      </div>
      <Button className='btn bg-[orange] cursor-pointer hover:bg-orange-400 p-4 w-48 ml-[50rem] mt-20 text-white text-2xl rounded-[5px]'>
        Add client
      </Button>
    </form>
  );
}
