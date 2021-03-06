import React from "react";

import Leftside from '../../Components/Left-side';

import TopNav from "../../Components/TopNav";
export default function ClientPage() {
  return (
    <div className="flex flex-col w-[80%] h-[100%]">
      <TopNav title="ClientPage" />
       <div className='m-content bg-white w-[85rem] ml-4 mt-10 h-[100%] overscroll-contain'>
          <div className='top-content ml-96 mt-10'>
          <h1 className='new-client font-bold mt-8 text-4xl ml-8'>New client</h1>
          <div className='add-client flex'>
          <input type='text' className='client-input text-400xl border-b-2  mt-20' placeholder='Add new client'/>
          <div className='icon mt-20 mr-4 bg-[orange] pt-px rounded-[5px] p-px px-1'>
          <svg width="15" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.5696 7.46429H12.7955V1.35714C12.7955 0.607746 12.1214 0 11.2902 0H9.78482C8.95358 0 8.27946 0.607746 8.27946 1.35714V7.46429H1.50536C0.674118 7.46429 0 8.07203 0 8.82143V10.1786C0 10.928 0.674118 11.5357 1.50536 11.5357H8.27946V17.6429C8.27946 18.3923 8.95358 19 9.78482 19H11.2902C12.1214 19 12.7955 18.3923 12.7955 17.6429V11.5357H19.5696C20.4009 11.5357 21.075 10.928 21.075 10.1786V8.82143C21.075 8.07203 20.4009 7.46429 19.5696 7.46429Z" fill="white"/>
</svg>
</div>
</div>
        </div>
        <div className='all-client flex '>
          <div>
        <h1 className='h-all-client font-bold  text-4xl ml-4 pl-2'>Allclient</h1>
        </div>
        <div className='client ml-[55rem] flex '>
          <div className='sort flex'>
        <svg width="20" height="25" viewBox="0 0 35 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.4064 3.57143H20.7814C21.0715 3.57143 21.3496 3.47736 21.5548 3.30992C21.7599 3.14247 21.8751 2.91537 21.8751 2.67857V0.892857C21.8751 0.656057 21.7599 0.428955 21.5548 0.261512C21.3496 0.0940686 21.0715 0 20.7814 0H16.4064C16.1163 0 15.8381 0.0940686 15.633 0.261512C15.4279 0.428955 15.3127 0.656057 15.3127 0.892857V2.67857C15.3127 2.91537 15.4279 3.14247 15.633 3.30992C15.8381 3.47736 16.1163 3.57143 16.4064 3.57143ZM16.4064 10.7143H25.1563C25.4464 10.7143 25.7246 10.6202 25.9297 10.4528C26.1348 10.2853 26.2501 10.0582 26.2501 9.82143V8.03571C26.2501 7.79891 26.1348 7.57181 25.9297 7.40437C25.7246 7.23693 25.4464 7.14286 25.1563 7.14286H16.4064C16.1163 7.14286 15.8381 7.23693 15.633 7.40437C15.4279 7.57181 15.3127 7.79891 15.3127 8.03571V9.82143C15.3127 10.0582 15.4279 10.2853 15.633 10.4528C15.8381 10.6202 16.1163 10.7143 16.4064 10.7143ZM33.9063 21.4286H16.4064C16.1163 21.4286 15.8381 21.5226 15.633 21.6901C15.4279 21.8575 15.3127 22.0846 15.3127 22.3214V24.1071C15.3127 24.3439 15.4279 24.571 15.633 24.7385C15.8381 24.9059 16.1163 25 16.4064 25H33.9063C34.1963 25 34.4745 24.9059 34.6796 24.7385C34.8848 24.571 35 24.3439 35 24.1071V22.3214C35 22.0846 34.8848 21.8575 34.6796 21.6901C34.4745 21.5226 34.1963 21.4286 33.9063 21.4286ZM16.4064 17.8571H29.5313C29.8214 17.8571 30.0996 17.7631 30.3047 17.5956C30.5098 17.4282 30.625 17.2011 30.625 16.9643V15.1786C30.625 14.9418 30.5098 14.7147 30.3047 14.5472C30.0996 14.3798 29.8214 14.2857 29.5313 14.2857H16.4064C16.1163 14.2857 15.8381 14.3798 15.633 14.5472C15.4279 14.7147 15.3127 14.9418 15.3127 15.1786V16.9643C15.3127 17.2011 15.4279 17.4282 15.633 17.5956C15.8381 17.7631 16.1163 17.8571 16.4064 17.8571ZM1.09404 7.14286H4.37527V24.1071C4.37527 24.3439 4.4905 24.571 4.69562 24.7385C4.90073 24.9059 5.17893 25 5.46901 25H7.65649C7.94657 25 8.22476 24.9059 8.42988 24.7385C8.63499 24.571 8.75023 24.3439 8.75023 24.1071V7.14286H12.0314C13.0028 7.14286 13.4936 6.1808 12.8046 5.61886L7.33588 0.261719C7.13079 0.094402 6.8527 0.000413827 6.56275 0.000413827C6.27279 0.000413827 5.9947 0.094402 5.78961 0.261719L0.320907 5.61886C-0.365415 6.17969 0.121983 7.14286 1.09404 7.14286Z" fill="#FF8C1A"/>
</svg>

        <span className='sort ml-8 text-2xl'>Sort</span>
        </div>
        <div className="filter flex ml-8">
        <svg width="20" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.8974 0H1.37366C0.154923 0 -0.46005 1.26299 0.403497 2.00054L10.9766 11.0323V21.0938C10.9766 21.4761 11.195 21.8345 11.5618 22.0538L16.1354 24.7872C17.0377 25.3267 18.2943 24.7799 18.2943 23.8271V11.0323L28.8676 2.00054C29.7294 1.26445 29.1186 0 27.8974 0Z" fill="#FF8C1A"/>
</svg>

        <span className='filter ml-4 text-2xl'>Filter</span>
        </div>
        </div>
        </div>
        <div className='content mt-40 text-2xl'>
       <ul className='client-list flex justify-between'>
         <li className='client-details ml-10'>Client details</li>
         <li className='sales ml-32'>Sales</li>
         <li className='details-report ml-32 mr-4'>Details report</li>
         <li className='category mr-10'>Category</li>
       </ul>
       <Leftside />
       <Leftside />
       <Leftside />
       <Leftside />
       <Leftside />
       <Leftside />
        </div>
        </div>
        </div> 
  );
}
