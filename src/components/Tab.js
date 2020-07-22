import React from 'react';

const Tab = (props)=>{
    const {children, activeKey, select_key} = props;
    
    return (
        <section className={(activeKey === select_key)?"visible":"invisible"}>
            {children}
        </section>
    );
};

export {Tab};
