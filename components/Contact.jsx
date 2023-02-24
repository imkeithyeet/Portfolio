import Image from 'next/image';
import React from 'react';
import ContactImg from '../public/assets/contact.jpg';


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

            </div>

        </div>

        {/* right */}

            </div>
            </div>
        </div>
    );
}

export default Contact;
