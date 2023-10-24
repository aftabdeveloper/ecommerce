import mongoose from "mongoose";
const {Schema} = mongoose;

const userModel = Schema({
    fullname: {type: String, required: [true,'Fullname is required']},
    email: {type: String, required: [true,'Email is required']},
    password: {type: String, required: [true,'Password is required']},
    token: String,
    cart: [{type: Schema.ObjectId, ref: 'Product'}],
    createdAt: {type: Date, default: Date.now},
    updateddAt: {type: Date, default: Date.now}
})

const user = mongoose.model('User',userModel);
export default user;