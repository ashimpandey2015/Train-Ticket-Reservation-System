
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const Form = props => (
    <form onSubmit = {props.getWeather} >

<MuiThemeProvider>  
            <React.Fragment>
            <AppBar title ="Select your Route"/>

            <TextField
             hintText = "Enter the route"
             name = "city"
             type="text"
             />
             <br/>

             <TextField
             hintText = "No of Tickets"
             name = "tickets"
             type="text"
             />
             <br/>

    {/* <input type = "text"  name = "city" placeholder = "Ticket ID" />
    <br/> */}

    {/* <input type = "text" name = "route" placeholder = "From...--To...." />
    <br/> */}

    {/* <input type = "text" name = "tickets" placeholder = "How many tickets ?"/>
    <br/>  */}

    
            {/* <RaisedButton 
            label="Get Train"
            primary={true}
            /> */}

    <button>Get Train</button>
    
      
    </React.Fragment>
</MuiThemeProvider>
</form>
);

export default Form;
