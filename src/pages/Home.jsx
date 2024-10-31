import BestProducts from "../components/Home/BestProducts";
import Hero from "../components/Home/Hero";
import Service from "../components/Home/Service";
import TopCategory from "../components/Home/TopCategory";

export default function Home(){
    return (
            <section>	
                <Hero/>
                <Service/>
                <TopCategory/>
                <BestProducts/>
            </section>
    );
}