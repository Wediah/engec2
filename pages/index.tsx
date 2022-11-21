import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import Image from 'next/image'


export default function Home() {
  return (
    <div>
      <Head>
        <title>E N G E C</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <main className=''>
        <section>
        <nav className='py-10 z-10 fixed top-0  mb-12 flex justify-between bg-white text-black w-full '>
            <h1 className='px-4 py-2 font-burtons text-xl'>ENGEC</h1>
            <ul className='flex items-center '>
              <li className='px-4 py-2 hover:text-orange-500 ml-8'>
                <a href="#">Home</a>
              </li>
              <li className='px-4 py-2 hover:text-orange-500 ml-8'>
                <a href="#">Services</a>
              </li>
              <li className='px-4 py-2 hover:text-orange-500 ml-8'>
                <a href="#">Projects</a>
              </li>
              <li className='px-4 py-2 hover:text-orange-500 ml-8'>
                <a href="#">About us</a>
              </li >
              <li className='px-4 py-2 hover:text-orange-500 ml-8'>
                <a href="#">Contact us</a>
              </li>
            </ul>
          </nav>
        </section>
        <section className="first min-h-screen bg-black">

          <div className='text-left px-10 pt-80'>
            <div className="opacity-20">
            <Image
            src="/LegonE.jpg"
            alt="Legon House"
            layout="fill"
            objectFit="cover"
            />
            </div>
            
            <h1 className='text-9xl text-bold'>E N G E C</h1>
            <h4 className='text-2xl'>DESIGN - CONSULTANCY - CONSTRUCTION - PROJECT MANAGEMENT.</h4>
            <button className='hover:transition-transform hover:scale-90 px-4 py-2 pt-3 bg-orange-500 text-white rounded h-12 w-220'>More About Us</button>
            <button className='hover:transition-transform hover:scale-90 px-4 py-2 pt-3 bg-white text-orange-500 rounded h-12 w-220 ml-4' >Our Services</button>
          </div>
        </section>

        <section className='bg-white'>
          <h3 className='overline decoration-red-500 decoration-4 text-3xl text-black font-bold flex pt-20 text-left px-10'>Services We Offer;</h3>
          <div className='flex flex-row overflow-x-auto pt-20 h-80 overflow-y-hidden text-left px-10'>
            <div className='px-5 hover:transition-transform hover:scale-110'>
              
              <Image 
              src="/project-manager-icon.png" alt="project management"
              width={180}
              height={150}
               />
               <span className='text-md text-black flex'>Project Management</span>
              
            </div>
            <div className='px-5 hover:transition-transform hover:scale-110'>
              <Image
              src="/hook.png"
              width={180}
              height={150}
              alt="Building"
              />
              <span className='text-md text-black flex'>Design & Build</span>
            </div>
            <div className='px-5 hover:transition-transform hover:scale-110'>
              <Image
              src="/blueprint.png"
              width={180}
              height={150}
              alt="plan"
              />
              <span className='text-md text-black flex'>Architecture</span>
            </div>
            <div className='px-5 hover:transition-transform hover:scale-110'>
              <Image
              src="/bridge.png"
              width={180}
              height={150}
              alt="bridge"
              />
              <span className='text-md text-black flex'>Structural Engineering</span>
            </div>
            <div className='px-5 hover:transition-transform hover:scale-110'>
              <Image
              src="/electrical.png"
              width={180}
              height={150}
              alt="electrical"
              />
              <span className='text-md text-black flex'>Electrical Engineering</span>
            </div>
            <div className='px-5 hover:transition-transform hover:scale-110'>
              <Image
              src="/pipes.png"
              width={180}
              height={150}
              alt="plumbing"
              />
              <span className='text-md text-black flex'>Plumbing Services</span>
            </div>
            <div className='px-5 hover:transition-transform hover:scale-110'>
              <Image 
              src="/urban-planning.png"
              width={180}
              height={150}
              alt="planning"
              />
              <span className='text-md text-black flex'>Urban Planning</span>
            </div>
            <div className='px-5 hover:transition-transform hover:scale-110'>
              <Image
              src="/pressure.png"
              width={180}
              height={150}
              alt="pressure"
              />
              <span className='text-md text-black flex'>Hydraulic Modelling</span>
            </div>
            <div className='px-5 hover:transition-transform hover:scale-110'>
              <Image 
              src="/tower.png"
              width={180}
              height={150}
              alt="power"
              />
              <span className='text-md text-black flex'>Power Grid Substation Design</span>
            </div>
            <div className='px-5 hover:transition-transform hover:scale-110'>
              <Image
              src="/treatment.png"
              width={180}
              height={150}
              alt="water treatment plant"
              />
              <span className='text-md text-black flex'>Water Treatment Plant Design</span>
            </div>
          </div>
          <span className='text-md text-gray-800 flex pt-8 text-center px-10 font-bold leading-8'>
          And Real Estate Development, Civil Engineering Consultancy, Quantity Surveying, Project Cost Estimation, Project Audit, Project Planning, Filling/ Fuel Station Design, Swimming Pool Design & Construction, Ware Houses and Steel Buildings.
          </span>
        </section>

        <section className='bg-white'>
        <h3 className='overline decoration-red-500 decoration-4 text-3xl text-black font-bold flex pt-20 text-left px-10 '>Projects</h3>

        <div className='flex flex-row overflow-x-auto pt-20 h-120 overflow-y-hidden text-left px-10'>
          <div className=" rounded shadow-2xl px-5">
            <div className='w-80 pt-20 '>
              <Image
              src="/Eastern2.jpg"
              alt="Home at Dobro"
              width={800}
              height={600}
              />
            </div>

            <span className="text-black flex leading-8 font-bold pt-10 ">
              5 Bedroom House at Dobro Eastern Region for Mr. Koduah. <br />
              Scope: Design & Build
            </span>
          </div>
          <div className="rounded shadow-2xl px-5">
            <div className='w-80 pt-10'>
              <Image 
              src="/Labone.jpg"
              alt="Home at Labone"
              width={500}
              height={600}
              />
            </div>

            <span className="text-black flex leading-8 font-bold pt-10">
            5 Story Apartments at Labone. <br />
            Scope: Design & Rendering.
            </span>
          </div>
          <div className="rounded shadow-2xl px-5">
          <div className='w-80 pt-20'>
            <Image 
              src="/soga.jpg"
              alt="Home at Sogakope"
              width={500}
              height={600}
              />
          </div>
            <span className="text-black flex leading-8 font-bold pt-10">
            Proposed 4 Story Mission House Apartments at Sogakope. <br />
            Scope: Design & Cost Estimation.
            </span>
          </div>
          <div className="rounded shadow-2xl px-5">
            <div className='w-80 pt-20'>
            <Image 
            src="/bHills.jpg"
            alt="Home at Bonianor Hills"
            width={500}
            height={600}
            />
            </div>
          
            <span className="text-black flex leading-8 font-bold pt-10">
            2 Story Semi-Detached Apartments at Bortianor Hills. <br />
            Scope: Design & Construction Supervision.
            </span>
          </div>
          <div className="rounded shadow-2xl px-5">
            <div className='w-80 pt-5'>
            <Image 
            src="/Kwahu.jpg"
            alt="Home at Kwahu"
            width={500}
            height={600}
            />
            </div>
          
            <span className="text-black flex leading-8 font-bold pt-5">
            Proposed 6 Bedroom House at Kwahu-Nkwatia. <br />
            Scope: Complete Architecture & Structural Design.
            </span>
          </div>
          <div className="rounded shadow-2xl px-5">
            <div className='w-80 pt-20'>
            <Image 
            src="/Aburi2.jpg"
            alt="Home at Aburi"
            width={500}
            height={600}
            />
            </div>
         
            <span className="text-black flex leading-8 font-bold pt-10">
            Vacation Home at Aburi. <br />
            Scope: Design & Build
            </span>
          </div>
          <div className="rounded shadow-2xl px-5">
            <div className='w-80 pt-20'>
            <Image 
            src="/Afloa.jpg"
            alt="Home at Afloa"
            width={500}
            height={600}
            />
            </div>
          
            <span className="text-black flex leading-8 font-bold pt-10">
            Proposed Basic School Classroom Block at Afloa. <br />
             Scope: Architecture & Structural Design.
            </span>
          </div>
          <div className="rounded shadow-2xl px-5">
            <div className='w-80 pt-20'>
            <Image 
            src="/LegonE.jpg"
            alt="Home at East Legon"
            width={500}
            height={600}
            />
            </div>
          
            <span className="text-black flex leading-8 font-bold pt-10">
            4 Bedroom House at Ogbojo, East Legon. <br />
            Scope: Architectural and Structural Design
            </span>
          </div>
          <div className="rounded shadow-2xl px-5">
            <div className='w-80 pt-20'>
            <Image 
            src="/Dodowa3.jpg"
            alt="Home at Dodowa"
            width={500}
            height={600}
            />
            </div>
          
            <span className="text-black flex leading-8 font-bold pt-10">
            3 Bedroom House at Dodowa.<br />
            Scope: Design & Build.
            </span>
          </div>
          <div className="rounded shadow-2xl px-5">
            <div className='w-80 pt-20'>
            <Image 
            src="/Mampong4.jpg"
            alt="Home at Mampong"
            width={500}
            height={600}
            />
            </div>
          
            <span className="text-black flex leading-8 font-bold pt-10">
            5 Bedroom House at Akuapem- Mampong. <br /> 
            Scope: Design.
            </span>
          </div>
        </div>
        </section>

        <section className="bg-white">
          <div className="w-100 h-50">
            <Image 
            src="/Eastern5.jpg"
            width={6000}
            height={300}
            />
          </div>
          
          <div className='px-10'>
            <h3 className='overline decoration-red-500 decoration-4 text-3xl text-black font-bold flex pt-5 text-left '>Our Story</h3>
              <h1 className='text-sm text-bold  text-black pt-5 '>Vision.Build.Live</h1> <br />
              <h1 className='text-5xl text-bold text-black'>SPECIALIZING IN THE UNTHINKABLE.</h1>
          </div>
            
          
          <span className="text-md flex text-gray-600 text-center leading-8 px-10 pt-5">
          ENGEC is a multidisciplinary Construction and Consulting Firm that Specializes in Architecture, Civil & Environmental Engineering and Construction. 
          Since its inception as fully fledged company ENGEC as a group has designed and built many residential, commercial,industrial facilities across Ghana. 
          </span>
          
            
        </section>

        <section className="px-10 pt-40 ">
          <span className="font-bold text-5xl flex text-center">Lets Get Started With Your Dream Project Now.</span>

          <div className='flex flex-row pt-40 gap-10'>
            <div className="bg-white rounded p-10 w-3/5">
            <span className="text-3xl font-bold text-orange-500">Contact Us</span> <br />
              <span className="text-orange-500 pt-10 "> 
              
                0555071746, 0503456240, 
                0265918210, 0543387574<br/>
                kwabenakwakye@engec.com<br/>
                No.41 Gye Nyame Street, Taifa Accra- Ghana <br />
                 House No.4 Digital Address: GE-288-1184
              </span>
            </div>

            <div className='bg-orange-500 rounded p-10 w-3/5'>
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
          
          
                    
            
        </section>
        
        
      </main>

      
    </div>
  )
}
