// components/MySwiperComponent.jsx
"use client"; // Important for Next.js App Router

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'; // If you need navigation arrows
import 'swiper/css/pagination'; // If you need pagination dots

// Import Swiper modules (if you need them)
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image'; // Import Next.js Image component for optimized images

const MySwiperComponent = () => {
 
 const myStyle = {
  margin: '5% 0%'
  };


  return (
<>
<div className='swiper-container'>
<h2 className='text-amber-500!'>swiper carousel next heading</h2>
 
  {/* This div is optional, you can use it for additional styling or structure */}
    <Swiper className='my-swiperfd' style={myStyle}// Add a class for custom styling
      // Optional parameters
      spaceBetween={50}
      slidesPerView={2}
      loop={true} // Enable looping of slides
      navigation // Enable navigation arrows
      pagination={{ clickable: true }} // Enable clickable pagination
      modules={[Navigation, Pagination, Autoplay]} // Include modules
      autoplay={{ delay: 5000 }} // Autoplay with a 3-second delay
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
       // Responsive breakpoints
      breakpoints={{
        // when window width is >= 640px
        300: {
          slidesPerView: 1,
         
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 1,
          
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 2,
          
        },
        // when window width is >= 1280px
        1280: {
            slidesPerView: 2,
            
        }
      }}
    >
      <SwiperSlide className='swp2' > <Image
      src="/f111.jpeg"
      width={500}
      height={500}
      alt="Picture of the author"
    /></SwiperSlide>
      <SwiperSlide className='swp2'><Image
      src="/f2g.jpeg"
      width={500}
      height={500}
      alt="Picture of the author"
    /></SwiperSlide>
      <SwiperSlide className='swp2'><Image
      src="/png-transparent.png"
      width={500}
      height={500}
      alt="Picture of the author"
    /></SwiperSlide>
      {/* Add more slides as needed */}
    </Swiper>
     </div>
    </>
  );
  
};

export default MySwiperComponent;