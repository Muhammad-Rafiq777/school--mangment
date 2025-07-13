import React, { useContext, useState } from 'react'
import Blackdiv from '../components/Blackdiv'
import idara from '../assets/idara.jpg'
import axios from 'axios'
import {toast} from 'react-toastify'
import { FormContext } from '../context/FormContext'

 function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number:'',
    gender:'male',
    message: ''
  })
  const {backendUrl} =useContext(FormContext)
  
console.log(formData)
console.log(backendUrl)


  const onChangeHandler = (e) => {
    const name = e.target.name
    const value = e.target.value
    setFormData({...formData, [name]:value})
   }
   const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the formData object directly, not wrapped in another object
      const response = await axios.post(`${backendUrl}/api/form`, formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
   
      
      if (response.data.success) {
        toast.success(response.data.message || 'Form submitted successfully!');
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          number: '',
          gender: 'male',
          message: ''
        });
      } else {
        toast.error(response.data.message || 'Submission failed');
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast.error(error.response?.data?.message || error.message || 'Something went wrong');
    }
  };
  return (
    <div>
      
      <Blackdiv title={'CONTACT US'} />
      
      <div className='flex flex-col md:flex-row gap-4 gap-9 pb-5 pt-5 ml-10 mr-10 lg:pl-40 lg:pr-40 mb-10 w-7/8 '>
      <form onSubmit={handleSubmit}>
      <h1 className='flex flex-row mb-8 text-center text-2xl font-bold text-black-900'>GET IN TOUCH</h1>
        
      <div className='flex flex-col md:flex-row gap-4 w-full '>
            <input className='border border-gray-300 w-full rounded py-1.5 px-3' required onChange={onChangeHandler} value={formData.name} name='name' label='Name' type="text" placeholder='Name' />
            <input className='border border-gray-300 w-full rounded py-1.5 px-3' required onChange={onChangeHandler} value={formData.email} name='email' type="email" placeholder='Email' />
       </div>

       <div className='flex flex-col md:flex-row gap-4 w-full mt-4 md:max-w-[480px]'>
            <input className='border border-gray-300 w-full rounded py-1.5 px-3' required onChange={onChangeHandler} value={formData.number} name='number'  type="text" placeholder='Contact Number' />
            {/* <div className='border border-gray-300 w-full rounded py-1.5 px-3 dropdown-menu group-hover:block hidden pt-4'>
              <div className="flex flex-col gap-2 w-36 px-5 py-3 bg-slate-100 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black">Male</p>
                <p className="cursor-pointer hover:text-black">Female</p>
              </div>
              </div>  */}
              <select required onChange={onChangeHandler} /*name="gender" id="gender"*/ value={formData.gender} className='border border-gray-300 w-full rounded py-1.5 px-3'  placeholder='select Gender'>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>

       </div>
       <div className='flex flex-col gap-4 w-full mt-4 md:max-w-[480px]'>
       <textarea row='7' className='border border-gray-300 w-full rounded py-1.5 px-3' required onChange={onChangeHandler} value={formData.message} name='message' label='message' type="text"  placeholder='Message' ></textarea>
       </div>
        <button type='submit' className='bg-green-900 text-white px-8 py-2 rounded-md cursor-pointer mt-7'>Submit</button>
      </form>

      
      
      <div className='flex flex-col shadow  border-gray-300   mb-10 '>
      <h1 className='flex flex-row mb-8 text-center text-2xl font-bold text-black-900'>CONTACT US</h1>
        
        <img className='w-70' src={idara} alt="" />
         <ul className='px-3 py-1.5 text-gray-700 '> 
         <li><span className="font-size:1.2em;">🕒</span> (8:00AM TO 12:00PM)</li>
         <hr className='border-gray-300 my-2' />
         <li> <span className="font-size:1.2em  ">☎</span> 03218180319</li>
         <hr className='border-gray-300 my-2' />
         <li> <span className="font-size:1.2em;">🏠</span>  Markaz-e-Mustafa, opposite Education Board Office, Gujranwala, Pakistan</li>
         <hr className='border-gray-300 my-2' />
         </ul>
      </div>
      </div>
    </div>
  )
}
export default Contact;

