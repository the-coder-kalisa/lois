import React from "react";
export default function TopNav({ logo }) {
  return (
    <div className="w-[15%] h-[100vh] bg-black flex flex-col gap-3 sticky top-0 ">
      <img
        src={logo}
        alt="Logo Image"
        className="w-[10em] h-[10em] mx-auto my-3"
      />
      <div className="bg-black h-[100%] flex flex-col ">
        <div className="w-[100%] h-[5em] bg-[#000] flex flex-row  items-center pl-[2.5em]  hover:cursor-pointer hover:border-l-[0.4em] hover:bg-[#211C1C]">
          <span className="material-symbols-outlined text-[1.5em] text-white pr-[1em]">
            home
          </span>
          <div className="text-[1em] text-white">Home</div>
        </div>
        <div className="w-[100%] h-[5em] bg-[#000] flex flex-row  items-center pl-[2.5em]  hover:cursor-pointer hover:border-l-[0.4em] hover:bg-[#211C1C]">
          <span className="material-symbols-outlined text-[1.5em] text-white pr-[1em]">
            grid_view
          </span>
          <div className="text-[1em] text-white">Overview</div>
        </div>
        <div className="w-[100%] h-[5em] bg-[#000] flex flex-row  items-center pl-[2.5em]  hover:cursor-pointer hover:border-l-[0.4em] hover:bg-[#211C1C]">
          <span className="material-symbols-outlined text-[1.5em] text-white pr-[1em]">
            group
          </span>
          <div className="text-[1em] text-white">Clients</div>
        </div>
        <div className="w-[100%] h-[5em] bg-[#000] flex flex-row  items-center pl-[2.5em]  hover:cursor-pointer hover:border-l-[0.4em] hover:bg-[#211C1C]">
          <span className="material-symbols-outlined text-[1.5em] text-white pr-[1em]">
            manage_accounts
          </span>
          <div className="text-[1em] text-white">Users</div>
        </div>
        <div className="w-[100%] h-[5em] bg-[#000] flex flex-row  items-center pl-[2.5em]  hover:cursor-pointer hover:border-l-[0.4em] hover:bg-[#211C1C]">
          <span className="material-symbols-outlined text-[1.5em] text-white pr-[1em]">
            settings
          </span>
          <div className="text-[1em] text-white">Settings</div>
        </div>
        <div className="w-[100%] h-[5em] bg-[#000] flex flex-row  items-center pl-[2.5em]  hover:cursor-pointer hover:border-l-[0.4em] hover:bg-[#211C1C]">
          <span className="material-symbols-outlined text-[1.5em] text-white pr-[1em]">
            account_circle
          </span>
          <div className="text-[1em] text-white">My Account</div>
        </div>
        <div className="h-[8%] w-[100%] flex flex-row justify-evenly items-center bg-white border absolute bottom-0">
          <a href="https://www.facebook.com/" target="_blank">
            <i className="fa-brands fa-facebook text-black text-[2em]"></i>
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <i className="fa-brands fa-instagram text-[2em]"></i>
          </a>
          <a href="https://twitter.com/home" target="_blank">
            <i className="fa-brands fa-twitter text-[2em]"></i>
          </a>
          <a href="https://www.linkedin.com/feed/" target="_blank">
            <i className="fa-brands fa-linkedin text-[2em]"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
