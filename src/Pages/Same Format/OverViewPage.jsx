import React, { useMemo } from "react";
import { useState, useEffect } from "react";
import Image from "./../../IMAGES/Restaurant-Statistics-3-2-1024x625.jpg";
import TopNav from "../../Components/TopNav";

export default function OverViewPage() {
  const [orders, setOrders] = useState(132);
  const [deliver, setDeliver] = useState(98);
  const [clients, setClients] = useState(145);
  const [money, setMoney] = useState(1350460);
  const [orderPerHour, setOrderPerHour] = useState(
    Math.floor(orders / 60) * 24
  );  

  const usFormat = new Intl.NumberFormat("en-us");
  const availableItems = 247;
  const [activeClients, setActiveClients] = useState(307);
  const listActive = [
    "Pending Orders",
    "Available Items",
    "Order/Hour",
    "Active Clients",
  ];
  function handlePending(name) {
    return (
      <div className="bg-white shadow-lg rounded-md flex flex-col gap-3 my-3 p-[2em]">
        <div className="h-[30%] flex flex-col gap-[1em]">
          <div className="flex flex-row justify-between items-center h-[60%]">
            <span className="font-bold text-[2em]">{name}</span>
            <span className="font-bold text-[1em] text-[#EFA129]">
              View details
            </span>
          </div>
          <div className="h-[40%] w-100%">
            <span className="font-bold text-[1em] ">Sales</span>
          </div>
        </div>
        <div className="h-[24%] flex flex-row items-center justify-between border-b-4 border-[#EFA129]">
          <div className="font-bold text-[1em] opacity-50">Chicken</div>
          <div className="font-bold text-[1.3em]">52,000 RWF</div>
        </div>
        <div className=" h-[30%] flex flex-row items-center justify-between">
          <div className="font-bold text-[1.em] opacity-50">Soy</div>
          <div className="font-bold text-[1.3em]">15,000 RWF</div>
        </div>
      </div>
    );
  }
  function handleCreate(name) {
    return (
      <div className=" w-[100%] h-[20%] flex flex-row justify-between items-center">
        <div className="flex flex-row  items-center w-[50%] gap-[1.3em]">
          <input type="checkbox" className="w-[1.5em] h-[1em]" />
          <span className="font-bold text-[1.3em]">{name}</span>
        </div>
        <div className="bg-[#EFA129] text-white font-bold p-[0.1em] rounded-md text-[1em]">
          NEW
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-[85%] h-[100%]">
      <TopNav title="Overview" />
      <div className="h-[15%] flex flex-row gap-5 items-center justify-between mx-[2em]">
        <div className="bg-white w-[25%] h-[90%] drop-shadow-2xl rounded-md flex flex-col justify-center items-center ">
          <span className="text-[1.3em] font-bold opacity-50">Clients</span>
          <span className="text-[3em] font-bold">{clients}</span>
        </div>
        <div className="bg-white w-[25%] h-[90%] drop-shadow-2xl rounded-md flex flex-col justify-center items-center">
          <span className="text-[1.2em] font-bold ">Revenue (FRW) </span>
          <span className="text-[3em] font-bold">{usFormat.format(money)}</span>
        </div>
        <div className="bg-white w-[25%] h-[90%] drop-shadow-2xl rounded-md flex flex-col justify-center items-center">
          <span className="text-[1.3em] font-bold opacity-50">Orders</span>
          <span className="text-[3em] font-bold">{orders}</span>
        </div>
        <div className="bg-white w-[25%] h-[90%] drop-shadow-2xl rounded-md flex flex-col justify-center items-center">
          <span className="text-[1.3em] font-bold opacity-50">Delivered</span>
          <span className="text-[3em] font-bold">{deliver}</span>
        </div>
      </div>
      <div className="w-[100%] h-[45%] mr-[2em] flex flex-row px-[2em] justify-between ">
        <div className="w-[60%] h-[90%] flex items-center">
          <img src={Image} alt="Image" className="h-[80%] w-[90%]" />
        </div>
        <div className="w-[30%] h-[95%] bg-white rounded-md flex flex-col  py-[2em] shadow-xl">
          <div className="flex flex-col justify-center items-center w-[100%] ">
            {listActive.map((data, key) => {
              if (key === 0) {
                return (
                  <React.Fragment key={key}>
                    <div
                      className=" font-bold text-[1.2em] opacity-50 p-2"
                      key={key}
                    >
                      {data}
                    </div>
                    <div className="font-bold text-[2.4em]">{orders}</div>
                  </React.Fragment>
                );
              } else if (key === 1) {
                return (
                  <React.Fragment key={key}>
                    <div
                      className=" font-bold text-[1.2em] opacity-50 p-2"
                      key={key}
                    >
                      {data}
                    </div>
                    <div className="font-bold text-[2.4em]">
                      {availableItems}
                    </div>
                  </React.Fragment>
                );
              } else if (key === 2) {
                return (
                  <React.Fragment key={key}>
                    <div
                      className=" font-bold text-[1.2em] opacity-50 p-2"
                      key={key}
                    >
                      {data}
                    </div>
                    <div className="font-bold text-[2.4em]">{orderPerHour}</div>
                  </React.Fragment>
                );
              } else {
                return (
                  <React.Fragment key={key}>
                    <div
                      className=" font-bold text-[1.2em] opacity-50 p-2 flex gap-1 items-center"
                      key={key}
                    >
                      <div className="h-[0.8em] w-[0.8em] bg-[#47DF00] rounded-full"></div>
                      {data}
                    </div>
                    <div className="font-bold text-[2.4em]">
                      {activeClients}
                    </div>
                  </React.Fragment>
                );
              }
            })}
          </div>
        </div>
      </div>
      <div className="bg- w-[100%] h-[50%] flex flex-row justify-between pl-[2em]">
        <div className="w-[70%] h-[100%] grid grid-cols-2 gap-3">
          {handlePending("Restaurent")}
          {handlePending("Hotels")}
          {handlePending("Pubs")}
          {handlePending("Cafes")}
        </div>
        <div className="bg-white w-[25%] h-[97%] mr-[2em] shadow-xl rounded-lg flex flex-col gap-[1em] p-[1em] divide-y-2 divide-[#ccc]">
          <div className=" w-[100%] h-[30%]">
            <div className="flex flex-row justify-between items-center h-[40%]">
              <span className="font-bold text-[1.8em]">Create</span>
              <span className="font-bold text-[#EFA129] text-[1.2em]">
                View all
              </span>
            </div>
            <div className="h-[30%] font-bold text-[1.3em] flex items-center">
              Today
            </div>
            <div className="flex flex-row justify-between items-center h-[40%]">
              <span className="font-bold text-[1.35em] text-[#EFA129]">
                Create new
              </span>
              <span className="material-symbols-outlined font-bold text-[1.8em] bg-[#EFA129] rounded-sm text-black">
                add
              </span>
            </div>
          </div>
          {handleCreate("Resto")}
          {handleCreate("Hotels")}
          {handleCreate("Cafes")}
          <div className=" w-[100%] h-[20%] flex flex-row justify-between items-center">
            <div className="flex flex-row  items-center w-[50%] gap-[1.3em]">
              <input type="checkbox" className="w-[1.5em] h-[1em] " />
              <span className="font-bold text-[1.3em] flex float-left">
                Pub
              </span>
            </div>
            <div className="bg-[#CCC] text-black font-bold p-[0.1em] rounded-md text-[1em]">
              DEFAULT
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
