import React from 'react';

class TryOnChange extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name : ''
        };
    }
    change=(event)=>{
        this.setState({name : event.target.value});
    }
    render(){
        return(<form>
            <p>Enter Name : </p>
            <input type = "text" onChange={this.change}></input>
            <p>Name : {this.state.name}</p>
        </form>);
    }
}
export default TryOnChange;