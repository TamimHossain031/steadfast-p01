/* eslint-disable react/prop-types */
 
export default function Field({children,error,label,htmlFor}){   
    return (
            <div className='mt-4 text-left'>	
                {label && <label htmlFor={htmlFor} className='font-medium text-[16px] leading-[150%] text-primary capitalize '>{label}</label>}
                {children}
                {error && <small className='text-red'>{error?.message}</small>}
            </div>
    );
}
