import mongoose from "mongoose";

const CheckoutSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    company : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    },
    state : {
        type : String,
        required : true
    },
    zip : {
        type : String,
        required : true
    },
} , { timestamps: true });

export const Checkout = mongoose.model("Checkout", CheckoutSchema);