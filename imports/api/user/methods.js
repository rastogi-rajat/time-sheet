Meteor.methods({
    'addUser': (userObject) => {
        if (userObject) {
            try {
            	var response = {};
        		console.log(">?>?>?>?>?>?>?>?>?>   ", userObject)
	            response['id'] = Accounts.createUser(userObject).then((res)=>{
	            	console.log(res)
	            }).catch((err)=>{
	            	console.log(err)
	            })
	            console.log(response['id'])
	            Roles.addUsersToRoles(response['id'], ['employee'], Roles.GLOBAL_GROUP);
	            return response

            } catch (err) {
                throw new Meteor.Error(err, err.reason);
            }
        } else {
            throw new Meteor.Error('Role Name is Required', 'Role Name is Required');
        }
    }
});