import React from 'react';
import backgroundVideo from '../assets/home.mp4'; // Ensure the correct path

const Home = () => {
  return (
    <div className="home-container">
      <video autoPlay muted loop className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="content">
        <h1 className="animate-title font-futura font-semibold text-xl">Welcome To The InterSection</h1>
        <h3 className="animate-line">Design Data Devics</h3>
      </div>
    </div>
  );
};

export default Home;
