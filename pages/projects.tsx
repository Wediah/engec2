import Image from 'next/image'
import React, {Component} from 'react'
import ReactDom from 'react-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import 'reactjs-popup/dist/index.css'
import Popup1 from '../components/Popup1'
import Popup2 from '../components/Popup2'
import Popup3 from '../components/Popup3'
import Popup4 from '../components/Popup4'
import { Element } from 'react-scroll'



function Projects () {
    return (
        <Element id="projects" name="projects">
        <section className='bg-white w-100 pt-10'>
          <h3 className='overline decoration-red-500 decoration-4 text-3xl text-black font-bold flex pt-20 text-left px-10 '>Projects</h3>

          
          <Carousel >
            <div className=" rounded shadow-2xl px-5 ">
              <div className='w-100 pt-10 '>
                <Image
                src="/Eastern2.jpg"
                alt="Home at Dobro"
                width={800}
                height={600}
                />
              </div>

              <span className="text-black flex leading-8 font-bold pt-5 ">
                5 Bedroom House at Dobro Eastern Region for Mr. Koduah. <br />
                Scope: Design & Build 
              </span> <br />
              <Popup1 />
              

            </div>
            <div className="rounded shadow-2xl px-5 ">
              <div className='w-100 pt-10'>
                <Image 
                src="/Labone.jpg"
                alt="Home at Labone"
                width={500}
                height={600}
                />
              </div>

              <span className="text-black flex leading-8 font-bold pt-10">
              5 Story Apartments at Labone. <br />
              Scope: Design & Rendering.
              </span>
            </div>
            <div className="rounded shadow-2xl px-5 ">
            <div className='w-100 pt-20'>
              <Image 
                src="/soga.jpg"
                alt="Home at Sogakope"
                width={500}
                height={600}
                />
            </div>
              <span className="text-black flex leading-8 font-bold pt-10 ">
              Proposed 4 Story Mission House Apartments at Sogakope. <br />
              Scope: Design & Cost Estimation.
              </span>
            </div>
            <div className="rounded shadow-2xl px-5 ">
              <div className='w-100 pt-20'>
              <Image 
              src="/bHills.jpg"
              alt="Home at Bortianor Hills"
              width={500}
              height={600}
              />
              </div>
            
              <span className="text-black flex leading-8 font-bold pt-10">
              2 Story Semi-Detached Apartments at Bortianor Hills. <br />
              Scope: Design & Construction Supervision.
              </span>
            </div>
            <div className="rounded shadow-2xl px-5 ">
              <div className='w-100 pt-5'>
              <Image 
              src="/Kwahu.jpg"
              alt="Home at Kwahu"
              width={500}
              height={600}
              />
              </div>
            
              <span className="text-black flex leading-8 font-bold pt-5">
              Proposed 6 Bedroom House at Kwahu-Nkwatia. <br />
              Scope: Complete Architecture & Structural Design.
              </span>
            </div>
            <div className="rounded shadow-2xl px-5 ">
              <div className='w-100 pt-20'>
              <Image 
              src="/Aburi2.jpg"
              alt="Home at Aburi"
              width={500}
              height={600}
              />
              </div>
          
              <span className="text-black flex leading-8 font-bold pt-10">
              Vacation Home at Aburi. <br />
              Scope: Design & Build
              </span> <br />
              <Popup2 />
              
            </div>
            <div className="rounded shadow-2xl px-5 ">
              <div className='w-100 pt-20'>
              <Image 
              src="/Afloa.jpg"
              alt="Home at Afloa"
              width={500}
              height={600}
              />
              </div>
            
              <span className="text-black flex leading-8 font-bold pt-10">
              Proposed Basic School Classroom Block at Afloa. <br />
              Scope: Architecture & Structural Design.
              </span>
            </div>
            <div className="rounded shadow-2xl px-5 ">
              <div className='w-100 pt-20'>
              <Image 
              src="/LegonE.jpg"
              alt="Home at East Legon"
              width={500}
              height={600}
              />
              </div>
            
              <span className="text-black flex leading-8 font-bold pt-10">
              4 Bedroom House at Ogbojo, East Legon. <br />
              Scope: Architectural and Structural Design
              </span>
            </div>
            <div className="rounded shadow-2xl px-5 ">
              <div className='w-100 pt-20'>
              <Image 
              src="/Dodowa3.jpg"
              alt="Home at Dodowa"
              width={500}
              height={600}
              />
              </div>
            
              <span className="text-black flex leading-8 font-bold pt-10">
              3 Bedroom House at Dodowa.<br />
              Scope: Design & Build.
              </span> <br />
              <Popup3 />


            </div>
            <div className="rounded shadow-2xl px-5  ">
              <div className='w-100 pt-20'>
              <Image 
              src="/Mampong4.jpg"
              alt="Home at Mampong"
              width={500}
              height={600}
              />
              </div>
            
              <span className="text-black flex leading-8 font-bold pt-10">
              5 Bedroom House at Akuapem- Mampong. <br /> 
              Scope: Design.
              </span> 
              <Popup4 />
            </div>
          </Carousel>
        
        </section>

        
        </Element>
    );
}

export default Projects;