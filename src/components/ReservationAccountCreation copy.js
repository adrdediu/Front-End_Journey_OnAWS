import { VStack,Text, HStack } from "@chakra-ui/react"
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import "yup-phone";
import "yup-password"
import BackButton from "./BackButton"
import ProgressBar from "./ProgressBar"
import Banner from "./Banner.js"
import ConfirmButton from "./ConfirmButton.js"

import resAccCrtImg from "../assets/images/accountCreationBanner.jpg"

const ValidationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    phoneNumber: Yup.string()
        .phone('US','Please provide a phone number from US!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password:Yup.string()
        .minLowercase(1,'Password needs must have at least 1 lowercase letter.')
        .minUppercase(1,'Password needs must have at least 1 uppercase letter.')
        .minNumbers(1,'Password needs must have at least 1 number.')
        .minSymbols(1,'Password needs must have at least 1 special character')
        .min(10,'Password needs must have at least 10 characters.')

});

   function AccountCreationForm() {
    return(
    <React.Fragment>
     <Formik
       initialValues={{
         firstName: '',
         lastName: '',
         email: '',
         phoneNumber:'',
         password:'',
         confirmPassword:'',
       }}
       validationSchema={ValidationSchema}
       onSubmit={values => {
         // same shape as initial values
         console.log(values);
       }}
     >
       {({ errors, touched }) => (
         <Form>
            <VStack justifyContent="space-between" spacing={20}>
                <Text>Required Fields</Text>
                <Field name="firstName" />
                    {errors.firstName && touched.firstName ? (
                    <div>{errors.firstName}</div>) : null}
                <Field name="lastName" />
                    {errors.lastName && touched.lastName ? (
                    <div>{errors.lastName}</div>) : null}
                <Field name="phoneNumber" />
                    {errors.phoneNumber && touched.phoneNumber ? (
                    <div>{errors.phoneNumber}</div>) : null}
                <Field name="email" type="email" />
                    {errors.email && touched.email ? (
                    <div>{errors.email}</div>) : null}
                <Text>Password Requirements</Text>
                <Text>Min. 1 Number, 1 Special Char, 1 Cap. letter, 1 Small letter, 10 Chars.</Text>
                <Field name="password" type="password"/>
                    {errors.password && touched.password ? (
                        <div>{errors.password}</div>) : null}
                <Field name="confirmPassword" type="password"/>
                    {errors.confirmPassword&&touched.confirmPassword ? (
                        <div>{errors.confirmPassword}</div>) : null}
                
                <button type="submit">Submit</button>
            </VStack>
         </Form>
       )}
     </Formik>
    </React.Fragment>
   )}

export default function ReservationAccountCreation() {
    return (
        <main>
            <Banner imageSrc={resAccCrtImg}/>
            <section className="reservation-background">
                <section className="reservation-content">
                    <BackButton href="/reservations"/>
                    <ProgressBar phase="2"/>
                    <div className="reservation-content-panel">
                        <VStack justifyContent="space-between" margin="20px 0">
                            <AccountCreationForm />
                            <ConfirmButton href="/reservations-create-account" title="Confirm  reservation details"/>
                        </VStack>
                    </div>
                </section>
            </section>
        </main>
    )
}