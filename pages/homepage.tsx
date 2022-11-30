import Image from 'next/image'
import React from 'react'
import 'reactjs-popup/dist/index.css'
import { Element } from "react-scroll"
import { BsFillArrowDownCircleFill } from 'react-icons/bs'


function Homepage () {
    return (
        <Element id="home" name="home">
            <section className="min-h-screen bg-black w-auto">

                <div className='text-left px-10 pt-80'>
                    <div className="opacity-20 w-100 md:w-auto">
                        <Image
                            src="/LegonE.jpg"
                            alt="Legon House"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    
                    <h1 className='text-9xl text-bold text-white'>ENGEC</h1>
                    <h4 className='text-2xl text-white pb-2'>DESIGN - CONSULTANCY - CONSTRUCTION - PROJECT MANAGEMENT.</h4>
                    <button className='hover:transition-transform hover:scale-90 px-4 py-2 pt-3 bg-orange-500 text-white rounded h-12 w-220 flex text-sm'>Scroll Down For More About Us <BsFillArrowDownCircleFill className='text-3xl pl-2'/></button>
                </div>
            </section>

        </Element>
    );
    
}

export default Homepage;