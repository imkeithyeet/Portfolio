import Image from 'next/image';
import React from 'react';


const About = () => {
    return (
        <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[#4441a3]'>About</p>
                    <h2 className='py-4'>Who I Am</h2>
                    <p className='py-2 text-gray-600'>*Put in the hard work and you will see the results*</p>
                    <p className='py-2 text-gray-600'>I have always thought of going into the Software Engineering field, knowing I had a passion for and interest in programming and designing things to help change things for the better and benefit the world around me. After earning a BFA in visual art and working in the field, my work felt dull and I  yearned to make the move to something more sustainable and to learn something new.</p>
                   <p className='py-2 text-gray-600'>And that&#39;s when it happened: the spark of being curious about the tech field and how things function the way they do. Discovering code by playing around with HTML and CSS, I found a new passion that brought me the satisfaction of solving problems, debugging errors, and troubleshooting. 
                   </p>
                   <p className='py-2 text-gray-600'>My specialties include quickly learning new skills and programming languages, logical thinking, front end development and design, and understanding concepts in a fast paced environment. So far, I have knowledge in JavaScript, HTML, CSS, React, Adobe PhotoShop, Adobe Illustrator, Adobe InDesign, Adobe XD, and drawing by hand. 
                   </p>
                   <p className='py-2 text-gray-600'> <p className='py-2 text-gray-600'>If you&#39;re interested in learning more about my skills and experience, please don&#39;t hesitate to contact me with any questions. I&#39;d love to hear from you!
                   </p>
                   </p>
                   <p className='py-2 text-gray-600'>I have developed this website using Next.JS and Tailwind CSS.</p>
                   <a href="https://drive.google.com/file/d/1ymbL1p9oaFRKMIP_DnMXNXfI1i495mEv/view" target="_blank" rel="noopener noreferrer" className='py-2 text-blue-600 underline hover:bg-blue-100 '>Check out my Resume</a>

                </div>
                <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-3 hover:scale-105 ease-in duration-300">
                <Image className="rounded-xl" src="/assets/Profile.jpg" alt="Profile picture" width="400" height="50" />
                </div>
            </div>
        </div>
    );
}

export default About;
