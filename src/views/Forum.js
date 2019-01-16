import React from 'react'
import forum1 from '../assets/forum/forum1.PNG';
import forum2 from '../assets/forum/forum2.PNG';
import forum3 from '../assets/forum/forum3.PNG';
import ImageGallery from 'react-image-gallery';
import {Link} from 'react-router-dom';

export default function Forum() {

  const images = [
    {
      original: forum1,
      thumbnail: forum1
    },
    {
      original: forum2,
      thumbnail: forum2
    },
    {
      original: forum3,
      thumbnail: forum3
    }
  ]


  return (
    <div className = 'section-full bg-light p-t-3'>
    <nav className = 'nav'>
      <Link to = '/#portfolio'>Go Back</Link>
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
