import React from 'react';
import { Link } from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
const Nav = (props) => {
    
    const linksMapped = props.links.map(link => {
        
        if (link.isHash) {
            return <HashLink to = {link.to}>{link.text}</HashLink>
        }
        
        else {
            return <Link to = {link.to}>{link.text}</Link>
        }
        
    })
    
   
    
    return (
    <nav className = 'nav'>
        {linksMapped}
    </nav>
    )
}

export default Nav;