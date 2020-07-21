import React from 'react';
import {NavLink as Link} from 'react-router-dom';
import {UserInfoHooks} from '../hooks';
import Logo from '../assets/images/logo.png';

const Signin = (props)=>{
    const {onSignin} = props;
    const {
        username, setUsername,
        password, setPassword,
        school, setSchool
    } = UserInfoHooks();

    return (    
        <div id="signin">
            <header>
                <img src={Logo} alt="logo"/>
            </header>
            <div className="main-content">
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
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={e=>setPassword(e.target.value)}
                        placeholder="Password"
                        aria-describedby="button-addon1"/>
                </div>
                <Link to="/forgotpassword">
                    <button type="button" className="btn btn-success btn-lg btn-block">
                        Find Password
                    </button>
                </Link>
                <br/>
                <button
                    type="button"
                    onClick={()=>onSignin()}
                    className="btn btn-success btn-lg btn-block">
                    Sign In
                </button>
                <Link to="/signup">
                    <button type="button" className="btn btn-success btn-lg btn-block">
                        Sign Up
                    </button>
                </Link>
            </div>
        </div>
    );
};

export {Signin};
