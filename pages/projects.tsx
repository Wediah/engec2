import Image from 'next/legacy/image'
import React, {Component} from 'react'
import ReactDom from 'react-dom'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import 'reactjs-popup/dist/index.css'
import Popup1 from './Popup1'
import Popup2 from './Popup2'
import Popup3 from './Popup3'
import Popup4 from './Popup4'
import { Element } from 'react-scroll'
import { useRouter } from 'next/router'


function Projects () {
  const router = useRouter()
  
  
  const Responsive =  {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      partialVisibilityGutter: 30
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    }
  };

    return (
        <Element id="projects" name="projects">
        <div className='bg-white min-h-screen pt-20 px-10'>
          <h3 className='overline decoration-red-500 decoration-4 text-3xl text-black font-bold flex pt-20 text-left px-10 font-serif'>Projects</h3>

          
        <Carousel 
        additionalTransfrom={0}
        arrows
        centerMode={false}
        className="pb-20 pt-5"
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={Responsive}
        removeArrowOnDeviceType={[ "mobile"]}>
          <div className="mx-4 shadow-lg p-2 rounded-sm">
            
            <Image
            src="/Eastern2.jpg" alt="Home at Dobro" width={'80'} height={'80'} layout="responsive" className='rounded-sm'
            />
            

            <span className="text-black font-semibold text-sm lg:text-md pt-1 ">
              5 Bedroom House at Dobro Eastern Region. <br />
              Scope: Design & Build 
            </span> <br />
            <button onClick={() => router.push('/Popup1')} className='font-bold bg-orange-500 p-2 rounded-sm hover:text-white hover:bg-black'>view more </button>
            

          </div>
          <div className="mx-4 shadow-lg p-2 rounded-sm">
            
            <Image 
            src="/Labone.jpg" alt="Home at Labone" width={'100'} height={'100'} layout="responsive" className='rounded-sm'
            />
            

            <span className="text-black  font-semibold text-sm lg:text-md pt-1">
            5 Story Apartments at Labone. <br />
            Scope: Design & Rendering.
            </span> <br />
            <button onClick={() => router.push('/Popup10')} className='font-bold bg-orange-500 p-2 rounded-sm hover:text-white hover:bg-black'>view more </button>
          </div>
          {/*<div className="mx-4 shadow-lg p-2 rounded-sm">
          
            <Image src="/soga.jpg" alt="Home at Sogakope" width={'80'} height={'80'} layout="responsive" className='rounded-sm'/>
          
            <span className="text-black font-semibold text-sm lg:text-md pt-1 ">
            Proposed Mission House at Sogakope. <br />
            Scope: Design & Cost Estimation.
            </span> <br />
            <button onClick={() => router.push('/Popup9')} className='font-bold bg-orange-500 p-2 rounded-sm hover:text-white hover:bg-black'>view more </button>
    </div>*/}
          <div className="mx-4 shadow-lg p-2 rounded-sm">
            
            <Image 
            src="/bHills.jpg"
            alt="Home at Bortianor Hills"
            width={'100'}
            height={'100'}
            layout="responsive"
            className='rounded-sm'
            />
            
          
            <span className="text-black font-semibold text-sm lg:text-md pt-1">
            2 Story Semi-Detached Apartments at Bortianor Hills. <br />
            Scope: Design & Construction Supervision.
            </span> <br />
            <button onClick={() => router.push('/Popup8')} className='font-bold bg-orange-500 p-2 rounded-sm hover:text-white hover:bg-black'>view more </button>
          </div>
          <div className="mx-4 shadow-lg p-2 rounded-sm">
            
            <Image 
            src="/Kwahu.jpg"
            alt="Home at Kwahu"
            width={'100'}
            height={'100'}
            layout="responsive"
            className='rounded-sm'
            />
            
          
            <span className="text-black font-semibold text-sm lg:text-md pt-1">
            Proposed 6 Bedroom House at Kwahu-Nkwatia. <br />
            Scope: Complete Architecture & Structural Design.
            </span> <br />
            <button onClick={() => router.push('/Popup7')} className='font-bold bg-orange-500 p-2 rounded-sm hover:text-white hover:bg-black'>view more </button>
          </div>
          <div className="mx-4 shadow-lg p-2 rounded-sm">
            <Image 
            src="/Aburi2.jpg"
            alt="Home at Aburi"
            width={'100'}
            height={'100'}
            layout="responsive"
            className='rounded-sm'
            />
        
            <span className="text-black font-semibold text-sm lg:text-md pt-1">
            Vacation Home at Aburi. <br />
            Scope: Design & Build
            </span> <br />
            <button onClick={() => router.push('/Popup2')} className='font-bold bg-orange-500 p-2 rounded-sm hover:text-white hover:bg-black'>view more </button>
            
          </div>
          <div className="mx-4 shadow-lg p-2 rounded-sm">
            <Image 
            src="/Afloa.jpg"
            alt="Home at Afloa"
            width={'100'}
            height={'100'}
            layout="responsive"
            className='rounded-sm'
            />
          
            <span className="text-black font-semibold text-sm lg:text-md pt-1">
            Proposed Basic School Classroom Block at Afloa. <br />
            Scope: Architecture & Structural Design.
            </span> <br />
            <button onClick={() => router.push('/Popup6')} className='font-bold bg-orange-500 p-2 rounded-sm hover:text-white hover:bg-black'>view more </button>
          </div>
          <div className="mx-4 shadow-lg p-2 rounded-sm">
            <Image 
            src="/LegonE.jpg"
            alt="Home at East Legon"
            width={'100'}
            height={'100'}
            layout="responsive"
            className='rounded-sm'
            />
          
            <span className="text-black font-semibold text-sm lg:text-md pt-1">
            4 Bedroom House at Ogbojo, East Legon. <br />
            Scope: Architectural and Structural Design
            </span> <br />
            <button onClick={() => router.push('/Popup5')} className='font-bold bg-orange-500 p-2 rounded-sm hover:text-white hover:bg-black'>view more </button>
          </div>
          <div className="mx-4 shadow-lg p-2 rounded-sm">
            <Image 
            src="/Dodowa3.jpg"
            alt="Home at Dodowa"
            width={'100'}
            height={'100'}
            layout="responsive"
            className='rounded-sm'
            />
          
            <span className="text-black font-semibold text-sm lg:text-md pt-1">
            3 Bedroom House at Dodowa.<br />
            Scope: Design & Build.
            </span> <br />
            <button onClick={() => router.push('/Popup3')} className='font-bold bg-orange-500 p-2 rounded-sm hover:text-white hover:bg-black'>view more </button>


          </div>
          <div className="mx-4 shadow-lg p-2 rounded-sm">
            <Image 
            src="/Mampong4.jpg"
            alt="Home at Mampong"
            width={'100'}
            height={'100'}
            layout="responsive"
            className='rounded-sm'
            />
          
            <span className="text-black font-semibold text-sm lg:text-md pt-1">
            5 Bedroom House at Akuapem- Mampong. <br /> 
            Scope: Design.
            </span> <br />
            <button onClick={() => router.push('/Popup4')} className='font-bold bg-orange-500 p-2 rounded-sm hover:text-white hover:bg-black'>view more </button>
          </div>
            </Carousel>
        
        </div>

        
        </Element>
    );
}

export default Projects;