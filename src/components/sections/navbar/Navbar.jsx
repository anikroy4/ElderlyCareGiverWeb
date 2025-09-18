import React from 'react'
import Container from '../../layers/Container'
import Image from '../../layers/Image'
import List from '../../layers/List'
import ListItem from '../../layers/ListItem'

const Navbar = () => {
  return (
    <Container>
     <div className='flex justify-between items-center'>
        <div>
          <Image imgsrc="./images/logo.png"/>
        </div>
        <div className=''>
          <List className='flex gap-x-10'>
            <ListItem  ListInnerItem="Home" href="/"/>
            <ListItem  ListInnerItem="About Us" href="/about"/>
            <ListItem  ListInnerItem="Services" href="/services"/>
            <ListItem  ListInnerItem="Events" href="/contact"/>
            <ListItem  ListInnerItem="Contact Us" href="/blog"/> 
          </List>

        </div>
        <div className='flex gap-x-10 items-center justify-center'>
           <div className='flex items-center justify-center gap-x-10'>
            <button className="relative after:absolute after:w-[1px] after:h-[32px] after:bg-[#BFBFBF] after:right-[-23px] after:top-[50%] after:-translate-y-[50%] py-[4px] px-[10px] bg-[#305A7C] border border-solid border-[#CDCDCD] rounded-[10px] text-[#FEFFFE] font-medium text-base" >
              Login
            </button>
            <button className='py-[4px] px-[10px] bg-[#305A7C] border border-solid border-[#CDCDCD] rounded-[10px] text-[#FEFFFE] font-medium text-base '>
              Sign Up
            </button>
            
           </div>
           <div>
              <button className=" py-[4px] px-[10px] rounded-[10px] border border-solid text-[#FEFFFE] font-medium text-base bg-[#2E95E9]">Donate</button>
           </div>
        </div>
     </div>

    </Container>
  )
}

export default Navbar