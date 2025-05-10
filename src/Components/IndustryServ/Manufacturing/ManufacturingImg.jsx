import React from 'react';

const ManufacturingImg = () => {
  return (
    <div className='bg-black flex justify-center items-start p-2 sm:p-4'>
      <div className='w-full max-w-7xl aspect-[12/6] sm:aspect-[16/5] lg:aspect-[16/4] overflow-hidden rounded-2xl'>
        <img
          className='w-full h-full object-cover'
          src='https://img.freepik.com/free-photo/solar-panel-plant-manager-showing-engineer-how-develop-prototypes_482257-119875.jpg?t=st=1746444492~exp=1746448092~hmac=62ba9a1c23971add29a92e87b7d2264847e9fb9c695cf9304e21e111ac1d322e&w=1380'
          alt='Manufacturing'
        />
      </div>
    </div>
  );
};

export default ManufacturingImg;

