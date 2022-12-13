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
        <div className="px-10 pt-40  bg-black">

          <span className="font-bold text-5xl flex text-center text-white">Lets Get Started With Your Dream Project Now.</span>

          
            <div className=" rounded pt-10 mb-8 p-10">
              <span className="text-3xl fonthover:transition hover:-translate-y-2 duration-300 delay-150 ">Contact Us</span> <br />
              <div className="text-white gap-5"> 
              
                <div className='flex pt-3 gap-2'><BsFillTelephoneFill className='text-xl text-white mr-1'/>0555071746, 0503456240, 
                0265918210, 0543387574</div><br/>
                <div className='flex'><AiOutlineMail className='text-xl text-white mr-1'/>info@engecgroup.xyz</div><br/>
                <div className='flex'><GoLocation className='text-xl text-white mr-1'/>No.41 Gye Nyame Street, Taifa Accra- Ghana</div> 
                <div className='flex'><GrLocationPin className='text-xl text-white  mr-1'/>House No.4 Digital Address: GE-288-1184</div> <br />
                <span className='text-4xl flex justify-center'>
                <a href="https://www.linkedin.com/in/engec-group-794298259"><AiFillLinkedin className=" hover:transition hover:-translate-y-2 duration-300 delay-150" /></a>
                <a href='https://instagram.com/engec_group?igshid=ZDdkNTZiNTM='><AiFillInstagram className=" hover:transition hover:-translate-y-2 duration-300 delay-150" /></a>
                <a href='https://www.facebook.com/profile.php?id=100084279907473&mibextid=ZbWKwL'><AiFillFacebook className=" hover:transition hover:-translate-y-2 duration-300 delay-150"  /></a>
                <a href='https://twitter.com/engecgroup' ><AiFillTwitterSquare className=" hover:transition hover:-translate-y-2 duration-300 delay-150" /></a>
                <a href="mailto:info@engecgroup.xyz"><AiOutlineMail  className=" hover:transition hover:-translate-y-2 duration-300 delay-150"/></a>
                </span>
                
              </div>
            </div>

          
          
                    
            
        </div>
        <div className='px-10 text-white mb-2'>
          <span className=" text-sm">COPYRIGHT © 2022  ENGEC ALL RIGHTS RESERVED</span>
          <a  className=" text-sm float-right flex  " href="https://myportfolio-beta-rouge.vercel.app/">Made with <AiFillHeart className='text-xl text-red-700'/> by Emmanuel wediah</a> 
        </div>
        </Element>
    );
}

export default Contact;