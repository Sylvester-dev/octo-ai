import React from 'react'
import { Header, AnimatedCursor, HeroSection, About, AboutRight, AboutThird } from '../Components/Home'

const index = () => {
  return (
    <div>
      <AnimatedCursor/>
      <Header />
      <HeroSection/>
      <About/>
      <AboutRight/>
      <AboutThird/>
    </div>
  );
};

export default index