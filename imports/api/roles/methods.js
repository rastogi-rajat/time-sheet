import { EmployeeRoles } from './fields.js';

Meteor.methods({
    'createNewRole': (roleName) => {
        if (roleName) {
            try {
            	roleName = roleName.toLowerCase();
                if(EmployeeRoles.findOne({name: roleName})){
            		throw new Meteor.Error('Role Already Exists', 'Role Already Exists');
                } else {
                	return EmployeeRoles.insert({name: roleName});
                }
            } catch (err) {
                throw new Meteor.Error(err, err.reason);
            }
        } else {
            throw new Meteor.Error('Role Name is Required', 'Role Name is Required');
        }
    }
});