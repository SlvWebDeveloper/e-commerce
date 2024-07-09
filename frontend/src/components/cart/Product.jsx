import { removedToCart } from '@/redux/shopSlice';
import Image from 'next/image';
import { BsGift } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';


const Product = ( { name, category, image, new_price, id } ) => {

  const dispatch = useDispatch();
  const { cart } = useSelector( state => state.shopSlice );

  const handleRemoveProduct = ( id ) => {
    dispatch( removedToCart( id ) );
  };

  let qtyProduct = cart[id];
  console.log( cart );


  return (
    <div className='flex gap-3 border-b-2 pb-2 '>
      {/* image section */ }
      <div className=''>
        <Image src={ image } alt="product image" width={ 200 } />
      </div>
      {/* info product section */ }
      <div className='flex flex-col md:flex-row md:justify-between gap-2 lg:gap-6 w-[100%] py-1'>
        {/* description */ }
        <div className='flex flex-col gap-2 order-2'>
          <p className='font-medium'> { name }</p>
          <p><span className='font-medium'>Category:</span> { category }</p>
          <div className='flex gap-3 text-gray-700 font-medium'>
            <p>Size XL</p>
            <p>Quantity { qtyProduct }</p>
          </div>
          <div className='flex gap-6 mt-2'>
            <button>
              <BsGift className='text-2xl' />
            </button>
            <button>
              <FaRegHeart className='text-2xl' />
            </button>
            <button onClick={ () => handleRemoveProduct( id ) }>
              <MdDelete className='text-2xl' />
            </button>
          </div>
        </div>
        {/* price */ }
        <div className='md:order-2'>
          <p className='font-bold md:text-xl'>$ { new_price }</p>
        </div>
      </div>
    </div>
  );
};

export default Product;