import React, { useState } from 'react';
import { Checkbox  } from "primereact/checkbox";
import './FilterGroup.css';

function FilterGroup({ selectOptionFilter, onChange, options, title}) {
    return (
     <div id="filter-body">        
        <h2>{title}</h2>
        <div className="card flex justify-content-left" id="check-butom">
            <div className="flex flex-column gap-3">
                {options.map((item) => {
                    return (
                        <div key={item.value} className="flex align-items-center">
                            <Checkbox  inputId={item.value} name="check-item" value={item} onChange={onChange} checked={selectOptionFilter.value === item.value} />
                            <label htmlFor={item.value} className="ml-2">{item.text}</label>
                        </div>
                    );
                })}
            </div>
        </div>
     </div>
    );
}

export default FilterGroup;