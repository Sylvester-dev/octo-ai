import React from 'react'
import { Header, AnimatedCursor, HeroSection, About, AboutRight, AboutThird, Feature, Faq, Info, Footer, Price, Service } from '../Components/Home'

const index = () => {
  return (
    <div>
      <AnimatedCursor/>
      <Header />
      <HeroSection/>
      <Service/>
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