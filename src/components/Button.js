import React from 'react';
import {NavLink as Link} from 'react-router-dom';

/*
    This is Button component.
    This is custom button based on Bootstrap button.
    It is highly customizable with variant and size.
*/

const Button = (props)=>{
    const {
        type = "success",
        size = "btn-lg btn-block",
        onClick = null,
        children,
        isLink = false,
        path = "/"
    } = props;

    const renderCSS = ()=>`btn btn-${type} ${size}`;

    return (!isLink)?
        <button
            type="button"
            onClick={()=>onClick()}
            className={renderCSS()}>
            {children}
        </button>:
        <Link to={path}>
            <button type="button" className={renderCSS()}>
                {children}
            </button>
        </Link>;
};

export {Button};
