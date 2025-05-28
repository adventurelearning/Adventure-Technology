import React from 'react';

const ManufacturingImg = () => {
  return (
    <div className='bg-black flex justify-center items-start p-2 sm:p-4'>
      <div className='w-full max-w-7xl aspect-[12/6] sm:aspect-[16/5] lg:aspect-[16/4] overflow-hidden rounded-2xl'>
        <img
          className='w-full h-full object-cover'
          src='https://img.freepik.com/free-photo/futuristic-technology-concept_23-2151908114.jpg?uid=R200981764&ga=GA1.1.1434543349.1747649132&semt=ais_hybrid&w=740'
          alt='Manufacturing'
        />
      </div>
    </div>
  );
};

export default ManufacturingImg;

