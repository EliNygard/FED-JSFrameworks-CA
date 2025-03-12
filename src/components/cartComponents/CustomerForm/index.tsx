import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import * as S from "./index.styles";
import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { clearCart, selectDiscountTotal } from "@/features/cart/cartSlice";
import { IOrderDetails } from "@/interface";

const customerSchema = yup
  .object()
  .shape({
    email: yup
      .string()
      .email("Invalid email")
      .required("Please enter your email address"),
    firstName: yup
      .string()
      .min(
        2,
        "Please enter your first name. First name must be at least 2 characters",
      )
      .max(30, "First name can not be over 30 characters")
      .required("Please enter your first name"),
    lastName: yup
      .string()
      .min(
        2,
        "Please enter your last name. Last name must be at least 2 characters",
      )
      .max(30, "Last name can not be over 30 characters")
      .required("Please enter your last name"),
    streetName: yup
      .string()
      .min(
        3,
        "Please enter the street name. Street name must be at least 3 characters",
      )
      .max(100, "Street name can not be over 100 characters")
      .required("Please enter a street address"),
    city: yup
      .string()
      .min(1, "Please enter a city")
      .max(50, "City can not be over 50 characters")
      .required("Please enter a city"),
    cardNumber: yup
      .string()
      .matches(/^[0-9]{16}$/, "Card number must be exactly 16 digits")
      .required("Please enter your credit card number"),
  })
  .required();

const CustomerForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.cart.products);
  const cartTotal = useSelector((state: RootState) => state.cart.cartTotal);
  const discountTotal = useSelector(selectDiscountTotal);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IOrderDetails>({ resolver: yupResolver(customerSchema) });

  const onSubmit: SubmitHandler<IOrderDetails> = (data) => {
    navigate("/checkout/thank-you", {
      state: {
        orderDetails: data,
        cartItems: products,
        cartTotal: cartTotal,
        discountTotal: discountTotal,
      },
    });
    dispatch(clearCart());
  };

  return (
    <S.FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="font-montserrat text-primary mb-4 text-xl">
          Your details
        </h2>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          autoComplete="email"
          {...register("email")}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          autoComplete="given-name"
          {...register("firstName")}
        />
        {errors.firstName && <p>{errors.firstName.message}</p>}

        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          autoComplete="family-name"
          {...register("lastName")}
        />
        {errors.lastName && <p>{errors.lastName.message}</p>}

        <label htmlFor="streetName">Street Name</label>
        <input
          id="streetName"
          type="text"
          autoComplete="address-line1"
          {...register("streetName")}
        />
        {errors.streetName && <p>{errors.streetName.message}</p>}

        <label htmlFor="city">City</label>
        <input
          id="city"
          type="text"
          autoComplete="address-level2"
          {...register("city")}
        />
        {errors.city && <p>{errors.city.message}</p>}

        <h2 className="font-montserrat text-primary mb-4 text-xl mt-4">
          Payment details
        </h2>

        <label htmlFor="cardNumber">Card Number</label>
        <input id="cardNumber" type="text" {...register("cardNumber")} />
        {errors.cardNumber && <p>{errors.cardNumber.message}</p>}

        <Button type="submit">Submit</Button>
      </form>
    </S.FormContainer>
  );
};

export default CustomerForm;
