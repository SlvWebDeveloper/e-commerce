'use client';
import all_product from '@/assets/all_product';
import Item from '@/components/Item';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowDown } from "react-icons/io";
import banner_women from '../../assets/banner_women.png';

const page = () => {
  return (
    <div className='w-[80%] mx-auto mt-12'>
      <div className=''>
        <Image src={ banner_women } alt='banner men' />
      </div>
      <div className='hidden md:flex justify-between my-10'>
        <p><span className='font-medium'>Showing 1-12</span> out of 36 products</p>
        <div>
          <button className='border rounded-3xl py-2 px-10 flex items-center gap-3'>
            <p>Sort by</p>
            <IoIosArrowDown />
          </button>
        </div>
      </div>
      <div className='mx-auto flex flex-col md:flex-row flex-wrap gap-3 justify-between items-center my-10'>
        {
          all_product.map( ( el ) => {
            if ( el.category === "women" ) {
              return <Link href={ "#" } key={ el.id } className='link-hover'>
                <Item { ...el } />
              </Link>;
            }
          } )
        }
      </div>
    </div>
  );
};

export default page;