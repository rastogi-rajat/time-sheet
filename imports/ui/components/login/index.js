import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { browserHistory } from 'react-router';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import LoginRender from "./loginRender"


export default class Login extends React.Component{

	constructor(props){
	    super(props);
	    this.state={
	    	error: null,
	    	loading: false
	    }
	}
	componentWillMount(){
		browserHistory.push('/login')
	}
  	submit = (event) => {
	    event.preventDefault();
	    console.log(event.target.email.value)
	    const email = event.target.email.value;
	    const password = event.target.password.value;

	    if(!email) {
	    	this.setState({
	    		error:'Incorrect Email'
	    	})
	      	return false;
	    }
	    if(!password) {
	    	this.setState({
	    		error:'Incorrect Password'
	    	})
	      	return false;
	    }

	    if(!(new RegExp( /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)).test(email)) {
	    	this.setState({
	    		error:'Please enter valid email address'
	    	})
		    return false;
	    }
	    this.setState({
	    	loading: true
	    })
	    Meteor.loginWithPassword(email, password, (error) => {
	      	if(error) {
	      		this.setState({
			    	loading: false,
			    	error: error.reason
			    })
	        } else {
		     	this.setState({
		    		loading: false
		    	})
	            browserHistory.push('/createrole');

	        }
	 	});
  	}

  render() {
  	let { error, loading } = this.state;
  	return (
		LoginRender.call(this, this.props, this.state)
  	)
  }
}