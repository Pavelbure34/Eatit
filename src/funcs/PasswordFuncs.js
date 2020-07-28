import {Auth} from 'aws-amplify';

/*
    ChangePassword -> allows user to change password
    SendPinNumberToEmail -> allows user to receive security pin in their email
    Forgotpassword -> allows user to reset the password
    IsPasswordSafe -> checks if password is strong
*/

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

const IsPasswordSafe = (text)=>{
    const trimmed = text.trim() //it trims down the white space.
    const n = trimmed.length;   //it checks whether it is more than 8 characters.
    let letterNumber = /^[0-9a-zA-Z]+$/;
    return (trimmed.match(letterNumber) && n >= 8)?true:false;
};

export {
    SendPinNumberToEmail,
    ChangePassword,
    ForgotPassword,
    IsPasswordSafe
};
