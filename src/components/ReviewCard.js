import {HStack,Card, CardBody, Image,Heading,Stack,Text, VStack } from "@chakra-ui/react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ReviewCard = ({ name, description, imageSrc,className}) => {

return (
  <Card className={className}>
    <VStack >
      <HStack className="review-card-rating">
        <FontAwesomeIcon icon={faStar} color="#F4CE14" className="star"/>
        <FontAwesomeIcon icon={faStar} color="#F4CE14" className="star"/>
        <FontAwesomeIcon icon={faStar} color="#F4CE14" className="star"/>
        <FontAwesomeIcon icon={faStar} color="#F4CE14" className="star"/>
        <FontAwesomeIcon icon={faStar} color="#F4CE14" className="star"/>
      </HStack>
      <CardBody >
      <Stack spacing={27} className="review-card-content">
        <HStack justifyContent="center" >
          <Image
          src={imageSrc}
          alt={`review-${name}-alt`}
          className="review-card-avatar"
          />
          <Heading className="review-card-name">{name}</Heading>
        </HStack>
        <Text className="review-card-description">
          {description}
        </Text>
      </Stack>
      </CardBody>
    </VStack>
</Card>
  );
};

export default ReviewCard;
