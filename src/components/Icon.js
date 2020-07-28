import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

/*
    This is Icon component.
    This is custom Icon based on React Bootstrap.
    It is highly customizable with color, icon and size.
*/

const Icon = (props)=>{
    const {icon, size, color} = props;

    return (
        <FontAwesomeIcon icon={icon} size={size} color={color}/>
    );
};

export {Icon};
