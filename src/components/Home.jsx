import React from 'react'
import HeroImage from "../assets/heroImage.jpg"
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-scroll'
const Home = () => {
  return (
    <div name="home" className=' w-full bg-gradient-to-b from-black via-black to-gray-800 lg:h-screen'>
          <div className=' max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
              <div className='mt-24 flex flex-col justify-center h-full sm:mt-28'>
                  <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                        I Am a Fullstack Developer
                  </h2>
                  <p className=' text-gray-500 py-4  max-w-md'>
                      I have an amazing experience of building and designing software.
                      Currently,I love to work on web application
                      using technology like React,Tailwind,Node js,Express js.
                  </p>

                  <div>
                      <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                          Portfolio
                          <span className='group-hover:rotate-90 duration-300'>
                              <MdOutlineKeyboardArrowRight size={25} className=" ml-1"/>
                           </span>
                      </Link>
                  </div>
              </div>

              <div>
                  <img src={ HeroImage} alt="myProfilePic" className=' rounded-2xl mx-auto w-2/3 md:w-full'/>
              </div>
          </div>  
    </div>
  )
}

export default Home
