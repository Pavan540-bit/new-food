"use client"
import React from 'react'
import Navbar from '../Components/Navbar'
import MySwiperComponent from '../Components/SwiperSlider'
import LikeButton from '../Components/Like-btn'
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


import { Progress } from "@/components/ui/progress"
import Spline from '@splinetool/react-spline/next';
import Para from '../Components/Para'


const page = () => {
 
  return (
    <>

      <div className='home-container'>

<h1 className='text-3xl! text-center mt-6! text-amber-500'>The Main Dish </h1>

        <Para content="Get Domino's Fast and Delicious: Domino's Pizza Delivers in 20 Min or free from 11am - 7pm. Savor the Flavor with Domino's Speedy..."  />
        <Para content="Click to see the latest KFC Menu and Offers. Or'der KFC online for Delivery, Take Away and Dine-In or download our KFC App for easy ordering." />
        <Para content="Burger King India is currently present in 119 cities as it continues to redefine the QSR landscape by seamlessly blending global standards with local flavours." />




        <Accordion
          type="single"
          collapsible
          className="w-full dsder"
          defaultValue="item-1"
        >

          <h2 className='text-4xl text-center text-amber-500'>About Us Accordion</h2>
          <AccordionItem value="item-1" className="text-xl px-8 py-8 ">
            <AccordionTrigger className="title-acc">Product Information</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                Our flagship product combines cutting-edge technology with sleek
                design. Built with premium materials, it offers unparalleled
                performance and reliability.
              </p>

            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="title-acc">Shipping Details</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                We offer worldwide shipping through trusted courier partners.
                Standard delivery takes 3-5 business days, while express shipping
                ensures delivery within 1-2 business days.
              </p>
              <p>
                All orders are carefully packaged and fully insured. Track your
                shipment in real-time through our dedicated tracking portal.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="title-acc">Return Policy</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                We stand behind our products with a comprehensive 30-day return
                policy. If you&apos;re not completely satisfied, simply return the
                item in its original condition.
              </p>
              <p>
                Our hassle-free return process includes free return shipping and
                full refunds processed within 48 hours of receiving the returned
                item.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>



        <MySwiperComponent />





      </div >
    </>
  )
}

export default page
