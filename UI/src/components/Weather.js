import React from 'react';
import {List,ListItem,ListItemContent,Card,CardTitle,CardText,CardActions,Button,CardMenu,IconButton} from 'react-mdl';


const Weather = props => (
  
        <div>

      <List>
         {/* <ListItem>
         <ListItemContent> {props.rid && <p>Id : {props.rid}</p>}</ListItemContent>
         </ListItem> */}
         <ListItem>
         <ListItemContent>{props.route && <p> Route : {props.route}</p>}</ListItemContent>
         </ListItem>
         <ListItem>
         <ListItemContent> {props.time && <p> Time : {props.time}</p>}</ListItemContent>
         </ListItem>
         <ListItem>
         <ListItemContent>  {props.cost && <p> Cost : {props.cost} </p>}</ListItemContent>
         </ListItem>
         <ListItem>
         <ListItemContent> {props.tickets && props.cost && <p> Total  : {props.cost*props.tickets} </p>}
         </ListItemContent>
         </ListItem>
         
        {props.route && props.cost && <a href="/payment"><button> Pay </button></a>}


     </List>
       
        { props.error && <p> {props.error}</p>}
       </div>
    
    );
export default Weather;