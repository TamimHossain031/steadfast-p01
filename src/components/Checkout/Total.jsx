export default function Total() {
  return (
    <div className="max-w-[356px] w-full float-end mt-8">
      <div className='flex justify-between h-[40px] items-center'>
        <p>Sub Total (2 items)</p>
        <h3 className='font-semibold text-totalColor'>৳1150</h3>
      </div>
      <div className='flex justify-between h-[40px] items-center mt-[13px]'>
        <p>Discount</p>
        <h3 className='font-semibold text-totalColor'>৳00</h3>
      </div>
      <div className='flex justify-between h-[40px] items-center mt-[13px]'>
        <p>Shipping Fee</p>
        <h3 className='font-semibold text-totalColor'>৳60</h3>
      </div>
      <hr className='my-[13px] text-gray' />
      <div className=' flex justify-between h-[40px] items-center mt-[13px]'>
        <p className='text-[18px] text-white font-medium'>Total</p>
        <h3 className='font-semibold text-totalColor'>৳1260</h3>
      </div>
    </div>
  );
}
