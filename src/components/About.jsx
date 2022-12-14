import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>About</p>
                </div>
                <div> </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8'>
                <div className='sm:text-right font-bold pl-4'>
                    <p className='text-4xl'>
                        Hey, I am Rahul, welcome to my portfolio, please have a look.
                    </p>
                </div>
                <div className='pl-4'>
                    <p>
                        I am passionate about building excellent responsive UI of the Website that helps in making the beautiful, smooth working website. 
                        I specialize in creating websites 
                        for clients ranging from individuals and small businesses all 
                        the way to large enterprise corporations.
                    </p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default About;