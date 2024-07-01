'use client';
import { closeSidebar } from '@/redux/shopSlice';
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import Links from './Links';
const Sidebar = () => {

  const { sidebarIsOpen } = useSelector( state => state.shopSlice );

  const dispatch = useDispatch();

  const handleCloseSidebar = () => {
    dispatch( closeSidebar() );
  };


  return (
    <div className={ sidebarIsOpen ? 'sidebar-open absolute p-5  w-[80%] bg-white top-0 right-0 border-l-4' : "absolute p-5  w-[80%] bg-white top-0 right-0 border-l-4 sidebar-close" }>
      <div className='flex justify-end'>
        <button className='flex items-center justify-center' onClick={ handleCloseSidebar }>
          <IoMdClose className='text-3xl' />
        </button>
      </div>
      <div className='mt-10'>
        <Links />
      </div>
    </div>
  );
};

export default Sidebar;