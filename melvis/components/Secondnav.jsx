
import React from "react";
import { BsPerson, BsSearch } from "react-icons/bs";

import Image from "next/image";
import melvislogo from "../public/melvis world logo.png";
import Link from "next/link";

import  StaggeredDropDown from "../components/dropdown"
// import Example from '../components/dropdown'

function Secondnav() {


  
  return (
    
    <main className="w-full fixed hidden md:flex justify-between items-center px-20  py-7 top-0 left-0 z-20">
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
      


    <div className="pt-2 relative mx-auto text-gray-600">

      <input 
        className="border-2 border-gray-300 bg-gray-300 h-10 px-5 pr-10 rounded-none text-sm focus:outline-none"
        type="text" 
        name="search" 
        placeholder="Search" 
      />

      <button
        type="submit"
        className="absolute right-5 top-0 mt-5 mr-4"
      >
        <BsSearch className="text-gray-600 h-4 w-4" />
      </button>

    </div>
  
      </article>
    </main>
  );
}

export default Secondnav;
