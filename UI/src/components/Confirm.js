import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from  'material-ui/RaisedButton';
import Sampath from "./Sampath";
import Dialog from "./Dialog";

export class Confirm extends Component{

    render(){
        return(
        <MuiThemeProvider>  
            <React.Fragment>
            <AppBar title ="Confirm"/>
             
             <h2>Select the Payment</h2>

            />

        </React.Fragment>
        </MuiThemeProvider>

        
      )  
    }
}


export default Confirm