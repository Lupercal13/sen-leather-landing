import React from 'react'
import { AiOutlineCopyright } from 'react-icons/ai'
import { BsFacebook, BsFillEnvelopeFill, BsFillTelephoneFill, BsInstagram } from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'


const Footer = () => {
    let currentYear = new Date().getFullYear()
  return (
    <div className='bg-black/70 pb-4 text-sm'>
        <div className='grid text-white'>
            <div className='ml-4 flex flex-col gap-4 mt-4'>

            <a href="mailto:sen-2010@oasis.ocn.ne.jp"  className='flex items-center gap-4   hover:text-gray-200 hover:cursor-pointer'><BsFillEnvelopeFill size={15}/> 
sen-2010@oasis.ocn.ne.jp</a>
            <p className='flex items-center gap-4  hover:text-gray-200 hover:cursor-pointer'><BsFillTelephoneFill size={15}/> 0575-46-9917</p>
            <p className='flex items-center gap-4  hover:text-gray-200 hover:cursor-pointer'><MdLocationOn size={15}/> 迫間2082-1 Seki-shi, Gifu, Japan 501-3924</p>
            <div className='flex justify-center gap-8'>
            <BsFacebook className=' hover:text-gray-200 hover:cursor-pointer' size={25}/>
            <BsInstagram className=' hover:text-gray-200 hover:cursor-pointer' size={25}/>
            </div>
            </div>
            <div className='ml-4'>

           <p className='flex items-center gap-2 text-xs text-gray-500'>
            <AiOutlineCopyright/> {currentYear}
            </p> 
            <p className='text-gray-500 text-xs'>Developed by: <span className='text-gray-400'>PayneHausDesign</span></p>
            </div>

        </div>
    </div>
  )
}

export default Footer


// <div className='bg-black/70 h-[200px]'>
// <div className='grid text-white'>
//     <div className='pl-2 flex flex-col gap-4'>

//     <p><BsFillEnvelopeFill/>: </p>
//     <p><BsFillTelephoneFill/>:</p>
//     <p><HiLocationMarker/>:</p>
//     <p><BsFacebook/><BsInstagram/></p>
//     <p><AiOutlineCopyright/></p>
//     <p className='text-gray-500'>developed by:</p>
//     </div>

// </div>
// </div>