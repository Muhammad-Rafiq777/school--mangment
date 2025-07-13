

import React from 'react'
import Blackdiv from '../components/Blackdiv'
import student from '../assets/students.png'
import slider1 from '../public/slider1.png'
import slider2 from '../public/slider2.png'
import slider3 from '../public/slider3.png'
import slider4 from '../public/slider4.png'
import slider5 from '../public/slider5.png'
import { Link } from 'react-router-dom'

export default function Services() {
  return (
    <div>
      <Blackdiv title={'SERVICES'} />

      <div className='flex flex-col justify-center items-center '>
        <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-green-700 mt-4 '>Al Mustafa Islamic Center</h1>
        <p className='text-sm  mt-5 w-2/4 md:w-3/8 lg:w-2/4 font-light text-center'>Idara-tul-Mustafa is one of the top rated place listed in the field of education and religious organizations in Gujranwala. Idara tul Mustafa is a great Islamic Organization under the supervision of Great Islamic Scholar Peerzada Muhammad Raza Saqib Mustafai.
        </p>
        <p className='text-sm  mt-5 w-2/4 md:w-3/8 lg:w-2/4 font-light text-center mt-6'>    Mentioned below are the featured services of our Islamic Center. We ensure integrity and transparency is held in highest regard.   </p>
      </div>



      <div className='flex flex-col mt-20 md:flex-row gap-4 gap-9 pb-9 pt-9 lg:pt-12 lg;pb-13 ml-10 mr-10 lg:pl-40 lg:pr-40 mb-10 lg:max-w-[70%] lg:mr-[15%] lg:ml-[15%] '>
        <div>
          <h3 className='text-2xl font-bold text-black-800 mb-3'>Al-Mustafa Hifz-ul-Qur’an Madaris</h3>
          <p className='font-light text-sm'>
            At the Hifz-ul-Qur’an Islamic schools, young children memorize the complete Holy Qur’an or learn to read the Holy Qur’an according to classical Arabic phonology.</p>
          <p className='font-light text-sm mt-10'> Not just this, both groups are also taught basic teachings of Islam. Especially trained and remarkably hardworking teachers pay special attention to inculcate in children core Islamic values and build a strong character.

            As a majority...</p>
          <Link to="/service1"> <button className='bg-green-700 text-white px-4 py-2 rounded-md cursor-pointer mt-7 hover:bg-green-800 transition-all duration-300 ease-in-out'> Read More</button></Link>
        </div>
        <div>
          <img className='sm:800 md:w-500' src={slider1} alt="" />
        </div>

      </div>



      <div className='flex flex-col mt-20 md:flex-row gap-4 gap-9 pb-9 pt-9 lg:pt-12 lg;pb-13 ml-10 mr-10 lg:pl-40 lg:pr-40 mb-10 lg:max-w-[70%] lg:mr-[15%] lg:ml-[15%] '>
        <div>
          <img className='sm:800 md:w-500' src={slider2} alt="" />
        </div>
        <div>
          <h3 className='text-2xl font-bold text-black-800 mb-3'>Nazra Quran</h3>
          <p className='font-light text-sm'>
          The course of recitation of the Holy Quran is known as Nazra-e-Quran. Reciting the Holy Quran while looking at the Holy Book is known as nazra. The daily recitation of the Holy Quran will bring us Allah's blessings.</p>
          <p className='font-light text-sm mt-10'>

          At Idara tul Mustafa we have highly educated Islamic professors who will teach you everything you need to know. We will...</p>
          <Link to="/service2"> <button className='bg-green-700 text-white px-4 py-2 rounded-md cursor-pointer mt-7 hover:bg-green-800 transition-all duration-300 ease-in-out'> Read More</button></Link>
        </div>
      </div>


      <div className='flex flex-col mt-20 md:flex-row gap-4 gap-9 pb-9 pt-9 lg:pt-12 lg;pb-13 ml-10 mr-10 lg:pl-40 lg:pr-40 mb-10 lg:max-w-[70%] lg:mr-[15%] lg:ml-[15%] '>
        <div>
          <h3 className='text-2xl font-bold text-black-800 mb-3'>Jamia-tul-Mustafa</h3>
          <p className='font-light text-sm'>
          Jamia-tul-Mustafa is an Islamic institute that is offering Islamic and contemporary education to the boys in Gujranwala, Pakistan. It is an educational project of the Idara-tul-Mustafa International, and the brainchild of Allama Muhammad Raza Saqib Mustafai, who views it as the realization of his dream of educational excellence in all aspects. The institute has illuminated the lives of millions of...</p>

          <Link to="/service3"> <button className='bg-green-700 text-white px-4 py-2 rounded-md cursor-pointer mt-7 hover:bg-green-800 transition-all duration-300 ease-in-out'> Read More</button></Link>
        </div>
        <div>
          <img className='sm:800 md:w-500' src={slider3} alt="" />
        </div>

      </div>
      

      <div className='flex flex-col mt-20 md:flex-row gap-4 gap-9 pb-9 pt-9 lg:pt-12 lg;pb-13 ml-10 mr-10 lg:pl-40 lg:pr-40 mb-10 lg:max-w-[70%] lg:mr-[15%] lg:ml-[15%]  '>
        <div>
          <h3 className='text-2xl font-bold text-black-800 mb-3'>Al-Kulliya-tul-Mustafawiya-lil-Binaat</h3>
          <p className='font-light text-sm'>
          Idara-tul-Mustafa International has also established Al-Mustafawiya Girls Colleges for the education, character building and personality development of the Muslim girls.</p>
          <p className='font-light text-sm mt-10'> The colleges are offering both Islamic and contemporary education. A variety of programs are being offered including Darse Nizami (Islamic theology), matric, FA, FSc and BS in different university disciplines. The girls do not only study Islamic theology including the...

            As a majority...</p>
          <Link to="/service4"> <button className='bg-green-700 text-white px-4 py-2 rounded-md cursor-pointer mt-7 hover:bg-green-800 transition-all duration-300 ease-in-out'> Read More</button></Link>
        </div>
        <div>
          <img className='sm:800 md:w-500' src={slider4} alt="" />
        </div>

      </div>


      <div className='flex flex-col mt-20 md:flex-row gap-4 gap-9 pb-9 pt-9 lg:pt-12 lg:pb-13 ml-10 mr-10 lg:pl-40 lg:pr-40 mb-10  lg:max-w-[70%] lg:mr-[15%] lg:ml-[15%] '>
        <div>
          <img className='sm:800 md:w-500' src={slider5} alt="" />
        </div>
        <div>
          <h3 className='text-2xl font-bold text-black-800 mb-3'>Al-Mustafa Welfare Trust</h3>
          <p className='font-light text-sm'>
          Idara-tul-Mustafa International is also offering welfare services to the needy and afflicted people. The trust has not only accomplished extraordinary welfare work in all affected areas of Pakistan, but has also reached the afflicted Muslim brothers and sisters in Syria, Turkey, Palestine and Myanmar.</p>
          <p className='font-light text-sm mt-10'>To put it in the nutshell, Idara-tul-Mustafa International has tried its best to address all needs...

            As a majority...</p>
          <Link to="/service5"> <button className='bg-green-700 text-white px-4 py-2 rounded-md cursor-pointer mt-7 hover:bg-green-800 transition-all duration-300 ease-in-out'> Read More</button></Link>
        </div>
      </div>


    







    </div>
  )
}