import React from 'react'
import { Navbar } from "@/components/navbar/navbar"
import {SweetsScroll} from "@/components/scroll-area/sweets-scroll"
import { Pancake } from "@/components/sweets-menu/pancake"

const sweets = () => {
  return (
    <div className='bg-black h-screen overflow-scroll'><Navbar/><SweetsScroll/><Pancake/></div>
  )
}

export default sweets