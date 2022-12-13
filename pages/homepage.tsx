import Image from 'next/image'
import React from 'react'
import 'reactjs-popup/dist/index.css'
import { Element } from "react-scroll"
import { BsFillArrowDownCircleFill } from 'react-icons/bs'
import Legon from '../public/LegonE.jpg'
import styles from '../styles.module.css'
import arrow from '../public/down-arrow.png'


function Homepage () {
    return (
        <Element id="home" name="home">
            <div className="min-h-screen w-auto">

                
                <div style={{
                    zIndex: -1,
                    position: "fixed",
                    width: "100vw",
                    height: "100vh"
                    }}>
                    <Image className='brightness-50 w-screen bg-cover flex'
                    src={Legon}
                    alt="Mountains with snow"
                    sizes='(max-width: 768px) 100vw'
                    fill={true}
                    style={{objectFit: "cover"}}
                />
                </div>

                <div className='text-left  pt-80  px-10'>
                    <h1 className='flex text-7xl font-bold text-white font-serif'>ENGEC</h1>
                    <h4 className='flex text-md text-gray-200 pb-2 font-medium font-serif'>DESIGN - CONSULTANCY - CONSTRUCTION - PROJECT MANAGEMENT.</h4>
                    
                </div>
                <Image className='mx-auto pt-20 lg:pt-36 animate-bounce'
                src={arrow}
                alt=''
                width={50}
                />
            </div>

        </Element>
    );
    
}

export default Homepage;