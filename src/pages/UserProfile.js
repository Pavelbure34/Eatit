import React, {useState, useEffect} from 'react';
import {IsEmptyInput, UpdateProfile} from '../funcs';
import {Popuphooks, UserInfoHooks} from '../hooks';
import {Input, Button, NavBar, Popup} from '../components';

const UserProfile = (props)=>{
    const {user} = props;
    const {
        name,
        family_name,
        email,
        custom:school,
        custom:schoolid,
        custom:username,
        custom:userType
    } = user;
    console.log(user);

    const [editProfile, setEditProfile] = useState(false);
    const {
        firstName, lastName,
        setFirstName, setLastName
    } = UserInfoHooks();
    let {
        show, popupMessage, popupTitle,
        showPopup, Close
    } = Popuphooks();

    useEffect(()=>{
        if (editProfile){
            setFirstName(name);
            setLastName(family_name);
        }
    },[editProfile]);

    const ButtonEvent = ()=>{
        if (editProfile){
            if (IsEmptyInput(firstName) || IsEmptyInput(lastName))
                showPopup("Warning", "Empty Inputs");
            else{
                alert("good");
                // let result = UpdateProfile(firstName, lastName);
                // console.log(result);
            }
        }
        setEditProfile(!editProfile);
    };

    const renderEditInputs = ()=>{
        return (editProfile)?<>
            <Input value={firstName} setValue={setFirstName}/>
            <Input value={lastName} setValue={setLastName}/>
        </>:<>
            <Input value={name} readOnly={true}/>
            <Input value={family_name} readOnly={true}/>
        </>;
    };

    return (
        <div id="userprofile">
            <header>
                <NavBar name={name} family_name={family_name}/>
            </header>
            <div className="main-content">
                <section>
                    <Input value={school} readOnly={true}/>
                    <Input value={schoolid} readOnly={true}/>
                    <Input value={userType} readOnly={true}/>
                    <Input value={username} readOnly={true}/>
                    <Input value={email} readOnly={true}/>
                    {renderEditInputs()}
                </section>
                <section>
                    <Button onClick={ButtonEvent}>
                        {(editProfile)?"Confirm":"Edit Profile"}
                    </Button>
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

export {UserProfile};
