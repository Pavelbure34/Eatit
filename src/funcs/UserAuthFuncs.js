import {Auth} from 'aws-amplify';

const SendPinNumberToEmail = (email, password, onSuccess, onFail)=>{
    Auth.signUp(email, password)
    .then(()=>onSuccess())
    .catch(err=>onFail("Warning", err.message));  
};

const SignUp = (inputs, onSuccess, onFail)=>{
    const {
        firstName, lastName, schoolID, school,
        email, username, password
    } = inputs;

    Auth.signUp({
        username: email, password: password,
        attributes:{
            email: email,
            name: firstName,
            family_name: lastName,
            'custom:username':username,
            'custom:school':school,
            'custom:schoolid':schoolID
        }
    }).then(()=>onSuccess())
    .catch(err=>onFail("Warning", err.message));      
};

const AuthenticateEmail = (email, pin, onSuccess, onFail)=>{
    Auth.confirmSignUp(email, pin)
    .then(()=>onSuccess())
    .catch(err=>onFail("Warning", err.message));  
};

const Login = (email, password, onSuccess, onFail)=>{
    Auth.signIn(email, password)
    .then(()=>onSuccess())
    .catch(err=>onFail("Warning", err.message));  
};

const Logout = (onSucess)=>{
    Auth.signOut().then(()=>onSucess);
};

export {SendPinNumberToEmail, AuthenticateEmail, Login, SignUp, Logout};
