import React from 'react'
import profilePic from '../assets/takuya-about.jpg'

const About = () => {
  return (
    <div className='h-full' id='about'>
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
                   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt unde asperiores, aliquid, explicabo est labore obcaecati dignissimos omnis laboriosam reiciendis quos exercitationem consequatur magni illo expedita dolore iste blanditiis nisi hic quae a facilis ut neque? Eveniet perspiciatis et, fugiat ex odio corporis qui magnam cumque in? Est incidunt excepturi eius. Quae minima repellendus hic earum vel, assumenda voluptatibus ullam molestias fuga dolorem blanditiis alias, adipisci nisi. Obcaecati cumque molestiae, dignissimos soluta omnis dolorem nam aut doloribus hic a magni perferendis. Porro vero facilis, quos veniam, quidem saepe magni ratione nulla recusandae numquam provident tempore eaque quibusdam, eveniet rerum rem?
                </p>
            </div>

        </div>
    </div>
  )
}

export default About