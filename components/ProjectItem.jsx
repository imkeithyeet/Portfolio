
import React from 'react';
import Image from 'next/image';

const ProjectItem = ({ title, backgroundImg, projectUrl, description }) => {
  return (
    <div>
      <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#636393] to-[#5272b8]">
        <Image
          className="rounded-xl group-hover:opacity-10"
          src={backgroundImg}
          width="700"
          alt="/"
        />
        <div className="hidden title group-hover:block absolute top-[-7%] left-[50%] translate-x-[-50%] translate-y-[50%]">
          <h3 className="text-2xl text-white tracking-wider text-center">
            {title}
          </h3>
          <p className="pb-8 pt-10 text-white text-center">
            {description}
          </p>
        </div>
        {/* <Link href={projectUrl}>
            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-leg cursor'>More Info</p>
          </Link> */}
      </div>
    </div>
  );
};

export default ProjectItem;

