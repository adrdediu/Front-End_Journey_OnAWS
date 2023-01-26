import {Text, VStack,HStack} from "@chakra-ui/react"
import ReviewCard from "./ReviewCard"

import ReviewImage1 from "../assets/images/f1.jpg"
import ReviewImage2 from "../assets/images/f2.jpg"
import ReviewImage3 from "../assets/images/m3.jpg"
import ReviewImage4 from "../assets/images/m4.jpg"

export default function Testimonials() {
    return (
        <section className="testimonials">
        <VStack justifyContent="center">
            <Text className="testimonials-title">What our customers say !</Text>
        </VStack>
        <HStack spacing={20} justifyContent="space-between" className="testimonials-section">
            <ReviewCard
                className="review-card" 
                imageSrc={ReviewImage4} 
                name="Andrew" 
                description="It’s a great experience. The ambiance is very welcoming and charming."/>
            <ReviewCard
                className="review-card" 
                imageSrc={ReviewImage2}
                name="Eliza"
                description="Excellent food. Menu is extensive and seasonal to a particularly high standard."/>
            <ReviewCard
                className="review-card" 
                imageSrc={ReviewImage1}
                name="Katie"
                description="The food is always fantastic no matter what I order I am always delighted with my meal!"/> 
            <ReviewCard
                className="review-card" 
                imageSrc={ReviewImage3}
                name="Michael"
                description="This place is great! Atmosphere is chill and cool but the staff is also really friendly."/>
        </HStack>
        </section>
    )
}