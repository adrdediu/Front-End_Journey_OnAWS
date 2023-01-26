import React from "react"
import Promo from "./Promo"
import Hero from "./Hero"
import Testimonials from "./Testimonials"
import About from "./About"
export default function Main() {
    return(
        <main>
            <Hero/>
            <Promo/>
            <Testimonials/>
            <About/>
        </main>
    );
}