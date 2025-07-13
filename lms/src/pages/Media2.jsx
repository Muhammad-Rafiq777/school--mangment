import React from 'react'
import Blackdiv from '../components/Blackdiv'
import slider1 from '../public/slider1.png'
import slider2 from '../public/slider2.png'

const Media2 =()=>{
    return(
        <div>
            <Blackdiv title={'ACTIVITES'} />
            <div className='flex flex-col mt-20 md:flex-row gap-4 gap-9 pb-9 pt-9 lg:pt-12 lg;pb-13 ml-10 mr-10 lg:pl-40 lg:pr-40 mb-10 lg:max-w-[70%] lg:mr-[15%] lg:ml-[15%] '>
        <div>
          <h3 className='text-2xl font-bold text-black-800 mb-3'>Al-Mustafa Hifz-ul-Qur’an Madaris</h3>
          <p className='font-light text-sm'>
            At the Hifz-ul-Qur’an Islamic schools, young children memorize the complete Holy Qur’an or learn to read the Holy Qur’an according to classical Arabic phonology.</p>
          <p className='font-light text-sm mt-10'> Not just this, both groups are also taught basic teachings of Islam. Especially trained and remarkably hardworking teachers pay special attention to inculcate in children core Islamic values and build a strong character.

            As a majority...</p>
            <p className='font-light text-sm'>
            The schools also take good care of the physical and mental health of the children. Physical exercise and recreational activities are regularly organized so that children stay fit, energetic and motivated.
            </p>
          
        </div>
        <div>
          <img className='sm:800 md:w-500' src={slider1} alt="" />
        </div>

      </div>



      <div className='flex flex-col mt-20 md:flex-row gap-4 gap-9 pb-9 pt-9 lg:pt-12 lg;pb-13 ml-10 mr-10 lg:pl-40 lg:pr-40 mb-10 lg:max-w-[70%] lg:mr-[15%] lg:ml-[15%] '>
        <div>
          <h3 className='text-2xl font-bold text-black-800 mb-3'>NAZRA QURAN</h3>
          <p className='font-light text-sm'>The course of recitation of the Holy Quran is known as Nazra-e-Quran. Reciting the Holy Quran while looking at the Holy Book is known as nazra. The daily recitation of the Holy Quran will bring us Allah's blessings.
          </p>
          <p className='font-light text-sm mt-10'>At Idara tul Mustafa we have highly educated Islamic professors who will teach you everything you need to know. We will do our utmost to meet your expectations. Our faculty does their work religiously with full determination. They believe that the prestigious duty of providing Quran education should be performed with utmost dedication and commitment.</p>
            <p className='font-light text-sm'>
            The schools also take good care of the physical and mental health of the children. Physical exercise and recreational activities are regularly organized so that children stay fit, energetic and motivated.
            </p>
          
        </div>
        <div>
          <img className='sm:800 md:w-500' src={slider2} alt="" />
        </div>

      </div>
        </div>
    )
}

 export default Media2