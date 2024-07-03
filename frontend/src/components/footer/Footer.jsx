'use client';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
import { useSelector } from 'react-redux';
import shop_logo from '../../assets/shop-logo.png';

const Footer = () => {

  const { sidebarIsOpen } = useSelector( state => state.shopSlice );

  return (
    <div className={ sidebarIsOpen ? 'hidden' : "mt-10 pb-6 w-[80%] mx-auto" }>
      <div className='flex flex-col items-center gap-6'>
        {/* footer logo */ }
        <div className='flex items-center gap-3'>
          <div>
            <Image src={ shop_logo } alt='shop logo' width={ 50 } />
          </div>
          <h2 className='font-bold text-2xl lg:text-3xl uppercase'>shop easy</h2>
        </div>
        {/* links */ }
        <div className='flex flex-col md:flex-row gap-6 text-xl'>
          <span>Company</span>
          <span>Products</span>
          <span>Offices</span>
          <span>About</span>
          <span>Contact</span>
        </div>
        {/* social link */ }
        <div className='flex gap-6 justify-center'>
          <button className='flex items-center justify-center text-2xl'>
            <FaFacebook />
          </button>
          <button className='flex items-center justify-center text-2xl'>
            <FaInstagram />
          </button>
          <button className='flex items-center justify-center text-2xl'>
            <FaPinterest />
          </button>
        </div>
        <div className='w-[100%] h-1 bg-gray-200'></div>
        <p className='md:text-xl font-medium'>Copyright @ 2024 All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;