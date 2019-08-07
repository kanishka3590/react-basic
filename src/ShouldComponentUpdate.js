import React from 'react';

class CompUpdate extends React.Component{
    constructor(props){
        super(props);
        this.state={
            city: "Hyd"
        };
    }
    shouldComponentUpdate(){
        return true;
    }
    changeCity=()=>{
        this.setState({city:"Scd"});
    }
    render(){
        return (<div>
            <h1>Want to Change City?</h1>
            <button onClick={this.changeCity}>Yes</button>
            <h3>{this.state.city}</h3>
        </div>);
    };
}
export default CompUpdate;