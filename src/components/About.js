import {Button,Text, VStack,HStack} from "@chakra-ui/react"

import AboutImg1 from "../assets/images/aboutImg1.jpg"
import AboutImg2 from "../assets/images/aboutImg2.jpg"


export default function About () {
    return (
        <section className="about">
            <HStack className="about-content"  justifyContent="space-between">
                <VStack alignItems="start">
                    <Text className="about-heading">About Us</Text>
                    <Text className="about-story">
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et porttitor tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Donec luctus nibh in felis pretium malesuada. Vestibulum vitae massa odio. In eget sagittis elit. 
                    </Text>
                    <VStack alignItems="end">
                        <Button className="about-readmore-btn">Read More</Button>
                    </VStack>
                </VStack>
                <VStack className="about-image-group">
                    <img src={AboutImg1} alt="about-img-1" className="about-img1" />
                    <img src={AboutImg2} alt="about-img-2" className="about-img2"/>
                </VStack>
            </HStack>

        </section>
    )
}
