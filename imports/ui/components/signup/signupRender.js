import React from "react";
import { Link } from 'react-router';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default function () {
	let { error, loading } = this.state;
	return (
		<Card style={{width: '35%', position: 'absolute', top:'25%', left: '34%', backgroundColor:'rgba(2, 166, 242, 0.39)'}}>
		    <CardTitle style={{textAlign: 'center'}} titleColor="#fff" title="SIGN UP" />
		    <CardText style={{textAlign: 'center'}}>
		      <form onSubmit={this.submit}>
		      	<TextField
			      	hintText="Email"
			    	required={true}
			      	name="email"
			    /><br />
			    <TextField
			    	required={true}
			      	hintText="Password"
			      	type="password"
			      	name="password"
			    /><br />
			    <TextField
			    	required={true}
			      	hintText="First Name"
			      	type="text"
			      	name="fname"
			    /><br />
			    <TextField
			      	hintText="Last Name"
			      	type="text"
			      	name="lname"
			    /><br />
			    <RaisedButton style={{marginBottom: 10}}
			    	backgroundColor="#4caf50"
			     	type="submit"
			     	label="Sign Up"
			     	fullWidth={true}
			     	labelColor="#fff"
			     	disabled={loading}
			    />
			    <Link to={"/login"}>Login</Link>
			    {
			    	error && <span style={{color:"red"}}>{error}</span>
			    }
            </form>
		    </CardText>
		</Card>
	)
}