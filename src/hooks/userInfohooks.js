import {useState} from 'react';

const UserInfoHooks = ()=>{
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [schoolID, setSchoolID] = useState('');
    const [school, setSchool] = useState('');

    return {
        username, setUsername,
        firstName, setFirstName,
        lastName, setLastName,
        email, setEmail,
        password, setPassword,
        schoolID, setSchoolID,
        school, setSchool
    };
};

export {UserInfoHooks};
