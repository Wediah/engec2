import React from 'react'
import 'reactjs-popup/dist/index.css'
import { AiFillHeart, AiFillTwitterCircle } from 'react-icons/ai'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { GoLocation } from 'react-icons/go'
import { GrLocationPin } from 'react-icons/gr'
import { AiOutlineMail } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillTwitterSquare } from 'react-icons/ai'
import { Element } from 'react-scroll'

function Contact () {
    return (
        <Element id="contact" name='contact'>
            <section className="px-10 pt-40 bg-black">
          <span className="font-bold text-5xl flex text-center text-white ">Lets Get Started With Your Dream Project Now.</span>

          <div className=' pt-40 gap-10 md:flex md:flex-row '>
            <div className="bg-white rounded p-10 w-5/5 mb-8">
              <span className="text-3xl font-bold text-orange-500">Contact Us</span> <br />
              <span className="text-orange-500 pt-5 "> 
              
                <BsFillTelephoneFill className='text-xl text-black mr-1'/>0555071746, 0503456240, 
                0265918210, 0543387574<br/>
                <AiOutlineMail className='text-xl text-black mr-1'/>groupengec@gmail.com<br/>
                <GoLocation className='text-xl text-black mr-1'/>No.41 Gye Nyame Street, Taifa Accra- Ghana <br />
                <GrLocationPin className='text-xl text-black  mr-1'/>House No.4 Digital Address: GE-288-1184 <br />
                <span className='text-3xl flex '>
                <AiFillLinkedin className=" hover:text-orange-300" />
                <AiFillInstagram className=" hover:text-orange-300" />
                <AiFillFacebook className=" hover:text-orange-300"  />
                <AiFillTwitterSquare className=" hover:text-orange-300" />
                </span>
                
              </span>
            </div>

            <div className='bg-orange-500 rounded p-10 w-5/5 mb-8'>
              <span className="text-3xl font-bold">Pitch Us</span> <br />
              <span className='pt-10'>
                hello, <br/>
                my name is..... and my email address is.... and I would like to discuss about.....<br/>
                <div className='pt-5'>
                <a href="mailto:groupengec@gmail.com"><button className='bg-white text-black text-sm font-bold w-20 h-7 rounded '>Send</button></a>
                </div>
                
              </span>
            </div>

            <div >
            <iframe className='w-5/5 rounded mb-6' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.341715655885!2d-0.24866048559828896!3d5.663625434133271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9ec10dd738c5%3A0x5cb22c036d8f0df1!2sHouse%20No.4%2C%2041%20Gye%20Nyame%20St%2C%20Taifa!5e0!3m2!1sen!2sgh!4v1669625155949!5m2!1sen!2sgh" width="450" height="250"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

          </div>
          
          <span className="text-white text-sm">COPYRIGHT © 2022  ENGEC ALL RIGHTS RESERVED</span>
          <a  className="text-white text-sm float-right flex  " href="https://wediah.github.io/portifolio-website/">Made with <AiFillHeart className='text-xl text-red-700'/> by Emmanuel wediah</a> 
                    
            
        </section>
        </Element>
    );
}

export default Contact;