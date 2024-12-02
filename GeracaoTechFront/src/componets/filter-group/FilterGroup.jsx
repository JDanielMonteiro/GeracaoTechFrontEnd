import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';

const options = [
    { name: 'Maior preço', code: 'asc' },
    { name: 'Menor preço', code: 'desc' },
    { name: 'Mais relevantes', code: null }
];

function FilterGroup({ selectOptionOrder, onChange }) {


    return (
     <>
     <Dropdown value={selectOptionOrder} onChange={onChange} options={options} optionLabel="name" 
    placeholder="Ordenar por" className="w-full md:w-14rem" />
     </>
    );
}

export default FilterGroup;