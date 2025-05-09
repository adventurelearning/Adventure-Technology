import React from 'react';

const EducationImg = () => {
  return (
    <div className='bg-black flex justify-center items-start p-4'>
      <div className='w-full max-w-7xl aspect-[12/6] sm:aspect-[16/5] lg:aspect-[16/4] overflow-hidden rounded-2xl'>
        <img 
          className='w-full h-full object-cover' 
          src='https://img.freepik.com/free-photo/colleagues-using-laptops-notebooks-learning-study-session_23-2149285424.jpg?t=st=1746268774~exp=1746272374~hmac=b9c20d8195e5e4d63f64e0962251c6f85858bb21b97f4c626c2b445b642e5886&w=996' 
          alt='Books vs Technology in Education'
        />
      </div>
    </div>
  );
}

export default EducationImg;
