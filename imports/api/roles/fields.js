import {
    Mongo
} from 'meteor/mongo';

export const EmployeeRoles = new Mongo.Collection('employeeroles');

export const RolesSchema = new SimpleSchema({
    name: {
        type: String,
        optional: false
    },
    created_at: {
        type: Date,
        autoValue: function() {
            if (this.isInsert) {
                return new Date();
            } else if (this.isUpsert) {
                return {
                    $setOnInsert: new Date()
                };
            } else {
                this.unset(); // Prevent user from supplying their own value
            }
        },
    },
});
EmployeeRoles.attachSchema(RolesSchema);