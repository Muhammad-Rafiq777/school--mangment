import React from 'react'
import { useState } from 'react'
import Logo from '../assets/Logo.png'
import { NavLink, Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import naat from '../assets/naat.png'
import book from '../assets/book.png'
import activity from '../assets/activity.png'
import videolecture from '../assets/videolecture.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isMediaOpen, setIsMediaOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(false)
    }
    return (
        <div className='sticky top-0 bg-white left-0 right-0 z-50'>
        <div className='  sm:flex justify-between items-center md:max-w-[90%] md:ml-[5%] md:mr-[5%] p-4 '>
            <div className='flex items-center mb-4  gap-2'>
                <Link to="/">
                <img  src={Logo} alt="logo" className='w-35 h-15' />
                </Link>
            </div>
            <div className=' hidden  sm:flex items-center  gap-2 md:gap-4'>
                <div className='hover:text-green-500'>
                    <NavLink to="/">
                        <p>Home</p><hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                    </NavLink>
                </div>
                <div className='hover:text-green-500'>
                    <NavLink to="/about"><p>About</p><hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" /></NavLink>
                </div>
                <div className='hover:text-green-500'>
                    <NavLink to="/contact"><p>Contact</p><hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" /></NavLink>
                </div>
                <div className='hover:text-green-500'>
                    <ul><li className="relative"
          onMouseEnter={() => setIsMediaOpen(true)}
          onMouseLeave={() => setIsMediaOpen(false)}>
                    <NavLink to="/media"><p>Media</p><hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" /></NavLink>
                    {isMediaOpen && (
                    <div className="absolute bg-white pt-2 min-w-[160px] px-1 shadow-lg z-10">
                         <span> <a href="/media1" className="block text-black py-2 px-4 font-light text-sm border-b border-gray-250 hover:text-white hover:bg-black transition-all duration-300 ease-in-out">
                      
                        <img src={naat} alt="" />
                NAAT SHAREEF 
              </a></span>
             
              <a href="/media2" className="block text-black py-2 px-4 font-light text-sm border-b border-gray-250 hover:text-white hover:bg-black transition-all duration-300 ease-in-out">
              <img src={activity} alt="" />
              ACTIVITY
              </a>
              <a href="/media3" className="block text-black py-2 px-4 font-light text-sm border-b border-gray-250 hover:text-white hover:bg-black transition-all duration-300 ease-in-out">
              <img src={book} alt="" />
              BOOKS
              </a>
              <a href="/media4" className="block text-black py-2 px-4 font-light text-sm border-b border-gray-250 hover:text-white hover:bg-black transition-all duration-300 ease-in-out">
              <img src={videolecture} alt="" />
              VIDEO LECTURES
              </a>
                    </div>
                    )}
                    </li></ul>
                </div>
                <div className='hover:text-green-500'>
                    <ul><li className="relative"
          onMouseEnter={() => setIsServicesOpen(true)}
          onMouseLeave={() => setIsServicesOpen(false)}>
                    <NavLink to="/services"><p>Services</p><hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" /></NavLink>
                    {isServicesOpen && (
            <div className="absolute bg-white  min-w-[160px] px-2 shadow-lg z-10">
              <a href="/service1" className="block text-black py-2 px-4  border-b border-gray-250 hover:text-white font-light text-sm hover:bg-black transition-all duration-300 ease-in-out">
              Al-Mustafa Hifz-ul-Qur’an Madaris
              </a>
             
              <a href="/service2" className="block text-black py-2 px-4  border-b border-gray-250 hover:text-white font-light text-sm hover:bg-black transition-all duration-300 ease-in-out">
              Nazra Quran
              </a>
              <a href="/service3" className="block text-black py-2 px-4  border-b border-gray-250 hover:text-white font-light text-sm hover:bg-black transition-all duration-300 ease-in-out">
              Jamia-tul-Mustafa
              </a>
              <a href="/service4" className="block text-black py-2 px-4  border-b border-gray-250 hover:text-white font-light text-sm hover:bg-black transition-all duration-300 ease-in-out">
              Al-Kulliya-tul-Mustafawiya-lil-Binaat
              </a>
              <a href="/service5" className="block text-black py-2 px-4   hover:text-white font-light text-sm hover:bg-black transition-all duration-300 ease-in-out">
              Al-Mustafa Welfare Trust
              </a>
            </div>
          )}
                    </li>
                    </ul>
                   
                </div>
            </div>
            <div onClick={()=>setIsOpen(true)}  className='sm:hidden text-xl'> 
                <FaBars /> 
        </div>
           
            <div className='hidden sm:flex items-center gap-4'>
                <Link to='/contact'>
                <button className='cursor-pointer px-4 rounded-full bg-green-700 transition-all duration-300 ease-in-out h-10 bg-blue-500 text-white rounded-md'>Donate Us</button>
                </Link>
            </div>
           
        </div>


        <div className={ `absolute top-0 left-0 bottom-0 right-0 overflow-hidden bg-white transition-all duration-300 ease-in-out ${isOpen ? 'w-100%' : 'w-0'}`}>
            <div className='flex flex-col items-start  w-full'>
                <p onClick={handleClick} className='text-2xl font-bold mb-5'>back</p>

                <NavLink 
                className='hover:text-green-500'
                onClick={handleClick}
                 to="/">
                    <p>Home</p>
                </NavLink>
                <hr className="w-full border-none h-[1.5px] bg-gray-700 hidden" />

                <NavLink onClick={handleClick}
                className='hover:text-green-500'
                to="/about">
                    <p>About</p>
                </NavLink>
                <hr className="w-full border-none h-[1.5px] bg-gray-700 hidden" />

                <NavLink onClick={handleClick}
                className='hover:text-green-500'
                to="/contact">
                    <p>Contact</p>
                </NavLink>
                <hr className="w-full border-none h-[1.5px] bg-gray-700 hidden" />

                <NavLink onClick={handleClick}
                className='hover:text-green-500'
                to="/media">
                    <p>Media</p>
                </NavLink>
                <hr className="w-full border-none h-[1.5px] bg-gray-700 hidden" />

                <NavLink  onClick={handleClick}
                className='hover:text-green-500'
                to="/services">
                    <p>Services</p>
                </NavLink>
                <hr className="w-full border-none h-[1.5px] bg-gray-700 hidden" />
                
                

               
             </div>
        
        </div>
        </div>
    
)}

export default Navbar