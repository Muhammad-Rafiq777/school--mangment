import React from 'react'
import { Link } from 'react-router-dom'
import Blackdiv from '../components/Blackdiv'
import slider4 from '../public/slider4.png'
import raza from '../assets/raza.png'
import saqib from '../assets/saqib.png'

const Service2=()=>{
    return(
        <div>
            <Blackdiv title={'Al-Kulliya-tul-Mustafawiya-lil-Binaat'} />

            <div className='flex flex-col mt-20 md:flex-row gap-4 gap-9 pb-9 pt-9 lg:pt-12 lg;pb-13 ml-10 mr-10 lg:pl-40 lg:pr-40 mb-10 lg:max-w-[70%] lg:mr-[15%] lg:ml-[15%] '>
        <div>
          <h3 className='text-2xl font-bold text-black-800 mb-3'>Al-Kulliya-tul-Mustafawiya-lil-Binaat</h3>
          <p className='font-light text-sm'>Idara-tul-Mustafa International has also established Al-Mustafawiya Girls Colleges for the education, character building and personality development of the Muslim girls.
          </p>
          <p className='font-light text-sm mt-10'>The colleges are offering both Islamic and contemporary education. A variety of programs are being offered including Darse Nizami (Islamic theology), matric, FA, FSc and BS in different university disciplines. The girls do not only study Islamic theology including the Holy Qur’an, Hadith, Seerah and Islamic Jurisprudence etc., but they also obtain modern knowledge of physics, chemistry, biology, psychology, linguistics and management etc.</p>
            <p className='font-light text-sm'>
            The schools also take good care of the physical and mental health of the children. Physical exercise and recreational activities are regularly organized so that children stay fit, energetic and motivated.
            </p>
          
        </div>
        <div>
          <img className='sm:800 md:w-500' src={slider4} alt="" />
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