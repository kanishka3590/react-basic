import React from 'react'
import EmailValidator from 'email-validator'
import Popup from "reactjs-popup";


class PhoneEmailvalidation extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            phoneEmailInput : '',
            errorMessage : ''
        }
    }
    Inputvalidation = (event) => {
        let key = event.target.name;
        let value = event.target.value;
        this.setState({[key]:value});     
    }
    SendOtp = (event) => {
        if(!this.state.phoneEmailInput.trim()){
           this.state.errorMessage = 'Enter Phone Number or Email-Id !!'; 
           alert(this.state.errorMessage)        
        }   
        else if(typeof this.state.phoneEmailInput !== 'undefined'){
            if((!this.state.phoneEmailInput.match(/^[0-9]{10}$/)) && !EmailValidator.validate(this.state.phoneEmailInput)){
                this.state.errorMessage = 'Please Enter Valid Phone Number or Email-Id !!';
                alert(this.state.errorMessage);
            }
            else{
                this.state.errorMessage = "Successfull !!";
                alert(this.state.errorMessage);
                // prompt('Enter OTP');
                this.EnterOtp();

            }
        }
        
    }
    EnterOtp(){
        alert("aa")
        
    }

    render(){
        return(<form>
            <input type = 'text' placeholder = 'Phone Number/Email-id' name = 'phoneEmailInput' onChange = {this.Inputvalidation} ></input><br></br>
            <button  onClick = {this.SendOtp}>Submit</button>
        </form>);
    }
}
export default PhoneEmailvalidation