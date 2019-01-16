import React from 'react'
import news1 from '../assets/news-aggregator/news-aggregator1.PNG';
import news2 from '../assets/news-aggregator/news-aggregator2.PNG';
import news3 from '../assets/news-aggregator/news-aggregator3.PNG';
import ImageGallery from 'react-image-gallery';
import {Link} from 'react-router-dom';

export default function Forum() {

  const images = [
    {
      original: news1,
      thumbnail: news1
    },
    {
      original: news2,
      thumbnail: news2
    },
    {
      original: news3,
      thumbnail: news3
    }
  ]


  return (
    <div className = 'section-full bg-light p-t-3'>
    <nav className = 'nav'>
      <Link to = '/#portfolio'>Go Back</Link>
    </nav>
      <div className = 'container-1200 fadeIn p-a-2'>
        <h2 className = 'font-light text-center m-b-1'>News Aggregator</h2>
        <h4 className = 'font-light text-center m-b-2'>Single-page-application that consumes news headlines from the News-API backend.</h4>
        <ImageGallery showFullscreenButton = {false} showPlayButton = {false} items = {images}></ImageGallery>
        <div>
        
         <h4 className = 'm-b-1 m-t-2'>Summary</h4>
            <p>Leveraging the News API, this project acts as a portal to the top news headlines from numerous sources around the world. This site is using the Developer Plan which limits total requests to 1000 per day, and a limit of 20 articles per request.</p>
            
          <div>
            <h4 className = 'm-b-1 m-t-2'>Features</h4>
            <ul>
              <li>Content Browsing</li>
              <li>Detailed Search</li>
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
          <a rel="noopener noreferrer" target = '_blank' href = 'https://github.com/oliverbth05/NewsAggregator-Dev' className = 'button-dark button-small m-r-1 m-t-2'><i className="fab fa-github"></i> View GitHub Repo</a>
          <a rel="noopener noreferrer" target = '_blank' href = 'https://news-ag.herokuapp.com/' className = 'button-dark button-small'><i className="fas fa-arrow-alt-circle-right"></i> Visit Site</a>
        </div>
      </div>
     
    </div>
  )
}
