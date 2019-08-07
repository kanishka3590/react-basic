import React from 'react';

class BindObject extends React.Component{
    go=(a,b)=>{
        alert(b.type);
    }
    render(){
        return(<div>
            <h1>Binding Object! Check Event </h1>
            <button onClick={this.go.bind(this,"Start")}>Event Name</button>
        </div>);
    }
}
export default BindObject;