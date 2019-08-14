import React from 'react'
import Popup from "reactjs-popup";
import { Prompt } from 'react-router'
import Dialog from 'react-dialog'


class EnterOtp extends React.Component{
    constructor() {
        super();
        this.state = {
            isDialogOpen: false
        }
    }
 
    openDialog = () => this.setState({ isDialogOpen: true })
 
    handleClose = () => this.setState({ isDialogOpen: false })
 
    render() {
        return (
            <div className="container">
                <button type="button" onClick={this.openDialog}>Open Dialog</button>
                {
                    this.state.isDialogOpen &&
                    <Dialog
                        title="Dialog Title"
                        modal={true}
                        onClose={this.handleClose}
                        buttons={
                            [{
                                text: "Close",
                                onClick: () => this.handleClose()
                            }]
                        }
                        >
                    </Dialog>
                }
            </div>
        )
    // constructor(props){  
    //     super(props);  
    //     this.state = { showPopup: true };  
    //     }  
        
    //       togglePopup() {  
    //     this.setState({  
    //          showPopup: !this.state.showPopup  
    //     });  
    //      }  
        
    //       render() {  
    //     return (  
    //     <div>  
    //     <button onClick={this.togglePopup.bind(this)}> Click To Launch Popup</button>  
        
    //     {this.state.showPopup ?  
    //     <Popup  
    //               text='Click "Close Button" to hide popup'  
    //               closePopup={this.togglePopup.bind(this)}  
    //     />  
    //     : null  
    //     }  
    //     </div>  
    //     );
      }
}
export default EnterOtp;