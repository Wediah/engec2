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
import { SiGmail } from 'react-icons/si'

function Contact () {
    return (
        <Element id="contact" name='contact'>
        <div className="px-10 pt-40  w-full bg-black">

          <span className="font-bold text-5xl flex text-center text-white">Lets Get Started With Your Dream Project Now.</span>

          
            <div className=" rounded pt-10 mb-8 p-10">
              <span className="text-3xl font-bold text-orange-500 ">Contact Us</span> <br />
              <div className="text-white "> 
              
                <div className='flex pt-3'><BsFillTelephoneFill className='text-xl text-white mr-1'/>0555071746, 0503456240, 
                0265918210, 0543387574</div><br/>
                <div className='flex'><AiOutlineMail className='text-xl text-white mr-1'/>groupengec@gmail.com</div><br/>
                <div className='flex'><GoLocation className='text-xl text-white mr-1'/>No.41 Gye Nyame Street, Taifa Accra- Ghana</div> 
                <div className='flex'><GrLocationPin className='text-xl text-white  mr-1'/>House No.4 Digital Address: GE-288-1184</div> <br />
                <span className='text-4xl flex justify-center'>
                <a href="https://www.linkedin.com/in/engec-group-794298259"><AiFillLinkedin className=" hover:text-orange-500" /></a>
                <a href='https://instagram.com/engec_group?igshid=ZDdkNTZiNTM='><AiFillInstagram className=" hover:text-orange-500" /></a>
                <a href='https://www.facebook.com/profile.php?id=100084279907473&mibextid=ZbWKwL'><AiFillFacebook className=" hover:text-orange-500"  /></a>
                <a href='https://twitter.com/engecgroup' ><AiFillTwitterSquare className=" hover:text-orange-500" /></a>
                <a href="mailto:groupengec@gmail.com"><SiGmail  className=" hover:text-orange-500"/></a>
                </span>
                
              </div>
            </div>

          
          <span className="text-black text-sm">COPYRIGHT © 2022  ENGEC ALL RIGHTS RESERVED</span>
          <a  className="text-black text-sm float-right flex  " href="https://wediah.github.io/portifolio-website/">Made with <AiFillHeart className='text-xl text-red-700'/> by Emmanuel wediah</a> 
                    
            
        </div>
        </Element>
    );
}

export default Contact;