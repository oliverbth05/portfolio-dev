import React from 'react'

import forum1lg from '../assets/forum/forum1-lg.jpg';
import forum2lg from '../assets/forum/forum2-lg.jpg';
import forum3lg from '../assets/forum/forum3-lg.jpg';

import forum1sm from '../assets/forum/forum1-sm.jpg';
import forum2sm from '../assets/forum/forum2-sm.jpg';
import forum3sm from '../assets/forum/forum3-sm.jpg';

import ImageGallery from 'react-image-gallery';
import {HashLink as Link} from 'react-router-hash-link';

export default function Forum() {
  

  
  
  const images = [
    {
      original: forum1lg,
      thumbnail: forum1sm
    },
    {
      original: forum2lg,
      thumbnail: forum2sm
    },
    {
      original: forum3lg,
      thumbnail: forum3sm
    }
  ]


  return (
    <div className = 'section-full bg-light p-t-3'>
    <nav className = 'nav'>
      <Link to =  '/#portfolio'>Go Back</Link>
    </nav>
      <div className = 'container-1200 fadeIn p-a-2'>
      <h2 className = 'font-light text-center m-b-1'>Forum</h2>
        <h4 className = 'color-white font-light text-center m-b-2'>Single-page forum/blog comprising of Vue.js front-end and Node/MongoDB backend.</h4>
        <ImageGallery showFullscreenButton = {false} showPlayButton = {false} items = {images}></ImageGallery>
  
       
        
          <div>
            <h4 className = ' m-b-1 m-t-2'>Summary</h4>
            <p>Forum is a project that tries to emulate online forums and blogs such as Reddit and Medium. It is a work in progress, and as such, minor bugs are likely to be encountered. Create an account to begin creating content and engaging with other content. Do not feel obligated to use your real e-mail address. Without a registered account, users are limited to browsing.</p>
          
            <h4 className = 'm-b-1 m-t-2'>Features</h4>
            <ul>
              <li>User Authentication</li>
              <li>Content Creation</li>
              <li>Mobile Responsive</li>
              <li>Single Page</li>
            </ul>
          </div>
          
          <div>
            <h4 className = 'm-b-1 m-t-2'>Packages</h4>
            <ul>
              <li>Vue</li>
              <li>Vuex</li>
              <li>Node</li>
              <li>Express</li>
              <li>MongoDB</li>
            </ul>
          </div>
          
    
        
        <a rel="noopener noreferrer" target = '_blank' href = 'https://github.com/oliverbth05/forum-client' className = 'button-dark button-small m-r-1 m-t-2'><i className="fab fa-github"></i> View GitHub Repo</a>
        <a rel="noopener noreferrer" target = '_blank' href = 'https://ob-forum-client.herokuapp.com/'className = 'button-dark button-small'><i className="fas fa-arrow-alt-circle-right"></i> Visit Site</a>
          
      </div>
    </div>
  )
}
