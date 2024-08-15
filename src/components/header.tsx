import React from 'react'
import Image from 'next/image';

export default function Header() {
  return (
    <div className=" flex items-center space-x-4 bg-slate-950 h-16 fixed w-full ">
    <Image src="/images/imslogo.png" className ="ml-4 border rounded-2xl" alt="ny" height={40} width={50}/>
    <h1 className="text-yellow-600 text-2xl font-extrabold ">IMS APP</h1>
</div>
  )
}


