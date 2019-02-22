import React from 'react';
import streamrimgsm from '../assets/streamer/streamer1-sm.jpg';
import forumimgsm from '../assets/forum/forum1-sm.jpg';
import newsagimgsm from '../assets/news-aggregator/news-aggregator1-sm.jpg';
import { Link } from 'react-router-dom';
import PortfolioCard from './PortfolioCard';

const PortfolioSection = () => {
    return (
    <section id = 'portfolio' className = 'section-full gradient'>
        <div className = 'container-1200'>
            
            <h1 className = 'text-center p-1 color-white'>Portfolio</h1>
            
            <h3 className = 'text-center color-white p-3 font-light'>Personal Projects</h3>
            
            <div className = 'flex-container'>
                        
                <PortfolioCard img = {streamrimgsm} link = {'/streamer'}>
                    <h3 className = 'p-4 font-light'>React Streamer</h3>
                    <p className = 'p-4 '>A Single-page-application mimicking a modern music-streaming service front-end. Consumes data from last.fm API.</p>
                </PortfolioCard>
                
                <PortfolioCard img = {forumimgsm} link = {'/forum'}>
                    <h3 className = 'p-4 font-light'>Forum</h3>
                    <p className = 'p-4'>Single-page forum/blog comprising of Vue.js front-end and Node/MongoDB backend.</p>
                </PortfolioCard>
                
                <PortfolioCard img = {newsagimgsm} link = {'/news-aggregator'}>
                    <h3 className = 'p-4 font-light'>News Aggregator</h3>
                    <p className = 'p-4'>Single-page-application that consumes news headlines from the News-API backend.</p>
                </PortfolioCard>
                
            </div>
        </div>
    </section>
    )
}

export default PortfolioSection;