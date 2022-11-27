import Image from 'next/image'
import React from 'react'
import 'reactjs-popup/dist/index.css'
import { Element } from 'react-scroll'

function Services () {
    return (
        <Element id="services" name="services">
            <section className='bg-white'>
          <h3 className='overline decoration-red-500 decoration-4 text-3xl text-black font-bold flex pt-20 text-left px-10'>Services We Offer;</h3>
          <div className='flex flex-row overflow-x-auto pt-20 h-80 overflow-y-hidden text-left px-10'>
            <div className='px-5 hover:transition-transform  hover:scale-110 duration-500'>
              
                <Image 
                    src="/project-manager-icon.png" alt="project management"
                    width={180}
                    height={150}
                />
               <span className='text-md text-black flex'>
                 Project Management
                </span>
              
            </div>
            <div className='px-5 hover:transition-transform hover:scale-110 duration-500'>
              <Image
              src="/hook.png"
              width={180}
              height={150}
              alt="Building"
              />
              <span className='text-md text-black flex'>Design & Build</span>
            </div>
            <div className='px-5 hover:transition-transform hover:scale-110 duration-500'>
              <Image
              src="/blueprint.png"
              width={180}
              height={150}
              alt="plan"
              />
              <span className='text-md text-black flex'>Architecture</span>
            </div>
            <div className='px-5 hover:transition-transform hover:scale-110 duration-500'>
              <Image
              src="/bridge.png"
              width={180}
              height={150}
              alt="bridge"
              />
              <span className='text-md text-black flex'>Structural Engineering</span>
            </div>
            <div className='px-5 hover:transition-transform hover:scale-110 duration-500'>
              <Image
              src="/electrical.png"
              width={180}
              height={150}
              alt="electrical"
              />
              <span className='text-md text-black flex'>Electrical Engineering</span>
            </div>
            <div className='px-5 hover:transition-transform hover:scale-110 duration-500'>
              <Image
              src="/pipes.png"
              width={180}
              height={150}
              alt="plumbing"
              />
              <span className='text-md text-black flex'>Plumbing Services</span>
            </div>
            <div className='px-5 hover:transition-transform hover:scale-110 duration-500'>
              <Image 
              src="/urban-planning.png"
              width={180}
              height={150}
              alt="planning"
              />
              <span className='text-md text-black flex'>Urban Planning</span>
            </div>
            <div className='px-5 hover:transition-transform hover:scale-110 duration-500'>
              <Image
              src="/pressure.png"
              width={180}
              height={150}
              alt="pressure"
              />
              <span className='text-md text-black flex'>Hydraulic Modelling</span>
            </div>
            <div className='px-5 hover:transition-transform hover:scale-110 duration-500'>
              <Image 
              src="/tower.png"
              width={180}
              height={150}
              alt="power"
              />
              <span className='text-md text-black flex'>Power Grid Substation Design</span>
            </div>
            <div className='px-5 hover:transition-transform hover:scale-110 duration-500'>
              <Image
              src="/treatment.png"
              width={180}
              height={150}
              alt="water treatment plant"
              />
              <span className='text-md text-black flex'>Water Treatment Plant Design</span>
            </div>
          </div>
          <span className='text-md text-gray-800 flex pt-8 text-center px-10 font-bold leading-8'>
          And Real Estate Development, Civil Engineering Consultancy, Quantity Surveying, Project Cost Estimation, Project Audit, Project Planning, Filling/ Fuel Station Design, Swimming Pool Design & Construction, Ware Houses and Steel Buildings.
          </span>
        </section>
        </Element>
    );
}

export default Services;