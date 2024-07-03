import Link from 'next/link';
import { FiShoppingCart } from "react-icons/fi";

const Login = () => {
  return (
    <div className='hidden md:flex items-center gap-6'>
      <button className='flex justify-center items-center font-medium  py-2 px-10 rounded-3xl border border-gray-300'>
        <Link href={ '/login' }>Login</Link>
      </button>
      <button className='flex items-center justify-center text-2xl'>
        <Link href={ '/cart' } className='relative'>
          <FiShoppingCart />
          <span className='flex items-center justify-center absolute text-sm top-[-12px] left-[18px] bg-red-500 text-white rounded-full w-5 h-5'>0</span>
        </Link>
      </button>
    </div>
  );
};

export default Login;