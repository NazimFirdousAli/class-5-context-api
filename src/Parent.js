import React from 'react';
import Child from './Child.js';
import Child2 from './Child2.js';

function Parent(props) {
    return (
        <div>
            <h2>Hello world by Parent js</h2>
            <Child />
            <Child2 />
        </div>
    );
}
export default Parent;