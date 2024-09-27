import express from "express";
import { Cashfree } from "cashfree-pg";
import dotenv from "dotenv";
import crypto from "crypto";

dotenv.config();

const payment = express();

const Environment = process.env.CASHFREE_ENVIRONMENT;

Cashfree.XClientId = process.env.CASHFREE_CLIENT_ID;
Cashfree.XClientSecret = process.env.CASHFREE_CLIENT_SECRET;
Cashfree.XEnvironment = `Cashfree.Environment.${Environment}`;

const getOrderId = async () => {
  const uniqueId = crypto.randomBytes(16).toString("hex");

  const hash = crypto.createHash("sha256");
  hash.update(uniqueId);

  const orderId = hash.digest("hex");
  return orderId.substr(0, 12);
};

const createOrder = async () => {
  const request = {
    order_amount: "1",
    order_currency: "INR",
    customer_details: {
      customer_id: await getOrderId(),
      customer_name: "John Doe",
      customer_email: "example@gmail.com",
      customer_phone: "9999999999",
    },
    order_meta: {
      return_url:
        "https://test.cashfree.com/pgappsdemos/return.php?order_id=order_123",
    },
    order_note: "Test Order",
  };

  try {
    const response = await Cashfree.PGCreateOrder("2023-08-01", request);
    return response.data;
  } catch (error) {
    console.error(
      "Error setting up order request:",
      error.response ? error.response.data : error.message
    );
    throw new Error("Error setting up order request");
  }
};

payment.get("/", async (req, res) => {
  try {
    const resp = await createOrder();
    res.send(resp);
  } catch (err) {
    console.error("Error creating payment:", err);
    res.status(500).send("Error creating payment");
  }
});

payment.get("/verify", async (req, res) => {
  const { orderId } = req.query; // Use req.query for GET requests
  console.log("orderId", orderId);
  try {
    const response = await Cashfree.PGOrderFetchPayments("2023-08-01", orderId);
    res.send(response.data);
  } catch (err) {
    console.error("Error verifying payment:", err);
    res.status(500).send("Error verifying payment");
  }
});

export default payment;
