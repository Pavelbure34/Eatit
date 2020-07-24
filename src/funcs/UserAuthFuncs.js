import {Auth} from 'aws-amplify';

const SignUp = (inputs, onSuccess, onFail)=>{
    const {
        firstName, lastName, schoolID, school,
        email, username, password, userType
    } = inputs;

    Auth.signUp({
        username: email, password: password,
        attributes:{
            email: email,
            name: firstName,
            family_name: lastName,
            'custom:username':username,
            'custom:school':school,
            'custom:schoolid':schoolID,
            'custom:userType': userType
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

const Logout = (onSuccess, onFail)=>{
    Auth.signOut()
    .then(()=>onSuccess())
    .catch(err=>onFail("Warning", err.message));  
};

const CheckCurrentUser = (onSucess)=>{
    Auth.currentAuthenticatedUser()
    .then(user => {
        console.log(user);
        onSucess();
    });
};

export {AuthenticateEmail, Login, SignUp, Logout, CheckCurrentUser};