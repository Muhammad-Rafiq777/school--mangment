import React from 'react'
import { Link } from 'react-router-dom'
import Blackdiv from '../components/Blackdiv'
import slider3 from '../public/slider3.png'
import raza from '../assets/raza.png'
import saqib from '../assets/saqib.png'

const Service2=()=>{
    return(
        <div>
            <Blackdiv title={'Jamia-tul-Mustafa'} />

            <div className='flex flex-col mt-20 md:flex-row gap-4 gap-9 pb-9 pt-9 lg:pt-12 lg;pb-13 ml-10 mr-10 lg:pl-40 lg:pr-40 mb-10 lg:max-w-[70%] lg:mr-[15%] lg:ml-[15%] '>
        <div>
          <h3 className='text-2xl font-bold text-black-800 mb-3'>Jamia-tul-Mustafa</h3>
          <p className='font-light text-sm'>Jamia-tul-Mustafa is an Islamic institute that is offering Islamic and contemporary education to the boys in Gujranwala, Pakistan. It is an educational project of the Idara-tul-Mustafa International, and the brainchild of Allama Muhammad Raza Saqib Mustafai, who views it as the realization of his dream of educational excellence in all aspects. The institute has illuminated the lives of millions of people with the light of knowledge. Thousands of students are receiving first-class education here absolutely free.
          </p>
          <p className='font-light text-sm mt-10'>Completely free from the vices of prejudice, intolerance, discrimination, extremism and narrow-mindedness, the institute is a continuation of the vibrant, scholarly tradition of the glorious learning centres of historical Baghdad, Samarkand, Bukhara, Neyshabur and Córdoba, a spiritual legacy of the illustrious ancestors and a standard-bearer for the golden values of Islam.  </p>
            <p className='font-light text-sm'>
            The schools also take good care of the physical and mental health of the children. Physical exercise and recreational activities are regularly organized so that children stay fit, energetic and motivated.
            </p>
          
        </div>
        <div>
          <img className='sm:800 md:w-500' src={slider3} alt="" />
        </div>

      </div>

      <div className='bg-green-900 h-46 flex flex-col md:flex-row justify-center md:justtify-between lg:max-w-[60%] lg:mr-[20%] lg:ml-[20%] p-29 md:p-33 gap-8 lg:p-44 items-center '>
                <h1 className='text-white text-center text-sm md:text-base lg:text-lg font-bold'>
                    " The believer’s shade on the Day of Resurrection will be his charity.” (Al-Tirmidhi)
                    Be a part of this noble cause with Idara tul Mustafa ".
                </h1>
                <Link to='/contact'>
                <button className='bg-yellow-600 text-green-900 font-bold text-xl px-8 py-3 rounded-md cursor-pointer'>Donate!</button>
                </Link>
            </div>
             



             <div className='flex flex-col justify-center items-center text-green-700 font-bold mt-15 mb-15 text-4xl'>
                <h1>PICTURES GALLERY</h1>
                <div className='flex flex-row gap-9 mt-8'>
                <img className='w-50 ' src={raza} alt="" />
                <img className='w-50 ' src={saqib} alt="" />
                </div>
             </div>
        </div>
    )
}

 export default Service2