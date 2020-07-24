import {Auth} from 'aws-amplify';

const ChangePassword = (oldPassword, newPassword, onSuccess, onFail)=>{
    Auth.currentAuthenticatedUser()
    .then(user => {
        Auth.changePassword(user, oldPassword, newPassword);
        onSuccess();
    }).catch(err=>onFail("Warning", err.message));
};

const SendPinNumberToEmail = (email, onSuccess, onFail)=>{
    Auth.forgotPassword(email)
    .then(() => onSuccess())
    .catch(err=>onFail("Warning", err.message));   
};

const ForgotPassword = (email, pin, new_password, onSuccess, onFail)=>{
    Auth.forgotPasswordSubmit(email, pin, new_password)
    .then(() => onSuccess())
    .catch(err=>onFail("Warning", err.message));   
};

export {SendPinNumberToEmail, ChangePassword, ForgotPassword};
