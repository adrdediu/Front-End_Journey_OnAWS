import HeroImage from "../assets/images/heroImage.jpg"
import { Link } from "react-router-dom"
export default function Hero() {
    return (
    <section className="hero">
        <section className="hero-section">
            <section className="hero-section-text">
                <h1 className="hero-title">Little Lemon</h1>
                <h2 className="hero-subtitle">Chicago</h2>
                <p className="hero-description">
                    We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                </p>
                <Link to="/reservations">
                    <button  className="hero-reserve-button">
                        <p className="hero-reserve-button-text">Reserve a Table</p>
                    </button>
                </Link>
            </section>
            <section >
                <img src={HeroImage} alt="heroimage.jpg" className="hero-section-image"/>
            </section>
        </section>
    </section>
    )
}