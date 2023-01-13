import React from 'react'
import 'reactjs-popup/dist/index.css'
import { Element } from 'react-scroll'
import Image from 'next/image'
import { Link } from "react-scroll"

function About () {
    return (
        <Element id="about" name="about">
            <div className='min-h-screen'>
            <div className=" bg-no-repeat  bg-cover bg-center  bg-black  " style={{ backgroundImage: 'url(LegonE.jpg)'}}>
                <div className='lg:pt-40 pt-20 lg:pb-40 pb-20 lg:px-10 px-2 backdrop-brightness-50'>    
                    <h1 className='text-sm font-bold  text-orange-400 pt-5 '>Vision.Build.Live</h1> 
                    <h1 className='lg:text-4xl text-2xl font-bold text-orange-500 '>SPECIALIZING IN THE UNTHINKABLE.</h1>
                </div>
            </div>
            <div className="bg-white  px-10  font-serif">
                
                
                
                    
                <h3 className='overline decoration-red-500 decoration-4 text-3xl text-black font-bold flex text-left pt-20 '>Our Story</h3>
                <span className="text-lg lg:text-2xl flex font-bold text-gray-600 text-left leading-8 pt-5 pb-10 font-sans">
                ENGEC is a multidisciplinary Construction and Consulting Firm that Specializes in Architecture, Civil & Environmental Engineering and Construction. 
                Since its inception as fully fledged company ENGEC as a group has designed and built many residential, commercial,industrial facilities across Ghana. 
                </span>
                <Link activeClass="projects" to="projects" smooth={true} offset={50} duration={500}><button className='text-lg bg-orange-500 p-2 rounded-sm font-semibold text-white'>view our portfolio</button></Link>
          
            
            </div>
            </div>
        </Element>
    );
}

export default About;