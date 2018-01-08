import React from "react";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default function () {
	let { error, loading, success, selectedRole } = this.state;
	let { roles } = this.props;
	console.log("these are roles>> ", roles)
	return (
		<Card style={{width: '35%', position: 'absolute', top:'22%', left: '32%', backgroundColor:'rgba(2, 166, 242, 0.39)'}}>
		    <CardText style={{textAlign: 'center'}}>
		      <form onSubmit={this.submit} id="createUserForm">
		      	<TextField
			      	hintText="First Name"
			    	required={true}
			      	name="fname"
			    /><br />
			    <TextField
			      	hintText="Last Name"
			    	required={true}
			      	name="lname"
			    /><br />
			    <TextField
			      	hintText="Email"
			    	required={true}
			      	name="email"
			    /><br />
			    <TextField
			      	hintText="Password"
			    	required={true}
			      	name="password"
			      	type= "password"
			    /><br />
			    <TextField
			      	hintText="Department"
			    	required={true}
			      	name="department"
			      	type= "text"
			    /><br />
			    <DatePicker hintText="Date of Birth" name="dob"/>
			    <SelectField
		          value={selectedRole}
		          onChange={this.handleChange}
		          hintText="Role"
		        >
		        	{ roles.map((role)=> (
		          			<MenuItem key={role.name} value={role.name} primaryText={role.name.toUpperCase()} />
		        		))
		        	}

		        </SelectField>
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