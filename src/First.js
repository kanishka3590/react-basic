import React from 'react';


//Initiate component property by constructor 
class Demo extends React.Component{
    constructor(){
        super();
        this.state={color:"red"};
    }
render(){
return <h1>Class Demo with {this.state.color} color</h1>;
}}



export default Demo;