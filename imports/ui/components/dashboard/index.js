import React from 'react';
import { browserHistory } from 'react-router';

import DashboardRender from "./dsashboardRender"


export default class Dashboard extends React.Component{

	constructor(props){
	    super(props);
	    this.state={
	    	error: null,
	    	loading: false
	    }
	}

	componentWillUpdate(){

	}
  	render() {
	  	let { error, loading } = this.state;
	  	return (
			LoginRender.call(this, this.props, this.state)
	  	)
  	}
}