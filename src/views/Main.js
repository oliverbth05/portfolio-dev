import React from 'react'
import streamrimg from '../assets/streamer/streamer1.PNG';
import forumimg from '../assets/forum/forum1.PNG';
import newsagimg from '../assets/news-aggregator/news-aggregator1.PNG';

import {Link} from 'react-router-dom';

export default function Main() {
  return (
    <div>
        <nav className = 'nav'>
            <a href = '#about'>About</a>
            <a href = '#skills'>Skills</a>
            <a href = '#portfolio'>Portfolio</a>
        </nav>

        <div id = 'about' className = 'section-full content-centered bg-gradient-1 '>
            <div className = 'container-1200'>
                    <h1 className = 'text-center color-white p-1'>Oliver Bath</h1>
                    <h3 className = 'text-center color-white font-light p-4'>Entry-level web developer specializing in front-end development.</h3>
                    <h4 className  = 'text-center color-white font-light p-4'><i class="fas fa-user-graduate color-white"></i> Bachelor's of Social Sciences from the University of Cape Town.</h4>
                    <a href = 'https://github.com/oliverbth05' target="_blank" className = 'button button-block m-t-1'><i class="fab fa-github"></i> GitHub Profile</a>
            </div>
        </div>

        <div id = 'skills' className = 'section-full content-centered border-bottom'>
            <div className = 'container-600'>

                <h1 className = 'text-center p-1'>Skills</h1>
                <div className = 'grid-2'>
                    
                    <div className = 'skill-card'>
                        <i class="fas fa-mobile-alt"></i>
                        <h4 className = 'text-center p-4'> Responsive Design</h4>
                        <p>Creating web-applications for all screen sizes.</p>
                    </div>


                    <div className = 'skill-card'>
                        <h4 className = 'text-center p-4'><i class="fas fa-palette"></i> Styling</h4>
                        <p>Using a combination of third-party and custom solutions to acheive practical and visually pleasing interfaces.</p>
                    </div>

                    <div className = 'skill-card'>
                        <h4 className = 'text-center p-4'><i class="fas fa-toolbox"></i> Functionality</h4>
                        <p>Using cutting-edge frameworks such as React and Vue to enable a higher degree of functionality and interactivity.</p>
                    </div>

                    <div className = 'skill-card'>
                        <h4 className = 'text-center p-4'><i class="fas fa-server"></i> Full-Stack Development</h4>
                        <p>Supporting applications with REST and RPC APIs by using the Node.js server technology.</p>
                    </div>
                </div>

                <h2 className = 'text-center p-2'>Technologies</h2>
                <div className = 'grid-3'>
                    <div>
                        <h3 className = 'text-center p-3'>Front-End</h3>
                        <ul className = 'text-center'>
                            <li className = 'p-5'>HTML</li>
                            <li className = 'p-5'>CSS</li>
                            <li className = 'p-5'>Javascript (ES6+)</li>
                            <li className = 'p-5'>React</li>
                            <li className = 'p-5'>Vue</li>
                            <li className = 'p-4'>JQuery</li>
                            
                        </ul>
                    </div>

                   

                    <div>
                        <h3 className = 'text-center p-3'>Back-End</h3>
                        <ul className = 'text-center'>
                            <li className = 'p-5'>Node</li>
                            <li className = 'p-5'>Express</li>
                            <li className = 'p-5'>MongoDB</li>
                            <li className = 'p-5'>SQL</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className = 'text-center p-3'>Development</h3>
                        <ul className = 'text-center'>
                            <li className = 'p-5'>Git</li> 
                            <li className = 'p-5'>Webpack</li>
                            <li className = 'p-5'>Babel</li>
                            <li className = 'p-5'>Sass</li>  
                            
                        </ul>
                    </div>
                </div>
            </div>
          
         
        </div>

        <div id = 'portfolio' className = 'section-full content-centered bg-dark '>
            <div className = 'container-600'>

                <h1 className = 'text-center color-white p-1'>Portfolio</h1>
                <h3 className = 'text-center color-white p-3 font-light'>Personal Projects</h3>

                <div className = 'grid-2'>
                    <div className = 'portfolio-card'>
                        <img src = {streamrimg}></img>
                    <div>
                    <h3 className = 'p-4'>
                    React Streamer
                    </h3>
                    <p className = 'p-4'>
                    A Single-page-application mimicking a modern music-streaming service front-end.  
                    
                    </p>
                    {/* <ul>
                    <li>
                    Consumes data from the Last.fm API to enable browsing by artist, album and track.
                    </li>

                    <li>
                    Contains search functionality and a limited form of library creation.
                    </li>

                    <li>
                        Entirely custom css.
                    </li>
                    <li>
                    Responsive across all screen sizes.
                    </li>
                    </ul> */}
                </div>
                <Link to = '/streamer'>See More</Link>
            </div>

            <div className = 'portfolio-card'>

                <img src = {forumimg} />

                <div>
                <h3 className = 'p-4'>
                    Forum
                </h3>
                <p className = 'p-4'>
                    Single-page forum/blog comprising of Vue.js front-end and Node/MongoDB backend.
                </p>
              {/* <ul>
                <li>
                Custom authentication with JWT and MongoDB
                </li>
                <li>
                Cloud-based MongoDB storage.
                </li>
                <li>
                CRUD functionality on posts, comments and replies.
                </li>
                <li>
                Voting functionality on posts and comments.
                </li>
                <li>
                Pagination and different feeds/filters.
                </li>
                <li>
                    Entirely custom css.
                  </li>
                <li>
                  Responsive across all screen sizes.
                  </li>
              </ul> */}
              
                </div>
                <Link to = '/forum'>See More</Link>
            </div>

            <div className = 'portfolio-card'>
                <img src = {newsagimg} />

                <div>
                    <h3 className = 'p-4'>
                        News Aggregator
                    </h3>
                    <p className = 'p-4'>
                        Single-page-application that consumes news headlines from the News-API backend.  
                    </p>

                    {/* <ul>
                        <li>
                        Advanced search with multiple terms including publish date and source.
                        </li>
                        <li>
                            Entirely custom css.
                        </li>
                        <li>
                        Reponsive across all screen sizes.
                        </li>

                    </ul> */}      
                </div>
                <Link to = '/news-aggregator'>See More</Link>
            </div>
        </div>
              
    </div>
  
</div>
     
          </div>
  )
}