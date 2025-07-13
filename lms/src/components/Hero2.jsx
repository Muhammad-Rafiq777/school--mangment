import React, { act } from 'react'
import { Link } from 'react-router-dom'
import saqib from '../assets/saqib.png'
import pic1 from '../assets/1pic.png'
import pic2 from '../assets/2pic.png'
import pic3 from '../assets/3pic.png'
import pic77 from '../assets/77.jpg'
import naat from '../assets/naat.png'
import book from '../assets/book.png'
import shajrah from '../assets/shajrah.png'
import activity from '../assets/activity.png'
import video1 from '../assets/video1.jpeg'
import video2 from '../assets/video2.jpeg'
import video3 from '../assets/video3.jpeg'
import video4 from '../assets/video4.jpeg'
import video5 from '../assets/video5.jpeg'
import video6 from '../assets/video6.jpeg'
import donate_pic from '../assets/donate_pic.jpeg'
import videolecture from '../assets/videolecture.png'

const Hero2 = () => {
    return (
        <div>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold flex justify-center items-center text-green-900 mt-13 mb-10'>PRESS RELEASE</h1>
            <div className='flex flex-col md:flex-row gap-5'>
                <div className='flex flex-col justify-center pl-10 pr-10 shadow-2xl gap-3 w-4/4 md:w-1/2'>
                    <img src={saqib} alt="" />

                    <h1 className='text-1xl font-bold'>Muhammad Raza Saqib Mustafai Biography</h1>
                    <p className='text-sm font-light'>An esteemed Islamic scholar from Pakistan, Pirzada Muhammad Raza Saqib Mustafai, is an international preacher of Islam. He widely travel...</p>
                    <Link to='/about'> <button className='bg-green-700 text-white px-4 py-2 rounded-md cursor-pointer mb-3'>Read More</button></Link>
                    <hr className='w-full pl-10 pr-10 h-1 bg-green-700' />
                </div>


                <div className='flex flex-col justify-start items-start mt-3 pl-10 pr-10 md:pl-4 md:pr-4 shadow-2xl gap-3 w-4/4 md:w-1/2'>
                    <div className='flex flex-col md:flex-row gap-3'>
                        <div>
                            <h1 className='text-1xl font-bold mb-2'>Milad Celebrations In Markaz-E-Mustafa International Gujranwala 2021</h1>
                            <p className='text-sm font-light mb-2 '>Eid Milad Un Nabi was observed on October 19th 2021 this year. In lieu of this prestigious event Idara tul Mustafa celebrated Eid Milad...</p>
                            <Link to='/about'> <button className='bg-green-700 text-white px-4 py-2 rounded-md cursor-pointer'> Read More</button></Link>
                        </div>
                        <img className='w-38 h-38' src={pic1} alt="" />


                    </div>
                    <hr className='w-full h-1 bg-green-700' />
                    <div className='flex flex-col md:flex-row gap-3'>
                        <div>
                            <h1 className='text-1xl font-bold mb-2'>Idara tul Mustafa | A Great Islamic Organization</h1>
                            <p className='text-sm font-light mb-2'>The magnificent and attractive building of the central office of Idara-tul-Mustafa International is a masterpiece of Islamic architectur...</p>
                            <Link to='/about'> <button className='bg-green-700 text-white px-4 py-2 rounded-md cursor-pointer'> Read More</button></Link>
                        </div>
                        <img className='w-38 h-38' src={pic2} alt="" />


                    </div>
                    <hr className='w-full h-1 bg-green-700' />
                    <div className='flex flex-col md:flex-row gap-3'>
                        <div>
                            <h1 className='text-1xl font-bold mb-2'>Markaz-e-Mustafa A Short Documentary 2022</h1>
                            <p className='text-sm font-light mb-2'>Markaz-e-Mustafa A Short Documentary 2022 .
                                A brief glimpse of Markaz-e-Mustafa and the work that is being done under the guidance...</p>
                            <Link to='/about'> <button className='bg-green-700 text-white px-4 py-2 rounded-md cursor-pointer'> Read More</button></Link>
                        </div>
                        <img className='w-38 h-38' src={pic3} alt="" />


                    </div>
                    <hr className='w-full h-1 bg-green-700' />



                </div>

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
                            </div>
                        </Link>


                        <Link to='/media2'>
                            <div className='flex flex-col justify-center cursor-pointer items-center gap-3 mb-5 '>
                                <img className='w-11 md:w-14 lg:w-16' src={activity} alt="" />
                                <h1 className='text-xs lg:text-base font-bold text-white'>Activites</h1>
                            </div></Link>

                        <Link to='/media3'>
                            <div className='flex flex-col justify-center cursor-pointer items-center gap-3 mb-5 '>
                                <img className='w-11 md:w-14 lg:w-16 ' src={book} alt="" />
                                <h1 className='text-xs lg:text-base  font-bold text-white'>Islamic-Books</h1>
                            </div></Link>

                        <Link to='/media4'>
                            <div className='flex flex-col justify-center cursor-pointer items-center gap-3 mb-5 '>
                                <img className='w-9 md:w-12 lg:w-14' src={videolecture} alt="" />
                                <h1 className='text-xs lg:text-base font-bold text-white'>Video lecture</h1>
                            </div></Link>



                    </div>
                </div>
            </div>

            <div className='bg-green-900 h-46 flex flex-col md:flex-row justify-center md:justtify-between p-29 md:p-33 gap-8 lg:p-44 items-center '>
                <h1 className='lg:max-w-[60%] lg:ml-[20%] lg:mr-[20%] text-white text-center text-sm md:text-base lg:text-lg font-bold'>
                    " The believer’s shade on the Day of Resurrection will be his charity.” (Al-Tirmidhi)
                    Be a part of this noble cause with Idara tul Mustafa ".
                </h1>
                <Link to='/contact'>  <button className='bg-yellow-600 text-green-900 font-bold text-xl px-8 py-3 rounded-md cursor-pointer'>Donate!</button></Link>
            </div>


            <div className='flex flex-col justify-center mt-16 mb-10'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold flex justify-center items-center text-green-900 mt-10 mb-10'>VIDEO LECTURES</h1>
                <div className='ml-15 mr-15 md:ml-20 lg:max-w-[60%] lg:mr-[20%] lg:ml-[20%] md:mr-20 lg:ml-25 lg:mr-25 grid grid-cols-1 md:grid-cols-2 place-items-center h-sceen      lg:grid-cols-3   lg:grid-rows-2 gap-9'>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <a href="https://www.youtube.com/watch?v=Y-eTR0U8PFo&t=4s" target='_blank'>

                            <img src={video1} alt="" />

                        </a>
                        <h3 className=' text-sm '>Zakhmi ka Jazba-e-esaar | New Clip 2022</h3>
                    </div>

                    <div className='flex flex-col justify-center items-center gap-2 ' target='_blank'>
                        <a href="https://www.youtube.com/watch?v=NnZMBHhRX5A">
                            <img src={video2} alt="" />
                        </a>
                        <h3 className=' text-sm '>Dukhon k liye Tyar rahain | دُکھوں کے لئے تیار رہیں</h3>
                    </div>

                    <div className='flex flex-col justify-center items-center gap-2' target='_blank'>
                        <a href="https://www.youtube.com/watch?v=iQ1i8N-AExQ">
                            <img src={video3} alt="" />
                        </a>
                        <h3 className=' text-sm '>3 Cheezain Gunah mita deti hain</h3>
                    </div>

                    <div className='flex flex-col justify-center items-center gap-2' target='_blank'>
                        <a href="https://www.youtube.com/watch?v=c2lQWrEVayw">
                            <img src={video4} alt="" />
                        </a>
                        <h3 className=' text-sm '>Dua ka Anokha andaaz</h3>
                    </div>


                    <div className='flex flex-col justify-center items-center gap-2' target='_blank'>
                        <a href="https://www.youtube.com/watch?v=h92R9wAhBKM">
                            <img src={video5} alt="" />
                        </a>
                        <h3 className=' text-sm '>Khatoon ka Bazurg Alim-e-Deen se Mani-khaiz Mukalma !</h3>
                    </div>

                    <div className='flex flex-col justify-center items-center gap-2  ' target='_blank'>
                        <a href="https://www.youtube.com/watch?v=B4u5NIs3D4M">
                            <img src={video6} alt="" />
                        </a>
                        <h3 className=' text-sm '>Nijaat Dene Wali 3 Cheezain</h3>
                    </div>

                </div>


            </div>
            <div className='flex justify-center items-center '>
                <Link to='/media4'>
                    <button className='flex items-center  align-center bg-yellow-600 text-green-900 font-bold text-sm md:text-base lg:text-lg px-3 py-2 md:px-5 md:py-3  lg:px-8 lg:py-4 rounded-md cursor-pointer '>More Videos</button>
                    </Link>
            </div>

            <div className='bg-green-900 h-95 md:h-105 lg:h-106mt-15 md:mt-18 lg:mt-20 '>
                <div className='flex flex-col justify-center items-center '>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl mt-10 mb-10 font-bold text-white'>LATEST UPDATES</h1>
                    <img className='pl-10 pr-10 md:pl-30 md:pr-30 lg:w-230' src={donate_pic} alt="" />
                </div>

            </div>

        </div>
    )
}

export default Hero2