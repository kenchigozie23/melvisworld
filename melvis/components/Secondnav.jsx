
import React from "react";
import { BsPerson, BsSearch } from "react-icons/bs";

import Image from "next/image";
import melvislogo from "../public/melvis world logo.png";
import Link from "next/link";

import  StaggeredDropDown from "../components/dropdown"
// import Example from '../components/dropdown'

function Secondnav() {


  
  return (
    
    <main className="w-full fixed hidden md:flex justify-between items-center px-32  py-7 top-0 left-0 z-20">
      <article className="flex justify-between items-center">
        <div>
          <Image
            className="pr-20"
            src={melvislogo}
            alt="melvisworld-logo"
            width={120}
          />
        </div>
        <div className="flex justify-between items-center gap-3 mx-9 pr-9">
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">FAQ</Link>
          <Link href="/">Contact</Link>
      

          <span className="flex">
      < StaggeredDropDown/>
    </span>
          
          <div>
      

    </div>
          
        </div>
      </article>
      <article className="flex justify-between items-center">
      


      <div className="hidden md:block">
            {/* Search input */}
            <div className="flex rounded-md shadow-sm">
              <input 
                type="text"
                className=" bg-gray-100  bg-transparent border-none border-gray-300 h-9 px-3 pr-0 rounded-none text-sm focus:outline-none placeholder:text-black" 
                placeholder="Search..."
              />
              <button className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border-l-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-100 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 border-r-0 border-t-0 border-b-0">
                <BsSearch className="h-5 w-5 text-black" aria-hidden="true" />
                
              </button>
            </div>
          </div>        

    
  
      </article>
    </main>
  );
}

export default Secondnav;
