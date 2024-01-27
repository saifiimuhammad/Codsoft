import React from 'react'
import '../style.css';
import Breaker from '../Breaker';
import HomeSection from '../HomeSection';
import InfiniteMarquee from '../InfiniteMarquee';
import ProjectSection from '../ProjectSection';
import AboutSection from '../AboutSection';
import ContactSection from '../ContactSection';

function Main(props) {

  return (
    <>
      <Breaker />
      <HomeSection handleTitleChange={props.handleTitleChange} />
      <Breaker />
      <InfiniteMarquee/>
      <Breaker />
      <ProjectSection id="projects" />
      <Breaker />
      <AboutSection id="about" />
      <Breaker spaceValue='10rem' />
      <ContactSection handleTitleChange={props.handleTitleChange} />
      <Breaker spaceValue='10rem' />
    </>
  )
}

export default Main
