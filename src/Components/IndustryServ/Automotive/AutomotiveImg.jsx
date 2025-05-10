import React from 'react';

const AutomotiveImg = () => {
  return (
    <div className='bg-black flex justify-center items-center p-4'>
      <div className='relative w-full max-w-6xl rounded-2xl overflow-hidden' style={{ paddingBottom: '56.25%' }}>
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