'use client';
const Breadcrumb = ( { name, category } ) => {
  return (
    <div className='flex gap-2 items-center'>
      <p className='font-medium'>HOME</p>
      <span>&gt;</span>
      <p className='font-medium'>SHOP</p>
      <span>&gt;</span>
      <p className='font-medium'>{ category }</p>
      <span>&gt;</span>
      <p className='font-medium'>{ name }</p>
    </div>
  );
};

export default Breadcrumb;