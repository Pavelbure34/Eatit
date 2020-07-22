import React, {useState} from 'react';
import {
    IsEmptyInput, IsPasswordSafe, ProperizeInput,
    SendPinNumberToEmail, AuthenticateEmail
} from '../funcs';
import {UserInfoHooks, AuthenHooks, Popuphooks} from '../hooks';
import {
    Icon, Popup, SelectSchool, Input, Button,
    Tabs, Tab
} from '../components';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';


const ForgotPassword = ()=>{
    const [key, setKey] = useState(1);
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const {
        username, email, firstName, lastName, 
        password, schoolID, school, 
        setUsername, setDomain, setFirstName, setLastName,
        setPassword, setSchoolID, setSchool
    } = UserInfoHooks();
    const {
        pin, setPin,
        isAuthenticated, setIsAuthenticated
    } = AuthenHooks();
    let {
        show, popupMessage, popupTitle,
        showPopup, Close
    } = Popuphooks();
    
    const TopBtnOnClickEvent = ()=>{
        switch (key){
            case 4:
            case 3:
            case 2:
                setKey(key - 1);
                break;
            default:
                break;
        }
    };

    const BottomBtnOnClickEvent = ()=>{
        switch (key){
            case 3:
                break;
            case 2:
                setKey(key + 1);
                // if (IsEmptyInput(password)){
                //     showPopup( "Warning", "Empty Inputs");
                // }else{
                //     if (IsPasswordSafe(password))//check out for password security
                //         setKey(key + 1);
                //     else
                //         showPopup( "Warning", "Invalid Password");
                // }   
                break;
            default:
                setKey(key + 1);
                // if (IsEmptyInput(pin) || IsEmptyInput(username) || IsEmptyInput(email)){
                //     showPopup( "Warning", "Empty Inputs");
                // }else{
                //     //authenticate email
                //     setUsername(ProperizeInput(username));
                //     setSchoolID(schoolID.trim());
                //     setFirstName(ProperizeInput(firstName));
                //     setLastName(ProperizeInput(lastName));
                //     setKey(key + 1);
                // }   
                break;
        }
    };

    const renderTopBtn = ()=>{
        return (key != 1)?
            <Button onClick={()=>TopBtnOnClickEvent()} type="outline-light" size="">
                <Icon icon={faChevronLeft} size="1x" color="#FFFFFF"/>
            </Button>:
            <Button isLink={true} path="/signin" type="outline-light" size="">
                <Icon icon={faChevronLeft} size="1x" color="#FFFFFF"/>
            </Button>;
    };
    
    const renderBottomBtn = ()=>{
        if (key < 4){
            // let func = null;
            // if (key == 1){
            //     if (isAuthenticated)
            //         func = ()=>BottomBtnOnClickEvent();
            //     else
            //         func = ()=>showPopup("Warning", "Email not authenticated yet")
            // }else
            //     func = ()=>setKey(key + 1);

            return (
                <Button onClick={()=>setKey(key + 1)}>
                    Next
                </Button>
            );
        } else
            return (
                <Button isLink={true} path="/signin">
                    Confirm
                </Button>
            );
    };  

    return (
        <div id="forgotpassword">
            <header>
                {renderTopBtn()}
                <h3><span className="badge badge-warning">{key} / 4</span></h3>
            </header>
            <div className="main-content">
                <Tabs>
                    <Tab activeKey={key} select_key={4}>
                        <label for="exampleFormControlSelect1">Password Recovery Success</label>
                        <p>Please sign in.</p>
                    </Tab>
                    <Tab activeKey={key} select_key={3}>
                        <label for="exampleFormControlSelect1">Reset your Password</label>
                        <Input value={password} type={"password"} setValue={setPassword} placeholder={"Password"}/>
                        <Input value={confirmPassword} type={"password"} setValue={setConfirmPassword} placeholder={"Confirm Password"}/>
                        <Button
                            onClick={()=>showPopup(
                                "Password Policy",
                                `Password Must be at least 8 characters
                                 and must contain at least one uppercase and numbers.`
                            )} type="info">
                            View Password Policy
                        </Button>
                    </Tab>
                    <Tab activeKey={key} select_key={2}>
                        <label for="exampleFormControlSelect1">Authentication</label>
                        <Button onClick={()=>SendPinNumberToEmail(
                            email, password,
                            ()=>showPopup("Pin Number Sent", "Please Check your email")
                            ,showPopup
                        )}>
                            Send Authentication Pin to Email
                        </Button>
                        <br/>
                        <Input value={pin} setValue={setPin} placeholder={"Authentication Pin"}/>
                        <Button onClick={()=>AuthenticateEmail(
                            email, pin,
                            ()=>{
                                showPopup("Success", "Your Email has been successfully authenticated.");
                                setIsAuthenticated(true);
                            },showPopup
                        )}>
                            Authenticate Email
                        </Button>
                    </Tab>
                   <Tab activeKey={key} select_key={1}>
                        <label for="exampleFormControlSelect1">Find your Email</label>
                        <SelectSchool setSchool={setSchool} setDomain={setDomain}/>
                        <Input value={username} setValue={setUsername} placeholder={"Username"}/>
                        <Input value={email} placeholder={"Email auto completion"} readOnly={true}/>
                   </Tab>
                </Tabs>
                <section>
                    {renderBottomBtn()}
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

export {ForgotPassword};
