import React from 'react'
import profilePic from '../assets/takuya-about.jpg'

const About = () => {
  return (
    <div className='h-full'>
        {/* <div className='text-center'>
            <h1 className='text-5xl mb-[10rem] mt-10'>Get to know us</h1>
        </div> */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mx-6 items-center mt-[10rem] mb-32'>
            <div className=''>
                <img className='rounded border-2 border-black drop-shadow-lg' src={profilePic} alt="" />
            </div>
            <div className='flex flex-col gap-10 justify-center items-center md:items-start'>
                <h1 className='text-5xl  '>Who We Are: </h1>
                <p className='text-xl md:text-lg tracking-wider md:tracking-wide'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, doloremque exercitationem error debitis quod est quisquam reprehenderit consectetur? Libero repellat tenetur amet a ullam vero molestiae, reprehenderit, quibusdam, explicabo eveniet quod voluptate. Adipisci cum velit quia tempore. Quo consectetur quidem ipsam explicabo, qui asperiores quia, numquam quaerat ea expedita officia.
                </p>
            </div>

        </div>
    </div>
  )
}

export default About