import React from 'react'
import { Navbar } from "@/components/navbar/navbar"
import {SweetsScroll} from "@/components/scroll-area/sweets-scroll"
import { Gaufre} from "@/components/sweets-menu/gaufre"

const sweets = () => {
  return (
    <div className='bg-black h-screen overflow-scroll'><Navbar/><SweetsScroll/><Gaufre/></div>
  )
}

export default sweets