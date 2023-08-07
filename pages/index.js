import React from 'react'
import { Header, AnimatedCursor, HeroSection, About } from '../Components/Home'

const index = () => {
  return (
    <div>
      <AnimatedCursor/>
      <Header />
      <HeroSection/>
      <About/>
    </div>
  );
};

export default index