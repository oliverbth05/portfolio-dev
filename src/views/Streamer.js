import React from 'react'
import streamer1lg from '../assets/streamer/streamer1-lg.jpg';
import streamer2lg from '../assets/streamer/streamer2-lg.jpg';
import streamer3lg from '../assets/streamer/streamer3-lg.jpg';

import streamer1sm from '../assets/streamer/streamer1-sm.jpg';
import streamer2sm from '../assets/streamer/streamer2-sm.jpg';
import streamer3sm from '../assets/streamer/streamer3-sm.jpg';

import ImageGallery from 'react-image-gallery';
import Nav from '../components/Nav';

export default function Forum() {
 
  
 
  const images = [
    {
      original: streamer1lg,
      thumbnail: streamer1sm
    },
    {
      original: streamer2lg,
      thumbnail: streamer2sm
    },
    {
      original: streamer3lg,
      thumbnail: streamer3sm
    }
  ]
  
  const links = [{to: '/#portfolio', isHash: true, text: 'Go Back'}]


  return (
    <div className = 'section-full bg-light p-t-3'>
      <Nav links = {links} />
      <div className = 'container-1200 fadeIn p-a-2'>
      <h2 className = 'font-light text-center m-b-1'>Streamer</h2>
      <h4 className = ' font-light text-center m-b-2'>A Single-page-application mimicking a modern music-streaming service front-end.</h4>
        <ImageGallery showFullscreenButton = {false} showPlayButton = {false} items = {images}></ImageGallery>

        <div>
          <div>
            
            <h4 className = ' m-b-1 m-t-2'>Summary</h4>
            <p>STREAMR is a project that tries to emulate aspects of a commercial music streaming service by using the Last.fm API. The app features a fully functional search system, artist recommendations and library creation.

Music playback functionality has not been implemented, nor has persistent storage for user libraries. All saved data will be erased upon page refresh.</p>
            
          
            <h4 className = 'm-b-1 m-t-2'>Features</h4>
            <ul>
              <li>Content Browsing</li>
              <li>Library Creation</li>
              <li>Mobile Responsive</li>
              <li>Single Page</li>
            </ul>
          </div>
          
          <div>
            <h4 className = 'm-b-1 m-t-2'>Packages</h4>
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>React-router</li>
              <li>Node</li>
              <li>Express</li>
            </ul>
          </div>

          <a rel="noopener noreferrer" target = '_blank' href = 'https://github.com/oliverbth05/streamr' className = 'button-dark button-small m-r-1 m-t-2'><i className="fab fa-github"></i> View GitHub Repo</a>
          <a rel="noopener noreferrer" target = '_blank' href = 'https://react-streamr.herokuapp.com/' className = 'button-dark button-small'><i className="fas fa-arrow-alt-circle-right"></i> Visit Site</a>
          
        </div>
      </div>
     
    </div>
  )
}
