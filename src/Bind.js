import React from 'react';

class BindExm extends React.Component{
    go=(a)=>{
        alert(a);
    }
    render(){
        return(<div>
            <h1>Passing Argument into Event Handler</h1>
            <button onClick={this.go.bind(this,"Start")}>Click</button>
        </div>);
    }
}
export default BindExm;