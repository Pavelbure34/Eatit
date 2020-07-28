import {useState} from 'react';

/*
    This file is react hook for user authentication.
*/

const AuthenHooks = ()=>{
    const [pin, setPin] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    
    return {
        pin,
        setPin,
        isAuthenticated,
        setIsAuthenticated
    };
};

export {AuthenHooks};
