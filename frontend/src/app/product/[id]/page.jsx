'use client';

import all_product from '@/assets/all_product';
import Breadcrumb from '@/components/product/Breadcrumb';
import Description from '@/components/product/Description';
import { starCreator } from '@/components/useStarCreator';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';

import { addedToCart } from '@/redux/shopSlice';
import { useParams } from 'next/navigation';

const page = () => {

  const { id } = useParams();

  const product = all_product.find( ( el ) => el.id === Number( id ) );

  const { name, category, image, old_price, new_price } = product;

  const dispatch = useDispatch();

  const { cart } = useSelector( state => state.shopSlice );

  const handleAddToCart = ( id ) => {
    dispatch( addedToCart( id ) );
  };


  return (
    <div className='md:w-[90%] mx-auto'>
      <div className='hidden md:block my-6'>
        <Breadcrumb name={ name } category={ category } />
      </div>
      <div className='mt-12 flex flex-col gap-6 md:flex-row items-center md:items-start'>
        {/* section left */ }
        <div className='flex gap-3'>
          <div className='hidden md:flex flex-col gap-3'>
            <Image src={ image } alt='product image' width={ 90 } className='cursor-pointer' />
            <Image src={ image } alt='product image' width={ 90 } className='cursor-pointer' />
            <Image src={ image } alt='product image' width={ 90 } className='cursor-pointer' />
            <Image src={ image } alt='product image' width={ 90 } className='cursor-pointer' />
          </div>
          <div>
            <Image src={ image } alt='product image' width={ 390 } />
          </div>
        </div>
        {/* section right */ }
        <div className='flex flex-1 flex-col justify-center gap-5 md:gap-6 px-6 md:px-0 py-3'>
          <div className='text-xl md:text-3xl font-medium'>
            <h1>{ name }</h1>
          </div>
          <div className='flex gap-2 text-xl items-center text-orange-600'>
            { starCreator() }
            <p className='text-black text-sm font-medium'>(125)</p>
          </div>
          <div className='font-bold text-xl flex gap-6'>
            <span className='line-through text-gray-600'>$ { old_price }</span>
            <span className='text-red-500'>$ { new_price }</span>
          </div>
          <div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis neque ab veritatis harum odio odit quod omnis nostrum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, reprehenderit.</p>
          </div>
          <div>
            <h3 className='font-bold text-gray-600 text-lg'>Select Size</h3>
            <div className='flex gap-3 mt-2 '>
              <div className='w-9 md:w-12 h-9 md:h-12 bg-gray-100 md:text-xl p-2 flex items-center justify-center border cursor-pointer'>S</div>
              <div className='w-9 md:w-12 h-9 md:h-12 bg-gray-100 md:text-xl p-2 flex items-center justify-center border cursor-pointer'>M</div>
              <div className='w-9 md:w-12 h-9 md:h-12 bg-gray-100 md:text-xl p-2 flex items-center justify-center border cursor-pointer'>L</div>
              <div className='w-9 md:w-12 h-9 md:h-12 bg-gray-100 md:text-xl p-2 flex items-center justify-center border cursor-pointer'>XL</div>
              <div className='w-9 md:w-12 h-9 md:h-12 bg-gray-100 md:text-xl p-2 flex items-center justify-center border cursor-pointer'>XXL</div>
            </div>
          </div>
          <div>
            <button className='uppercase text-white bg-red-500 py-2 px-8 font-medium rounded-md' onClick={ () => handleAddToCart( id ) }>Add to cart</button>
          </div>
          <div>
            <p><span className='font-bold'>Category: </span>{ category }</p>
            <p><span className='font-bold'>Tags: </span>Modern, Latest</p>
          </div>
        </div>
      </div>
      <div>
        <Description />
      </div>
    </div>
  );
};

export default page;