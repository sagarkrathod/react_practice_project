import React from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'uuid/v4';

const AddEmployee = () => {
    const dispatch = useDispatch();
    const inputBox = React.createRef();
    const AddNewEmp = () => {
        const newEmployee = inputBox.current.value;
        dispatch({
            type:'ADD_EMPLOYEE',
            payload:{name:newEmployee,id:uuid()}
        })
        inputBox.current.value = '';
        inputBox.current.focus();
    }

    return(
        <div className="add-employee">
            Add Employee <input type="text" placeholder="Enter Name" ref={inputBox}/>
            <button onClick={AddNewEmp}>Add Employee</button>
        </div>
    )
}

export default AddEmployee;