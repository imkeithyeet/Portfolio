import React from 'react';
import usDatingImg from '../public/assets/projects/usDating.jpg'
import BirdViewImg from '../public/assets/projects/Birdview.jpg'
import teslaCloneImg from '../public/assets/projects/teslaClone.jpg'
import typeScriptImg from '../public/assets/projects/typeScript.jpg'


import ProjectItem from './ProjectItem';

const Projects = () => {
    return (
        <div id="projects" className='w-full'>
            <div className='max-w-[1250px] mx-auto px-2 py-16'>
                <p className="text-xl tracking-widest uppercase text-[#4441a3]">Projects</p>
                <h2 className="py-4">What I&apos;ve Built</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <ProjectItem 
                  title='Us Dating App Website'  
                  backgroundImg={usDatingImg} 
                  projectUrl="/UsDating"
                  description="React.JS +  Ruby on Rails"
                  />
                   <ProjectItem 
                  title='BirdView House Listing'  
                  backgroundImg={BirdViewImg}
                  projectUrl="/BirdViewHouseListing"
                  description="React.JS + Ruby on Rails"
                  />
                    <ProjectItem 
                  title='Tesla Website Clone'  
                  backgroundImg={teslaCloneImg}
                  projectUrl="/TeslaWebsiteClone"
                  description="Next.JS + TailWind CSS"
                  />
                  <ProjectItem 
                  title='LearnToCode'  
                  backgroundImg={typeScriptImg}
                  projectUrl="/TeslaWebsiteClone"
                  description="Next.JS + TypeScript + NextUI"
                  />
                </div>
            </div> 
        </div>
    );
}

export default Projects;
