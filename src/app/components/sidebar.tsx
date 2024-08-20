"use client"
import { useState } from "react"
import Image from 'next/image';
import Link from "next/link";


export default function Sidebar() {
  const [isDropDown, setIsDropDown] = useState(false);

  const dropdown = () => {
    setIsDropDown(!isDropDown);
  }
  return (
    <aside className="min-h-screen w-64 p-8 bg-gray-600 text-white fixed top-16">


      <ul>
        <div className="flex items-center px-2 space-x-2 border-white rounded-xl hover:bg-slate-400 cursor-pointer">
          <Image src="/icons/chart-simple-solid.svg" alt="Icon" height={20} width={20} />
          <li className="px-4 py-2"> Dashboard</li>
        </div>

        <div className="flex items-center px-2 space-x-2 border-white rounded-xl hover:bg-slate-400 cursor-pointer">
          <Image src="/icons/dollar-sign-solid.svg" alt="Icon" height={20} width={20} />
          <Link href="/sales" className="px-4 py-2">Sales</Link>
        </div>

        <div className="flex items-center px-2 space-x-2 border-white rounded-xl hover:bg-slate-400 cursor-pointer">
          <Image src="/icons/boxes-packing-solid.svg" alt="Icon" height={30} width={20} />
          <li className="px-4 py-2">Items</li>
        </div>

        <div className="flex items-center px-2 space-x-2 border-white rounded-xl">
          <Image src="/icons/user-solid.svg" alt="Icon" height={20} width={20} />
          <Link href="/customers" className="px-4 py-2">Customers</Link>
        </div>

        {/* <div className="flex items px-2 space-x-2 border-white rounded-xl hover:bg-slate-400 cursor-pointer">
            <Image src="/icons/gear-solid.svg" alt="Icon" height={20} width={20} className="mt-1" />
             <li className="px-4 py-2" onClick={dropdown}> Settings{isDropDown &&(
               <ul className="flex flex-col">
                 <li className="px-4 py-2  border-white rounded-xl  hover:scale-125 cursor-pointer">Profile</li>
                 <li className="px-4 py-2  border-white rounded-xl  hover:scale-125 cursor-pointer">Roles</li>
                <li className="px-4 py-2  border-white rounded-xl  hover:scale-125 cursor-pointer">Users</li>
              </ul>)
              }
             </li>
           </div> */}
        <div className="flex flex-col items border-white rounded-xl hover:bg-slate-400 cursor-pointer">

          <div className="flex px-2 space-x-2 " onClick={dropdown}>
            <Image src="/icons/gear-solid.svg" alt="Icon" height={20} width={20} className="" />
            <li className="px-4 py-2">Settings</li>
          </div>
        </div>
        {isDropDown && (
          <div>
            <ul className="flex flex-col ml-12 ">
              <li className="px-4 py-2 border-white rounded-xl hover:bg-slate-400 cursor-pointer">
                <Link href='profile'>Profile</Link>
              </li>
              <li className="px-4 py-2  border-white rounded-xl hover:bg-slate-400 cursor-pointer" >
                <Link href='profile'>Roles</Link>
              </li>
              <li className="px-4 py-2  border-white rounded-xl hover:bg-slate-400 cursor-pointer" >
                <Link href='profile'>Users</Link>
              </li>
            </ul>
          </div>
        )
        }

      </ul>

    </aside>

  )
}