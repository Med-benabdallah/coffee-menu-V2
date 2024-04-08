import React from 'react';
import { Button } from "@/components/ui/button";
import Link from "next/link";// Import the 'Button' component from 'antd'
import Image from "next/image";
import logo from '@/public/blacktag-logo.jpg'

const Categories = () => {
  return (
   <div className='h-screen flex flex-col justify-center  items-center bg-black text-white'>
    <Image src={logo} alt="Blacktag" height={100} width={100}/>
   <div className='flex justify-center items-center bg-black'>
      
      
      <div className='flex justify-evenly items-center flex-wrap m-10 p-0 gap-5'>
      <div className='w-36 h-36 bg-dark border-4 flex justify-center rounded-3xl'><Link href="/categories/drinks/coffee" className=' flex flex-col justify-center items-center gap-3'><Image src="/coffee.svg" alt="drinks" width={70} height={70}/><h4 className='font-bold'>Drinks</h4></Link></div>
      <div className='w-36 h-36 bg-dark border-4 flex justify-center rounded-3xl'><Link href="/categories/food/pizza" className=' flex flex-col justify-center items-center gap-3'><Image src="/food.svg" alt="food" width={70} height={70}/><h4 className='font-bold'>Food</h4></Link></div>
      <div className='w-36 h-36 bg-dark border-4 flex justify-center rounded-3xl'><Link href="/categories/sweets/crepe" className=' flex flex-col justify-center items-center gap-3'><Image src="/sweets.svg" alt="sweets" width={70} height={70}/><h4 className='font-bold'>Sweets</h4></Link></div>
      <div className='w-36 h-36 bg-dark border-4 flex justify-center rounded-3xl'><Link href="/categories/breakfast" className=' flex flex-col justify-center items-center gap-3'><Image src="/breakfast.svg" alt="breakfast" width={70} height={70}/><h4 className='font-bold'>Breakfast</h4></Link></div>
      <div className='w-36 h-36 bg-dark border-4 flex justify-center rounded-3xl'><Link href="/categories/children" className=' flex flex-col justify-center items-center gap-3'><Image src="/children.svg" alt="sweets" width={70} height={70}/><h4 className='font-bold'>Children Menu</h4></Link></div>
      </div>
    </div>
    </div>
  )
}

export default Categories
