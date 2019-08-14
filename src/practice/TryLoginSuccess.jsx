import React from 'react'
import UserLoginHeaderComponent from '../Header/UserLoginHeaderComponent';

class TryLoginSuccess extends React.Component{
    TryBoot(){
        bootbox.alert("hello..");
    }
    render(){
        return(<form>
            <UserLoginHeaderComponent/>
            <h1>Home Screen</h1>
            <button onClick={this.TryBoot}>Try Bootbox</button>
        </form>);
    }
}
export default TryLoginSuccess