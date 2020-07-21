import {useState} from 'react';

const AuthenHooks = ()=>{
    const [pin, setPin] = useState('');
    
    return {pin, setPin};
};

export {AuthenHooks};
