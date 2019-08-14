import React from 'react'
import {hashHistory} from 'react-router'

class TrySignup extends React.Component{
    constructor(props){
        super(props);
        this.state={
            fname:'',
            lname:'',
            bdate:'',
        }
    }
    toEnter = (event) => {
        let key = event.target.name;
        let value = event.target.value;
        this.setState({[key]:value});

    }
    signup = (event) => {
        if(this.state.fname == '')
            alert(" Please Enter First Name");
        else if(this.state.lname == '')
            alert(" Please Enter Last Name");
        else if(this.state.bdate == '')
            alert(" Please Enter Date of Birth");
        else{
            hashHistory.push('/try');
            alert("Signup Successfully !!");
        }
    }
    login(){
        hashHistory.push('/try');
    }
    render(){
        return(<div>
            <h1>Signup</h1>
            <div>
                <label>First Name</label>
                <input type='text' placeholder='First Name' onChange={this.toEnter} name='fname'></input>
            </div>
            <div>
                <label>Last Name</label>
                <input type='text' placeholder='Last Name' name='lname' onChange={this.toEnter}></input>
            </div>    
                <label>Date of Birth</label>
                <input type='date' placeholder='Date of Birth' name='bdate' onChange={this.toEnter}></input>
            <div>
                <label>Address</label>
                <textarea placeholder='Address'/>
            </div>
            <p>Already a user?<a onClick={this.login} className='text-underline'>Login</a></p> 
            <div>
                <button onClick={this.signup}>Signup</button>
            </div>
        </div>);
    }
}
export default TrySignup