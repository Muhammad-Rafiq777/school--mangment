import React from 'react'
import { Link } from 'react-router-dom'
import Blackdiv from '../components/Blackdiv'
import raza from '../assets/raza.png'
import Slider from '../components/Slider'
import pic77 from '../assets/77.jpg'
import naat from '../assets/naat.png'
import book from '../assets/book.png'
import shajrah from '../assets/shajrah.png'
import activity from '../assets/activity.png'
import students from '../assets/students.png'
import videolecture from '../assets/videolecture.png'



export default function About() {
 
  return (
    <div>
      <Blackdiv title={'ABOUT US'} />

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



      <div>
        <Slider/>
      </div>


      <div className=' relative  mt-10'>
                <img className=' w-full bg-black/50 h-116 bg-cover bg-center  object-cover  ' src={pic77} alt="" />
                <div className=' absolute flex flex-col justify-center  items-center top-1/8 left-1/8 '>
                    <h1 className='     text-3xl md:text-4xl lg:text-5xl font-bold text-green-900  '>MEDIA CENTER</h1>
                    <p className=' text-white text-sm font-light mt-5 w-3/4 md:w-2/4 lg:w-3/4 text-center '>Browse through the latest Naat Shareef, pick your desired Islamic Book for reading or go through shajrah-e-tayabah, Know whats happening in Idarat ul Mustafa all in media center.</p>
                    <div className='mt-2 md:mt-10 flex flex-wrap lg:flex-row gap-5 md:gap-14 lg:gap-25  justify-center items-center'>
                        <Link to='/media1'>
                        <div className='flex flex-col justify-center cursor-pointer items-center gap-3 mb-5 '>
                            <img className='w-12 md:w-15 lg:w-17 ' src={naat} alt="" />
                            <h1 className='text-xs lg:text-base font-bold text-white'>Naat Shareef</h1>
                        </div></Link>
                        <Link to='/media2'>
                        <div className='flex flex-col justify-center cursor-pointer items-center gap-3 mb-5 '>
                            <img className='w-11 md:w-14 lg:w-16' src={activity} alt="" />
                            <h1 className='text-xs lg:text-base font-bold text-white'>Activites</h1>
                        </div>
                        </Link>
                        <Link to='/media3'>
                        <div className='flex flex-col justify-center cursor-pointer items-center gap-3 mb-5 '>
                            <img className='w-11 md:w-14 lg:w-16 ' src={book} alt="" />
                            <h1 className='text-xs lg:text-base  font-bold text-white'>Islamic-Books</h1>
                        </div>
                        </Link>
                        <Link to='/media4'>
                        <div className='flex flex-col justify-center cursor-pointer items-center gap-3 mb-5 '>
                            <img className='w-9 md:w-12 lg:w-14' src={videolecture} alt="" />
                            <h1 className='text-xs lg:text-base font-bold text-white'>Video Lectures</h1>
                        </div>
                        </Link>

                        

                    </div>
                </div>
            </div>

            <div className='bg-green-900 h-46 flex flex-col md:flex-row justify-center md:justtify-between p-29 md:p-33 gap-8 lg:p-44 items-center '>
                <h1 className='text-white text-center text-sm md:text-base lg:text-lg font-bold'>
                    " The believer’s shade on the Day of Resurrection will be his charity.” (Al-Tirmidhi)
                    Be a part of this noble cause with Idara tul Mustafa ".
                </h1>
                <Link to='/contact'>
                <button className='bg-yellow-600 text-green-900 font-bold text-xl px-8 py-3 rounded-md cursor-pointer'>Donate!</button>
                </Link>
            </div>



            <div className='flex flex-col md:flex-row gap-4 gap-9 pb-9 pt-9 lg:pt-12 lg;pb-13 ml-10 mr-10 lg:pl-40 lg:pr-40 mb-10  '>
        <div>
          <h3 className='text-3xl font-bold text-green-800 mb-3'>Al Mustafa Islamic Center</h3>
          <p className='font-light text-sm'>The basis of Idara tul Mustafa has been laid on the practices of Islam and the faculty makes sure it is abide by as much as possible. The biggest challenge which Idara tul Mustafa faces is creating a balance between the technology and Islamic world, yet they are overcoming that with every passing day and inculcating the spirit of education and Islamic teachings in students.
          We make sure we avoid Sectism and Extremism when we teach.</p>
        </div>
        <div>
          <img className='sm:800 md:w-1000' src={students} alt="" />
        </div>

         </div>


             
    </div>
  )
}

