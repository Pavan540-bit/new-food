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
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

const MytestComponent = () => {

  const myStyle = {
    margin: '5% 0%'
  };


  return (
    <>
      <div className='swiper-container testimonial'>
        <h2>swiper carousel next heading</h2>

        {/* This div is optional, you can use it for additional styling or structure */}
        <Swiper className='my-swiperfd' style={myStyle}// Add a class for custom styling
          // Optional parameters
          spaceBetween={50}
          slidesPerView={3}
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
              slidesPerView: 3,

            }
          }}
        >
          <SwiperSlide className='swp2' >   <Image src="https://i.ibb.co/3m5x6B5/people6.jpg"   width={500}
            height={500}
            alt="Picture of the author" />
           
            <p className='px-2'>
               <FaQuoteLeft />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
              saepe provident dolorem a quaerat quo error facere nihil deleniti
              eligendi ipsum adipisci, fugit, architecto amet asperiores
              doloremque deserunt eum nemo.<FaQuoteRight />
            </p>

            <div className="details">
              <span className="name">Marnie Lotter</span>
              <span className="job">Web Developer</span>
            </div></SwiperSlide>


 <SwiperSlide className='swp2' > 
         <Image src="https://i.ibb.co/Lh9gfFZ/people2.jpg"   width={500}
            height={500}
            alt="Picture of the author" />
           
            <p className='px-2'>
               <FaQuoteLeft />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
              saepe provident dolorem a quaerat quo error facere nihil deleniti
              eligendi ipsum adipisci, fugit, architecto amet asperiores
              doloremque deserunt eum nemo.<FaQuoteRight />
            </p>

            <div className="details">
              <span className="name">Marnie Lotter</span>
              <span className="job">Web Developer</span>
            </div></SwiperSlide>

 <SwiperSlide className='swp2' > 
         <Image src="https://i.ibb.co/hFVbbty/people3.jpg"   width={500}
            height={500}
            alt="Picture of the author" />
           
            <p className='px-2'>
               <FaQuoteLeft />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
              saepe provident dolorem a quaerat quo error facere nihil deleniti
              eligendi ipsum adipisci, fugit, architecto amet asperiores
              doloremque deserunt eum nemo.<FaQuoteRight />
            </p>

            <div className="details">
              <span className="name">Marnie Lotter</span>
              <span className="job">Web Developer</span>
            </div></SwiperSlide>


          {/* Add more slides as needed */}
        </Swiper>
      </div>
    </>
  );

};

export default MytestComponent;