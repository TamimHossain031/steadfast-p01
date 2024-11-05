import {data} from '../../Db/products';
import SingleProduct from '../SingleProduct';
export default function BestProducts(){
    return (
            //Best Selling Products //
            <section className='container mb-[110px]'>	
                <h2 className='title text-center'>Best Selling Products</h2>
                <div className='pt-8 sm:pt-[64px] grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[32px] gap-y-[48px]'>
                    {data.length && data.map((product,index)=>(
                        // Single Product card //
                        <SingleProduct data={product} key={index}/>
                    ))}
                </div>
            </section>
    );
}