import React from 'react';

const Input = (props)=>{
    const {
        id,
        type = "text", placeholder = "", readOnly = false,
        value, setValue
    } = props;

    return (!readOnly)?
        <div id={id} className="input-group mb-2">
            <input
                type={type}
                className="form-control"
                value={value}
                onChange={e=>setValue(e.target.value)}
                placeholder={placeholder}
                aria-describedby="button-addon1"/>
        </div>:
        <div id={id} className="input-group mb-2">
            <input
                type="text"
                className="form-control"
                value={value}
                placeholder={placeholder}
                aria-describedby="button-addon1"
                readOnly
            />
        </div>;
};

export {Input};
