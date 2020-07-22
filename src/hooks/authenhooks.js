import {useState} from 'react';

const AuthenHooks = ()=>{
    const [pin, setPin] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    
    return {
        pin, setPin,
        isAuthenticated, setIsAuthenticated
    };
};

export {AuthenHooks};
