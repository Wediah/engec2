import Head from 'next/head'
import React from 'react'
import 'reactjs-popup/dist/index.css'
import Navbar from '../components/Navbar'
import Homepage from './homepage'
import Services from './services'
import Projects from './projects'
import Contact from './contact'
import About from './about'




export default function Home() {
  return (
    <div>
      <Head>
        
        <title>E N G E C</title>
        <meta name="description" content="initail-scale=1.0, width=device-width" />
        <link rel="icon" href="/Layer 23.png" />

      </Head>

      <main className='font-burtons'>
        <Navbar/>
        <Homepage/>
        <About/>
        <Services/>
        <Projects/>
        <Contact />
      </main>

    </div>
  )
}
