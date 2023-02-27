import React from 'react'

import reactWeather from "../assets/portfolio/reactWeather.jpg"
import instagram from "../assets/portfolio/instagram.png"
const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: instagram,
        work: "Instagram",
        other: "Clone",
            link:"http://pictogrambydeep.000webhostapp.com",
        },
        {
            id: 2,
          src: reactWeather,
          work: "Real Time",
          other: " Weather App",
            link:"#",
        },
    ]
  return (
    <div name="portfolio" className=' bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-fit'>
          <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
              <div className='pb-8'>
                  <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>
                    PortFolio
                  </p>
                  <p className='py-6'> Check Out Some Of My Work Right Here</p>
              </div>
           
              <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
              {
            portfolios.map(({ id, src, work, other,link }) => (
                  <a href={link} target='_blank' rel='noreferrer'>
                    <div key={id} className=' shadow-md shadow-gray-600 rounded-lg'>
                    <img src={src} alt='' className=' rounded-md duration-200 hover:scale-105'/>
                    <div className=' flex items-center justify-center'>
                      <button className=' w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>{ work}</button>
                      <button className=' w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>{other}</button>
                    </div>
                </div>
                </a>
                ))
              }   
                 
              </div>
          </div>
    </div>
  )
}

export default Portfolio
