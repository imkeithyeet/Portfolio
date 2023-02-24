import Image from 'next/image';
import React from 'react';
import ContactImg from '../public/assets/contact.jpg';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';



const Contact = () => {
    return (
        <div className='w-full lg:h-screen'>
            <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#4441a3]'>Contact</p>
            <h2 className='py-4'>Get In Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
        {/* Left */}
        <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full'>
                <div>
                    <Image 
                    className="rounded-xl hover:scale-105 ease-in duration-300"
                    src={ContactImg} 
                    width="400"
                    alt="/"
                    />
                </div>
                <div>
                    <h2 className='py-2'>Keith Ma</h2>
                    <p>Front End Developer</p>
                    <p className='py-4'>I am available to answers questions about my work or myself and for a full-time position. Contact me and let&apos;s talk</p>
                </div>
            </div>
            <div>
                <p className='uppercase pt-8'>Connect With Me</p>
                <div className='flex items-center justify-between py-4'>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <FaLinkedinIn/>
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <FaGithub/>
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <AiOutlineMail/>
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <BsFillPersonLinesFill/>
                        </div>
                </div>
            </div>

        </div>
        {/* right */}
            </div>
            </div>
        </div>
    );
}

export default Contact;
