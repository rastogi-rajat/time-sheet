import React from "react";
import { Link } from 'react-router';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default function () {
	let { error, loading } = this.state;
	return (
		<Card style={{width: '35%', position: 'absolute', top:'32%', left: '32%', backgroundColor:'rgba(2, 166, 242, 0.39)'}}>
		    <CardTitle style={{textAlign: 'center'}} titleColor="#fff" title="login" />
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
			    <RaisedButton style={{marginBottom: 10}}
			    	backgroundColor="#4caf50"
			     	type="submit"
			     	label="Login"
			     	fullWidth={true}
			     	labelColor="#fff"
			     	disabled={loading}

			    />
			    <Link to={"/signup"}>Register Here</Link>
			    {
			    	error && <div><span style={{color:"red"}}>{error}</span></div>
			    }
            </form>
		    </CardText>
		</Card>
	)
}