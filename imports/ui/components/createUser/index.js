import React from 'react';
import { browserHistory } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';

import { EmployeeRoles } from "/imports/api/roles/fields"
import Render from "./render"


class CreateUser extends React.Component{

	constructor(props){
	    super(props);
	    this.state={
	    	error: null,
	    	loading: false
	    }
	}

	componentWillMount(){
		if(!Meteor.user())
			browserHistory.push('/login')
	}
	handleChange = (event, index, value)=>{
		this.setState({
			selectedRole: value
		})
	}
	submit = (event) => {
	    event.preventDefault();
	    console.log(event.target.email.value)
	    const email = event.target.email.value;
	    const password = event.target.password.value;
	    const firstName = event.target.fname.value;
	    const lastName = event.target.lname.value;
	    const department = event.target.department.value;
	    const dob = event.target.dob.value;
	    const role = this.state.selectedRole;
	    if(!email) {
	    	this.setState({
	    		error:'Email Required',
	    		success: null
	    	})
	      	return false;
	    }
	    if(!(new RegExp( /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)).test(email)) {
	    	this.setState({
	    		error:'Please enter valid email address',
	    		success: null
	    	})
		    return false;
	    }
	    if(!password) {
	    	this.setState({
	    		error:'Password Required',
	    		success: null
	    	})
	      	return false;
	    }
	    if(!firstName) {
	    	this.setState({
	    		error:'First Name Required',
	    		success: null
	    	})
	      	return false;
	    }
	    if(!dob) {
	    	this.setState({
	    		error:'Date of Birth Required',
	    		success: null
	    	})
	      	return false;
	    }
	    if(!role) {
	    	this.setState({
	    		error:'Role Required',
	    		success: null
	    	})
	      	return false;
	    }
	    this.setState({
	    	loading: true
	    })
	    const userObject = {
	    	email: email,
            password: password,
	    	profile: {
	    		dob:(new Date(dob)).toISOString(),
	    		first_name:firstName,
	    		last_name:lastName,
	    		department: department,
	    		assigned_role: role
	    	},
	    }
	    Meteor.call("addUser", userObject, (error, result)=>{
	      	if(error) {
	      		console.log("nooooooooooooo")
	      		this.setState({
			    	loading: false,
			    	error: error.reason
			    })
	        } else {
	        	console.log("I.m heree")
		     	this.setState({
		    		loading: false,
		    		selectedRole: null
		    	})
		    	event.target.dob.value = null;
		    	document.getElementById('createUserForm').reset();

	        }
	    })
  	}
  render() {
  	return (
		Render.call(this, this.props, this.state)
  	)
  }
}

export default createContainer(props => {
  let roles = EmployeeRoles.find().fetch();
  return {...props, roles}
}, CreateUser);