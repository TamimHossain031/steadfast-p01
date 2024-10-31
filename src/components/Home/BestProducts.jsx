import {data} from '../../Db/products';
import SingleProduct from '../SingleProduct';
export default function BestProducts(){
    return (
            <section className='container mb-[110px]'>	
                <h2 className='title text-center'>Best Selling Products</h2>
                <div className='pt-[64px] grid justify-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-[32px] gap-y-[48px]'>
                    {data.length && data.map((product,index)=>(
                        <SingleProduct data={product} key={index}/>
                    ))}
                </div>
            </section>
    );
}