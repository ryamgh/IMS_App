import React from 'react'
import { useRouter } from 'next/navigation';
import Action from './Action';

const CustomerTable = () => {
  const router = useRouter();
  const tableHeader = ["Name", "Email", "Phone Number", "Address", "IsVendor", "Actions"]
  const data = [
    { name: "Bhat", email: "bhat@gmail.com", phone:"1299772211", address:"Mahendrachowk, Brt, Koshi -56613", isVendor:"No"},
    { name: "Bhatey", email: "examxa@gmail.com", phone:"151522", address:"mahendra morang", isVendor:"No", action:""},
    { name: "", email: "", phone:"", address:"", isVendor:"", action:""},
    { name: "", email: "", phone:"", address:"", isVendor:"", action:""},
  ];
  return (
    <div>
      <div className="relative overflow-x-auto mt-6 ml-10">
        <table className="w-[95%] text-sm text-left rtl:text-right border-b-slate-500">
          <thead className="text-xs text-gray-700 capatalize bg-gray-300 border-slate-700 font-semibold">
            <tr>
              {tableHeader.map((header) => (
                <th scope="col" className="px-6 py-3" key={header}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((value, index) => (
              <tr className="bg-white border-b" key={index}>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-black whitespace-nowrap">
                  {value.name}
                </th>
                <td className="px-6">{value.email}</td>
                <td className="px-6">{value.phone}</td>
                <td className="px-6 text-wrap">{value.address}</td>
                <td className="px-6">{value.isVendor}</td>
                <td>
                  <Action />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CustomerTable