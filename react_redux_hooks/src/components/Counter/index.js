import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {

    const count = useSelector( state => {
        return state.counter;
    })
    const dispatch = useDispatch();

    const increamentCount = () => {
        dispatch({
            type:'INCREAMENT_COUNT',

        })
    }

    const decrementCount = () => {
        dispatch({
            type:'DECREMENT_COUNT',
            
        })
    }
    
    return(
        <div className="counter-container" >
            <h1>Counter : {count}</h1>
            <button onClick={increamentCount} style={{'fontSize':'20px','margin':'20px'}}>+</button>
            <button onClick={decrementCount} style={{'fontSize':'20px'}}>-</button>
        </div>
    )
}

export default Counter;