"use client";

import React from "react";
import { useRouter } from "next/navigation";
import CustomerTable from "@/components/CustomerTable";

const Customer = () => {
  const router = useRouter();
  return (
    <div className=" h-full overflow-hidden flex items-center flex-col m-4">
      <div className="flex justify-between w-[95%] px-8 py-4  border-black bg-white border rounded-xl text-black">
        <p className="text-2xl">Customer/ Vendor</p>
        <button
          onClick={(e) => {
            e.preventDefault();
            router.push("/customers/add");
          }}
          className="rounded-xl w-28 h-8 bg-green-800 text-white"
        >
          + Customer
        </button>
      </div>
      <CustomerTable />
    </div>
  );
};

export default Customer;
