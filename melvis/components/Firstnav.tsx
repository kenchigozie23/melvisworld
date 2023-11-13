import React from 'react'
import { CiMail } from "react-icons/ci";
import {CiLocationOn } from "react-icons/ci";
import { BsPerson} from "react-icons/bs";



const Firstnav = () => {
  return (
 
    <main className='w-full fixed hidden md:flex justify-between items-center px-32 mx-auto border border-b-1 border-t-0 border-l-0 border-gray-300 border-r-0'>
        <article className='flex justify-between items-center'>
            <div className='flex justify-between items-center'>
                <div className='px-2'>
                    <CiMail/>
                </div>
                <p className='text-xs pr-8'>support@melvisworld.com</p>
                </div>
            <div className='flex justify-between items-center'>
                <div className='px-2'>
                    <CiLocationOn/>
                </div>
                <p className='text-xs'>
                    No 10 Sir (Engr.) & Lady E.B.E Aloku Street, Delta State.
                </p>
            </div>
        </article>
        <article className='flex justify-between items-center'>
          <div className='flex justify-between items-center'>
            <div className='px-2'>
                <BsPerson/>
            </div>
            <p className='pr-3 text-sm'>Login</p>
          </div>
          <div>
            <button className='text-sm bg-black text-white border-solid py-2 px-6 font-semibold'>Contact Us</button>
          </div>
        </article>
    </main>
   
  
  )
}

export default Firstnav