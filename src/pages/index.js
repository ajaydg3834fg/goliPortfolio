import * as React from "react"
import Hero from "../components/Hero";
import About from "../components/About";
import Programs from "../components/Programs";
import SpaceSection from "../components/SpaceSection";
import ProgressSection from "../components/ProgressSection";
import PricingSection from "../components/PricingSection";
import FaqSection from "../components/FaqSection";
import ContactSection from "../components/ContactSection";
import  SiteFooter  from "../components/SiteFooter";
import Header from "../components/Header";


export default function Home() {
  return<>
  <Header/>
      <Hero/>  
      <About/>
      <Programs/>
      <SpaceSection/>
      <ProgressSection/>
      <PricingSection/>
      <FaqSection/>
      <ContactSection/>
      <SiteFooter/>


      
  </> 
}
