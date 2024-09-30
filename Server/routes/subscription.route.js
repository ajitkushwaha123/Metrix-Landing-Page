import express from "express";
import { Subscription } from "../models/subscription.model.js";

const subscription = express();

subscription.get("/", async (req, res) => {
    try {
        const subscriptions = await Subscription.find({});
        console.log(subscriptions);
        res.status(200).json({status : "true" , subscriptions});
    } catch (error) {
        console.error(error);
        res.status(500).json({ status : "false" , message: "Internal Server error" });
    }
});

subscription.get("/:subscriptionType" , async (req , res) => {
    try{
        const subscriptionType = req.params.subscriptionType;
        console.log(subscriptionType);

        const subscription = await Subscription.findOne({subscriptionType});
        if(!subscription){
            return res.status(404).send({status : "false" , message : "Subscription not found"});
        }

        res.send({status : "true" , subscription});
    }catch(err){
        console.error(err);
        res.status(500).send({status : "false" , message : "Internal Server error"});
    }
})

subscription.post("/" , async (req , res) => {
    try{
        console.log(req.body);
        const {name , duration , price , discountPercentage , taxPercentage , onRenewPercentageDiscount , password , subscriptionType} = req.body;

        if(password !== process.env.ADMIN_PASSWORD){
            return res.status(401).send({status : "false" , message : "Unauthorized access"});
        }

        if(!name || !duration || !price || !onRenewPercentageDiscount){
            return res.status(400).send({status : "false" , message : "Please provide all details"});
        }

        if(discountPercentage && (discountPercentage < 0 || discountPercentage > 100)){
            return res.status(400).send({status : "false" , message : "Invalid discount percentage"});
        }

        if(taxPercentage && (taxPercentage < 0 || taxPercentage > 100)){
            return res.status(400).send({status : "false" , message : "Invalid tax percentage"});
        }

        if(onRenewPercentageDiscount < 0 || onRenewPercentageDiscount > 100){
            return res.status(400).send({status : "false" , message : "Invalid on renew discount percentage"});
        }

        const subscription = new Subscription({
            name,
            duration,
            price,
            discountPercentage,
            taxPercentage,
            onRenewPercentageDiscount,
            subscriptionType
        });

        const response = await subscription.save();

        res.send({status : "true" , message : `Subscription created successfully ${response}`});
    }catch(err){
        console.error("Error creating subscription :", err);
        res.status(500).send({status : "false" , message : "Error creating subscription"});
    }
})

export default subscription;