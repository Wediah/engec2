import Image from 'next/legacy/image'
import React from 'react'
import 'reactjs-popup/dist/index.css'
import { Element } from "react-scroll"
import { BsFillArrowDownCircleFill } from 'react-icons/bs'
import Legon from '../public/LegonE.jpg'
import { Link } from "react-scroll"




function Homepage () {
    return (
        <Element id="home" name="home">
            <div className="min-h-screen bg-no-repeat  bg-cover bg-center bg-fixed bg-black  " style={{ backgroundImage: 'url(LegonE.jpg)'}}>
                <div className="min-h-screen px-5 backdrop-brightness-50">

                
                

                    <div className='text-left  lg:pt-80 pt-52'>
                        <h1 className=' text-7xl lg:text-9xl font-bold text-white font-serif'>ENGEC</h1>
                        <h4 className='flex text-md text-gray-100 pb-2 font-medium font-serif'>DESIGN - CONSULTANCY - CONSTRUCTION - PROJECT MANAGEMENT.</h4>
                        
                    </div>
                    <div className='flex gap-4'>
                        <div>
                            <Link activeClass="about" to="about" smooth={true} offset={50} duration={500}><button className='text-lg bg-orange-500 p-2 rounded-lg font-semibold text-white'>More About Us</button></Link>
                        </div>
                        <div>
                            <Link activeClass="contact" to="contact" smooth={true} offset={50} duration={500}><button className='text-lg bg-white p-2 rounded-lg font-semibold text-orange-500'>Get a Quote</button></Link>
                        </div>
                    </div>
                    

                </div>
            </div>
           

        </Element>
    );
    
}

export default Homepage;