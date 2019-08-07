import React from 'react';

class ChangeAfter extends React.Component{
    constructor(props){
        super(props);
        this.state={City:"Hyd"};
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({City:"Scd"})
        }, 10000);
    }
    render(){
        return <h1>{this.state.City}</h1>;
    };
}
export default ChangeAfter;