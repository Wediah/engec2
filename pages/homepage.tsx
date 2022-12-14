import Image from 'next/legacy/image'
import React from 'react'
import 'reactjs-popup/dist/index.css'
import { Element } from "react-scroll"
import { BsFillArrowDownCircleFill } from 'react-icons/bs'
import Legon from '../public/LegonE.jpg'




function Homepage () {
    return (
        <Element id="home" name="home">
            <div className="min-h-screen">

                
                <div style={{
                    zIndex: -1,
                    position: "fixed",
                    width: "100vw",
                    height: "100vh"
                    }}>
                    <Image 
                    className='brightness-50'
                    src={Legon}
                    alt=""
                    layout="fill"
                    objectFit='cover'
                />
                </div>

                <div className='text-left  pt-80  px-10 w-screen'>
                    <h1 className='flex text-7xl font-bold text-white font-serif'>ENGEC</h1>
                    <h4 className='flex text-md text-gray-200 pb-2 font-medium font-serif'>DESIGN - CONSULTANCY - CONSTRUCTION - PROJECT MANAGEMENT.</h4>
                    
                </div>
                <BsFillArrowDownCircleFill className='text-white text-3xl mx-auto mt-48 animate-bounce'/>
                
            </div>

        </Element>
    );
    
}

export default Homepage;