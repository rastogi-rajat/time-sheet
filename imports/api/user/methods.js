Meteor.methods({
    'addUser': (userObject) => {
        if (userObject) {
            try {
            	var response = {};
        		console.log(">?>?>?>?>?>?>?>?>?>   ", userObject)
	            response['id'] = Accounts.createUser(userObject)
	            console.log(response['id'])
	            Roles.addUsersToRoles(response['id'], ['employee'], Roles.GLOBAL_GROUP);
	            return response

            } catch (err) {
                throw new Meteor.Error(err, err.reason);
            }
        } else {
            throw new Meteor.Error('No User Object');
        }
    }
});