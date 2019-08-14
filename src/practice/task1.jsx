import React from 'react'
import EmailValidator from 'email-validator'
import Modal from 'react-modal';

const customStyles = {
    content : {
      top                   : '30%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-40%, -50%)'
    }
  };

class PhoneEmailvalidation extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            phoneEmailInput : '',
            errorMessage : '',
            otpInput : '',
            otpInput1 : '',
            otpInput2 : '',
            otpInput3 : '',
            otpInput4 : '',
            modalIsOpen: false
        }
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.Inputvalidation = this.Inputvalidation.bind(this);
        this.SendOtp = this.SendOtp.bind(this);
    }
    openModal() {
        this.setState({modalIsOpen: true});
      }
     
      afterOpenModal() {
        this.subtitle.style.color = '#f00';
      }
     
      closeModal() {
        this.setState({modalIsOpen: false});
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
            if((!this.state.phoneEmailInput.match(/^[0-9]{10}$/)) && 
            !EmailValidator.validate(this.state.phoneEmailInput)){
                this.state.errorMessage = 'Please Enter Valid Phone Number or Email-Id !!';
                alert(this.state.errorMessage);
            }
            else{
                this.state.errorMessage = "Successfull !!";
                this.openModal();
              //  alert(this.state.errorMessage);
              //  prompt('Enter OTP');
             //   hashHistory.push('/enterotp');

            }
        }
        
    }
    OtpInput = (event) =>{
        let key = event.target.name;
        let value = event.target.value;
        this.setState({[key]:value});   
            if (event.target.value && event.target.value.length === 1) {
            if(event.target.name == 'otpInput1')
            this.refs.otpInput2.focus()
            if(event.target.name == 'otpInput2')
            this.refs.otpInput3.focus()
            if(event.target.name == 'otpInput3')
            this.refs.otpInput4.focus()
        }
    }
    OtpValidate = (event) =>{
        let otpInput = this.state.otpInput1 + this.state.otpInput2 + 
        this.state.otpInput3 + this.state.otpInput4;
        if(!otpInput){
            this.state.errorMessage = "Please Enter OTP !!";
            alert(this.state.errorMessage)
            
        }
        else if(otpInput !== "1234"){
            this.state.errorMessage = "Wrong OTP !!"
            alert(this.state.errorMessage);
            // event.target.value == '';
            // this.state.otpInput1.value == '';
            //this.otpInput1.value == '';
            this.setState(
              {
                otpInput1:'',
                otpInput2:'',
                otpInput3:'',
                otpInput4:'',
              })
            // this.refs.form.reset();
            //event.target.reset();
            

        }
        else{
            alert("successful!!");
            this.closeModal();
        }
        event.preventDefault()
    }
    // handleKeyPress(value, event){
    //     if(event.key === 'Enter'){
    //       this.refs[event].focus();
    //     }
    //   }

    render(){
        return(
       
        <div>
            <input type = 'text' placeholder = 'Phone Number/Email-id' name = 'phoneEmailInput' 
            onChange = {this.Inputvalidation} ></input><br></br>
            <button  onClick = {this.SendOtp}>Submit</button>
         
        <Modal
        isOpen = {this.state.modalIsOpen}
        onAfterOpen = {this.afterOpenModal}
        onRequestClose = {this.closeModal}
        style = {customStyles}
        contentLabel = ""
      >

        <h2 ref={subtitle => this.subtitle = subtitle}>Enter OTP :</h2>
        <form>
          {/* <input placeholder = 'Enter OTP' name = 'otpInput' onChange = {this.OtpInput}/> */}
          <input placeholder = '_' maxLength = {1} size = '1' name = 'otpInput1' ref='otpInput1' 
          onChange ={this.OtpInput} value = {this.state.otpInput1}/>
          <input placeholder = '_' maxLength = {1} size = '1' name = 'otpInput2' ref='otpInput2'
          onChange ={this.OtpInput} value = {this.state.otpInput2}/>
          <input placeholder = '_' maxLength = {1} size = '1' name = 'otpInput3' ref='otpInput3'
          onChange ={this.OtpInput} value = {this.state.otpInput3}/>
          <input placeholder = '_' maxLength = {1} size = '1' name = 'otpInput4' ref='otpInput4'
          onChange ={this.OtpInput} value = {this.state.otpInput4}/>

         <button onClick = {this.OtpValidate}>Send</button>
        </form>
        <button onClick = {this.closeModal}>close</button>
      </Modal>
      </div>);
    }
}
export default PhoneEmailvalidation