'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from 'react-redux';

const Login = () => {

  const { cart } = useSelector( state => state.shopSlice );

  const counter = () => {
    let count = 0;
    for ( let key in cart ) {
      count += cart[key];
    }
    return count;
  };

  useEffect( () => {
    counter();
  }, [cart] );

  return (
    <div className='hidden md:flex items-center gap-6'>
      <button className='flex justify-center items-center font-medium  py-2 px-10 rounded-3xl border-2 border-gray-300'>
        <Link href={ '/login' }>Login</Link>
      </button>
      <button className='flex items-center justify-center text-2xl'>
        <Link href={ '/cart' } className='relative'>
          <FiShoppingCart />
          <span className='flex items-center justify-center absolute text-sm top-[-12px] left-[18px] bg-red-500 text-white rounded-full w-5 h-5'>{ counter() }</span>
        </Link>
      </button>
    </div>
  );
};

export default Login;