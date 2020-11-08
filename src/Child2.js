import React,{ useReducer } from 'react';
import counterReducer from './counterReducer.js';

const Child2 = () => {

    let [state,dispatch] = useReducer(counterReducer, 10);
    console.log(state);
    return(
        <div>
            <br/>
    <h3>Value of the reducer is : {state}</h3>
            <button onClick = {() => dispatch('INCREMENT')}>Increment Value in reducer</button>

        </div>
    );

}
export default Child2;