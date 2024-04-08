import React from 'react'
import { Navbar } from "@/components/navbar/navbar"
import { DrinksScroll } from '@/components/scroll-area/drinks-scroll'
import { Tea } from '@/components/drinks-menu/the'
import { HotChocolate } from '@/components/drinks-menu/hotChocolate'

const drinks = () => {
  return (
    <div className='bg-black h-screen'><Navbar/><DrinksScroll/><Tea/><HotChocolate/></div>
  )
}

export default drinks
