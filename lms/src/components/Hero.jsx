import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import pic from '../assets/pic.jpg'
import bis from '../assets/bis.png'




const Hero = () => {

  const [amount, setAmount] = useState("")
  const twoPercent = (amount * 0.02).toFixed(2)
  const totalAmount = (parseFloat(amount)) + (parseFloat(twoPercent))


  const handleChange = (e) => {
    setAmount(e.target.value)
  }
  const handleDonate = (e) => {
    e.preventDefult();
   
  }
  return (
    <div>
      <div className='relative w-full'>
        <img className='w-full h-full object-cover  ' src={pic} alt="hero" />
        <div className='absolute top-2 left-3 sm:left-5 top-5 md:left-15 md:top-15  md:max-w-[100%] lg:left-60  w-7/8  mb-1  text-white bg-black/'>
          <img className=' hidden md:block md:w-40 mb-2' src={bis} alt="" />
          <h1 className=' text-1xl md:text-3xl lg:text-4xl font-bold w-3/4 full:w-4/4'>IDARA-TUL-MUTAFA-INTERNTIONAL</h1>
          <p className=' hidden sm:block w-3/4 full:w-4/4 text-sm md:text-base lg:text-lg'>A Great spiritual Movement for the Promotion of Shariah and the Revival of Sunah Hazrat Muhammad Mustafa (PBUH)said:</p>
          <em className=' hidden sm:block w-3/4 full:w-4/4 text-sm md:text-base lg:text-lg '>"Give charity without delay,for it stands in the way of clamity"</em>
          <p className='text-bold text-xl md:text-1xl lg:text-2xl'>Founder:</p>
          <p>PEERZADA MUHAMMAD RAZA SAQIB MUSTAFAI</p>
        </div>
      </div>

      <div className=' bg-green-900 pl-6 pr-6 pt-5 pb-5 mt-10 ml-10 mr-10 md:ml-20 md:mr-20 align-center justify-center   text-white '>

        <h2 className='text-2xl font-bold ml-5 md:ml-5 lg:ml-10  ' >Donation</h2>
        <div action="submit">
          <div className=' flex flex-col md:flex-row flex-wrap md:mt-10 md:mb-10 gap-5 justify-center items-center text-white'>
            <div>
              <label className='block' htmlFor="Donation Amont">Donation Amount</label>
              <input onChange={handleChange} type="number" className='bg-white text-black px-2 py-1 rounded-md pl-2 mt-2' value={amount} placeholder='Enter Amount(PKR)' />
            </div>
            <div>
              <label className='block' htmlFor="Bank Charges">Bank Charges</label>
              <input value={twoPercent} readOnly type="number" className=' bg-white text-black px-2 py-1 rounded-md pl-2 mt-2' placeholder='Bank Charges (PKR)' />
            </div>
            <div>
              <label className='block' htmlFor="Total Amount">Total Amount</label>
              <input value={totalAmount} readOnly type="number" className='bg-white text-black px-2 py-1 rounded-md pl-2 mt-2 ' placeholder='Total Amount(PKR)' />
            </div>
            <Link to='/contact'>
            <button  onClick={handleDonate} className='bg-yellow-500 text-green-700 px-6 mb-2 py-2 rounded-md cursor-pointer  '>Donate!</button>
            </Link>
           
           
          </div>

        </div>



      </div>




      <div className='flex flex-col justify-center items-center '>
               <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-green-700 mt-13 '>IDARA-TUL-MUSTAFA</h1>
               <p className='text-sm  mt-5 w-3/4 md:w-2/4 lg:w-3/4 text-center'>Idara-tul-Mustafa International is the brainchild of Muhammad Raza Saqib Mustafai, 
               who views it as the realization of his dream of educational excellence in all aspects. The founding chairman of Idara-tul-Mustafa International, Muhammad Raza Saqib Mustafai,
                is an esteemed Islamic scholar and international preacher of Islam. Known for his scholarly discourse, poised speech style, and inclination towards peace and harmony, he widely 
                travels all over the world to deliver lectures on the Holy Qur’an, Hadith, Sunnah, Seerah, and Islamic spirituality.
              </p>
      </div>
      <div className=" flex items-center justify-center  p-4">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-8 md:p-12">
          <div className="text-center mb-">
            <h1 className="text-sm md:text-base lg:text-lg font-bold text-emerald-800 mb-6 font-serif">
              "Those who in charity spend of their goods by night and by day, in secret and in public, have their reward with their Lord: on them shall be no fear, nor shall they grieve"
            </h1>
            <div className="border-t-2 border-emerald-200 w-24 mx-auto my-6"></div>
            <h2 className="text-xl text-emerald-700 font-medium">Al Quran (2:274)</h2>
          </div>
          
          <div className="flex justify-center mt-8">
            <div className="w-16 h-1 bg-emerald-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Hero