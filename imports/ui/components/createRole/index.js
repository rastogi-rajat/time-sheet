import React from 'react';
import { browserHistory } from 'react-router';

import Render from "./render"


export default class CreateRoles extends React.Component{

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

	submit = (event) => {
	    event.preventDefault();
	    const role = event.target.role.value;
	    if(!role) {
	    	this.setState({
	    		error:'Role name is required',
	    		success: null
	    	})
	      	return false;
	    }
	    this.setState({
	    	loading: true
	    })
	    Meteor.call("createNewRole", role, (err, res)=>{
	    	if(err){
	    		console.log(err)
	    		this.setState({
	    			loading: false,
	    			error: err.reason,
	    			success: null
	    		});
	    	} else {
	    		this.setState({
	    			loading: false,
	    			error: null,
	    			success: "Role Created"
	    		})
	    	}
	    })
  	}

  	render() {
	  	return (
			Render.call(this, this.props, this.state)
	  	)
  	}
}