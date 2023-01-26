import { VStack,Text } from "@chakra-ui/react"
import React from 'react';
import BackButton from "./BackButton"
import ProgressBar from "./ProgressBar"
import Banner from "./Banner.js"
import ConfirmButton from "./ConfirmButton.js"
import resAccCrtImg from "../assets/images/reservationConfirmBanner.jpg"
import { useLocation, useNavigate } from "react-router-dom";

export default function ReservationConfirmation() {

    const location = useLocation();
    const details=location.state;
    
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        navigate('/');
    };

    return(
        <main>
            <Banner imageSrc={resAccCrtImg}/>
            <section className="reservation-background">
                <section className="reservation-content">
                    <BackButton href="/reservation-create-account"/>
                    <ProgressBar phase="3"/>
                    <div className="reservation-content-panel">
                        <VStack justifyContent="space-between" margin="20px 0">
                            <Text className="reservation-title">Reservation Confirm</Text>
                            <Text className="form-subsection-text">Thank you for using our website to reserve a table in the Little Lemon Restaurant. </Text>
                            <VStack justify="center" spacing={2}>
                                <Text className="form-subsection-title" marginBottom="10px" >Reservation details:</Text>
                                <Text className="confirm-details">Date : {details.rezInfo.date}</Text>
                                <Text className="confirm-details">Time : {details.rezInfo.time}</Text>
                                <Text className="confirm-details">Diners : {details.rezInfo.diners} People </Text>
                                <Text className="confirm-details">Place : {details.rezInfo.table}</Text>
                            </VStack>
                            <VStack justify="center" spacing={2}>
                                <Text className="form-subsection-title" marginBottom="10px">Customer details:</Text>
                                <Text className="confirm-details">Name : {details.accInfo.name}</Text>
                                <Text className="confirm-details">Email : {details.accInfo.email}</Text>
                                <Text className="confirm-details">Phone Number : {details.accInfo.phoneNumber}</Text>
                            </VStack> 
                            <Text className="form-subsection-text">We’ve just sent you an email with the details above. Please confirm, as it is valid only for 10 minutes.</Text>
                            <ConfirmButton title="Return Home" onSubmit={handleSubmit}/>
                        </VStack>
                    </div>
                </section>
            </section>
        </main>
    )
}