import Image from 'next/image';

const Item = ( { name, image, old_price, new_price } ) => {
  return (
    <div className='w-[300px] lg:w-[330px]  h-[500px] '>
      <div className='w-[300px]  lg:w-[330px] '>
        <Image src={ image } alt={ name } className='h-[400px]' />
      </div>
      <div className="flex flex-col">
        <h2 className='my-2 font-medium'>{ name }</h2>
        <div className='flex gap-3 text-lg'>
          <p className='font-bold'>$ { new_price }</p>
          <p className='text-gray-500 font-bold line-through'>$ { old_price }</p>
        </div>
      </div>
    </div>
  );
};

export default Item;