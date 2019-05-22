import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from  'material-ui/RaisedButton';
import bg1 from '../components/img/bg1.jfif';
import bookNow from "../components/bookNow";

export class Index extends Component{
   continue = e => {
       e.preventDefault();
       this.props.history.push(`/bookNow`);
   }
   
    render(){
        
        return(
        <MuiThemeProvider>  
            <React.Fragment>
            <AppBar title ="Train Ticket Reservation System"/>
             
             <br/>
             
             <img src={bg1}   />
             <br/>

             <h4>Welcome to Train Ticket Reservation System</h4>
             
             <br/>
            <RaisedButton 
            label="Book the ticket"
            primary={true}
            styles = {styles.button}
            onClick={this.continue}
            />

          </React.Fragment>
        </MuiThemeProvider>
      )  
    }
}


const styles = {
    button: {
        margin: 15
    }   
}

export default Index