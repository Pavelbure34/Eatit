import React, {useState} from 'react';
import {NavLink as Link} from 'react-router-dom';
import {SampleSchools as Schools} from '../data';
import {IsEmptyInput} from '../funcs';
import {UserInfoHooks, AuthenHooks, Popuphooks} from '../hooks';
import {Icon, Popup} from '../components';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';

const Signup = ()=>{
    const [key, setKey] = useState(1);
    const [domain, setDomain] = useState('');

    const {
        username, setUsername,
        firstName, setFirstName,
        lastName, setLastName,
        email, setEmail,
        password, setPassword,
        schoolID, setSchoolID,
        school, setSchool
    } = UserInfoHooks();
    const {pin, setPin} = AuthenHooks();
    let {
        show, popupMessage, popupTitle,
        showPopup, Close
    } = Popuphooks();

    const renderSchoolOptions = ()=>{
        return Schools.map(each=>{
            const {id, name, domain} = each;
            return (
                <option key={id} value={`${name},${domain}`}>
                    {name}
                </option>
            );
        });
    };

    const SendPinNumberToEmail = ()=>{
        setEmail(username + domain);
        //send pin
    };

    const AuthenticateEmail = ()=>{
        //authenticate
    };

    const TopBtnOnClickEvent = ()=>{
        switch (key){
            case 4:
            case 3:
            case 2:
                setKey(key - 1);
            default:
                break;
        }
    };

    const BottomBtnOnClickEvent = ()=>{
        switch (key){
            case 4:
                break;
            case 3:
                //shoot the authenticate pin number to email
                if (IsEmptyInput(pin)){
                    showPopup( "Warning", "Empty Inputs");
                }else{
                    setKey(key + 1);
                }   
                break;
            case 2:
                if (IsEmptyInput(schoolID) || IsEmptyInput(firstName) || IsEmptyInput(lastName)){
                    showPopup( "Warning", "Empty Inputs");
                }else{
                    setKey(key + 1);
                }   
                break;
            default:
                setEmail(username + domain);
                if (IsEmptyInput(username) || IsEmptyInput(password) || IsEmptyInput(email)){
                    showPopup( "Warning", "Empty Inputs");
                    //check out for password security
                }else{
                    setKey(key + 1);
                }   
        }
    };

    const renderTabs = ()=>{
        switch (key){
            case 4:
                return (
                    <section>
                        <label for="exampleFormControlSelect1">Confirm Your Information</label>
                        <div className="input-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                value={school}
                                aria-describedby="button-addon1"
                                readOnly
                            />
                        </div>
                        <div className="input-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                value={schoolID}
                                aria-describedby="button-addon1"
                                readOnly
                            />
                        </div>
                        <div className="input-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                value={username}
                                aria-describedby="button-addon1"
                                readOnly
                            />
                        </div>
                        <div className="input-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                value={email}
                                aria-describedby="button-addon1"
                                readOnly
                            />
                        </div>
                        <div className="input-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                value={`${firstName} ${lastName}`}
                                aria-describedby="button-addon1"
                                readOnly
                            />
                        </div>
                    </section>
                );
            case 3:
                return (
                    <section>
                        <div>
                            <label for="exampleFormControlSelect1">Authentication</label>
                            <div className="input-group mb-2">
                                <input
                                    type="text"
                                    className="form-control"
                                    value={pin}
                                    placeholder="Pin Number"
                                    onChange={e=>setPin(e.target.value)}
                                    aria-describedby="button-addon1"/>
                            </div>
                            <button
                                type="button"
                                className="btn btn-success btn-lg btn-block">
                                Send Authentication Pin to Email
                            </button>
                        </div>
                    </section>
                );
            case 2:
                return (
                    <section>
                        <label for="exampleFormControlSelect1">Secondary Information</label>
                        <div className="input-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                value={schoolID}
                                onChange={e=>setSchoolID(e.target.value)}
                                placeholder="School ID Number"
                                aria-describedby="button-addon1"/>
                        </div>
                        <div className="input-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                value={firstName}
                                onChange={e=>setFirstName(e.target.value)}
                                placeholder="First Name"
                                aria-describedby="button-addon1"/>
                        </div>
                        <div className="input-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                value={lastName}
                                onChange={e=>setLastName(e.target.value)}
                                placeholder="Last Name"
                                aria-describedby="button-addon1"/>
                        </div>
                    </section>
                );
            default:
                return (
                    <section>
                        <div className="form-group mb-2">
                            <label for="exampleFormControlSelect1">Select your School</label>
                            <select
                                className="form-control"
                                onChange={e=>{
                                    let data = e.target.value.split(",");
                                    setSchool(data[0]);
                                    setDomain(data[1]);
                                }}
                                id="exampleFormControlSelect1"
                            >
                                {renderSchoolOptions()}
                            </select>
                        </div>
                        <label for="exampleFormControlSelect1">Primary Information</label>
                        <div className="input-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                value={username}
                                onChange={e=>setUsername(e.target.value)}
                                placeholder="Username"
                                aria-describedby="button-addon1"/>
                        </div>
                        <div className="input-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                value={username +  domain}
                                placeholder="john.d1@school.edu"
                                aria-describedby="button-addon1"
                                readOnly/>
                        </div>
                        <div className="input-group mb-2">
                            <input
                                type="password" 
                                className="form-control"
                                value={password}
                                onChange={e=>setPassword(e.target.value)}
                                placeholder="Password"
                                aria-describedby="button-addon1"/>
                        </div>
                    </section>
                );
        }
    };

    const renderTopBtn = ()=>{
        return (key != 1)?
        <button
            type="button"
            onClick={()=>TopBtnOnClickEvent()}
            className="btn btn-outline-light">
            <Icon icon={faChevronLeft} size="1x" color="#FFFFFF"/>
        </button>:
        <Link to="/signin">
            <button type="button" className="btn btn-outline-light">
                <Icon icon={faChevronLeft} size="1x" color="#FFFFFF"/>
            </button>
        </Link>;
    };
    
    const renderBottomBtn = ()=>{
        if (key == 3)
            return (
                <button
                    type="button"
                    onClick={()=>BottomBtnOnClickEvent()}
                    className="btn btn-success btn-lg btn-block">
                    Authenticate Email
                </button>
            );
        else if (key == 1 || key == 2)
            return (
                <button
                    type="button"
                    onClick={()=>BottomBtnOnClickEvent()}
                    className="btn btn-success btn-lg btn-block">
                    Next
                </button>
            );
        else
            return (
                <>
                <p className="center-text">
                    By confirming,<br/>
                    I agree to the terms given by Eat!T
                </p>
                    <Link to="/signin">
                        <button type="button" className="btn btn-success btn-lg btn-block">
                            Confirm
                        </button>
                    </Link>
                </>
            );
    };  

    return (
        <div id="signup">
            <header>
                {renderTopBtn()}
            </header>
            <div className="main-content">
                {renderTabs()}
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
