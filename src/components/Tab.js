import React from 'react';

/*
    This is Tab component.
    This is my own component.
*/

const Tab = (props)=>{
    const {children, activeKey, select_key} = props;
    
    return (
        <section className={(activeKey === select_key)?"visible":"invisible"}>
            {children}
        </section>
    );
};

export {Tab};
