import DiscountedProduct from "../components/DiscountedProduct";
import BestProducts from "../components/Home/BestProducts";
import Customers from "../components/Home/Customers";
import Hero from "../components/Home/Hero";
import Service from "../components/Home/Service";
import TopCategory from "../components/Home/TopCategory";
import TrendingProduct from "../components/Home/TrendingProduct";
import { useRef } from 'react';

export default function Home() {
// scroll next section
  const nextSectionRef = useRef(null);
// scroll next section fuction
  const scrollToNextSection = () => {
    nextSectionRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  return (
     // Home Page
    <section>   
      <Hero scrollToNextSection={scrollToNextSection}/>
      <Service ref={nextSectionRef}/>
      <TopCategory />
      <BestProducts />
      <TrendingProduct />
      <Customers />
      <DiscountedProduct />      
    </section>
   
  );
}
