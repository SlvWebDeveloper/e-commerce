'use client';
import { closeSidebar } from '@/redux/shopSlice';
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import Links from './Links';
import SocialLinkSidebar from './SocialLinkSidebar';
const Sidebar = () => {

  const { sidebarIsOpen } = useSelector( state => state.shopSlice );

  const dispatch = useDispatch();

  const handleCloseSidebar = () => {
    dispatch( closeSidebar() );
  };


  return (
    <div className='relative'>
      <div className={ sidebarIsOpen ? 'opacity-section-open' : "opacity-section-open opacity-section-close" }></div>
      <div className={ sidebarIsOpen ? 'sidebar-open' : "sidebar-open sidebar-close" }>
        {/* <div className='w-[20%] bg-black opacity-40'></div> */ }
        <div className="sidebar-content" >
          <div className='flex justify-end'>
            <button className='flex items-center justify-center' onClick={ handleCloseSidebar }>
              <IoMdClose className='text-3xl' />
            </button>
          </div>
          <div className='mt-10'>
            <Links />
          </div>
          <div className='mt-10'>
            <SocialLinkSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;