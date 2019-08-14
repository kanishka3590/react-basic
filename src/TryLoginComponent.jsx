import React from 'react'
import bootbox from 'bootbox'
import { hashHistory } from 'react-router'


class TryLoginComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name : '',
            pass : ''
        }
        this.forgotPassword = this.forgotPassword.bind(this)
    }
    
    toEnter = (event) => {
        let key = event.target.name;
        let value = event.target.value;
        this.setState({[key]:value});
    }
    login = (event) => {

        if(this.state.name == '')
            alert("Enter Name !!")
        else if(this.state.pass == '')
            alert("Enter Password")
        else if(this.state.pass.length<5)
            alert("Password should be minimun 5 letters !!")
        else{
            alert("Hello " + this.state.name +". Welcome !!");
            hashHistory.push('/tryloginsuccess')
        }
    }
    forgotPassword () {
        hashHistory.push('/login/forgotpassword')
        event.preventDefault()
      }

    googleLogin () {
        window.location.assign('http://gmail.com');
    }
  
    facebookLogin () {
        window.location.assign('http://facebook.com');
    }
    render () {
      return (
        <form>
            <h1>Login</h1>
            <p>Enter Name : {this.state.name} 
            <input type = "text" name = "name" onChange = {this.toEnter}></input></p>
            <p>Enter Password : 
            <input type = "password" name = "pass" onChange = {this.toEnter}></input></p>
            <a onClick={this.forgotPassword} className='text-underline forget-pawd'><u>forget password ?</u></a>
            <button onClick = {this.login}>Login</button>

            <br/><br/>
            <button type='button' onClick={this.facebookLogin} >
                      Facebook
            </button>
            <button type='button' onClick={this.googleLogin} >
                      Google +
            </button>
        </form>
      )
    }
  }
  
  export default TryLoginComponent
  