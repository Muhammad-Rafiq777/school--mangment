import React from 'react'
import raza from '../assets/raza.png'
import Blackdiv from '../components/Blackdiv'
import {Link} from 'react-router-dom'
import naat from '../assets/naat.png'
import book from '../assets/book.png'
import shajrah from '../assets/shajrah.png'
import activity from '../assets/activity.png'
import videolecture from '../assets/videolecture.png'


export default function Media() {
  return (
    <div>
 <Blackdiv title={'M E D I A'} />
<div className='flex flex-col md:flex-row gap-4 gap-9 pb-5 pt-5 ml-10 mr-10 lg:pl-40 lg:pr-40 mb-10  '>
        <div>
          <h1 className='text-xl  mb-3'>Message From</h1>
          <h3 className='text-4xl font-bold text-green-800 mb-3'>MUHAMMAD RAZA SAQIB MUSTAFAI</h3>
          <p className='font-light text-sm'>Muhammad Raza Saqib Mustafai is considered to be one of the leading renowned scholar, spiritual leader and possesses a balanced personality. Because of his composed delivery and influential style Muhammad Raza Saqib enjoys a unique position in the community.

            He has travelled all over Pakistan and various countries to deliver the message of Islam. He has used Social media to influence millions of people around the world with his message. Your guidance has always proven to be a unique assets for the Muslims of today. You have a deep sense of determination for inspiring the Muslim ummah to follow the right path.

            It is your biggest desire to inculcate the love of Prophet (P.B.U.H) and teachings of Quran within the Muslims of today. You are striving hard every day for bringing this into the reality.</p>
        </div>
        <div>
          <img className='sm:800 md:w-900' src={raza} alt="" />
        </div>

      </div>


      <div className='mt-10 md:mt-15 mb-20 bg-gray-200 lg:max-w-[60%] lg:ml-[20%] lg:mr-[20%] flex flex-wrap lg:flex-row gap-5 md:gap-14 lg:gap-25  justify-center items-center'>
                       <Link to='/media1'> <div className='flex flex-col justify-center cursor-pointer items-center gap-3 mb-5 '>
                            <img className='w-12 md:w-15 lg:w-17 ' src={naat} alt="" />
                            <h1 className='text-xs lg:text-base font-bold text-black'>Naat Shareef</h1>
                        </div>
                        </Link>


                        <Link to='/media2'>
                        <div className='flex flex-col justify-center cursor-pointer items-center gap-3 mb-5 '>
                            <img className='w-11 md:w-14 lg:w-16' src={activity} alt="" />
                            <h1 className='text-xs lg:text-base font-bold text-black'>Activites</h1>
                        </div></Link>

                         <Link to='/media3'>       
                        <div className='flex flex-col justify-center cursor-pointer items-center gap-3 mb-5 '>
                            <img className='w-11 md:w-14 lg:w-16 ' src={book} alt="" />
                            <h1 className='text-xs lg:text-base  font-bold text-black'>Islamic-Books</h1>
                        </div></Link>

                        <Link to='/media4'>
                        <div className='flex flex-col justify-center cursor-pointer items-center gap-3 mb-5 '>
                            <img className='w-9 md:w-12 lg:w-14' src={videolecture} alt="" />
                            <h1 className='text-xs lg:text-base font-bold text-black'>Video lecture</h1>
                        </div></Link>

                        

                    </div>

    </div>
  )
}
