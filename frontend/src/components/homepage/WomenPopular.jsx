import data_product from '@/assets/data';
import Link from 'next/link';
import Item from '../Item';

const WomenPopular = () => {
  return (
    <div className='py-[10] w-[100%]'>
      <div className='text-center'>
        <h2 className='text-3xl lg:text-4xl font-bold uppercase'>Popular in woman</h2>
        <div className='w-[150px] lg:w-[300px] my-2 mx-auto h-[5px] rounded-2xl bg-black'></div>
      </div>
      <div className='flex flex-col md:flex-row flex-wrap items-center gap-3  mt-10  w-[90%] mx-auto'>
        {
          data_product.map( ( el ) => {
            return <Link href={ `/product/${el.id}` } key={ el.id } className='link-hover'>
              <Item { ...el } />
            </Link>;
          } )
        }
      </div>
    </div>
  );
};

export default WomenPopular;