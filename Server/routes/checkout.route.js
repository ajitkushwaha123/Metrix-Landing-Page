import express from "express";
import { Checkout} from "../models/checkout.model.js";

const checkout = express.Router();

checkout.post("/", async (req, res) => {
  console.log(req.body);
  const { name, company, email, phone, address, city, state, postalCode, cartTotal } = req.body;

  if (
    !name ||
    !company ||
    !email ||
    !phone ||
    !address ||
    !city ||
    !state ||
    !postalCode ||
    !cartTotal
  ) {
    console.log("All fields are required", req.body);
    return res.status(422).json({ error: "All fields are required" });
  }

  try {
    const emailExist = await Checkout.findOne({ email: email });

    if (emailExist) {
      console.log(emailExist);

      await Checkout.findOneAndUpdate(
        { email: email },
        {
          name,
          company,
          phone,
          address,
          city,
          state,
          postalCode,
          cartTotal,
        },
        { new: true }
      );

      console.log("Updated checkout details", emailExist);

      return res.status(200).json({ status: "true", message: "Details updated successfully" });
    } else {
      const checkout = new Checkout({
        name,
        company,
        email,
        phone,
        address,
        city,
        state,
        postalCode,
        cartTotal,
      });

      await checkout.save();

      console.log("New checkout details", checkout);

      return res.status(201).json({ status: "true", message: "Checkout Details Saved Successfully" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ status: "false", error: "Internal server error" });
  }
});

export default checkout;
