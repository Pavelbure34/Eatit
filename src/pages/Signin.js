import React from 'react';
import {Login, ProperizeInput, ClearWhiteSpace, IsEmptyInput} from '../funcs';
import {UserInfoHooks, Popuphooks} from '../hooks';
import {SelectSchool, Input, Button, Popup} from '../components';
import Logo from '../assets/images/logo.png';

const Signin = (props)=>{
    const {onSignin} = props;

    const {
        username, email, password, domain,
        setPassword, setSchool, setUsername, setDomain,
    } = UserInfoHooks();
    let {
        show, popupMessage, popupTitle,
        showPopup, Close
    } = Popuphooks();

    return (    
        <div id="signin">
            <header>
                <img src={Logo} alt="logo"/>
            </header>
            <div className="main-content">
                <SelectSchool setSchool={setSchool} setDomain={setDomain}/>
                <Input value={username} setValue={setUsername} placeholder={"Username"}/>
                <Input value={password} type={"password"} setValue={setPassword} placeholder={"Password"}/>
                <Button isLink={true} path="/forgotpassword">
                    Find Password
                </Button>
                <br/>
                <Button onClick={()=>{
                    if (IsEmptyInput(domain))
                        showPopup("Warning", "Please choose school.");
                    else if (IsEmptyInput(username) || IsEmptyInput(password))
                        showPopup("Warning", "Empty inputs");
                    else{
                        ProperizeInput(email);
                        ClearWhiteSpace(password);
                        Login(email, password, onSignin, showPopup);
                    }
                }}>
                    Sign In
                </Button>
                <Button isLink={true} path="/signup">
                    Sign Up
                </Button>
            </div>
            <footer>
                <Popup show={show} header={popupTitle} onClose={Close}>
                    {popupMessage}
                </Popup>
            </footer>
        </div>
    );
};

export {Signin};
