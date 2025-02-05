"use client";
import React, {useState, useEffect} from 'react'
import Link from 'next/link';
import NavLink from './NavLink';
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay';

const navLinks = [
    {
        title:"About Me",
        path:"#about"
    },
    {
        title:"My Projects",
        path:"#projects"
    },
    {
        title:"Contacts",
        path:"#contacts"
    },
]

const Navbar = () => {
   const [navbarOpen, setNavbarOpen] = useState(false);
   const [scrolling, setScrolling] = useState(false);

   // Detect Scroll Position
   useEffect(() => {
       const handleScroll = () => {
           if (window.scrollY > 50) {
               setScrolling(true);
           } else {
               setScrolling(false);
           }
       };

       window.addEventListener("scroll", handleScroll);
       return () => {
           window.removeEventListener("scroll", handleScroll);
       };
   }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-10 transition-all duration-300 
    ${scrolling ? "bg-black bg-opacity-80 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
            <Link href={"/"} className="text-xl md:text-2xl text-white font-semibold hover:opacity-100">Home</Link>
            <div className="mobile-menu block md:hidden">
                {
                    !navbarOpen ?(
                        <button onClick={() => setNavbarOpen(true)} className="flex items-center px-3 py-2 border rounded border-slate-400 text-slate-400 hover:text-white hover:border-white">
                            <Bars3Icon  className="h-5 w-5"/>
                        </button>
                    ) : (
                        <button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded border-slate-400 text-slate-400 hover:text-white hover:border-white">
                        <XMarkIcon className="h-5 w-5"/>
                    </button>
                    )
                }
            </div>
            <div className="menu hidden md:block md:w-auto" id="navbar">
                <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                    {
                        navLinks.map((link,index)=>
                            <ul key = {index}>
                                <NavLink href={link.path} title={link.title}/>
                            </ul>
                        )
                    }
                </ul>
            </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks}/>: null}
    </nav>
  )
}

export default Navbar