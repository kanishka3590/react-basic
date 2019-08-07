import React from 'react';

//component inside component
class Inside extends React.Component{
    render(){
        return <p> Inside Component</p>;
    }
}
class Outside extends React.Component{
    render(){
        return( <div>
        <h1>Outside Component</h1>
        <Inside/>
        </div>);
    }
}
export default Outside;