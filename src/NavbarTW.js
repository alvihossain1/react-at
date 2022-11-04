import React from 'react'

export default function NavbarTW() {

    return (

        <nav className="w-full bg-black text-white flex items-center px-5 md:px-10 lg:px-16 xl:px-20 text-base xl:text-lg sticky top-0" style={{ minHeight: "8vh", zIndex: "2"}}>
            <div className="logo text-3xl">
                <h1>Anym<span className="text-pink-600">Tweets</span></h1>
            </div>
            <div className="collapse w-full hidden lg:flex lg:items-center lg:justify-center text-base md:text-xl">
                <ul className="flex mx-auto">
                    <li><p className="py-4 px-2.5 xl:py-6 xl:px-7 hover:bg-pink-600 transition-colors duration-300 ease-linear cursor-pointer" href="#">Home</p></li>
                    <li><p className="py-4 px-2.5 xl:py-6 xl:px-7 hover:bg-pink-600 transition-colors duration-300 ease-linear cursor-pointer" href="#">Contact Us</p></li>
                    <li><p className="py-4 px-2.5 xl:py-6 xl:px-7 hover:bg-pink-600 transition-colors duration-300 ease-linear cursor-pointer" href="#">Details</p></li>
                </ul>
                <div className="searchbox">
                    <input className="box-border py-1 px-3 rounded-3xl text-black caret-pink-500 focus:outline-none focus:ring focus:ring-pink-600" type="text" placeholder="Search" />
                </div>
            </div>
            <div className="icon ml-auto block lg:hidden">
                <i className="fa-sharp fa-solid fa-bars fa-xl md:fa-2xl lg:fa-3xl xl:fa-5xl"></i>
            </div>
        </nav>

    )
}
