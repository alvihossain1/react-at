import React from 'react'

export default function heading() {
  return (
    <div className='relative left-0 top-0 h-screen bg-slate-600 text-white' style={{width: "250px"}}>
        <h1 className="text-center text-xl font-semibold">Welcome</h1>
        <ul className='font-semibold flex flex-col gap-2 pl-3'>
            <li><p className='cursor-pointer hover:text-pink-500 transition duration-300 ease'>Home</p></li>
            <li><p className='cursor-pointer hover:text-pink-500 transition duration-300 ease'>Work</p></li>
            <li><p className='cursor-pointer hover:text-pink-500 transition duration-300 ease'>Screen</p></li>
            <li><p className='cursor-pointer hover:text-pink-500 transition duration-300 ease'>Logout</p></li>
        </ul>
    </div>
  )
}
