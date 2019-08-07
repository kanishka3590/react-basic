import React from 'react';

//Passing variable by props
class Student extends React.Component{
    render(){
        return <h2>These are Students {this.props.std}</h2>;
    }
}
class Faculty extends React.Component{
    render(){
        return(<div>
            <h1>These are faculty</h1>
            <Student std = "XYZ"></Student>
        </div>);
    }
}
export default Faculty;