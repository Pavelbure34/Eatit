import React from 'react';
import {Modal, Button} from 'react-bootstrap';

const Popup = (props)=>{
    const {children, header, onClose, show} = props;

    const {Header, Title, Body, Footer} = Modal;
    return (
        <Modal show={show} onHide={onClose} centered>
            <Header closeButton>
                <Title><h3>{header}</h3></Title>
            </Header>
            <Body>
                <p>{children}</p>
            </Body>
            <Footer>
                <Button variant="success" onClick={onClose}>
                    Close
                </Button>
            </Footer>
        </Modal>
    );
};

export {Popup};
