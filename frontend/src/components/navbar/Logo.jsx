'use client';
import { openSidebar } from '@/redux/shopSlice';
import Image from 'next/image';
import Link from 'next/link';
import { FaRegUser } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import logo from '../../assets/shop-logo.png';
const Logo = () => {

  const dispatch = useDispatch();

  const handleOpenSidebar = () => {
    dispatch( openSidebar() );
  };


  return (
    <div className='w-[100%] md:w-auto flex justify-between items-center'>
      <div className='flex items-center gap-2 font-bold text-2xl'>
        <Image src={ logo } width={ 40 } alt='logo' />
        <h2 className='hidden md:block'>SHOP EASY</h2>
      </div>
      <div className='md:hidden flex gap-6 '>
        <Link href={ '/login' }>
          <button className='flex items-center justify-center'>
            <FaRegUser className='text-xl' />
          </button>
        </Link>
        <Link href={ '/cart' }>
          <button className='flex items-center justify-center'>
            <FiShoppingCart className='text-xl' />
          </button>
        </Link>
        <button className='flex items-center justify-center' onClick={ handleOpenSidebar }>
          <GiHamburgerMenu className='text-2xl' />
        </button>
      </div>
    </div>
  );
};

export default Logo;