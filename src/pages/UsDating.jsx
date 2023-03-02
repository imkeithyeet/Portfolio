import Image from 'next/image';
import React from 'react';
import usDatingImg from '../../public/assets/projects/usDating.jpg'



const UsDating = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>
            <Image className='absolute z-1 object-contain max-h-[400px]' width='100' src={usDatingImg} alt="/" />

                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Us Dating Match Website</h2>
                    <h3>React JS / Ruby on Rails</h3>
                </div>
                </div>
                <div>
                    <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                    <div className='col-span-4'>
                        <p>Project</p>
                        <h2>Overview</h2>
                    </div>

                    </div>
                </div>
            </div>

    );
}

export default UsDating;
