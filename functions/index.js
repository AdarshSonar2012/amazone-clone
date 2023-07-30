/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51NXlQYSGpBilv2OQlTIy6ODF0SL5Uu6A4fzUBchONYp5JrOD4LbLwgthS0B22yDgHojwVR2nDkYc51REUAWbqh1R00bHYJYmXE"
);



 //import stripe from "stripe";
//import { PaymentIntent } from "@stripe/stripe-js";
// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

//API


//~ App config
const app = express();

//~ Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//~ API routes
app.get("/", ( request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request , response) => {
  const total = request.query.total;

  console.log("payment request received BOOM for this amount >>>", total);
  
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of the currency
    currency: "usd",
    payment_method_types:["card"],
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//~ Listen command
exports.api = functions.https.onRequest(app);
