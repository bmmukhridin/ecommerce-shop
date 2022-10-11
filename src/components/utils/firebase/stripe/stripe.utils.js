import { loadStripe } from "@stripe/stripe-js";

const key='pk_test_51LreMxLVSkL412Xw9C7esJ13czk5jd2XXMbvQQa8tHSLiY70mlz6D78OtmHvKtQhZiNAeTU14iPD5xtgUTHV1rpv00vbN0HlM6'

export const stripePromise = loadStripe(key);
