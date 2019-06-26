import React from 'react';
import { useSelector } from 'react-redux';
import './style.css';

export const Employee = () => {
    const emp = useSelector( state => {
        return state;
    });
    return(
        <div className="employee-container">
            {emp.name.map( item => {
                return <div key={item.id}>{item.name}</div>
            })}
            Total employee Count is : {emp.name.length}
        </div>
    )
}

export default Employee; 