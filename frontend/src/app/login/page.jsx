
const page = () => {
  return (
    <div className='login-page-gradient py-28 '>
      <div className='w-[80%] lg:w-[40%] mx-auto px-6 py-8 md:px-12 md:py-16 bg-white flex flex-col gap-3 md:gap-5 rounded-md'>
        <h2 className='text-xl md:text-2xl font-bold'>Sign up</h2>
        <div className='flex flex-col gap-3 md:gap-5'>
          <input type="text" placeholder='Your name' className='border p-2' />
          <input type="email" placeholder='Your email' className='border p-2' />
          <input type="password" placeholder='Insert password' className='border p-2' />
        </div>
        <button className='p-2 bg-red-500 text-white'>Continue</button>
        <p className='text-sm'>Already have an account ? <span className='text-red-500 font-medium'>Login here</span></p>
        <div className='flex gap-2'>
          <input type="checkbox" name="" id="" />
          <p className='text-sm'>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default page;