const { async } = require("@firebase/util");

require("dotenv").config();

//const key2= "sk_test_51LreMxLVSkL412XwIjONdaVJ5qzBxUfp1WBQm6paoK0ggPIdfvjqiLmlBrYkbStZlemVdtrhhOaAHnJ82H66dOqh00NAMMwpdi"

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

exports.handler = async (event) => {
  try {
    const { amount } = JSON.parse(event.body);
    
    const paymantIntent = await stripe.paymantIntents.create({
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
      statusCode: 400,
      body: JSON.stringify({ error }),
    };
  }
};
