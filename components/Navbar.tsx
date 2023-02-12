import React, { useState } from "react"
import { Transition } from '@headlessui/react'
import { Link } from "react-scroll"
import Image from "next/image";
//import Link from 'next/link'



function Navbar () {
    const [isOpen, setIsOpen] = useState(false);
	return (
		<div>
			<nav className=" shadow-sm fixed w-full z-10 bg-white font-serif">
				<div className="w-full">
					<div className="flex items-center h-20 w-full">
						<div className="flex items-center mx-2  lg:mx-20  justify-between w-full">
							<Link
								activeClass="Home"
								to="home"
								smooth={true}
								offset={50}
								duration={500}
								
							>
								<div className="flex justify-center items-center flex-shrink-0 ">
									<Image 
										src="/engeclogo.png" alt="Logo" width={50} height={50}
									/>
									<h1 className=" font-bold text-xl cursor-pointer ml-1">
										<span className="text-[#1B3366]">EN</span>
										<span className="text-[#f6ab29]">GEC</span>
									</h1>
							    </div>
							</Link>
							
							<div className="hidden md:block">
								<div className="ml-10 flex items-baseline space-x-4">
									<Link
										activeClass="Home"
										to="home"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer text-[#1B3366] font-bold px-3 py-2 text-sm hover:bg-[#f6ab29] rounded-md hover:text-white"
									>
										Home
									</Link>
									<Link
										activeClass="about"
										to="about"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer hover:bg-[#f6ab29] text-[#1B3366] hover:text-white px-3 py-2 rounded-md text-sm font-bold"
									>
										About
									</Link>
									<Link
										activeClass="Services"
										to="services"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer hover:bg-[#f6ab29] text-[#1B3366] hover:text-white px-3 py-2 rounded-md text-sm font-bold"
									>
										Services
									</Link>

									<Link
										activeClass="projects"
										to="projects"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer hover:bg-[#f6ab29] text-[#1B3366] hover:text-white px-3 py-2 rounded-md text-sm font-bold"
									>
										Projects
									</Link>

									<Link
										activeClass="contact"
										to="contact"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer bg-[#f6ab29] text-white px-3 py-2 rounded-md text-sm font-bold hover:bg-[#1B3366]"
									>
										Contact
									</Link>
								</div>
							</div>
						</div>
						<div className="mr-10 flex md:hidden ">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="bg-[#f6ab29] inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-[#f6ab29] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#f6ab29] focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								{!isOpen ? (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								) : (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>

				<Transition
					show={isOpen}
					enter="transition ease-out duration-100 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					{(ref) => (
						<div className="md:hidden" id="mobile-menu">
							<div
								ref={ref}
								className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3"
							>
								<Link
									href="/home"
									activeClass="home"
									to="home"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-[#f6ab29] text-[#1B3366] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Home
								</Link>
								<Link
									href="/about"
									activeClass="about"
									to="about"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-[#f6ab29] text-[#1B3366] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									About
								</Link>

								<Link
									href="/projects"
									activeClass="projects"
									to="projects"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-[#f6ab29] text-[#1B3366] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Projects
								</Link>
								<Link
									href="/services"
									activeClass="services"
									to="services"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-[#f6ab29] text-[#1B3366] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Services
								</Link>

								<Link
									href="/contact"
									activeClass="contact"
									to="contact"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-[#f6ab29] text-[#1B3366] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Contact
								</Link>
							</div>
						</div>
					)}
				</Transition>
			</nav>
		</div>
	);
}

export default Navbar;
