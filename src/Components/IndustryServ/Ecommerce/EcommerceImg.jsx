import React from 'react';

const EcommerceImg = () => {
  return (
    <div className='bg-black flex justify-center items-start p-4'>
      <div className='w-full max-w-7xl aspect-[12/6] sm:aspect-[16/5] lg:aspect-[16/4] overflow-hidden rounded-2xl'>
        <img 
          className='w-full h-full object-cover' 
          src='https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/6d98a428adf7a48f3eadc55d955ee2272a4146d3' 
          alt='Ecommerce Concept'
        />
      </div>
    </div>
  );
};

export default EcommerceImg;
