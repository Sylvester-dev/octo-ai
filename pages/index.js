import React from 'react'
import { Header, AnimatedCursor, HeroSection, About, AboutRight, AboutThird, Feature, Faq, Info, Footer, Price } from '../Components/Home'

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
      <Price/>
      <Faq/>
      <Info/>
      <Footer/>
    </div>
  );
};

export default index