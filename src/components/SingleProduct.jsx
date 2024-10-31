/* eslint-disable react/prop-types */
export default function SingleProduct({data}){
    const {label,img,title,oldPrice,newPrice} = data;

    return (
            <div className='min-h-[548px] relative text-white text-center cursor-pointer'>	
                <span className={`label absolute top-[14px] left-[14px] w-[61px] h-[40px] leading-10 uppercase rounded-[4px] ${label == 'new' ? 'bg-blue' : 'bg-red'}`}>new</span>
                <figure className='h-[472px] '>
                    <img src={img} alt={img} />
                </figure>
                <h3 className='p-title pt-4'>{title}</h3>
                <h2 className='text-[20px] font-semibold leading-[140%] mt-1'>{newPrice}$ <del className='ml-3 font-normal text-cardTitle text-[18px]'>{oldPrice}$</del></h2>
            </div>
    );
}