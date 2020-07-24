import React, {useState} from 'react';
import {IsEmptyInput, ChangePassword} from '../funcs';
import {Popuphooks} from '../hooks';
import {Popup, Input, Button, NavBar} from '../components';

const ChangePasswordPage = (props)=>{
    const {user} = props;
    const {name, family_name} = user;

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    
    let {
        show, popupMessage, popupTitle,
        showPopup, Close
    } = Popuphooks();
    
    const ButtonEvent = ()=>{
        if (IsEmptyInput(oldPassword) || IsEmptyInput(newPassword))
            showPopup("Warning", "Empty Inputs");
        else
            ChangePassword(
                oldPassword, newPassword,
                ()=>showPopup("Success", "Your password has been changed successfully"),
                showPopup
            );
    };

    return (
        <div id="changepassword">
            <header>
                <NavBar name={name} family_name={family_name}/>
            </header>
            <div className="main-content">
                <section id="mainc-content-form">
                    <Input value={oldPassword} type={"password"} setValue={setOldPassword} placeholder={"Old Password"}/>
                    <Input value={newPassword} type={"password"} setValue={setNewPassword} placeholder={"New Password"}/>
                    <Button
                        type="info"
                        onClick={()=>showPopup(
                            "Password Policy",
                            `Password Must be at least 8 characters
                                and must contain at least one uppercase and numbers.`
                        )}>
                        View Password Policy
                    </Button>
                    <Button onClick={ButtonEvent}>
                        Change Password
                    </Button>
                </section>
                <section>   
                   
                </section>
            </div>
            <footer>
                <Popup show={show} header={popupTitle} onClose={Close}>
                    {popupMessage}
                </Popup>
            </footer>
        </div>
    );    
};

export {ChangePasswordPage};
