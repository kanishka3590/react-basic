import React from 'react'
import TryLoginComponent from '../../components/Login/TryLoginComponent';
import UserLoginHeaderComponent from '../../components/Header/UserLoginHeaderComponent';

class TryLoginScreen extends React.Component {
    render(){
        return(
            <body>
            <UserLoginHeaderComponent  />
            <div>
            <TryLoginComponent/>
            </div>
            </body>
        );
    }
  }
  
  export default TryLoginScreen
  