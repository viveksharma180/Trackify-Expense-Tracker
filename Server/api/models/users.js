import Mongoose from "mongoose";
import bcrypt from "bcryptjs"; //Importing bcrypt library to encrypt the password for security.

/**
 * User Schema
 */

const userSchema = new Mongoose.Schema({
    "name":{ // User name
        type: String,
        required: true,
        unique: true
    },
    "email": { // User emailId
        type: String,
        required: true,
        unique: true
    },
    "password": { //User password
        type: String,
        required: "Password is required"
    }
});

/**
 *Password encryption using bcrypt hash method
*/
userSchema.pre('save', async function (next) {
    if(!this.isModified('password')){
        next();
    }
    const salt = await bcrypt.genSaltSync(10); //generating salt 
    this.password = await bcrypt.hash(this.password, salt); //Converting password into hash using salt.
})

userSchema.set('toJSON', {virtuals:true}); //Converting to JSON format.

const User = Mongoose.model('User', userSchema);

export default User;