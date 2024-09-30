import express from "express";
import { Checkout} from "../models/checkout.model.js";

const checkout = express.Router();

checkout.post("/", async (req, res) => {
  const { name, company, email, phone, address, city, state, zip } = req.body;

  if (
    !name ||
    !company ||
    !email ||
    !phone ||
    !address ||
    !city ||
    !state ||
    !zip
  ) {
    return res.status(422).json({ error: "All fields are required" });
  }

  try {
    const checkout = new Checkout({
      name,
      company,
      email,
      phone,
      address,
      city,
      state,
      zip,
    });

    await checkout.save();

    res.status(201).json({ status: "true", message: `Successfully posted ${checkout}` });
  } catch (err) {
    console.log(err);
    res.status(500).json({ status : "false" , error: "Internal server error" });
  }
});

export default checkout;
