import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    fname:{
        type: String,
        requiredL: true
    },
    lname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

export default mongoose.model("User", userSchema);
