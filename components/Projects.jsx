import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import usDatingImg from '../public/assets/projects/usDating.jpg'
import BirdViewImg from '../public/assets/projects/Birdview.jpg'

import ProjectItem from './ProjectItem';

const Projects = () => {
    return (
        <div className='w-full'>
            <div className='max-w-[1250px] mx-auto px-2 py-16'>
                <p className="text-xl tracking-widest uppercase text-[#4441a3]">Projects</p>
                <h2 className="py-4">What I&apos;ve Built</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <ProjectItem 
                  title='Us Dating App Website'  
                  backgroundImg={usDatingImg} 
                  projectUrl="/Us"
                  />
                   <ProjectItem 
                  title='BirdView House Listing'  
                  backgroundImg={BirdViewImg}
                  projectUrl="/Us"
                  />
                </div>
            </div> 
        </div>
    );
}

export default Projects;
