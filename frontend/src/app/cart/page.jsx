import Products from '@/components/cart/Products';
import TotalPrice from '@/components/cart/TotalPrice';

const page = () => {
  return (
    <div className='w-[90%] mx-auto flex flex-col lg:flex-row gap-6 mt-12'>
      <div className='flex-[2]'>
        <Products />
      </div>
      <div className='flex-1'>
        <TotalPrice />
      </div>
    </div>
  );
};

export default page;