import React from 'react'
import { Navbar } from "@/components/navbar/navbar"
import { DrinksScroll } from '@/components/scroll-area/drinks-scroll'
import { Enfant } from '@/components/children-menu/children'

const drinks = () => {
  return (
    <div className='bg-black h-screen'><Navbar/><Enfant/></div>
  )
}

export default drinks
