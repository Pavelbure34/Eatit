import React from 'react';
import {Popuphooks} from '../hooks';
import {Logout} from '../funcs';
import {Button, Popup} from '../components';

const Home = (props)=>{
    const {onSignOut} = props;

    let {
        show, popupMessage, popupTitle,
        showPopup, Close
    } = Popuphooks();

    return (
        <div id="home">
            <header>
                <Button onClick={()=>Logout(onSignOut,showPopup)}>
                    Sign Out
                </Button>
            </header>
            <div className="main-content">
                
            </div>
            <footer>
                <Popup show={show} header={popupTitle} onClose={Close}>
                    {popupMessage}
                </Popup>
            </footer>
        </div>
    );
};

export {Home};
