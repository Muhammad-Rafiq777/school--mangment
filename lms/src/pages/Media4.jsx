import React from 'react'
import Blackdiv from '../components/Blackdiv'
import video1 from '../assets/video1.jpeg'
import video2 from '../assets/video2.jpeg'
import video3 from '../assets/video3.jpeg'
import video4 from '../assets/video4.jpeg'
import video5 from '../assets/video5.jpeg'
import video6 from '../assets/video6.jpeg'


const Media4 =()=>{
    return(
        <div>

<Blackdiv title={'VIDEO LECTURES'} />

<div className='flex flex-col justify-center mt-16 mb-10'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold flex justify-center items-center text-green-900 mt-10 mb-10'>VIDEO LECTURES</h1>
                <div className='ml-15 mr-15 md:ml-20 lg:max-w-[60%] lg:mr-[20%] lg:ml-[20%] md:mr-20 lg:ml-25 lg:mr-25 grid grid-cols-1 md:grid-cols-2 place-items-center h-sceen      lg:grid-cols-3   lg:grid-rows-2 gap-9'>
                <div className='flex flex-col justify-center items-center gap-2'>
                        <a href="https://www.youtube.com/watch?v=Y-eTR0U8PFo&t=4s" target='_blank'>

                            <img src={video1} alt="" />

                        </a>
                        <h3 className=' text-sm '>Zakhmi ka Jazba-e-esaar | New Clip 2022</h3>
                    </div>

                    <div className='flex flex-col justify-center items-center gap-2 '       >
                        <a href="https://www.youtube.com/watch?v=NnZMBHhRX5A" target='_blank'> 
                            <img src={video2} alt="" />
                        </a>
                        <h3 className=' text-sm '>Dukhon k liye Tyar rahain | دُکھوں کے لئے تیار رہیں</h3>
                    </div>

                    <div className='flex flex-col justify-center items-center gap-2'      >
                        <a href="https://www.youtube.com/watch?v=iQ1i8N-AExQ" target='_blank'>  
                            <img src={video3} alt="" />
                        </a>
                        <h3 className=' text-sm '>3 Cheezain Gunah mita deti hain</h3>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2'        >
                        <a href="https://www.youtube.com/watch?v=c2lQWrEVayw" target='_blank'>    
                            <img src={video4} alt="" />
                        </a>
                        <h3 className=' text-sm '>Dua ka Anokha andaaz</h3>
                    </div>


                    <div className='flex flex-col justify-center items-center gap-2'        >
                        <a href="https://www.youtube.com/watch?v=h92R9wAhBKM" target='_blank'>   
                            <img src={video5} alt="" />
                        </a>
                        <h3 className=' text-sm '>Khatoon ka Bazurg Alim-e-Deen se Mani-khaiz Mukalma !</h3>
                    </div>

                    <div className='flex flex-col justify-center items-center gap-2  '        >
                        <a href="https://www.youtube.com/watch?v=B4u5NIs3D4M" target='_blank'>   
                            <img src={video6} alt="" />   
                        </a>
                        <h3 className=' text-sm '>Nijaat Dene Wali 3 Cheezain</h3>
                    </div>

                </div>


            </div>
        </div>
    )
}

 export default Media4