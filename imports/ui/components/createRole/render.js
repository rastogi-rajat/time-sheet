import React from "react";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default function () {
	let { error, loading, success } = this.state;
	return (
		<Card style={{width: '35%', position: 'absolute', top:'32%', left: '32%', backgroundColor:'rgba(2, 166, 242, 0.39)'}}>
		    <CardText style={{textAlign: 'center'}}>
		      <form onSubmit={this.submit}>
		      	<TextField
			      	hintText="Role Name"
			    	required={true}
			      	name="role"
			    /><br />
			    <RaisedButton style={{marginBottom: 10}}
			    	backgroundColor="#4caf50"
			     	type="submit"
			     	label="Save"
			     	fullWidth={true}
			     	labelColor="#fff"
			     	disabled={loading}
			    />
			    {
			    	error && <div><span style={{color:"red"}}>{error}</span></div>
			    }
			    {
			    	success && <div><span style={{color:"green"}}>{success}</span></div>
			    }
            </form>
		    </CardText>
		</Card>
	)
}