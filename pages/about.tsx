import React from 'react'
import 'reactjs-popup/dist/index.css'
import { Element } from 'react-scroll'
import Image from 'next/image'

function About () {
    return (
        <Element id="about" name="about">
            <div className="bg-white min-h-screen px-10 pt-80 font-serif">
                
                
                <div className=''>
                    <h3 className='overline decoration-red-500 decoration-4 text-3xl text-black font-bold flex pt-5 text-left '>Our Story</h3>
                    <h1 className='text-sm text-bold  text-orange-400 pt-5 '>Vision.Build.Live</h1> <br />
                    <h1 className='text-5xl text-bold text-orange-500'>SPECIALIZING IN THE UNTHINKABLE.</h1>
                </div>
                    
                
                <span className="text-md flex font-bold text-black text-center leading-8 pt-20 pb-10 font-sans">
                ENGEC is a multidisciplinary Construction and Consulting Firm that Specializes in Architecture, Civil & Environmental Engineering and Construction. 
                Since its inception as fully fledged company ENGEC as a group has designed and built many residential, commercial,industrial facilities across Ghana. 
                </span>
          
            
            </div>
        </Element>
    );
}

export default About;