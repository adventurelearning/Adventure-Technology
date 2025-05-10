import React from 'react';

const AgricultureImg = () => {
  return (
    <div className='bg-black flex justify-center items-start p-4'>
      <div className='w-full max-w-7xl aspect-[12/6] sm:aspect-[16/5] lg:aspect-[16/4] overflow-hidden rounded-2xl'>
        <img 
          className='w-full h-full object-cover' 
          src='https://media.licdn.com/dms/image/v2/C4D12AQFY2Kaw21mGZg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1636993363139?e=2147483647&v=beta&t=mZIV8EidyTwln1VtZmyMEvMzDUw2qW5NWHNT-29FZKA' 
          alt='Books vs Technology in Education'
        />
      </div>
    </div>
  );
};

export default AgricultureImg;
