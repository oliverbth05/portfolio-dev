import React from 'react';

const SkillCard = (props) => {
    return (
        <div className = 'skill-card'>
            {props.children}
        </div>
    )
}

export default SkillCard;