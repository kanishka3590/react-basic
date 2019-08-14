import React from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import {Container, Row, Col} from 'react-amazing-grid'


class PhoneNo extends React.Component{
    constructor(){
        super();
        this.state={

        }
        this.onClick = this.onClick.bind(this)
    }
    onClick () {
        this.dialog.showAlert('Hello Dialog!')
      }
    render(){
     return(
        <div>
        <PhoneInput
         placeholder="Enter phone number"
         value={ this.state.phone }
         onChange={ phone => this.setState({ phone }) } />
         
                    <Container>
                        <Row>
                            <Col xs={6} xsOffset={3}>
                                Trying grid
                            </Col>
                        </Row>
                    </Container>
        
        </div>)
    }
}
export default PhoneNo