import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button, { BUTTON_TYPE_CLASSES } from "../Button-component/Button";
import { PaymantFormContainer, FormContainer } from "./paymant-form.styles";

export default function PaymantForm() {
  const stripe = useStripe();
  const element = useElements();

  const paymantHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !element) {
      return;
    }
  };

  return (
    <FormContainer>
      <PaymantFormContainer>
        <h2>Credit Card Paymanet: </h2>
        <CardElement />
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted}> Pay Now </Button>
      </PaymantFormContainer>
    </FormContainer>
  );
}
