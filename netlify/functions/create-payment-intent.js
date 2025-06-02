require("dotenv").config(); // Attach all the secret variables on the dotenv file on our process environment
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// Whenever I receieve this event. I will create a payment intent
// for this i need to know the amount, currency type and as well as payment method.
// this amount will ofcourse will come from the event body that this async function receieved.
// the event will be in JSON format so i need to parse it

exports.handler = async (event) => {
  try {
    // amount is in whole number and in cents. so $100 will be 10000 (including cents)
    const { amount } = JSON.parse(event.body);

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (err) {
    console.log({ err });

    return {
      status: 400,
      body: JSON.stringify({ err }),
    };
  }
};
