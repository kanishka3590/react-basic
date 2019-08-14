import { GoogleComponent } from 'react-google-location' 

 
//... 
import React, { Component } from 'react';
 
 
 
const API_KEY = 'AIzaSyB46Y_HVZiOSlVKayvcimkYEa80NAutvEQ';  
 
class NewMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      place: null,
    };
  }
 
  render() {
    return (
      <div >
         <GoogleComponent
         
          apiKey={API_KEY}
          language={'en'}
          country={'country:in|country:us'}
          coordinates={true}
          locationBoxStyle={'custom-style'}
          locationListStyle={'custom-style-list'}
          onChange={(e) => { this.setState({ place: e }) }} />
      </div>
 
    )
  } 
}
 
 
export default NewMap;