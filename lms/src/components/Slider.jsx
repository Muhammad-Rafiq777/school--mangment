import React from 'react'
import { useState, useEffect } from 'react';
import slider1 from '../public/slider1.png'
import slider2 from '../public/slider2.png'
import slider3 from '../public/slider3.png'
import slider4 from '../public/slider4.png'
import slider5 from '../public/slider5.png'

export default function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [slider1, slider2, slider3, slider4, slider5]



    // Auto slide on small screens
    useEffect(() => {
      const isMobile = window.innerWidth < 768; // Tailwind's md breakpoint
      if (isMobile) {
        const interval = setInterval(() => {
          goToNext();
        }, 3000);
        return () => clearInterval(interval); // Cleanup on unmount
      }
    }, [currentIndex]);
  
    const goToNext = () => {
      setCurrentIndex((prev) => 
        prev === images.length - 1 ? 0 : prev + 1
      );
    };
  
    const goToPrev = () => {
      setCurrentIndex((prev) => 
        prev === 0 ? images.length - 1 : prev - 1
      );
    };
  
    return (
      <div className="relative max-w-2xl mx-auto overflow-hidden rounded-lg">
        {/* Slides */}
        <div className="flex transition-transform duration-300">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-64 object-cover"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            />
          ))}
        </div>
  
        {/* Navigation buttons - show on larger screens */}
        <button
          onClick={goToPrev}
          className="hidden md:block absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white bg-gray-600 text-2xl font-bold p-2 rounded-full"
        >
          &larr;
        </button>
        <button
          onClick={goToNext}
          className="hidden md:block absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white bg-gray-600 text-2xl font-bold p-2 rounded-full"
        >
          &rarr;
        </button>
  
        {/* Dots indicator */}
        <div className="flex justify-center mt-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 mx-1 rounded-full ${currentIndex === index ? 'bg-black' : 'bg-gray-400'}`}
            />
          ))}
        </div>
      </div>
    );
  };