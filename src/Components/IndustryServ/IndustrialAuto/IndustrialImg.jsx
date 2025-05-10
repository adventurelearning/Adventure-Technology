import React from 'react';

const IndustrialImg = () => {
  return (
    <div className='bg-black flex justify-center items-start p-4'>
      <div className='w-full max-w-7xl aspect-[12/6] sm:aspect-[16/5] lg:aspect-[16/4] overflow-hidden rounded-2xl'>
        <img 
          className='w-full h-full object-cover' 
          src='https://www.tessolve.com/wp-content/uploads/2022/06/embedded-system-micro.jpg' 
          alt='Industrial System'
        />
      </div>
    </div>
  );
};

export default IndustrialImg;
