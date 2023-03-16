// import Image from 'next/image';
// // import Link from 'next/link';
// import React from 'react';

// const ProjectItem = ({title,backgroundImg,projectUrl}) => {
//     return (
//         <div>
//               <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#636393] to-[#5272b8]">
//                     <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} width="700" alt="/"/>
//                     <div className="hidden group-hover:block absolute top-[-7%] left-[50%] translate-x-[-50%] translate-y-[50%]">
//                         <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
//                         <p className='pb-4 pt-2 text-white text-center'>React JS With Ruby on Rails</p>
//                         {/* <Link href={projectUrl}>
//                             <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-leg cursor'>More Info</p>
//                         </Link> */}
//                     </div>
//                     </div> 
//         </div>
//     );
// }

// export default ProjectItem;
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
          <p className="pb-4 pt-2 text-white text-center">
            React JS With Ruby on Rails
          </p>
        </div>
        {description && (
          <div className="hidden description group-hover:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <p className="pb-4 pt-2 text-white text-center">{description}</p>
          </div>
        )}
        {/* <Link href={projectUrl}>
            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-leg cursor'>More Info</p>
          </Link> */}
      </div>
    </div>
  );
};

export default ProjectItem;

