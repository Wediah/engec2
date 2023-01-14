import React, {useState} from 'react'
import Image from 'next/image'
import {GrClose} from 'react-icons/gr'
import { useRouter } from 'next/router'


const Popup7= () => {
    const router = useRouter()


    return (
        <div className='min-h-screen bg-white px-10 pt-5'>
            

            
            
            <div className='flex flex-col py-10 gap-10 lg:flex-row lg:flex-wrap justify-center'>
                <div ><Image alt="home1" src="/Kwahu.jpg" width={'800'} height={'500'}/></div>
                
            </div>
            <br />
            <GrClose onClick={() => router.push('/')} className='text-2xl lg:text-6xl mx-auto hover:bg-gray-500 bg-white  cursor-pointer'/>
                
            
        </div>
    );
};

export default Popup7