import React from 'react'
import { Navbar } from "@/components/navbar/navbar"
import { DrinksScroll } from '@/components/scroll-area/drinks-scroll'
import { Coffee } from '@/components/drinks-menu/coffee'

const drinks = () => {
  return (
    <div className='bg-black h-screen'><Navbar/><DrinksScroll/><Coffee/></div>
  )
}

export default drinks
