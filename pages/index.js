import React from 'react'
import { Header, AnimatedCursor, HeroSection, About, AboutRight, AboutThird, Feature } from '../Components/Home'

const index = () => {
  return (
    <div>
      <AnimatedCursor/>
      <Header />
      <HeroSection/>
      <About/>
      <AboutRight/>
      <AboutThird/>
      <Feature/>
    </div>
  );
};

export default index