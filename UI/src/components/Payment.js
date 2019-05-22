import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from  'material-ui/RaisedButton';
import Sampath from "../components/Sampath";
import Dialog from "../components/Dialog";

export class Payment extends Component{

    continueSampath = e => {
        e.preventDefault();
        this.props.history.push(`/sampath`);
    }
    
    continueDialog = e => {
        e.preventDefault();
        this.props.history.push(`/dialog`);
    }


    render(){
        return(
        <MuiThemeProvider>  
            <React.Fragment>
            <AppBar title ="Payment"/>
             
             <h2>Select the Payment</h2>

            <br/> <br/> <br/>
            <RaisedButton 
            label="Sampath"
            primary={true}
            styles = {styles.button}
            onClick={this.continueSampath}
            />

            <br/> <br/> <br/> <br/> <br/> <br/>
            <RaisedButton 
            label="Dialog"
            primary={true}
            styles = {styles.button}
            onClick={this.continueDialog}
            />

        </React.Fragment>
        </MuiThemeProvider>

        
      )  
    }
}


const styles = {
    button: {
        margin: 25
    }   
}

export default Payment