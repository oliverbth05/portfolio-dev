import React from 'react'
import streamer1 from '../assets/streamer/streamer1.PNG';
import streamer2 from '../assets/streamer/streamer2.PNG';
import streamer3 from '../assets/streamer/streamer3.PNG';
import ImageGallery from 'react-image-gallery';
import {Link} from 'react-router-dom';

export default function Forum() {

  const images = [
    {
      original: streamer1,
      thumbnail: streamer1
    },
    {
      original: streamer2,
      thumbnail: streamer2
    },
    {
      original: streamer3,
      thumbnail: streamer3
    }
  ]


  return (
    <div className = 'section-full bg-light p-t-3'>
      <nav className = 'nav'>
        <Link to = '/#portfolio'>Go Back</Link>
      </nav>
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
