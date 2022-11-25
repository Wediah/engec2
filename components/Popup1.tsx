import React, {useState} from 'react'
import Image from 'next/image'



const Popup1= () => {
    const [showModal, setShowModal] = useState(false);


    return (
        <div>
            <div>
                <button type="button" className="text-white bg-orange-500 p-3 rounded-md active:bg-black hover:bg-black shadow hover:shadow-lg" onClick={() => setShowModal(true)}>View more
                </button>
            </div>

            {/* First modal start*/}
            {showModal ? (
            <div className='mt-10 flex justify-center items-center flex-col w-100 rounded-lg shadow-xl h-auto p-2 bg-black'>
                <div className='flex flex-row overflow-x-scroll'>
                    <Image alt="home1" src="/Eastern1.jpg" width={400} height={400} objectFit="contain"/>
                    <Image alt="home1" src="/Eastern2.jpg" width={400} height={400} objectFit="contain"/>
                    <Image alt="home1" src="/Eastern3.jpg" width={400} height={400} objectFit="contain"/>
                    <Image alt="home1" src="/Eastern4.jpg" width={400} height={400} objectFit="contain"/>
                    <Image alt="home1" src="/Eastern5.jpg" width={400} height={400} objectFit="contain"/>
                    <Image alt="home1" src="/Eastern6.jpg" width={400} height={400} objectFit="contain"/>
                    <Image alt="home1" src="/Eastern7.jpg" width={400} height={400} objectFit="contain"/>
                    <Image alt="home1" src="/Eastern8.jpg" width={400} height={400} objectFit="contain"/>
                </div>
                <br />
                <button className="text-white bg-orange-500 p-3 rounded-md active:bg-black hover:bg-orange-700 shadow hover:shadow-lg" onClick={() => setShowModal(false)}>Close</button>
            </div>) :null}
        </div>
    );
};

export default Popup1