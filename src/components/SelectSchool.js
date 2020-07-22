import React from  'react';
import {SampleSchools as Schools} from '../data';

const SelectSchool = (props)=>{
    const {setSchool, setDomain} = props;

    const renderSchoolOptions = ()=>{
        return Schools.map(each=>{
            const {id, name, domain} = each;
            return (
                <option key={id} value={`${name},${domain}`}>
                    {name}
                </option>
            );
        });
    };

    return (
        <div className="form-group mb-2">
            <select
                className="form-control"
                onChange={e=>{
                    let data = e.target.value.split(",");
                    setSchool(data[0]);
                    setDomain(data[1]);
                }}
                id="exampleFormControlSelect1"
            >
                {renderSchoolOptions()}
            </select>
        </div>
    );
};

export {SelectSchool};
