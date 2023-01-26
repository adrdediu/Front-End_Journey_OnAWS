import { VStack,Text, HStack } from "@chakra-ui/react"
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup'
import BackButton from "./BackButton"
import ProgressBar from "./ProgressBar"
import Banner from "./Banner.js"
import ConfirmButton from "./ConfirmButton.js"

import resAccCrtImg from "../assets/images/accountCreationBanner.jpg"
import { useNavigate, useLocation } from "react-router-dom";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const ValidationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    phoneNumber: Yup
        .string()
        .matches(phoneRegExp, 'Phone number is not valid')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password:Yup
    .string()
    .min(10,'Password must have at least 10 characters.')
    .matches(/[0-9]/, 'Password must have min 1 number.')
    .matches(/[a-z]/, 'Password must have min 1 lowercase letter.')
    .matches(/[A-Z]/, 'Password must have min 1 uppercase letter.')
    .matches(/[^\w]/, 'Password must have min 1 special character')
    .required('Required'),
    confirmPassword: Yup
    .string()
    .oneOf([Yup.ref('password'), null], 'Must match the password')
    .required('Required'),
    termsNConditions: Yup
    .bool()
    .oneOf([true], 'You must agree to the terms and conditions'),
  })

   

export default function ReservationAccountCreation() {
    
    const location = useLocation();
    const rezInfo = location.state;
 
    const navigate = useNavigate();

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
             termsNConditions:false
           }}
           validationSchema={ValidationSchema}
           onSubmit={values => {

                const data = {
                    rezInfo,
                    accInfo:{name: values.firstName +' '+ values.lastName,
                    email: values.email,
                    phoneNumber:values.phoneNumber
                    }
                }
             
                navigate('/reservation-confirmation',{state:data});
           }}
         >
           {({ errors, touched }) => (
             <Form>
                <VStack justifyContent="space-between" spacing={20}>
                    <Text className="reservation-title">Customer details</Text>
                    <VStack spacing={1}>
                        <Field name="firstName" className="form-field" placeholder="First Name"/>
                            {errors.firstName && touched.firstName ? (
                            <div className="form-error-message">{errors.firstName}</div>) : null}
                    </VStack>
                    <VStack spacing={1}>
                        <Field name="lastName" className="form-field" placeholder="Last Name" />
                            {errors.lastName && touched.lastName ? (
                            <div className="form-error-message">{errors.lastName}</div>) : null}
                    </VStack>
                    <VStack spacing={1}>
                        <Field name="phoneNumber" className="form-field" placeholder="Phone Number" />
                            {errors.phoneNumber && touched.phoneNumber ? (
                            <div className="form-error-message">{errors.phoneNumber}</div>) : null}
                    </VStack>
                    <VStack spacing={1}>
                        <Field name="email" className="form-field" type="email" placeholder="Email" />
                            {errors.email && touched.email ? (
                            <div className="form-error-message">{errors.email}</div>) : null}
                    </VStack>
                    <Text className="form-subsection-title">Password Requirements</Text>
                    <Text className="form-subsection-text">Min. 1 Number, 1 Special Char, 1 Cap. letter, 1 Small letter, 10 Chars.</Text>
                    <VStack spacing={1}>
                        <Field name="password" className="form-field" type="password" placeholder="Password"/>
                            {errors.password && touched.password ? (
                            <div className="form-error-message">{errors.password}</div>) : null}
                    </VStack>
                    <VStack spacing={1}>
                    <Field name="confirmPassword" className="form-field" type="password" placeholder="Confirm Password"/>
                        {errors.confirmPassword&&touched.confirmPassword ? (
                        <div className="form-error-message">{errors.confirmPassword}</div>) : null}
                    </VStack>
                    <Text className="form-subsection-title">User Agreement</Text>
                    <VStack spacing={1}>
                        <HStack>
                            <Field type="checkbox" name="termsNConditions" />
                            <Text className="form-subsection-text">I agree to the terms and conditions.</Text>
                        </HStack>
                        {errors.termsNConditions&&touched.termsNConditions ? (
                        <div className="form-error-message">{errors.termsNConditions}</div>) : null}    
                    </VStack>
                    <ConfirmButton title="Confirm customer details" type="submit"/>
                </VStack>
             </Form>
           )}
         </Formik>
        </React.Fragment>
       )}



    return (
        <main>
            <Banner imageSrc={resAccCrtImg}/>
            <section className="reservation-background">
                <section className="reservation-content">
                    <BackButton href="/reservations"/>
                    <ProgressBar phase="2"/>
                    <div className="reservation-content-panel" style={{height:"800px"}}>
                        <VStack justifyContent="space-between" margin="20px 0">
                            <AccountCreationForm />
                        </VStack>
                    </div>
                </section>
            </section>
        </main>
    )
}