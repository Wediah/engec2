import React, {useState} from 'react'
import Image from 'next/image'
import {GrClose} from 'react-icons/gr'
import { useRouter } from 'next/router'


const Popup1= () => {
    const router = useRouter()


    return (
        <div className='min-h-screen bg-white px-10 pt-5 pb-4'>
            

            
            
            <div className='flex flex-col py-10 gap-10 lg:flex-row lg:flex-wrap justify-center'>
                <div ><Image alt="home1" src="/Eastern1.jpg" width={'500'} height={'500'}/></div>
                <div ><Image alt="home1" src="/Eastern2.jpg" width={'500'} height={'500'}/></div>
                <div ><Image alt="home1" src="/Eastern3.jpg" width={'500'} height={'500'}/></div>
                <div ><Image alt="home1" src="/Eastern4.jpg" width={'500'} height={'500'}/></div>
                <div ><Image alt="home1" src="/Eastern5.jpg" width={'500'} height={'500'}/></div>
                <div ><Image alt="home1" src="/Eastern6.jpg" width={'500'} height={'500'}/></div>
                <div ><Image alt="home1" src="/Eastern7.jpg" width={'500'} height={'500'}/></div>
                <div ><Image alt="home1" src="/Eastern8.jpg" width={'500'} height={'500'}/></div>
            </div>
            <br />
            <GrClose onClick={() => router.push('/')} className='text-xl lg:text-4xl rounded-full p-1  mx-auto hover:bg-gray-500 bg-white  cursor-pointer'/>
                
            
        </div>
    );
};

export default Popup1