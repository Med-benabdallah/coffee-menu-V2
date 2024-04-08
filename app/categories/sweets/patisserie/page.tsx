import React from 'react'
import { Navbar } from "@/components/navbar/navbar"
import {SweetsScroll} from "@/components/scroll-area/sweets-scroll"
import { Patisserie } from "@/components/sweets-menu/patisserie"
const sweets = () => {
  return (
    <div className='bg-black h-screen overflow-scroll'><Navbar/><SweetsScroll/><Patisserie/></div>
  )
}

export default sweets