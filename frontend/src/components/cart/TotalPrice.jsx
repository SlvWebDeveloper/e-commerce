'use client';
import { getTotalAmount, promoCodeShow } from '@/redux/shopSlice';
import Image from 'next/image';
import { useEffect } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import paypalImage from '../../assets/paypal@2x.png';

const TotalPrice = () => {

  const dispatch = useDispatch();

  const handlePromoCode = () => {
    dispatch( promoCodeShow() );
  };



  const { promoCodeIsOpen, cart, subtotal, productToCart } = useSelector( state => state.shopSlice );

  useEffect( () => {
    dispatch( getTotalAmount() );
  }, [cart] );

  const delivery = 9.99;

  return (
    <div className='lg:w-[80%] lg:mx-auto'>
      <h2 className='font-bold text-2xl'>Summary</h2>
      <div className='mt-4 lg:mt-10 flex flex-col gap-4'>
        <div>
          <div className='flex gap-3 items-center'>
            <p>Do you have a Promo Code ? </p>
            <span className='text-xl' onClick={ handlePromoCode }><IoIosArrowDown /></span>
          </div>
          <div className={ promoCodeIsOpen ? `promo-code-show` : `promo-code-hidden` }>
            <input type="text" className='border border-gray-600 p-2 rounded-3xl w-[100%]' />
            <button className='border border-gray-600 font-medium py-2 px-6 rounded-3xl'>Apply</button>
          </div>
        </div>
        <div className='flex justify-between font-medium'>
          <p>Subtotal</p>
          {
            subtotal > 0 ? <p>$ { subtotal }</p> : <p>-</p>
          }
        </div>
        <div className='flex justify-between font-medium'>
          <p>Estimated Delivery & Handling</p>
          {
            subtotal > 0 ? (
              <p>{ subtotal >= 100 ? `Free` : `$ ${delivery}` }</p>
            ) :
              <p>-</p>
          }
          {/* <p>{ subtotal < 100 ? `$ ${delivery}` : "Free" }</p> */ }
        </div>
        <div className='flex justify-between font-medium'>
          <p>Total</p>
          {
            subtotal > 0 ? (
              <p>{ subtotal >= 100 ? `$ ${subtotal}` : `$ ${subtotal + delivery}` }</p>
            ) : <p>-</p>
          }
        </div>
        <button className='bg-black text-white  font-medium h-[50px] rounded-3xl hover:opacity-85'>Ceckout</button>
        <button className='bg-slate-200 hover:bg-slate-300 rounded-3xl h-[50px] flex justify-center items-center'>
          <Image src={ paypalImage } alt="paypal image" width={ 60 } />
        </button>
      </div>
    </div>
  );
};

export default TotalPrice;