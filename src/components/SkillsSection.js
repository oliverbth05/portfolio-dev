import React from 'react';
import SkillCard from './SkillCard';

class SkillsSection extends React.Component {
    
     
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
        
        <section id = 'skills' className = 'section-full p-b-2'>
                <div className = 'container-600'>
    
                    <h1 className = 'text-center p-1 text-gradient-ie text-gradient'>Skills</h1>
                    
                    <div className = 'flex-container'>
                        
                        <SkillCard skillAnimation = {this.state.skillAnimation} interval = {1}>
                            <h4 className = 'text-center text-gradient-ie text-gradient p-4'><i className="fas fa-mobile-alt text-gradient"></i> Responsive Design</h4>
                            <p>Creating web-applications for all screen sizes.</p>
                        </SkillCard>
                        
                        <SkillCard skillAnimation = {this.state.skillAnimation} interval = {2}>
                            <h4 className = 'text-center text-gradient-ie text-gradient p-4'><i className="fas fa-palette text-gradient"></i> Styling</h4>
                            <p>Using a combination of third-party and custom solutions to acheive practical and visually pleasing interfaces.</p>
                        </SkillCard>
                        
                        <SkillCard skillAnimation = {this.state.skillAnimation} interval = {3}>
                            <h4 className = 'text-center text-gradient-ie text-gradient p-4'><i className="fas fa-server text-gradient"></i> Full-Stack Development</h4>
                            <p>Supporting applications with server-side JavaScript in Node and Express.</p>
                        </SkillCard>
    
                        <SkillCard skillAnimation = {this.state.skillAnimation} interval = {4}>
                            <h4 className = 'text-center text-gradient-ie text-gradient p-4'><i className="fas fa-toolbox text-gradient"></i> Functionality</h4>
                            <p>Using modern frameworks such as React and Vue to enable a higher degree of functionality and interactivity.</p>
                        </SkillCard>
                        
                    </div>
    
                    <h2 className = 'text-center p-2 text-gradient-ie text-gradient'>Technologies</h2>
                    
                    <div className = 'flex-container'>
                        <div className = 'm-a-1'>
                            <h4 className = 'text-center p-3'>Front-End</h4>
                            <ul className = 'text-center'>
                                <li className = 'p-5'>HTML</li>
                                <li className = 'p-5'>CSS</li>
                                <li className = 'p-5'>Javascript (ES6+)</li>
                                <li className = 'p-5'>React</li>
                                <li className = 'p-5'>Vue</li>
                                <li className = 'p-4'>JQuery</li>
                            </ul>
                        </div>
    
                        <div className = 'm-a-1'>
                            <h4 className = 'text-center p-3'>Back-End</h4>
                            <ul className = 'text-center'>
                                <li className = 'p-5'>Node</li>
                                <li className = 'p-5'>Express</li>
                                <li className = 'p-5'>MongoDB</li>
                                <li className = 'p-5'>SQL</li>
                            </ul>
                        </div>
    
                        <div className = 'm-a-1'>
                            <h4 className = 'text-center p-3'>Development</h4>
                            <ul className = 'text-center'>
                                <li className = 'p-5'>Git</li> 
                                <li className = 'p-5'>Webpack</li>
                                <li className = 'p-5'>Babel</li>
                                <li className = 'p-5'>Sass</li>  
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </section>
    )
    }
    
}

export default SkillsSection;