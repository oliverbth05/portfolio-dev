import React from 'react'
import forum1 from '../assets/forum/forum1.PNG';
import forum2 from '../assets/forum/forum2.PNG';
import forum3 from '../assets/forum/forum3.PNG';
import ImageGallery from 'react-image-gallery';

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
    <div className = 'section-full bg-gradient-1'>
      <div className = 'container-1200 fadeIn p-a-2'>
      <h2 className = 'font-light text-center color-white m-b-1'>Forum</h2>
        <h4 className = 'color-white font-light text-center m-b-2'>Single-page forum/blog comprising of Vue.js front-end and Node/MongoDB backend.</h4>
        <ImageGallery showFullscreenButton = {false} showPlayButton = {false} items = {images}></ImageGallery>

        <div>
          <h4 class = 'color-white m-b-1 m-t-2'>Summary</h4>
          <p class = 'color-white m-b-2'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>

          <a target = '_blank' href = 'https://github.com/oliverbth05/forum-client' className = 'button button-small m-r-1'><i class="fab fa-github"></i> View GitHub Repo</a>
          <a target = '_blank' href = 'https://ob-forum-client.herokuapp.com/'className = 'button button-small'><i class="fas fa-arrow-alt-circle-right"></i> Visit Site</a>
          
        </div>
      </div>
     
    </div>
  )
}
