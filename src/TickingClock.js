import React from 'react';
import { nextTick } from 'q';

class Clock extends React.Component{
    render(){
        return(<div>
            <h1>Changing Time!</h1>
            <h2>{new Date().toLocaleTimeString()}</h2>
        </div>);
    }
}

function tick(){
    const ele = (
        <div>
            <h1>Changing Time!</h1>
            <h2>{new Date().toLocaleTimeString()}</h2>
        </div>
    )
}
export default Clock;