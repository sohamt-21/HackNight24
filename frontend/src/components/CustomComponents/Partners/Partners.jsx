import React from 'react'
import Roblox from "../../../assets/Roblox.png";
import Visa from "../../../assets/Visa.png";
import Youtube from "../../../assets/Youtube.png";

function Partners() {
  return (
    <div className=' flex flex-row justify-between '>
        <img src={Roblox} alt=""  className='h-14 w-fit grayscale hover:grayscale-0 ease-ease delay-100'/>
        <img src={Visa} alt=""    className='h-14 w-fit grayscale hover:grayscale-0 ease-ease delay-100'/>
        <img src={Youtube} alt="" className='h-14 w-fit grayscale hover:grayscale-0 ease-easeIn delay-100'/>
    </div>
  )
}

export default Partners