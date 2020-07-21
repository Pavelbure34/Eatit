import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';

const Popup = (props)=>{
    const {children, header, onClose, show} = props;

    const {Header, Title, Body, Footer} = Modal;
    return (
        <Modal show={show} onHide={onClose} centered>
            <Header closeButton>
                <Title>{header}</Title>
            </Header>
            <Body>
                {children}
            </Body>
            <Footer>
                <Button variant="secondary" onClick={onClose}>
                    Close
                </Button>
            </Footer>
        </Modal>
    );
};

export {Popup};
