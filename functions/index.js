const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51NXlQYSGpBilv2OQlTIy6ODF0SL5Uu6A4fzUBchONYp5JrOD4LbLwgthS0B22yDgHojwVR2nDkYc51REUAWbqh1R00bHYJYmXE"
);

// API 
// ~ App config
const app = express();
// ~ Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// ~ API routes
app.get("/", ( request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("payment request received BOOM for this amount >>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "INR",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// ~ Listen command
exports.api = functions.https.onRequest(app);
