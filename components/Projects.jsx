import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import usDatingImg from '../public/assets/projects/usDating.jpg'

const Projects = () => {
    return (
        <div className='w-full'>
            <div className='max-w-[1250px] mx-auto px-2 py-16'>
                <p className="text-xl tracking-widest uppercase text-[#4441a3]">Projects</p>
                <h2 className="py-4">What I&apos;ve Built</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#636393] to-[#5272b8]">
                    <Image className='rounded-xl group-hover:opacity-10' src={usDatingImg} width="700" alt="/"/>
                    <div className="hidden group-hover:block">
                        <h3>Us Dating App Website</h3>
                        <p>React JS With Ruby on Rails</p>
                        <Link href='/'>
                            <p>More Info</p>
                        </Link>
                    </div>
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default Projects;
