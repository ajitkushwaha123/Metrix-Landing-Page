import mongoose from "mongoose";

const SubscriptionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discountPercentage : {
        type: Number,
    },
    taxPercentage : {
        type: Number,
    },
    onRenewPercentageDiscount : {
      type: Number,
      required: true,
    },
    subscriptionType: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Subscription = mongoose.model("Subscription", SubscriptionSchema);


// {
//       name: "Starter Plan",
//       duration: "7 Days",
//       price: "0",
//       originalPriceMonth: "0",
//       originalPrice: "0",
//       discount: "10",
//       total: "0",
//       discountPercentage: "0",
//       taxes: "0",
//       renewDate: new Date(
//         new Date().setDate(new Date().getDate() + 7)
//       ).toLocaleDateString("en-US", options),
//       premium: "free",
//       renewPricePerMonth: "0",
// },