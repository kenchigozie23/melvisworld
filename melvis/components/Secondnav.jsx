
import React from "react";
import { BsPerson } from "react-icons/bs";
import Image from "next/image";
import melvislogo from "../public/melvis world logo.png";
import Link from "next/link";


import Example from '../components/dropdown'

function Secondnav() {


  
  return (
    
    <main className="w-full fixed hidden md:flex justify-between items-center px-20  py-12 top-0 left-0 z-20">
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
      

          <div className="flex justify-center items-center ">
      <Example/>
    </div>
          
          <div>
      

    </div>
          
        </div>
      </article>
      <article className="flex justify-between items-center">
        <div className="flex justify-between items-center">
          <div className="px-2">
            <BsPerson />
          </div>
          <p className="pr-3 text-sm">Login</p>
        </div>
        <div>
          <button className="text-sm bg-black text-white border-solid py-2 px-6 font-semibold">
            Contact Us
          </button>
        </div>
      </article>
    </main>
  );
}

export default Secondnav;
