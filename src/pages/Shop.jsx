import AllProducts from "../components/Shop/AllProducts";
import Aside from "../components/Shop/Aside";
export default function Shop() {
  return (
    <section className="container pt-[124px]">
      <div className="flex gap-8 ">
        <Aside />
        <AllProducts />
      </div>
    </section>
  );
}
