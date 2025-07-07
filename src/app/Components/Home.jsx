'use client';
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from "next/image";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from '../Assets/home-banner-image.png';
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import MySwiperComponent from './SwiperSlider';


const Home = ({ title }) => {

    useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration
            once: true,     // whether animation should happen only once
        });
    }, []);


      // --- Your requested useEffect with cleanup ---
    useEffect(() => {
        const app = document.getElementById('app');
        let header; // Declare header here so it's accessible in cleanup

        if (app) { // Ensure the 'app' element exists
            header = document.createElement('h1');
            header.className = 'header';
            header.setAttribute('data-aos', 'fade-up');
            header.setAttribute('data-aos-delay', '200');
            const text = 'Develop. Preview. Ship.';
            const headerContent = document.createTextNode(text);
            header.appendChild(headerContent);
            app.appendChild(header);
        }

        // Cleanup function: This will run when the component unmounts
        // or before the effect re-runs (though with [] it runs only once on mount).
        return () => {
            if (header && app && app.contains(header)) {
                app.removeChild(header);
            }
        };
    }, []); // Empty dependency array ensures it runs only once on mount

    // --- End of useEffect ---

    return (
        <>
        
        <div className="home-container">
           
            <div className="home-banner-container">
                <div className="home-bannerImage-container">
                    <Image src={BannerBackground} alt="Banner" width={800} height={500} />

                </div>
                <div className="home-text-section">
                    <h1 className="primary-heading text-amber-500! font-extrabold" data-aos="fade-up" data-aos-delay="500">
                        Your Favourite Food Delivered Hot & Fresh
                    </h1>
                    <p className="primary-text " data-aos="fade-up" data-aos-delay="800">
                        Healthy switcher chefs do all the prep work, like peeding, chopping
                        & marinating, so you can cook a fresh food.
                    </p>
                    <button className="secondary-button" data-aos="fade-up" data-aos-delay="900">
                        Order Now <FiArrowRight />{" "}
                    </button>
                </div>
                <div className="home-image-section" data-aos="fade-up" data-aos-delay="900">
                    <Image src={BannerImage} alt="Banner Image" width={500} height={500} />

                </div>
            </div>
            {/* <Default /> */
            }
            <div className="secd" id="app">
                 {/* <h1 className="header" data-aos="fade-up" data-aos-delay="200">
                       Develop. Preview. Ship.
                   </h1> */}
            </div>





            <div className="thrr" id="nrewe" >
                <h3 className="" data-aos="fade-up" data-aos-delay="200">"{title}" from props</h3>
                <p data-aos="fade-up" data-aos-delay="200">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, dicta laboriosam qui consequuntur neque suscipit repellat beatae? Quod ab ut, officia ducimus id laboriosam commodi quisquam vero dolores possimus laudantium!</p>
                   <p data-aos="fade-up" data-aos-delay="200">  Quasi dolor obcaecati facere et quae unde cupiditate, libero quam non esse provident, aperiam quidem ipsa blanditiis! Vitae dignissimos, a tenetur illo, voluptatem asperiores commodi beatae eveniet saepe rem ea?
                    Voluptatibus omnis excepturi cum culpa quo ratione aliquid aut eius? Sint dolore quis eligendi autem numquam cumque dolores aliquam eos quasi praesentium totam repellendus, nostrum facere ratione id sapiente animi.</p>
                 <p data-aos="fade-up" data-aos-delay="200">fugit assumenda! Culpa ab accusamus esse dignissimos nihil porro vero beatae, totam omnis commodi quaerat dolore modi vitae possimus.
                    Mollitia sequi rem unde labore vel? Delectus, iusto? Voluptatum, eum est. Eligendi dolores debitis optio fugit tenetur repellendus eos architecto assumenda omnis laudantium recusandae maiores quaerat, atque totam dolores! Amet qui quaerat maxime sit veniam.</p>
                     <p data-aos="fade-up" data-aos-delay="200">fugit assumenda! Culpa ab accusamus esse dignissimos nihil porro vero beatae, totam omnis commodi quaerat dolore modi vitae possimus.
                    Mollitia sequi rem unde labore vel? Delectus, iusto? Voluptatum, eum est. Eligendi dolores debitis optio fugit tenetur repellendus eos architecto assumenda omnis laudantium recusandae maiores quaerat, atque totam dolores! Amet qui quaerat maxime sit veniam.</p>
                    
            </div>

            <MySwiperComponent />
        </div></>
    );
};

export default Home;