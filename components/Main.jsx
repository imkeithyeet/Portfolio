import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs';


const Main = () => {
    return (
        <div className="w-full h-screen text-center">
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                <p className="uppercase txt-sm tracking-widest text-gray-600">Feel amazing while using it</p>
                <h1 className="py-4 text-gray-700">
                    Hi, I&#39;m  <span className="text-[#49abcc]">Keith Ma</span>
                    </h1>
                    <h1 className="py-2 text-gray-700">
                        A Full Stack Web Developer
                    </h1>
                    <p className="py-4 text-gray-600 max-w-[70%] m-auto">
                        I&#39;m a full stack web developer specializing in programming websites and occasionally designing to meets the eye .
                        Currently, i&#39;m focused on building responsive front-end web applications while learning backend development as well.
                    </p>
                    <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
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
        </div>
    );
}

export default Main;