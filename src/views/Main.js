import React from 'react'

import Nav from '../components/Nav';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import PortfolioSection from '../components/PortfolioSection';

import {Link} from 'react-router-dom';

class Main extends React.Component{
 
render() {
    const links = [
        {
            to: '#about',
            text: 'About',
            isHash: true
        },
        {
            to: '#skills',
            text: 'Skills',
            isHash: true
        },
        {
            to: '#portfolio',
            text: 'Portfolio',
            isHash: true
        }
    ]
    return (
        <div>
            <Nav links = {links}/>
            <AboutSection />
            <SkillsSection />
            <PortfolioSection />
        </div>
      )
  }
}

export default Main;
