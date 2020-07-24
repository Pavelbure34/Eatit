import React, {useState} from 'react';
import {
    IsEmptyInput, IsPasswordSafe, ProperizeInput,
    AuthenticateEmail, ClearWhiteSpace, SignUp
} from '../funcs';
import {UserInfoHooks, AuthenHooks, Popuphooks} from '../hooks';
import {
    Icon, Popup, SelectSchool, Input, Button,
    Tabs, Tab
} from '../components';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';

const Signup = ()=>{
    const [key, setKey] = useState(1);
    const [termsRead, setTermsRead] = useState(false);

    const {
        username, email, firstName, lastName, 
        domain, password, schoolID, school, userType,
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

    let Inputs = {
        username, email, firstName, lastName,
        password, schoolID, school, userType
    };

    const TopBtnOnClickEvent = ()=>{
        switch (key){
            case 4:
            case 3:
            case 2:
                setKey(key - 1);
                break;
            default:
                //key == 1, button is link button.
                break;
        }
    };

    const BottomBtnOnClickEvent = ()=>{
        switch (key){
            case 4:
                if (IsEmptyInput(pin))
                    showPopup("Warning", "Empty Inputs");
                else
                    if (isAuthenticated)
                        setKey(key + 1);   
                break;
            case 3:
                setKey(key + 1);
                break;
            case 2:
                if (IsEmptyInput(schoolID) || IsEmptyInput(firstName) || IsEmptyInput(lastName))
                    showPopup("Warning", "Empty Inputs");
                else if (!termsRead)
                    showPopup("Warning", "Please read the terms");
                else{
                    setUsername(ProperizeInput(username));
                    setSchoolID(ClearWhiteSpace(schoolID));
                    setFirstName(ProperizeInput(firstName));
                    setLastName(ProperizeInput(lastName));
                    setKey(key + 1);
                }
                break;
            default:
                if (IsEmptyInput(domain))
                    showPopup("Warning", "Please choose school.");
                else if (IsEmptyInput(username) || IsEmptyInput(password))
                    showPopup("Warning", "Empty inputs");
                else{
                    if (IsPasswordSafe(password)){
                        setUsername(ProperizeInput(username));
                        setKey(key + 1);
                    } else
                        showPopup("Warning", "Invalid Password"); 
                }     
        }
    };

    const renderTopBtn = ()=>{
        return (key !== 1)?
            <Button onClick={()=>TopBtnOnClickEvent()} type="outline-light" size="">
                <Icon icon={faChevronLeft} size="1x" color="#FFFFFF"/>
            </Button>:
            <Button isLink={true} path="/signin" type="outline-light" size="">
                <Icon icon={faChevronLeft} size="1x" color="#FFFFFF"/>
            </Button>;
    };
    
    const renderBottomBtn = ()=>{
        if (key < 4)
            return (
                <Button onClick={BottomBtnOnClickEvent}>
                    Next
                </Button>
            );
        else
            return (isAuthenticated)?
                <>
                    <p className="center-text">
                        By confirming,<br/>
                        I agree to the terms given by Eat!T
                    </p>
                    <Button isLink={true} path="/signin">
                        Confirm
                    </Button>
                </>:
                <>
                    <p className="center-text">
                        Please Authenticate your email
                    </p>
                </>;
    };  

    return (
        <div id="signup">
            <header>
                {renderTopBtn()}
                <h3><span className="badge badge-warning">{key} / 4</span></h3>
            </header>
            <div className="main-content">
                <Tabs>
                    <Tab activeKey={key} select_key={4}>
                         <label for="exampleFormControlSelect1">Authentication</label>
                        <Button onClick={()=>SignUp(
                            Inputs,
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
                    <Tab activeKey={key} select_key={3}>
                        <label for="exampleFormControlSelect1">Confirm Your Information</label>
                        <Input value={school} readOnly={true}/>
                        <Input value={schoolID} readOnly={true}/>
                        <Input value={username} readOnly={true}/>
                        <Input value={email} readOnly={true}/>
                        <Input value={`${firstName} ${lastName}`} readOnly={true}/>
                    </Tab>
                    <Tab activeKey={key} select_key={2}>
                        <label for="exampleFormControlSelect1">Secondary Information</label>
                        <Input value={schoolID} setValue={setSchoolID} placeholder={"School ID Number"}/>
                        <Input value={firstName} setValue={setFirstName} placeholder={"First Name"}/>
                        <Input value={lastName} setValue={setLastName} placeholder={"Last Name"}/>
                        <Button onClick={()=>{
                            setTermsRead(true);
                            showPopup(
                                 "Eat!T Terms",
                                 `Eat!T utilizes school identification numbers and names
                                  to identify the cutsomers when they pick up their own food.
                                 You are to use your own identification number and 
                                 show up and pick the food when the order is complete.`
                            );
                        }} type="info">
                            View Eat!T Terms
                        </Button>
                    </Tab>
                    <Tab activeKey={key} select_key={1}>
                        <SelectSchool setSchool={setSchool} setDomain={setDomain}/>
                        <label for="exampleFormControlSelect1">Primary Information</label>
                        <Input value={username} setValue={setUsername} placeholder={"Username"}/>
                        <Input value={email} placeholder={"Email auto completion"} readOnly={true}/>
                        <Input value={password} type={"password"} setValue={setPassword} placeholder={"Password"}/>
                        <Button
                            onClick={()=>showPopup(
                                "Password Policy",
                                `Password Must be at least 8 characters
                                 and must contain at least one uppercase, numbers, and no white space.`
                            )} type="info">
                            View Password Policy
                        </Button>
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

export {Signup};
