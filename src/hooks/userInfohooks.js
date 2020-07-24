import {useState, useEffect} from 'react';
import {ProperizeInput} from '../funcs';

const UserInfoHooks = ()=>{
    const [username, setUsername] = useState('');
    const [domain, setDomain] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [schoolID, setSchoolID] = useState('');
    const [school, setSchool] = useState('');
    const [userType, setUserType] = useState('user');

    useEffect(()=>{
        setEmail(ProperizeInput(username) + domain);
    },[domain, username, setEmail]);

    return {
        username, setUsername,
        domain, setDomain,
        firstName, setFirstName,
        lastName, setLastName,
        email, setEmail,
        password, setPassword,
        schoolID, setSchoolID,
        school, setSchool,
        userType, setUserType
    };
};

export {UserInfoHooks};
