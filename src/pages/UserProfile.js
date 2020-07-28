import React from 'react';
import {Input, NavBar} from '../components';

/*
    This Page displays user information.
*/

const UserProfile = (props)=>{
    const {user} = props;
    const {name, family_name, email} = user;  //standard attributes from AWS Cognito
    const school = user['custom:school'];     //custom attributes from AWS Cognito 
    const schoolid = user['custom:schoolid']; //custom attributes from AWS Cognito
    const username = user['custom:username']; //custom attributes from AWS Cognito
    const userType = user['custom:userType']; //custom attributes from AWS Cognito

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
                    <Input value={name} readOnly={true}/>
                    <Input value={family_name} readOnly={true}/>
                </section>
                <section/>
            </div>
            <footer/>
        </div>
    );
};

export {UserProfile};
