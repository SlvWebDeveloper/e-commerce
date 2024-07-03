import Image from 'next/image';
import { FaArrowRightLong } from "react-icons/fa6";
import hand_image from '../../assets/hand_icon.png';
import hero_image from '../../assets/hero_image.png';

const BannerNewCollections = () => {
  return (
    <div className='banner-gradient p-20'>
      <div className='flex flex-col items-center lg:flex-row md:w-[80%] md:mx-auto'>

        {/* banner section left */ }
        <div className='flex flex-1 flex-col justify-center  gap-8 '>
          <h2 className='font-bold text-xl md:text-2xl uppercase'>new arrivals only</h2>
          <div className='text-4xl md:text-6xl xl:text-8xl font-bold'>
            <p className='flex gap-3 items-center'>New  <span><Image src={ hand_image } width={ 50 } /></span> </p>
            <p>Collections</p>
            <p> For Everyone</p>
          </div>
          <div>
            <button className='flex items-center gap-3 bg-red-500 py-2 md:py-4 px-10 rounded-3xl border text-white'>
              <p>Latest Collection</p>
              <FaArrowRightLong />
            </button>
          </div>
        </div>

        {/* banner section right */ }
        <div className='flex-1 hidden lg:flex justify-center items-center'>
          <Image src={ hero_image } width={ 600 } />
        </div>

      </div>
    </div>
  );
};

export default BannerNewCollections;