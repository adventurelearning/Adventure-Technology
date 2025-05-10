import React from 'react';

const SaaSImg = () => {
  return (
    <div className='bg-black flex justify-center items-start p-4'>
      <div className='w-full max-w-7xl aspect-[12/6] sm:aspect-[16/5] lg:aspect-[16/4] overflow-hidden rounded-2xl'>
        <img 
          className='w-full h-full object-cover' 
          src='https://img.freepik.com/free-photo/saas-concept-collage_23-2149399280.jpg?t=st=1746446834~exp=1746450434~hmac=fe73fc19f698e7c170aa5791658a67225bbd75f86ad0b41a0719344cf2ff8d14&w=826' 
          alt='SaaS Concept'
        />
      </div>
    </div>
  );
};

export default SaaSImg;
