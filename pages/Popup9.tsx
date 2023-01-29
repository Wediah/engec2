import React, {useState} from 'react'
import Image from 'next/image'
import {GrClose} from 'react-icons/gr'
import { useRouter } from 'next/router'


const Popup9= () => {
    const router = useRouter()


    return (
        <div className='min-h-screen pb-4 bg-white px-10 pt-5'>
            

            
            
            <div className='flex flex-col py-10 gap-10 lg:flex-row lg:flex-wrap justify-center'>
                <div ><Image alt="home1" src="/Soga.jpg" width={'800'} height={'500'}/></div>
                
            </div>
            <br />
            <GrClose onClick={() => router.push('/')} className='text-xl lg:text-4xl p-1 rounded-full mx-auto hover:bg-gray-300 bg-white  cursor-pointer'/>
                
            
        </div>
    );
};

export default Popup9