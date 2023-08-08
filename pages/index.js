import React from 'react'
import { Header, AnimatedCursor, HeroSection, About, AboutRight, AboutThird, Feature, Faq } from '../Components/Home'

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
      <Faq/>
    </div>
  );
};

export default index