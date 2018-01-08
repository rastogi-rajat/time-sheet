import React from 'react';
import Render  from './render';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open:false
        }
    }

    handleToggle = () => this.setState({open: !this.state.open});

    logout() {
    	api.get('/data/users/logout').then(result => {
                if (result.notify) {
                    alertify.alert('Message',result.notify);
                } else {
                    redux.setUser('');
                    browserHistory.push('/login');
                }
            });
    }

    render() {
        return Render.call(this, this.props, this.state);
    }
}