import Image from 'next/legacy/image'
import React from 'react'
import 'reactjs-popup/dist/index.css'
import { Element } from "react-scroll"
import { BsFillArrowDownCircleFill } from 'react-icons/bs'
import Legon from '../public/LegonE.jpg'




function Homepage () {
    return (
        <Element id="home" name="home">
            <div className="min-h-screen bg-no-repeat  bg-cover bg-center bg-fixed bg-black  " style={{ backgroundImage: 'url(LegonE.jpg)'}}>
                <div className="min-h-screen px-10 backdrop-brightness-50">

                
                

                    <div className='text-left  pt-80   w-screen'>
                        <h1 className=' text-7xl lg:text-9xl font-bold text-white font-serif'>ENGEC</h1>
                        <h4 className='flex text-md text-gray-200 pb-2 font-medium font-serif'>DESIGN - CONSULTANCY - CONSTRUCTION - PROJECT MANAGEMENT.</h4>
                        
                    </div>
                    <div className='flex gap-4'>
                        <div>
                            <button className='text-lg bg-orange-500 p-2 rounded-lg font-semibold text-white'>More About Us</button>
                        </div>
                        <div>
                            <button className='text-lg bg-white p-2 rounded-lg font-semibold text-orange-500'>Get a Quote</button>
                        </div>
                    </div>
                    <BsFillArrowDownCircleFill className='text-white text-3xl mx-auto mt-48 animate-bounce'/>

                </div>
            </div>
            

        </Element>
    );
    
}

export default Homepage;