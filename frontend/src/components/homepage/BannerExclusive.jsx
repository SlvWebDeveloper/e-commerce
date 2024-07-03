import Image from 'next/image';
import exclusive_image from '../../assets/exclusive_image.png';
const BannerExclusive = () => {
  return (
    <div className='md:w-[80%] mx-auto flex justify-between items-center banner-gradient mt-10 py-10'>
      {/* section left */ }
      <div className='md:flex-1 flex flex-col text-center   mx-auto gap-4'>
        <div className='text-4xl md:text-6xl font-bold'>
          <h2>Exclusive</h2>
          <h2>Offers For You</h2>
        </div>
        <p className='font-medium '>ONLY ON BEST SELLERS PRODUCTS</p>
        <div>
          <button className='py-4 px-14 text-white bg-red-500 rounded-3xl'>Check Now</button>
        </div>
      </div>
      {/* section right */ }
      <div className='hidden lg:flex lg:flex-1 justify-center'>
        <Image src={ exclusive_image } alt='exclusive image' width={ 300 } />
      </div>
    </div>
  );
};

export default BannerExclusive;