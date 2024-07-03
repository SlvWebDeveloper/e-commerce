import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";

const SocialLinkSidebar = () => {
  return (
    <div className='flex gap-6 justify-center'>
      <button className='flex items-center justify-center text-3xl'>
        <FaFacebook />
      </button>
      <button className='flex items-center justify-center text-3xl'>
        <FaInstagram />
      </button>
      <button className='flex items-center justify-center text-3xl'>
        <FaPinterest />
      </button>

    </div>
  );
};

export default SocialLinkSidebar;