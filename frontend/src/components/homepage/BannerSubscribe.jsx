
const BannerSubscribe = () => {
  return (
    <div className='banner-gradient p-10 md:w-[90%] mx-auto'>
      <div className='text-center flex flex-col gap-6'>
        <p className='text-4xl lg:text-6xl font-bold capitalize'>Get exclusive offers on your email</p>
        <p className='text-xl font-medium'>Subscribe to our newsletter and stay updated</p>
        <div className='flex flex-col lg:flex-row items-center lg:justify-center gap-3 lg:gap-0'>
          <input type="email" placeholder='Your Email' className='p-4 border rounded-3xl w-[90%] lg:w-[600px]' />
          <div className='w-[40%] lg:w-0 flex justify-center items-center'>
            <button className='bg-black text-white py-4 px-16 rounded-3xl lg:ml-[-50px]'>Subscibe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSubscribe;