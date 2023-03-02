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
                    <p className='py-2 text-gray-600'>Hello! I&#39;m a full stack developer based in Los Angeles, California, with a passion for creating beautiful and functional websites. With a background in design and specialization in front-end development, I bring a unique perspective to every project I work on. I recently graduated from Flatiron BootCamp as a full stack development student, where I honed my skills in programming, database management, and more.</p>
                   <p className='py-2 text-gray-600'>As you explore my portfolio, you&#39;ll see examples of my work in front-end development, including projects that showcase my expertise in HTML, CSS, JavaScript, React, and Ruby on Rails. I&#39;m also well-versed in back-end development and have experience with database technologies like MySQL.
                   </p>
                   <p className='py-2 text-gray-600'>  <p className='py-2 text-gray-600'>If you&#39;re interested in learning more about my skills and experience, please don&#39;t hesitate to contact me with any questions. I&#39;d love to hear from you!
                   </p>
                   </p>
                   <p className='py-2 text-gray-600'>I have developed this website using Next.JS and Tailwind CSS.</p>
                   <a href="https://drive.google.com/file/d/1jlMmtwP_VDhn4Br5EioNwRlh81yUberV/view" target="_blank" rel="noopener noreferrer" className='py-2 text-gray-600 underline '>Check out my Resume</a>

                </div>
                <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                <Image className="rounded-xl" src="/assets/Profile.jpg" alt="Profile picture" width="400" height="50" />
                </div>
            </div>
        </div>
    );
}

export default About;
