import React from 'react'
import { HiArrowNarrowDown, HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600 sm:text-2xl'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-6xl font-bold text-[#ccd6f6] mt-1'>Rahul Kumar</h1>
            <h2 className='text-4xl sm:text-6xl font-bold text-[#8892b0] mt-2'>I'm a Full Stack Developer.</h2>
            <p className='text-[#8892b0] py-4 sm:text-lg max-w-[700px] '>I'm a full-stack developer specializing in building (and ocassionally 
                desiging) exceptional digital experiences. Currently, I'm focused on
                building responsive full-stack web applications.</p>
            <div>
                <button className='group text-white border-2 px-6 py-3 my-2 hover:bg-pink-600 hover:border-pink-600 flex justify-center items-center font-bold'>
                <Link to='work' smooth={true} duration={500}>View Work</Link> 
                <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3 hover:' />
                </span>
                </button>
            </div>    
        </div>
    </div>
  )
}

export default Home;