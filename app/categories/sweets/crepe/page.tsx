import React from 'react'
import { Navbar } from "@/components/navbar/navbar"
import {SweetsScroll} from "@/components/scroll-area/sweets-scroll"
import { Crepe } from "@/components/sweets-menu/crepe"

const sweets = () => {
  return (
    <div className='bg-black h-screen overflow-scroll'><Navbar/><SweetsScroll/><Crepe /></div>
  )
}

export default sweets