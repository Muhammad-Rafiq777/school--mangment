import Logo from '../assets/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faLocationDot, faClock } from '@fortawesome/free-solid-svg-icons';





const Footer = () => {
    return (
        <div>

            <div className="bg-black h-180 lg:h-80 lg:pr-10 lg:pl-10  flex flex-col lg:flex-row">
                <div className='flex flex-col gap-3 w-4/4 md:w-2/4 lg:w-3/8 pt-8 pl-18'>
                    <img src={Logo} className='w-40 h-13' alt="" />
                    <p className='text-white text-sm font-light '>Idara tul Mustafa | The Greatest Islamic Organization in Gujranwala Under the Supervision of Great Islamic Scholar Peerzada Muhammad Raza Saqib Mustafai.</p>
                </div>

                <div className='flex flex-col gap-3  pt-5 pl-18'>
                    <h1 className='text-green-800 text-xl '>Quick Links</h1>
                    <div className='flex flex-col gap-2'>
                        <a href="/" className='text-white text-sm font-light hover:text-green-500'><span class="text-green-500 mr-2">➤</span>Home</a>
                        <a href="/about" className='text-white text-sm font-light hover:text-green-500'><span class="text-green-500 mr-2">➤</span>About</a>
                        <a href="/contact" className='text-white text-sm font-light hover:text-green-500'><span class="text-green-500 mr-2">➤</span>Contact</a>
                        <a href="/media" className='text-white text-sm font-light hover:text-green-500'><span class="text-green-500 mr-2">➤</span>Media</a>
                    </div>

                </div>

                <div className='flex flex-col gap-3  pt-5 pl-18'>
                    <h5 className='text-green-800 text-xl '>Connect With Us</h5>
                    <div className='flex flex-col gap-2'>
                        <a href="https://www.facebook.com/IdaraTulMustafaInternational" target='_blank' className='text-white text-sm font-light hover:text-green-500'> <FontAwesomeIcon icon={faFacebook} className="hover:text-blue-600 mr-1" />Facebook</a>
                        <a href="https://x.com/MRSMofficial" className='text-white text-sm font-light hover:text-green-500' target='_blank'> <FontAwesomeIcon icon={faTwitter} className="hover:text-sky-400 mr-1" />Twitter</a>
                        <a href="https://www.youtube.com/@MRSMofficial" target='_blank' className='text-white text-sm font-light hover:text-green-500'> <FontAwesomeIcon icon={faYoutube} className="hover:text-red-500 mr-1" />Youtube</a>
                        <a href="/" className='text-white text-sm font-light hover:text-green-500'target='_blank'> <FontAwesomeIcon icon={faWhatsapp} className="hover:text-green-500 mr-1" />Whatsapp</a>

                    </div>
                </div>

                <div className='flex flex-col gap-3  pt-5 pl-18 '>
                    <h1 className='text-green-800 text-xl '>Contact Details</h1>
                    <div className='flex flex-col gap-2'>
                        <p className='text-white text-sm font-light hover:text-green-500'><FontAwesomeIcon icon={faPhone} className="hover:text-green-500 mr-2" />+92 300 1234567</p>
                        <p className='text-white text-sm font-light hover:text-green-500 md:pr-4 lg:pr-9'> <FontAwesomeIcon icon={faLocationDot} className="hover:text-green-500 mr-2" /> Markaz-e-Mustafa, opposite Education Board Office, Gujranwala, Pakistan</p>
                        <p className='text-white text-sm font-light hover:text-green-500'> <FontAwesomeIcon icon={faClock} className="hover:text-green-500 mr-2" />(8:00AM TO 12:00PM)</p>

                    </div>
                </div>

            </div>



            <hr className='bg-gray-700  h-1' />
            <div className='flex flex-col md:flex-row gap-1 bg-black justify-start pl-30  pt-1 pb-1 '>
                <div className='text-white'>
                    <p className='text-sm text-light'>Copyright © 2025 <a className='text-green-600 text-sm text-light ' href="/">Idara Tul Mustafa</a>, Powered By <a className='text-green-600 md:pr-8' href="">Madni Software</a> </p>
                </div>
                  <div className='flex flex-row justify-start items-start gap-5'>
                    <a className='text-sm text-light text-white md:pr-8'  href="">Privacy Policy</a>                     
                    <a className='text-white text-sm text-light ' href="">Terms & Conditions</a>  
                    </div>                   
             </div>
        </div>
    )
}

export default Footer;