import Links from './Links';
import Login from './Login';
import Logo from './Logo';

const Navbar = () => {
  return (
    <div className='py-5 nav-shadow '>
      <div className='flex justify-between items-center w-[80%] mx-auto'>
        <Logo />
        <Links />
        <Login />
      </div>

    </div>
  );
};

export default Navbar;