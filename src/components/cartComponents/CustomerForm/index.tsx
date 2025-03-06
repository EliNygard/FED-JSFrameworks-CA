import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import * as S from "./index.styles";
import React from "react";

interface ICustomerInput {
  email: string;
  firstName: string;
  lastName: string;
  streetName: string;
  city: string;
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
      <h2 className="font-montserrat text-primary mb-4 text-xl">
        Your details
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
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

        <button type="submit">Submit</button>
      </form>
    </S.FormContainer>
  );
};

export default CustomerForm;
