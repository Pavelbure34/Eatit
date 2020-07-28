import {useState} from 'react';

/*
    This file is react hook for pop ups.
*/

const Popuphooks = ()=>{
    const [show, setShow] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [popupTitle, setPopupTitle] = useState('');
    const TurnOn = ()=>setShow(true);
    const Close = ()=>setShow(false);

    const showPopup = (header, text)=>{
        setPopupMessage(text);
        setPopupTitle(header);
        TurnOn();
    };

    return {
        show,
        popupMessage,
        popupTitle,
        showPopup,
        Close
    };
};

export {Popuphooks};
