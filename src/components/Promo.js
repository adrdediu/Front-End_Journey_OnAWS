import React from "react";
import {Heading,HStack,Button } from "@chakra-ui/react";

import DishCard from "./DishCard";

import BruschettaSrc from "../assets/images/bruschetta.jpg"
import LemonDessertSrc from "../assets/images/lemonDessert.jpg"
import GreekSaladSrc from "../assets/images/greekSalad.jpg"

const Promo = () => {
  return (
    <section className="promo">
    <HStack  className="promo-title">
        <Heading className="promo-title-text">This weeks specials!</Heading>    
        <Button className="promo-menu-button">Online Menu</Button>
    </HStack>
      <HStack  className="promo-section" justifyContent="space-between" >
          <DishCard 
              title="Greek Salad" 
              imageSrc={GreekSaladSrc}
              price="$12.99" 
              description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and croutons."
              className="dish-card"
          />
          <DishCard 
              title="Bruschetta" 
              imageSrc={BruschettaSrc}
              price="$5.99" 
              description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "
              className="dish-card"
          />
          <DishCard 
              title="Lemon Dessert" 
              imageSrc={LemonDessertSrc}
              price="$4.99" 
              description="This comes straight from
              grandma’s recipe book, every
              last ingredient has been sourced and it is as authentic as it can be imagined."
              className="dish-card"
          />
        </HStack>  
    </section>
  );
};

export default Promo;
