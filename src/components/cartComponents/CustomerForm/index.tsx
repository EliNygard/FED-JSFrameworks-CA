import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import * as S from "./index.styles";
import React from "react";
import Button from "@/components/Button";

interface ICustomerInput {
  email: string;
  firstName: string;
  lastName: string;
  streetName: string;
  city: string;
  cardNumber: string;
}

const customerSchema = yup
  .object()
  .shape({
    email: yup
      .string()
      .email("Invalid email")
      .required("Please enter your email address"),
    firstName: yup
      .string()
      .min(2)
      .max(30)
      .required("Please enter your first name"),
    lastName: yup
      .string()
      .min(2)
      .max(30)
      .required("Please enter your last name"),
    streetName: yup
      .string()
      .min(3)
      .max(100)
      .required("Please enter a street address"),
    city: yup.string().min(1).max(50).required("Please enter a city"),
    cardNumber: yup
      .string()
      .matches(/^[0-9]{16}$/, "Card number must be exactly 16 digits")
      .required("Please enter your credit card number"),
  })
  .required();

const CustomerForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICustomerInput>({ resolver: yupResolver(customerSchema) });

  const onSubmit: SubmitHandler<ICustomerInput> = (data) => {
    console.log(data);
  };

  return (
    <S.FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="font-montserrat text-primary mb-4 text-xl">
          Your details
        </h2>
        <label htmlFor="email">Email</label>
        <input type="text" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}

        <label htmlFor="firstName">First Name</label>
        <input type="text" {...register("firstName")} />
        {errors.firstName && <p>{errors.firstName.message}</p>}

        <label htmlFor="lastName">Last Name</label>
        <input type="text" {...register("lastName")} />
        {errors.lastName && <p>{errors.lastName.message}</p>}

        <label htmlFor="streetName">Street Name</label>
        <input type="text" {...register("streetName")} />
        {errors.streetName && <p>{errors.streetName.message}</p>}

        <label htmlFor="city">City</label>
        <input type="text" {...register("city")} />
        {errors.city && <p>{errors.city.message}</p>}

        <h2 className="font-montserrat text-primary mb-4 text-xl mt-4">
          Payment details
        </h2>

        <label htmlFor="cardNumber">Card Number</label>
        <input type="text" {...register("cardNumber")} />
        {errors.cardNumber && <p>{errors.cardNumber.message}</p>}

        <Button type="submit">Submit</Button>
      </form>
    </S.FormContainer>
  );
};

export default CustomerForm;
