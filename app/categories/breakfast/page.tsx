import React from 'react'
import { Navbar } from "@/components/navbar/navbar"
import { DrinksScroll } from '@/components/scroll-area/drinks-scroll'
import { Breakfast } from '@/components/breakfast-menu/breakfast'

const drinks = () => {
  return (
    <div className='bg-black h-screen'><Navbar/><Breakfast/></div>
  )
}

export default drinks
