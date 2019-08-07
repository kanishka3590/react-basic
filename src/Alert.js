import React from 'react';

class AlertExm extends React.Component{
    go=(a)=>{
        alert(a);
    }
    render(){
        return(<div>
            <h1>Click on Button</h1>
            <button onClick={()=>this.go("Start")}>Go</button>
        </div>);
    }
}
export default AlertExm; 