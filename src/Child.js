import React, { useContext } from 'react';
import counterContext from './counterContext.js';

const Child = () => {
    const counterValue = useContext(counterContext)
    console.log({counterValue});
    return(
        <div>
            <h2>Hello world by Child js</h2>
    <h5>Context value = {counterValue}</h5>
    <br /><br />
    <button onClick = { () => {counterValue[1](++counterValue[0])}}>Increment value in Context</button>
        </div>
    )

};
export default Child;