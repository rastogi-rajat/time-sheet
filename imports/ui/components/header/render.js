import React from "react";
import { browserHistory } from 'react-router';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';

export default function () {
	return (
		<div style={{backgroundColor:'red', height:80}}>
			<FlatButton
	          label="Menu"
	          style={{transform: 'translate(10%, 50%)'}}
	          onClick={this.handleToggle}
	        />
	        <Drawer
	          docked={false}
	          open={this.state.open}
	          onRequestChange={(open) => this.setState({open})}
	        >
	          <MenuItem onClick={()=> browserHistory.push('/createrole')}>Create Role</MenuItem>
	          <MenuItem onClick={()=> browserHistory.push('/createuser')}>Create User</MenuItem>
	        </Drawer>
		</div>
	)
}