import { createStore } from 'redux';
import uuid from 'uuid/v4';


const initialState = {
    counter:1,
    name:[
        {name:'sagar',id:uuid()},
        {name:'shaurya',id:uuid()},
        {name:'sneha',id:uuid()},
    ],
    post:[],
}

const reducer = (state,action) => {
    //debugger
    switch(action.type){
        case 'INCREAMENT_COUNT':
            return {
                ...state,
                counter:state.counter + 1
            }
        case 'DECREMENT_COUNT':
            return{
                ...state,
                counter:state.counter - 1
            }
        case 'ADD_EMPLOYEE':
            return{
                ...state,
                name:[...state.name,action.payload],
            }    
        case 'ADD_POST':
            return {
                ...state,
                post:action.payload,
            }    
        default:
            return state
    }
};
export const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

// import { createStore } from 'redux';
// import uuid from 'uuid/v4';

// const initialState = {
//     EmployeeNames:[
//         {name:'sagar',id:uuid()},
//         {name:'shaurya',id:uuid()},
//         {name:'sneha',id:uuid()}
//     ]
// }

// //reducer
// const reducer = (state,{type,payload}) => {
//     return state;
//     // switch(type){
//     //     case 'ADD_EMPLOYEE':
//     //         return{
//     //             ...state,
//     //             payload
//     //         }

//     // }
     
// }
// //store
// export const store = createStore(reducer,initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// // Actions

// export const addEmployee = (employee) => (
//     {
//         type:'ADD_EMPLOYEE',
//         payload:employee,
//     }
// )
