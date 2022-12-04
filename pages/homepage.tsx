import Image from 'next/image'
import React from 'react'
import 'reactjs-popup/dist/index.css'
import { Element } from "react-scroll"
import { BsFillArrowDownCircleFill } from 'react-icons/bs'
import Legon from '../public/LegonE.jpg'


function Homepage () {
    return (
        <Element id="home" name="home">
            <div className="min-h-screen px-10 bg-black">

                <div className='text-left  pt-80'>
                    <h1 className='flex text-6xl text-bold text-white'>ENGEC</h1>
                    <h4 className='flex text-md text-gray-500 pb-2'>DESIGN - CONSULTANCY - CONSTRUCTION - PROJECT MANAGEMENT.</h4>
                    <button className='hover:transition-transform hover:scale-90 px-4 py-2 pt-3 bg-orange-500 text-white rounded h-12 w-220 flex text-sm'>Scroll Down For More About Us <BsFillArrowDownCircleFill className='text-3xl pl-2'/></button>
                </div>
            </div>

        </Element>
    );
    
}

export default Homepage;