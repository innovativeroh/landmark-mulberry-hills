import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Roofing from '@/components/Roofing';
import Stats from '@/components/Stats';
import HeroService from '@/components/HeroService';
import Connectivity from '@/components/Connectivity';
import Distances from '@/components/Distances';
import ScrollBlock from '@/components/ScrollBlock';
import Timeline from '@/components/Timeline';
import Material from '@/components/Material';
import Strengthen from '@/components/Strengthen';
import Testimonial from '@/components/Testimonial';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';


export default function Home() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <Hero />
      <Roofing />
      <Stats />
      <HeroService />
      <Connectivity />
      <Distances />
      <ScrollBlock />
      <Timeline />
      <Material />
      <Strengthen />
      <Testimonial />
      <CTA />
      <Footer />
    </div>
  );
}
