const { async } = require("@firebase/util");

require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  try {
    const { amount } = JSON.parse(event.body);
    const paymantIntent = await stripe.paymantIntent.create({
      amount,
      currency: "usd",
      paymant_method_types: ["card"],
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ paymantIntent }),
    };
  } catch (error) {
    console.log({ error });

    return {
      status: 400,
      body: JSON.stringify({ error }),
    };
  }
};
