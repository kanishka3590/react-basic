import React from 'react';

class Employee extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Name : "XYZ",
            Salary : 20,
            City : "Hyd"

        };
    }
    changeSal=()=>{
        this.setState({Salary:50});
    };
    render(){
        return(<div> <h1>Employee Details : </h1>
        <table>
            <tr>
                <td>{this.state.Name}</td>
                <td>{this.state.Salary}</td>
                <td>{this.state.City}</td>
            </tr>
        </table>
        <button  onClick={this.changeSal}>Change Salary</button>
         </div>)
    }
}
export default Employee;