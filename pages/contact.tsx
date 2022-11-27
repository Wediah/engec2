import React from 'react'
import 'reactjs-popup/dist/index.css'
import { AiFillHeart } from 'react-icons/ai'
import { Element } from 'react-scroll'

function Contact () {
    return (
        <Element id="contact" name='contact'>
            <section className="px-10 pt-40 bg-black">
          <span className="font-bold text-5xl flex text-center text-white">Lets Get Started With Your Dream Project Now.</span>

          <div className=' pt-40 gap-10 md:flex md:flex-row '>
            <div className="bg-white rounded p-10 w-3/5 mb-8">
              <span className="text-3xl font-bold text-orange-500">Contact Us</span> <br />
              <span className="text-orange-500 pt-10 "> 
              
                0555071746, 0503456240, 
                0265918210, 0543387574<br/>
                kwabenakwakye@engec.com<br/>
                No.41 Gye Nyame Street, Taifa Accra- Ghana <br />
                 House No.4 Digital Address: GE-288-1184
              </span>
            </div>

            <div className='bg-orange-500 rounded p-10 w-3/5 mb-8'>
              <span className="text-3xl font-bold">Pitch Us</span> <br />
              <span>
                hello, <br/>
                my name is..... and my email address is.... and I would like to discuss about.....<br/>
                <div className='pt-5'>
                <a href="mailto:groupengec@gmail.com"><button className='bg-white text-black text-sm font-bold w-20 h-7 rounded '>Send</button></a>
                </div>
                
              </span>
            </div>

          </div>
          
          <span className="text-white text-sm">COPYRIGHT © 2022  ENGEC ALL RIGHTS RESERVED</span>
          <a  className="text-white text-sm float-right flex  " href="https://wediah.github.io/portifolio-website/">Made with <AiFillHeart className='text-xl text-red-700'/> by Emmanuel wediah</a> 
                    
            
        </section>
        </Element>
    );
}

export default Contact;