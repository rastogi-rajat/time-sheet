import React from 'react';
import { browserHistory } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';
import Header from '/imports/ui/components/header';
class MainLayout extends React.Component {

  constructor( props ) {
    super( props );
  }
  componentWillMount(){
    if(!this.props.userExist){
      browserHistory.push("/login")
    }
  }

  render( ) {
    // const { currentUser, isUserSubsReady } = this.props;
    return (
        <div style={{width: '100%', height: "100%"}}>
          <Header />
          {this.props.children}
        </div>
    )
  }
}

export default createContainer(props => {
  const currentUser = Meteor.user();
  const userExist = !!Meteor.user();
  // let userSubs = Meteor.subscribe("myInfo");
  // let isUserSubsReady = userSubs.ready();
  // return { ...props, currentUser, isUserSubsReady };
  return {...props, userExist}
}, MainLayout);