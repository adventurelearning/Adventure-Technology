import React from 'react';

const AutomotiveImg = () => {
  return (
    <div className='bg-black flex justify-center items-center p-4'>
      <div className='relative w-full max-w-7xl aspect-[12/6] sm:aspect-[16/5] lg:aspect-[16/4] overflow-hidden rounded-2xl'>
        <img
          className='absolute top-0 left-0 w-full h-full object-cover'
          src='https://www.parasoft.com/wp-content/uploads/2020/06/Banner-Automotive-1.jpg'
          alt='Automotive Industry'
        />
      </div>
    </div>
  );
}

export default AutomotiveImg;
