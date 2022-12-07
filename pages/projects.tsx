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
        <section className='bg-white w-100 pt-20'>
          <h3 className='overline decoration-red-500 decoration-4 text-3xl text-black font-bold flex pt-20 text-left px-10 '>Projects</h3>

          
          <div className="flex flex-col py-10 gap-10 lg:flex-row lg:flex-wrap px-10" >
            <div className=" basis-1/3 flex-1">
              <div className='rounded-3xl object-cover'>
                <Image
                src="/Eastern2.jpg"
                alt="Home at Dobro"
                width={'100'}
                height={'100'}
                layout="responsive"
                className='rounded-2xl'
                />
              </div>

              <span className="text-black flex leading-8 font-bold pt-5 ">
                5 Bedroom House at Dobro Eastern Region for Mr. Koduah. <br />
                Scope: Design & Build 
              </span> <br />
              <Popup1 />
              

            </div>
            <div className="basis-1/3 flex-1">
              <div className='rounded-3xl object-cover'>
                <Image 
                src="/Labone.jpg"
                alt="Home at Labone"
                width={'100'}
                height={'100'}
                layout="responsive"
                className='rounded-2xl'
                />
              </div>

              <span className="text-black flex leading-8 font-bold pt-10">
              5 Story Apartments at Labone. <br />
              Scope: Design & Rendering.
              </span>
            </div>
            {/*<div className="basis-1/3 flex-1">
            <div className='rounded-3xl object-cover'>
              <Image 
                src="/soga.jpg"
                alt="Home at Sogakope"
                width={'100'}
                height={'100'}
                layout="responsive"
                className='rounded-2xl'
                />
            </div>
              <span className="text-black flex leading-8 font-bold pt-10 ">
              Proposed 4 Story Mission House Apartments at Sogakope. <br />
              Scope: Design & Cost Estimation.
              </span>
            </div>*/}
            <div className="basis-1/3 flex-1">
              <div className='rounded-3xl object-cover'>
              <Image 
              src="/bHills.jpg"
              alt="Home at Bortianor Hills"
              width={'100'}
              height={'100'}
              layout="responsive"
              className='rounded-2xl'
              />
              </div>
            
              <span className="text-black flex leading-8 font-bold pt-10">
              2 Story Semi-Detached Apartments at Bortianor Hills. <br />
              Scope: Design & Construction Supervision.
              </span>
            </div>
            <div className="basis-1/3 flex-1">
              <div className='rounded-3xl object-cover'>
              <Image 
              src="/Kwahu.jpg"
              alt="Home at Kwahu"
              width={'100'}
              height={'100'}
              layout="responsive"
              className='rounded-2xl'
              />
              </div>
            
              <span className="text-black flex leading-8 font-bold pt-5">
              Proposed 6 Bedroom House at Kwahu-Nkwatia. <br />
              Scope: Complete Architecture & Structural Design.
              </span>
            </div>
            <div className="basis-1/3 flex-1">
              <div className='rounded-3xl object-cover'>
              <Image 
              src="/Aburi2.jpg"
              alt="Home at Aburi"
              width={'100'}
              height={'100'}
              layout="responsive"
              className='rounded-2xl'
              />
              </div>
          
              <span className="text-black flex leading-8 font-bold pt-10">
              Vacation Home at Aburi. <br />
              Scope: Design & Build
              </span> <br />
              <Popup2 />
              
            </div>
            <div className="basis-1/3 flex-1">
              <div className='rounded-3xl object-cover'>
              <Image 
              src="/Afloa.jpg"
              alt="Home at Afloa"
              width={'100'}
              height={'100'}
              layout="responsive"
              className='rounded-2xl'
              />
              </div>
            
              <span className="text-black flex leading-8 font-bold pt-10">
              Proposed Basic School Classroom Block at Afloa. <br />
              Scope: Architecture & Structural Design.
              </span>
            </div>
            <div className="basis-1/3 flex-1">
              <div className='rounded-3xl object-cover'>
              <Image 
              src="/LegonE.jpg"
              alt="Home at East Legon"
              width={'100'}
              height={'100'}
              layout="responsive"
              className='rounded-2xl'
              />
              </div>
            
              <span className="text-black flex leading-8 font-bold pt-10">
              4 Bedroom House at Ogbojo, East Legon. <br />
              Scope: Architectural and Structural Design
              </span>
            </div>
            <div className="basis-1/3 flex-1">
              <div className='rounded-3xl object-cover'>
              <Image 
              src="/Dodowa3.jpg"
              alt="Home at Dodowa"
              width={'100'}
              height={'100'}
              layout="responsive"
              className='rounded-2xl'
              />
              </div>
            
              <span className="text-black flex leading-8 font-bold pt-10">
              3 Bedroom House at Dodowa.<br />
              Scope: Design & Build.
              </span> <br />
              <Popup3 />


            </div>
            <div className="basis-1/3 flex-1">
              <div className='rounded-3xl object-cover'>
              <Image 
              src="/Mampong4.jpg"
              alt="Home at Mampong"
              width={'100'}
              height={'100'}
              layout="responsive"
              className='rounded-2xl'
              />
              </div>
            
              <span className="text-black flex leading-8 font-bold pt-10">
              5 Bedroom House at Akuapem- Mampong. <br /> 
              Scope: Design.
              </span> 
              <Popup4 />
            </div>
          </div>
        
        </section>

        
        </Element>
    );
}

export default Projects;