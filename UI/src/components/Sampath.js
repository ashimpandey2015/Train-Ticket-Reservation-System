import React from 'react'; 
import {Component} from 'react';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextBar, { TextField } from 'material-ui/TextField';
import './class.css';

export default class Sampath extends Component{

    constructor(props){
        super();

        this.onChangeCredit= this.onChangeCredit.bind(this);
        this.onChangePin = this.onChangePin.bind(this);
        this.onChangeAmountM= this.onChangeAmountM.bind(this);
        this.onChangeName= this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
          
          mobilenumber : '',
          pin : '',
          amounts :'',
          name : '',
          Number : '',
          email : '',
          completed : false

        }
    }

 onChangeCredit(e){
    this.setState({
        credit: e.target.value
    });
}


onChangePin(e){
    this.setState({
        pin : e.target.value
    });
}

onChangeAmountM(e){
    this.setState({
        amounts: e.target.value
    });
}

onChangeName(e){
    this.setState({
        name: e.target.value
    });
}


onChangeEmail(e){
    this.setState({
        email: e.target.value
    });
}

onSubmit(e){
    e.preventDefault();

    console.log(`Form submited :`);

    console.log(`Credit number :${this.state.credit}` );
    console.log(`pin : ${this.state.pin}` );
    console.log(` amount: ${this.state.amounts}`);
    console.log(`name :${this.state.name}` );
    console.log(` email: ${this.state.email}`);

    console.log(`complete : ${this.state.completed}`);

    const newTodo2 = {
        credit : this.state.credit,
        pin : this.state.pin,
        amounts : this.state.amounts,
        name : this.state.name,
        email : this.state.email,
        completed : this.state.completed
    }

    axios.post('http://localhost:8000/sampath' , newTodo2)
          .then(res => console.log(res.data));
          
    this.setState ({
        credit : '',
        pin : '',
        amounts:'',
        name: '',
        email: '',
        completed : false
    });


}
    render(){
        return(
            <MuiThemeProvider>  
                <React.Fragment>
                <AppBar title ="Sampath Payment Gateway"/>

                    <br/>
                    {/* <div style = {{marginTop : 20}}> */}
                    <form className="react-form" onSubmit = {this.onSubmit}>

                    <div className = "form-group">
                    <label>Credit Card Number :&emsp;&emsp;</label>
                    <input type = "text"
                     className = "form-control"
                     value = {this.state.credit}
                     onChange = {this.onChangeCredit}
                     
                     />
                    </div>

                    <div className = "form-group">
                    <label>Enter CVC number:&emsp;&emsp;&emsp;</label>
                    <input type = "text"
                     className = "form-control"
                     value = {this.state.pin}
                     onChange = {this.onChangePin}
                     
                     />
                    </div>

                    <div className = "form-group">
                    <label>Enter Amount:&emsp;&emsp;&emsp;&emsp;&emsp;</label>
                    <input type = "text"
                     className = "form-control"
                     value = {this.state.amounts}
                     onChange = {this.onChangeAmountM}
                     />
                    </div>

                    <div className = "form-group">
                    <label>Card Holder's Name:&emsp;&emsp;</label>
                    <input type = "text"
                     className = "form-control"
                     value = {this.state.name}
                     onChange = {this.onChangeName}
                     
                     />
                    </div>


                    <div className = "form-group">
                    <label>Email :&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</label>
                    <input type = "text"
                     className = "form-control"
                     value = {this.state.email}
                     onChange = {this.onChangeEmail}
                     
                     />
                    </div>

                    <br/>
                     <div className = "form-group">

                     <a href="/confirm">                    
                    <input type = "submit" value = "submit" className = "btn btn-primary" />
                    </a>

                    </div>
                </form>
            {/* </div> */}
            
            </React.Fragment>
        </MuiThemeProvider> 
        );
    }
}


