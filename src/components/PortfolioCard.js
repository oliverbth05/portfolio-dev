import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioCard = (props) => {
    return (
        <div className = 'portfolio-card'>
            <img alt = 'Site Screenshot' src = {props.img}></img>
            <div>
                {props.children}
            </div>
            <Link to = {props.link}>See More</Link>
        </div>
    )
}

export default PortfolioCard;