const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// const constants = require("../constants");

// let User;

const UserSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            index: true,
            unique: true,
            sparse: true,
            lowercase: true,
            trim: true,
        },

        password: {
            type: String,
            required: true
        },


        mobile_no: {
            type: Number,
            required: true
        },

        name: {
            type: String,
            trim: true,
        },

        address: {
            type: String,
            default: ""
        },

    }
);

// UserSchema.methods.toJSON = function () {
// 	const obj = this.toObject();
// 	delete obj.password;
// 	return obj;
// };

// Export user module
// User = module.exports = mongoose.model("User", UserSchema);
module.exports = mongoose.model("User", UserSchema);