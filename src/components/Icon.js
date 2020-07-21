import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Icon = (props)=>{
    const {icon, size, color} = props;

    return (
        <FontAwesomeIcon icon={icon} size={size} color={color}/>
    );
};

export {Icon};
