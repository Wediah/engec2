import React, {useEffect} from 'react'
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
import AOS from 'aos'
import 'aos/dist/aos.css'

function Contact () {

  useEffect(()=>{
    AOS.init({offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
      once:true});
  },[])

    return (
        <Element id="contact" name='contact'>

        <div  className=" bg-white cursor-default">
          <div className=" bg-no-repeat  bg-cover bg-center  bg-black  " style={{ backgroundImage: 'url(Dodowa1.jpg)'}}>
              <div className='lg:pt-48 pt-20 lg:pb-40 pb-20 lg:px-10 px-2 backdrop-brightness-50'>    
                <div className="font-bold text-2xl lg:text-6xl text-center text-white font-serif">Lets Get Started <br/> With Your Dream Project Now!</div>
              </div>
          </div>
        
          

            

            
            
          <div className="text-white lg:flex"> 
            <div className='bg-[#f6ab29] p-5 lg:w-1/2'>
              <h1 className='lg:text-4xl text-2xl font-bold'>Contact Us</h1>
              <div className='flex pt-3 align-middle  items-center '><BsFillTelephoneFill className='text-xl text-white mr-2 '/>+233 55 507 1746, +233 50 345 6240, <br /> 
              +233 26 591 8210, +233 54 338 7574 <br /> +233 50 676 0395</div><br/>
              <div className='flex items-center '><AiOutlineMail className='text-xl justify-center mr-2 '/>groupengec@gmail.com</div><br/>
              <div className='flex items-center'><GoLocation className='text-xl mr-2'/>No.41 Gye Nyame Street, Taifa Accra- Ghana <br /> House No.4 Digital Address: GE-288-1184</div> 
            </div>
            <div className='bg-[#c88e2a] p-5 lg:w-1/2'>
              <h1 className='lg:text-4xl text-2xl font-bold'>Pitch Us</h1>
              <p className=' pt-3'>Do you want to start a new project? <br />
              Do you want to make some renovations? <br />
              We are always available and happy to hear from you!
              </p>
              <a href="https://wa.me/+233555071746"><button className='bg-white p-2 text-black font-bold text-sm rounded-sm mt-5'>Send us a message </button></a>
              <span className='text-4xl pt-2 flex justify-center text-white'>
                <a href="https://www.linkedin.com/in/engec-group-794298259"><AiFillLinkedin className=" hover:transition hover:-translate-y-2 duration-300 delay-150" /></a>
                <a href='https://instagram.com/engec_group?igshid=ZDdkNTZiNTM='><AiFillInstagram className=" hover:transition hover:-translate-y-2 duration-300 delay-150" /></a>
                <a href='https://www.facebook.com/profile.php?id=100084279907473&mibextid=ZbWKwL'><AiFillFacebook className=" hover:transition hover:-translate-y-2 duration-300 delay-150"  /></a>
                <a href='https://twitter.com/engecgroup' ><AiFillTwitterSquare className=" hover:transition hover:-translate-y-2 duration-300 delay-150" /></a>
                <a href="mailto:groupengec@gmail.com"><AiOutlineMail  className=" hover:transition hover:-translate-y-2 duration-300 delay-150"/></a>
              </span>
            </div>
            <div className='lg:w-1/2 bg-white '>
              <iframe className='w-full lg:w-full h-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.3416125730996!2d-0.24866914958829445!3d5.663640434111919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9ec10dd738c5%3A0x92e94feae4ee45a6!2s41%20Gye%20Nyame%20St%2C%20Taifa!5e0!3m2!1sen!2sgh!4v1673648825604!5m2!1sen!2sgh"    loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
              
            
        </div>
        
        </Element>
    );
}

export default Contact;