import Image from 'next/image'
import React, {useEffect} from 'react'
import 'reactjs-popup/dist/index.css'
import { Element } from 'react-scroll'
import AOS from 'aos'
import 'aos/dist/aos.css'


function Services () {
  useEffect(()=>{
    AOS.init({offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
      once:true});
  },[])

    return (
        <Element id="services" name="services">
            <div className='bg-white min-h-screen px-10 pt-20 cursor-default'>
          <h3 data-aos='fade-up' className='overline decoration-red-500 decoration-4 text-3xl text-black font-bold flex pt-20 text-left font-serif'>Services We Offer</h3>
          <div className='flex justify-center flex-wrap gap-10 mt-5 lg:flex-row lg:flex-wrap pt-5'>
            <div data-aos='fade-up' className='basis-1/5 text-center group/edit cursor-pointer '>
              
                <Image 
                    src="/project-manager-icon.png"
                    width={"100"}
                    height={'100'}
                    alt=""
                    className="mx-auto hover:transition group-hover/edit:-translate-y-4 duration-300 delay-150"
                />
               <span className='text-sm font-bold text-[#f6ab29]'>
                 Project Management
                </span>
              
            </div>
            <div data-aos='fade-up' className='basis-1/5 text-center group/edit cursor-pointer'>
              <Image
              src="/hook.png"
              width={'100'}
              height={'100'}
              alt="Building"
              className="mx-auto hover:transition group-hover/edit:-translate-y-4 duration-300 delay-150"
              />
              <span className='text-sm text-[#f6ab29] font-bold '>Design & Build</span>
            </div>
            <div data-aos='fade-up' className='basis-1/5 text-center group/edit cursor-pointer'>
              <Image
              src="/blueprint.png"
              width={'100'}
              height={'100'}
              alt="plan"
              className="mx-auto hover:transition group-hover/edit:-translate-y-4 duration-300 delay-150"
              />
              <span className='text-sm text-[#f6ab29] font-bold'>Architecture</span>
            </div>
            <div data-aos='fade-up' className='basis-1/5 text-center group/edit cursor-pointer'>
              <Image
              src="/bridge.png"
              width={'100'}
              height={'100'}
              alt="bridge"
              className="mx-auto hover:transition group-hover/edit:-translate-y-4 duration-300 delay-150"
              />
              <span className='text-sm text-[#f6ab29] font-bold'>Structural Engineering</span>
            </div>
            <div data-aos='fade-up' className='basis-1/5 text-center group/edit cursor-pointer'>
              <Image
              src="/electrical.png"
              width={'100'}
              height={'100'}
              alt="electrical"
              className="mx-auto hover:transition group-hover/edit:-translate-y-4 duration-300 delay-150"
              />
              <span className='text-sm text-[#f6ab29] font-bold'>Electrical Engineering</span>
            </div>
            <div data-aos='fade-up' className='basis-1/5 text-center group/edit cursor-pointer'>
              <Image
              src="/pipes.png"
              width={'100'}
              height={'100'}
              alt="plumbing"
              className="mx-auto hover:transition group-hover/edit:-translate-y-4 duration-300 delay-150"
              />
              <span className='text-sm text-[#f6ab29] font-bold'>Plumbing Services</span>
            </div>
            <div data-aos='fade-up' className='basis-1/5 text-center group/edit cursor-pointer'>
              <Image 
              src="/urban-planning.png"
              width={'100'}
              height={'100'}
              alt="planning"
              className="mx-auto hover:transition group-hover/edit:-translate-y-4 duration-300 delay-150"
              />
              <span className='text-sm text-[#f6ab29] font-bold'>Urban Planning</span>
            </div>
            <div data-aos='fade-up' className='basis-1/5 text-center group/edit cursor-pointer'>
              <Image
              src="/pressure.png"
              width={'100'}
              height={'100'}
              alt="pressure"
              className="mx-auto hover:transition group-hover/edit:-translate-y-4 duration-300 delay-150"
              />
              <span className='text-sm text-[#f6ab29] font-bold'>Hydraulic Modelling</span>
            </div>
            <div data-aos='fade-up' className='basis-1/5 text-center group/edit cursor-pointer'>
              <Image 
              src="/tower.png"
              width={'100'}
              height={'100'}
              alt="power"
              className="mx-auto hover:transition group-hover/edit:-translate-y-4 duration-300 delay-150"
              />
              <span className='text-sm text-[#f6ab29] font-bold'>Power Grid Substation Design</span>
            </div>
            <div data-aos='fade-up' className='basis-1/5 text-center group/edit cursor-pointer'>
              <Image
              src="/treatment.png"
              width={'100'}
              height={'100'}
              alt="water treatment plant"
              className="mx-auto hover:transition group-hover/edit:-translate-y-4 duration-300 delay-150"
              />
              <span className='text-sm text-[#f6ab29] font-bold'>Water Treatment Plant Design</span>
            </div>
          </div>
          <span data-aos='fade-up' className='text-md text-gray-800 flex pt-8 text-center px-10 font-bold leading-8'>
          And Real Estate Development, Civil Engineering Consultancy, Quantity Surveying, Project Cost Estimation, Project Audit, Project Planning, Filling/ Fuel Station Design, Swimming Pool Design & Construction, Ware Houses and Steel Buildings.
          </span>
        </div>
        </Element>
    );
}

export default Services;