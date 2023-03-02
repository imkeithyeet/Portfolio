import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineMail} from 'react-icons/ai'
import { BsMedium } from 'react-icons/bs';


const Main = () => {
    return (
        <div id="home" className="w-full h-screen text-center">
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                <h1 className="py-4 text-gray-700">
                    Hi, I&#39;m  <span className="text-[#49abcc]">Keith Ma</span>
                    </h1>
                    <h1 className="py-2 text-gray-700">
                        A Full Stack Web Developer
                    </h1>
                    <p className="py-4 text-gray-600 max-w-[70%] m-auto">
                        I&#39;m a full stack web developer specializing in programming websites and occasionally designing to meets the eye.
                        Currently, i&#39;m focused on building responsive front-end web applications while learning backend development as well.
                    </p>
                    <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <a href="https://www.linkedin.com/in/keith-ma/" target="_blank" rel="noopener noreferrer">
                         <FaLinkedinIn/>
                         </a>
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <a href="https://github.com/imkeithyeet" target="_blank" rel="noopener noreferrer">
                            <FaGithub/>
                            </a>
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <a href="mailto:keithchezzy@gmail.com" target="_blank" rel="noopener noreferrer">
                         <AiOutlineMail/>
                            </a>
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <a href="https://medium.com/@keithspexma" target="_blank" rel="noopener noreferrer">
                            <BsMedium/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
