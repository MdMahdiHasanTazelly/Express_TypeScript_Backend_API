import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: {type: String, require: true},
    authentication: {
        //"select" ensures the field won't fetched from DB
        password: {type: String, required: true },
        salt: {type: String},
        sessionToken: { type: String}
    }
});



export const userModel = mongoose.model("User", userSchema);

export const getUsers = ()=> userModel.find({});

export const getUserByEmail = (email: string)=> userModel.findOne({email});

export const getUserBySessionToken = (sessionToken: string)=> userModel.findOne({
    'authentication.sessionToken': sessionToken
});

export const getUserById = (id: string)=> userModel.findById(id);

//Record type data, which have string type key & any type value
export const createUser = (values: Record<string, any>)=> new userModel(values)
.save()
.then( (user)=>{
    user.toObject();
});


export const deleteUserById = (id: string)=> userModel.findByIdAndDelete(id);


export const updateUserById = (id: string, values: Record<string, any>)=> userModel.findByIdAndUpdate(id, values);