import { closeSidebar } from '@/redux/shopSlice';
import Link from 'next/link';
import { useDispatch } from 'react-redux';

const Links = () => {

  const dispatch = useDispatch();

  const handleCloseSidebar = () => {
    dispatch( closeSidebar() );
  };


  return (
    <div className='flex flex-col gap-6 justify-center items-center mt-5 font-medium text-xl'>
      <button onClick={ handleCloseSidebar }>
        <Link href={ "/" }>
          Shop
        </Link>
      </button>
      <button onClick={ handleCloseSidebar }>
        <Link href={ "/men" }>
          Men
        </Link>
      </button >
      <button onClick={ handleCloseSidebar }>
        <Link href={ "/women" }>
          Women
        </Link>
      </button>
      <button onClick={ handleCloseSidebar }>
        <Link href={ "/kids" }>
          Kids
        </Link>
      </button>
    </div>
  );
};

export default Links;