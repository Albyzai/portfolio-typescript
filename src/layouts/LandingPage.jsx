import React from "react";
import LandingHero from "../components/hero/LandingHero";
import Projects from '../components/projects/Projects'
import Skills from '../components/skills/Skills'
import Blog from '../components/blog/Blog'
import Footer from '../components/footer/Footer'

const LandingPage = () => {
  return (
    <>
    <LandingHero />
    <Projects />
    <Skills />
    <Blog />
    <Footer />
    </>
  );
};

export default LandingPage;
