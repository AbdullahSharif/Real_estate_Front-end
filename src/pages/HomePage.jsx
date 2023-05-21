import Navbar from '../components/Navbar';
import Hero from "../components/Hero";
import FeaturedProperties from "../components/FeaturedProperties";
import Footer from "../components/Footer";
import PropertyTypes from '../components/PropertyTypes';

function HomePage() {
  return (
    <>
        <Navbar/>
        <Hero/>
        <PropertyTypes/>
        <FeaturedProperties/>
        <Footer/>
    </>
  )
}

export default HomePage
