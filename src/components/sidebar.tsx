"use client"
import { useState } from "react"
import Image from 'next/image';


export default function Sidebar() {
    const [isDropDown, setIsDropDown]= useState(false);

    const dropdown= ()=>{
        setIsDropDown(!isDropDown);
    }
    return (
        <aside className="min-h-screen w-64 p-8 bg-white text-black">
            
        <div className=" mb-16 flex items-center space-x-4">
            <Image src="/images/imslogo.png" className ="" alt="ny" height={50} width={50}/>
            <h1 className="text-yellow-600 text-2xl font-extrabold ">IMS APP</h1>
        </div>
           <ul>
           <div className="flex items-center px-2 space-x-2 border-white rounded-xl hover:bg-slate-400 cursor-pointer">
            <Image src="/icons/chart-simple-solid.svg" alt="Icon" height={20} width={20} />
             <li className="px-4 py-2  "> Dashboard</li>
           </div>

           <div className="flex items-center px-2 space-x-2 border-white rounded-xl hover:bg-slate-400 cursor-pointer">
            <Image src="/icons/dollar-sign-solid.svg" alt="Icon" height={20} width={20}  />
             <li className="px-4 py-2  "> Sales</li>
           </div>
           
           <div className="flex items-center px-2 space-x-2 border-white rounded-xl hover:bg-slate-400 cursor-pointer">
            <Image src="/icons/boxes-packing-solid.svg" alt="Icon" height={30} width={30}  />
             <li className="px-4 py-2  "> Items</li>
           </div>

           <div className="flex items-center px-2 space-x-2 border-white rounded-xl hover:bg-slate-400 cursor-pointer">
            <Image src="/icons/user-solid.svg" alt="Icon" height={20} width={20}  />
             <li className="px-4 py-2  "> Customers</li>
           </div>
            
           <div className="flex items px-2 space-x-2 border-white rounded-xl hover:bg-slate-400 cursor-pointer">
            <Image src="/icons/gear-solid.svg" alt="Icon" height={20} width={20}  />
             <li className="px-4 py-2  " onClick={dropdown}> Settings{isDropDown &&(
               <ul>
                 <li className="px-4 py-2  border-white rounded-xl  hover:scale-125 cursor-pointer">Profile</li>
                 <li className="px-4 py-2  border-white rounded-xl  hover:scale-125 cursor-pointer">Roles</li>
                <li className="px-4 py-2  border-white rounded-xl  hover:scale-125 cursor-pointer">Users</li>
              </ul>)}
             </li>
           </div>

          </ul>

        </aside>
        
    )
}