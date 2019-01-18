import React from 'react'
import streamrimgsm from '../assets/streamer/streamer1-sm.jpg';
import forumimgsm from '../assets/forum/forum1-sm.jpg';
import newsagimgsm from '../assets/news-aggregator/news-aggregator1-sm.jpg';
import {Link} from 'react-router-dom';

class Main extends React.Component{
  
  constructor() {
      super();
      
      this.state = {
          skillAnimation: false
      }
      
      this.scroll = this.scroll.bind(this)
  }

  componentDidMount() {
      window.addEventListener('scroll', this.scroll)
  }
  
  componentWillUnmount() {
      window.removeEventListener('scroll', this.scroll)
  }
  
  scroll(e){
    if (window.pageYOffset > 450 && window.pageYOffset< 1200) {
        this.setState({
            skillAnimation: true
        })
    }
  }
  
render() {
      
    return (
        <div>
            <nav className = 'nav'>
                <a href = '#about'>About</a>
                <a href = '#skills'>Skills</a>
                <a href = '#portfolio'>Portfolio</a>
            </nav>
           
          
            
                <section id = 'about' className = 'section-full bg-image'>
                    <div className = 'container-1200 fadeIn '>
                        <h1 className = 'text-center color-lighter p-a-1'>Oliver Bath</h1>
                        <h3 className = 'text-center color-light font-light p-a-1'>Entry-level web developer specializing in front-end development.</h3>
                        <h4 className  = 'text-center color-light font-light p-a-1'><i className="fas fa-user-graduate color-light"></i> Bachelor's of Social Sciences from the University of Cape Town.</h4>
                        <a rel="noopener noreferrer" href = 'https://github.com/oliverbth05' target="_blank" className = 'button button-block m-t-1'><i className="fab fa-github"></i> GitHub Profile</a>
                    </div>
                </section>
            
     
           
            <section id = 'skills' className = 'section-full p-b-2 bg-dark border-top '>
                <div className = 'container-600'>
    
                    <h1 className = 'text-center p-1 text-gradient-ie text-gradient'>Skills</h1>
                    <div className = 'flex-container'>
                        
                        <div className = { this.state.skillAnimation ? 'skill-card spin-interval-1' : 'skill-card hidden'}>
                            <h4 className = 'text-center text-gradient-ie text-gradient p-4'><i className="fas fa-mobile-alt text-gradient"></i> Responsive Design</h4>
                            <p>Creating web-applications for all screen sizes.</p>
                        </div>
    
                        <div className = { this.state.skillAnimation ? 'skill-card spin-interval-2' : 'skill-card hidden'}>
                            <h4 className = 'text-center text-gradient-ie text-gradient p-4'><i className="fas fa-palette text-gradient"></i> Styling</h4>
                            <p>Using a combination of third-party and custom solutions to acheive practical and visually pleasing interfaces.</p>
                        </div>
    
                        <div className = { this.state.skillAnimation ? 'skill-card spin-interval-3' : 'skill-card hidden'}>
                            <h4 className = 'text-center text-gradient-ie text-gradient p-4'><i className="fas fa-toolbox text-gradient"></i> Functionality</h4>
                            <p>Using cutting-edge frameworks such as React and Vue to enable a higher degree of functionality and interactivity.</p>
                        </div>
    
                        <div className = { this.state.skillAnimation ? 'skill-card spin-interval-4' : 'skill-card hidden'}>
                            <h4 className = 'text-center text-gradient-ie text-gradient p-4'><i className="fas fa-server text-gradient"></i> Full-Stack Development</h4>
                            <p>Supporting applications with REST and RPC APIs by using the Node.js server technology.</p>
                        </div>
                        
                    </div>
    
                    <h2 className = 'text-center p-2 text-gradient-ie text-gradient'>Technologies</h2>
                    
                    <div className = 'flex-container'>
                        <div className = 'm-a-1'>
                            <h4 className = 'text-center p-3 color-lighter'>Front-End</h4>
                            <ul className = 'text-center'>
                                <li className = 'p-5 color-light'>HTML</li>
                                <li className = 'p-5 color-light'>CSS</li>
                                <li className = 'p-5 color-light'>Javascript (ES6+)</li>
                                <li className = 'p-5 color-light'>React</li>
                                <li className = 'p-5 color-light'>Vue</li>
                                <li className = 'p-4 color-light'>JQuery</li>
                            </ul>
                        </div>
    
                        <div className = 'm-a-1'>
                            <h4 className = 'text-center p-3 color-lighter'>Back-End</h4>
                            <ul className = 'text-center'>
                                <li className = 'p-5 color-light'>Node</li>
                                <li className = 'p-5 color-light'>Express</li>
                                <li className = 'p-5 color-light'>MongoDB</li>
                                <li className = 'p-5 color-light'>SQL</li>
                            </ul>
                        </div>
    
                        <div className = 'm-a-1'>
                            <h4 className = 'text-center p-3 color-lighter'>Development</h4>
                            <ul className = 'text-center'>
                                <li className = 'p-5 color-light'>Git</li> 
                                <li className = 'p-5 color-light'>Webpack</li>
                                <li className = 'p-5 color-light'>Babel</li>
                                <li className = 'p-5 color-light'>Sass</li>  
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </section>
    
            <section id = 'portfolio' className = 'section-full gradient border-top'>
                <div className = 'container-1200'>
                    <h1 className = 'text-center p-1 color-lighter'>Portfolio</h1>
                    <h3 className = 'text-center color-lighter p-3 font-light'>Personal Projects</h3>
                    <div className = 'flex-container'>
                        
                        <div className = 'portfolio-card'>
                            <img alt = 'Site Screenshot' src = {streamrimgsm}></img>
                            <div>
                                <h3 className = 'p-4 font-light'>React Streamer</h3>
                                <p className = 'p-4 '>A Single-page-application mimicking a modern music-streaming service front-end. Consumes data from last.fm API.</p>
                            </div>
                            <Link to = '/streamer'>See More</Link>
                        </div>
    
                        <div className = 'portfolio-card'>
                            <img alt = 'Site Screenshot' src = {forumimgsm} />
                            <div>
                                <h3 className = 'p-4 font-light'>Forum</h3>
                                <p className = 'p-4'>Single-page forum/blog comprising of Vue.js front-end and Node/MongoDB backend.</p>
                            </div>
                            <Link to = '/forum'>See More</Link>
                        </div>
    
                        <div className = 'portfolio-card '>
                            <img alt = 'Site Screenshot' src = {newsagimgsm} />
                            <div>
                                <h3 className = 'p-4 font-light'>News Aggregator</h3>
                                <p className = 'p-4'>Single-page-application that consumes news headlines from the News-API backend.</p>
                            </div>
                            <Link to = '/news-aggregator'>See More</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
      )
  }
}

export default Main;
