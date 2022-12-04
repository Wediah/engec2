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
import aburi from '../public/Aburi1.jpg'

function Contact () {
    return (
        <Element id="contact" name='contact'>
        <section className="px-10 pt-40  w-full">

          <span className="font-bold text-5xl flex text-center text-black ">Lets Get Started With Your Dream Project Now.</span>

          <div className=' pt-40 gap-10 md:flex md:flex-row '>
            <div className="bg-white rounded pt-1 w-5/5 mb-8">
              <span className="text-3xl font-bold text-orange-500">Contact Us</span> <br />
              <span className="text-black  "> 
              
                <div className='flex'><BsFillTelephoneFill className='text-xl text-black mr-1'/>0555071746, 0503456240, 
                0265918210, 0543387574</div><br/>
                <div className='flex'><AiOutlineMail className='text-xl text-black mr-1'/>groupengec@gmail.com</div><br/>
                <div className='flex'><GoLocation className='text-xl text-black mr-1'/>No.41 Gye Nyame Street, Taifa Accra- Ghana</div> <br />
                <div className='flex'><GrLocationPin className='text-xl text-black  mr-1'/>House No.4 Digital Address: GE-288-1184</div> <br />
                <span className='text-4xl flex '>
                <a href="https://www.linkedin.com/in/engec-group-794298259"><AiFillLinkedin className=" hover:text-orange-300" /></a>
                <a href='https://instagram.com/engec_group?igshid=ZDdkNTZiNTM='><AiFillInstagram className=" hover:text-orange-300" /></a>
                <a href='https://www.facebook.com/profile.php?id=100084279907473&mibextid=ZbWKwL'><AiFillFacebook className=" hover:text-orange-300"  /></a>
                <a href='https://twitter.com/engecgroup' ><AiFillTwitterSquare className=" hover:text-orange-300" /></a>
                </span>
                
              </span>
            </div>

            <div className='bg-orange-500 rounded p-10 w-5/5 mb-8'>
              <span className="text-3xl font-bold">Pitch Us</span> <br />
              <span>
                <span className='flex pt-10'>
                hello, <br/>
                my name is.............. and my email address is......... and I would like to discuss about............<br/>
                </span>
                
                <div className='pt-10'>
                <a href="mailto:groupengec@gmail.com"><button className='bg-white text-black text-sm font-bold w-20 h-7 rounded '>Mail us</button></a>
                </div>
                
              </span>
            </div>

           

          </div>
          
          <span className="text-black text-sm">COPYRIGHT © 2022  ENGEC ALL RIGHTS RESERVED</span>
          <a  className="text-black text-sm float-right flex  " href="https://wediah.github.io/portifolio-website/">Made with <AiFillHeart className='text-xl text-red-700'/> by Emmanuel wediah</a> 
                    
            
        </section>
        </Element>
    );
}

export default Contact;