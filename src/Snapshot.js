import React from 'react';

class Snapshot extends React.Component{
    constructor(props){
        super(props)
        this.state={
            city : "Hyd"
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({city:"Scd"})
        },10000)
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        document.getElementById("div1").innerHTML="Before Update : "+prevState.city;
    }
    componentDidUpdate(){
        document.getElementById("div2").innerHTML="Updated : "+this.state.city;
    }
    render(){
        return(<div>
            <h1>Current City {this.state.city}</h1>
            <div id="div1"></div>
            <div id="div2"></div>
        </div>);
    }
}
export default Snapshot;