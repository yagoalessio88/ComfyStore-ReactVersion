import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  useStripe,
  Elements,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import { formatPrice } from "../utils/helpers";
import { useHistory } from "react-router-dom";
import CartTotals from "./CartTotals";

const StripeCheckout = () => {
  return (
    <Wrapper className="section-center">
      <h3>Thanks for visiting!</h3>
      <p>
        This is an excercise from John Smilga's React Course, developed by Yago
        Agüero.
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  text-align: center;
  h3 {
    margin-bottom: 3rem;
  }
`;

export default StripeCheckout;
