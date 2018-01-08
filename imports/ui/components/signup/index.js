import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { browserHistory } from 'react-router';

import SignupRender from "./signupRender"

export default class Signup extends React.Component{

	constructor(props){
	    super(props);
	    this.state={
	    	error: null,
	    	loading: false
	    }
	}

  	submit = (event) => {
	    event.preventDefault();
	    console.log(event.target.email.value)
	    const email = event.target.email.value.trim();
	    const password = event.target.password.value.trim();
	    const fname = event.target.fname.value.trim();
	    const lname = event.target.lname.value && event.target.lname.value.trim();
	    const profile = {
	      "first_name": fname,
	    }
	    lname && (profile.last_name= lname)
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

	    Meteor.call('addUser',{ email: email, password: password, profile: profile }, (error, res) => {
	      	console.log(12)
	      	if(error) {
		      	this.setState({
			    	loading: false,
			    	error: error.reason
			    })
	      		console.log("errrrr ", error)
	      	} else {
	      		this.setState({
			    	loading: false,
			    })
			    Meteor.loginWithPassword(email, password, function(err) {
                    if (err) {
                        console.log('login error', err);
                    } else {
				        let user_id = Meteor.userId();
				        let role_name = "Admin";
                    }
                })
	        // Meteor.call("editUser", data,user_id,role_name, (error, result) => {
	        //   if(error) {
	        //     console.log("error :"+error);
	        //     console.log("error", error);
	        //   }
	        //   if(result) {
	        //     if(studentRegister) {
	        //       browserHistory.push(`/profile/${Meteor.userId()}`)
	        //     } else if(schoolRegister) {
	        //       browserHistory.push('/ClaimSchool')
	        //     }
	        //   }
	        // });
	      	}
	    });
  	}

  render() {
  	let { error, loading } = this.state;
  	return SignupRender.call(this, this.props, this.state)
  }
}