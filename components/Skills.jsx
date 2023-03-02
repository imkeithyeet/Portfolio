import Image from 'next/image';
import React from 'react';

const Skills = () => {
    return (
        <div id="skills" className="w-full lg:h-screen p-2">
            <div className="max-w-[1240px] mex-auto flex flex-col justify-center h-full">
            <p className='text-xl tracking-widest uppercase text-[#4441a3]'>Skills</p>
            <h2 className='py-4'>What I Can Do</h2>
            <div className=" justify-center grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 justify-center items-center'>
                    <div className="m-auto">
                        <Image 
                        src="/assets/skills/html5.png" 
                        width="64" 
                        height="64" 
                        alt="/"
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h3>HTML</h3>
                    </div>
                </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 justify-center items-center'>
                    <div className="m-auto">
                        <Image 
                        src="/assets/skills/css.png" 
                        width="64" 
                        height="64" 
                        alt="/"
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h3>CSS</h3>
                    </div>
                </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 justify-center items-center'>
                    <div className="m-auto">
                        <Image 
                        src="/assets/skills/javascript.png" 
                        width="64" 
                        height="64" 
                        alt="/"
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h3>Javascript</h3>
                    </div>
                </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 justify-center items-center'>
                    <div className="m-auto">
                        <Image 
                        src="/assets/skills/React_Logo.png" 
                        width="200" 
                        height="60" 
                        alt="/"
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h3>React</h3>
                    </div>
                </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 justify-center items-center'>
                    <div className="m-auto">
                        <Image 
                        src="/assets/skills/Ruby_on_rails-Logo.png" 
                        width="200" 
                        height="64" 
                        alt="/"
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h3>Ruby on Rails</h3>
                    </div>
                </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 justify-center items-center'>
                    <div className="m-auto">
                        <Image 
                        src="/assets/skills/PostgreSQL-Logo.png" 
                        width="200" 
                        height="64" 
                        alt="/"
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h3>PostgreSQL</h3>
                    </div>
                </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 justify-center items-center'>
                    <div className="m-auto">
                        <Image 
                        src="/assets/skills/Adobe_Illustrator-Logo.png" 
                        width="200" 
                        height="64" 
                        alt="/"
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h3>Adobe Illustrator</h3>
                    </div>
                </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 justify-center items-center'>
                    <div className="m-auto">
                        <Image 
                        src="/assets/skills/Adobe_InDesign-Logo.png" 
                        width="200" 
                        height="64" 
                        alt="/"
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h3>Adobe InDesign</h3>
                    </div>
                </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 justify-center items-center'>
                    <div className="m-auto">
                        <Image 
                        src="/assets/skills/Adobe_XD-Logo.png" 
                        width="200" 
                        height="64" 
                        alt="/"
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h3>Adobe XD</h3>
                    </div>
                </div>
                </div>


            </div>
            </div>
            
        </div>
    );
}

export default Skills;
