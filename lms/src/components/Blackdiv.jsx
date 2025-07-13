import React from 'react'
import pic77 from '../assets/77.jpg'

const Blackdiv = ({title}) => {
  return (
    <div className=" min-h-80 ">
      <div className='w-full h-55  md:56 lg:60 object-cover ' style={{backgroundImage: `url(${pic77})`}}>
         <div className='flex items-center justify-center  pt-18'>
            <h1 className='text-white text-4xl md:text-5xl lg:text-6xl font-bold'>{title}</h1>
         </div>
         </div>
    </div>
  )
}

export default Blackdiv