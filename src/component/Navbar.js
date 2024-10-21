import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { Link } from 'react-router-dom';

export default function Navbar({search}) {

  const Onsearch = (word)=>{
    return search(word)
  }

  return (
    <div className='w-11/12 mx-auto gap-12 bg-slate-200 p-2 flex justify-center items-center'>
        <div className='flex-1 text-end relative w-11/2'>
          <IoMdSearch className='text-xl absolute top-1/2 right-1 -translate-y-1/2 '/>
          <input onChange={(e)=>Onsearch(e.target.value)} className='w-[80%] rounded-md outline-none py-1 px-2'/>
        </div>
        <Link to='/' className='flex-1 text-center'>
          <h1 className='flex-1 text-center font-bold text-3xl'>TETO</h1>
        </Link>
    </div>
  )
}
