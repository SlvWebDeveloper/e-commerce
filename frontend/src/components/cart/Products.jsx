'use client';
import all_product from '@/assets/all_product';
import { useSelector } from 'react-redux';
import Product from './Product';

const Products = () => {

  const { cart, subtotal } = useSelector( state => state.shopSlice );


  return (
    <div>
      < h2 className='font-bold text-2xl' > Bag</h2 >
      <div className='mt-10 flex flex-col gap-3'>
        {
          subtotal > 0 ? (
            all_product.map( ( el ) => {
              if ( cart[el.id] > 0 ) {
                return <Product key={ el.id } { ...el } />;
              }
            } )
          ) : <p className='text-xl font-medium'>There are no items in your bag.</p>
        }
      </div>
    </div >
  );
};

export default Products;
