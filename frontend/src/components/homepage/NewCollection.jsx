import new_collections from '@/assets/new_collections';
import Link from 'next/link';
import Item from '../Item';
const NewCollection = () => {
  return (
    <div className='py-[10] w-[100%] my-10'>
      <div className='text-center'>
        <h2 className='text-3xl lg:text-4xl font-bold uppercase'>New collection</h2>
        <div className='w-[150px] lg:w-[300px] my-2 mx-auto h-[5px] rounded-2xl bg-black'></div>
      </div>
      <div className='flex flex-col md:flex-row flex-wrap items-center justify-between gap-6 md:gap-1  mt-10  w-[90%] mx-auto'>
        {
          new_collections.map( ( el ) => {
            return <Link href={ `/product/${el.id}` } key={ el.id } className='link-hover'>
              <Item { ...el } />
            </Link>;
          } )
        }
      </div>
    </div>
  );
};

export default NewCollection;