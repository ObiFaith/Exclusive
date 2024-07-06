import { NavLink } from 'react-router-dom';
import { navLinks } from '../constant';
import { TopHeader } from '..';
import { cart, heart, icon_close, icon_menu, search } from '../assets'
import { useState } from 'react';


const Header = () => {
  const [isMenu, setMenu] = useState(false)

	return (
    <header className='shadow-sm'>
			<TopHeader />
      <div className='container flex max-md:flex-col justify-between md:items-center pt-8 pb-4'>
        <div className="flex justify-between items-center">
          <h1 className='lg:text-2xl text-xl'>Exclusive</h1>
          <div className='cursor-pointer md:hidden'><img onClick={() => setMenu(!isMenu)} src={!isMenu ? icon_menu : icon_close} alt={!isMenu ? 'icon_menu' : 'icon_close'} /></div>
        </div>
        {isMenu && <nav className="flex max-md:flex-col gap-4 lg:gap-12 items-center">
          {navLinks.map(item => (
            <NavLink className={({isActive}) => isActive ? 'border-b border-black' : 'hover:border-b hover:border-black'} key={item.name} to={item.to}>{item.name}</NavLink>
          ))}
        </nav>}
        <nav className="hidden md:flex gap-4 lg:gap-12 items-center">
          {navLinks.map(item => (
            <NavLink className={({isActive}) => isActive ? 'border-b border-black' : 'hover:border-b hover:border-black'} key={item.name} to={item.to}>{item.name}</NavLink>
          ))}
        </nav>
        <div className='hidden md:flex items-center gap-2 lg:gap-6'>
          <div className='relative hidden lg:inline'>
            <input placeholder='What are you looking for?' className='input' type="text" name="search" />
            <img className='absolute right-3 top-2' src={search} alt="search" />
          </div>
          <div className='lg:hidden'><img src={search} alt="search" /></div>
          <div><img src={heart} alt="wishlist" /></div>
          <div><img src={cart} alt="cart" /></div>
        </div>
      </div>
    </header>
	);
};

export default Header;
