import Image from 'next/image'
import React from 'react'
import 'reactjs-popup/dist/index.css'
import { Element } from 'react-scroll'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

function Services () {
    return (
        <Element id="services" name="services">
            <div className='bg-white min-h-screen px-10 pt-20'>
          <h3 className='overline decoration-red-500 decoration-4 text-3xl text-black font-bold flex pt-20 text-left '>Services We Offer;</h3>
          <div className='flex justify-center flex-wrap gap-10 mt-5 lg:flex-row lg:flex-wrap pt-5'>
            <div className='basis-1/5 flex-1 hover:transition-transform  hover:scale-110 duration-500'>
              
                <Image 
                    src="/project-manager-icon.png" alt="project management"
                    width={"100"}
                    height={'100'}
                />
               <span className='text-sm font-bold flex text-orange-500'>
                 Project Management
                </span>
              
            </div>
            <div className='basis-1/5 flex-1 hover:transition-transform hover:scale-110 duration-500'>
              <Image
              src="/hook.png"
              width={'100'}
              height={'100'}
              alt="Building"
              />
              <span className='text-sm text-orange-500 font-bold flex '>Design & Build</span>
            </div>
            <div className='basis-1/5 flex-1 hover:transition-transform hover:scale-110 duration-500'>
              <Image
              src="/blueprint.png"
              width={'100'}
              height={'100'}
              alt="plan"
              />
              <span className='text-sm text-orange-500 font-bold flex'>Architecture</span>
            </div>
            <div className='basis-1/5 flex-1 hover:transition-transform hover:scale-110 duration-500'>
              <Image
              src="/bridge.png"
              width={'100'}
              height={'100'}
              alt="bridge"
              />
              <span className='text-sm text-orange-500 font-bold flex'>Structural Engineering</span>
            </div>
            <div className='basis-1/5 flex-1 hover:transition-transform hover:scale-110 duration-500'>
              <Image
              src="/electrical.png"
              width={'100'}
              height={'100'}
              alt="electrical"
              />
              <span className='text-sm text-orange-500 font-bold flex'>Electrical Engineering</span>
            </div>
            <div className='basis-1/5 flex-1 hover:transition-transform hover:scale-110 duration-500'>
              <Image
              src="/pipes.png"
              width={'100'}
              height={'100'}
              alt="plumbing"
              />
              <span className='text-sm text-orange-500 font-bold flex'>Plumbing Services</span>
            </div>
            <div className='basis-1/5 flex-1 hover:transition-transform hover:scale-110 duration-500'>
              <Image 
              src="/urban-planning.png"
              width={'100'}
              height={'100'}
              alt="planning"
              />
              <span className='text-sm text-orange-500 font-bold flex'>Urban Planning</span>
            </div>
            <div className='basis-1/5 flex-1 hover:transition-transform hover:scale-110 duration-500'>
              <Image
              src="/pressure.png"
              width={'100'}
              height={'100'}
              alt="pressure"
              />
              <span className='text-sm text-orange-500 font-bold flex'>Hydraulic Modelling</span>
            </div>
            <div className='basis-1/5 flex-1 hover:transition-transform hover:scale-110 duration-500'>
              <Image 
              src="/tower.png"
              width={'100'}
              height={'100'}
              alt="power"
              />
              <span className='text-sm text-orange-500 font-bold flex'>Power Grid Substation Design</span>
            </div>
            <div className='basis-1/5 flex-1 hover:transition-transform hover:scale-110 duration-500'>
              <Image
              src="/treatment.png"
              width={'100'}
              height={'100'}
              alt="water treatment plant"
              />
              <span className='text-sm text-orange-500 font-bold flex'>Water Treatment Plant Design</span>
            </div>
          </div>
          <span className='text-md text-gray-800 flex pt-8 text-center px-10 font-bold leading-8'>
          And Real Estate Development, Civil Engineering Consultancy, Quantity Surveying, Project Cost Estimation, Project Audit, Project Planning, Filling/ Fuel Station Design, Swimming Pool Design & Construction, Ware Houses and Steel Buildings.
          </span>
        </div>
        </Element>
    );
}

export default Services;