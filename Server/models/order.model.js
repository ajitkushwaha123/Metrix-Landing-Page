import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    orderAmount : {
        type : number,
        required : true
    },
    orderCurrency : {
        type : String,
        default : "INR"
    },
    customerDetails : {
        customerId : {
            type : String,
            required : true
        },
        customerName : {
            type : String,
            required : true
        },
        customerEmail : {
            type : String,
            required : true
        },
        customerPhone : {
            type : String,
            required : true
        }
    },
    orderMeta : {
        returnUrl : {
            type : String,
        }
    },
    orderNote : {
        type : String,
    }
} , {timestamps: true});

export const Order = mongoose.model("Order", OrderSchema);