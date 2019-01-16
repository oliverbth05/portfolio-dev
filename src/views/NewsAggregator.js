import React from 'react'
import news1 from '../assets/news-aggregator/news-aggregator1.PNG';
import news2 from '../assets/news-aggregator/news-aggregator2.PNG';
import news3 from '../assets/news-aggregator/news-aggregator3.PNG';

import ImageGallery from 'react-image-gallery';

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
    <div className = 'section-full bg-dark'>
      <div className = 'container-1200 fadeIn p-a-2'>
        <h2 className = 'font-light text-center color-white m-b-1'>News Aggregator</h2>
        <h4 className = 'color-white font-light text-center m-b-2'>Single-page-application that consumes news headlines from the News-API backend.</h4>
        <ImageGallery showFullscreenButton = {false} showPlayButton = {false} items = {images}></ImageGallery>
        <div> 
          <h4 class = 'color-white m-b-1 m-t-2'>Summary</h4>
          <p class = 'color-white m-b-2'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <a target = '_blank' href = 'https://github.com/oliverbth05/NewsAggregator-Dev' className = 'button button-small m-r-1'><i class="fab fa-github"></i> View GitHub Repo</a>
          <a target = '_blank' href = 'https://news-ag.herokuapp.com/' className = 'button button-small'><i class="fas fa-arrow-alt-circle-right"></i> Visit Site</a>
        </div>
      </div>
     
    </div>
  )
}
