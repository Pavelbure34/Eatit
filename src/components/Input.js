import React from 'react';

/*
    This is Input component.
    This is custom Input based on Bootstrap Input.
    It is highly customizable with placehlder, readOnly, id, value.
*/

const Input = (props)=>{
    const {
        id,
        type = "text",
        placeholder = "",
        readOnly = false,
        value,
        setValue //detecting the change in the input
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
