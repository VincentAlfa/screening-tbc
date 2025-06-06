import { useSidebarContext } from '@/config/context/sidebar-context';
import { useScrollDirection } from '@/hooks/use-scroll-direction';
import { Menu } from 'lucide-react';
import { Link, NavLink } from 'react-router';
import { navList } from './navList';

export default function Navbar() {
  const { showSidebar, setShowSidebar } = useSidebarContext();
  const isVisible = useScrollDirection();

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <nav className='flex w-full items-center justify-between bg-white p-4 font-semibold shadow-md md:px-8 lg:px-12'>
        <Link to='/'>
          <h1 className='text-lg md:text-xl lg:text-2xl'>Screening TBC</h1>
        </Link>
        <div className='md:hidden'>
          {!showSidebar && (
            <Menu
              onClick={() => setShowSidebar(!showSidebar)}
              className='size-8 cursor-pointer'
            />
          )}
        </div>

        <div className='hidden gap-3 text-xs md:flex md:text-base lg:gap-10 lg:text-lg'>
          {navList.map((data) => {
            return (
              <div key={data.name}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'text-primary-green' : 'text-black'
                  }
                  to={data.link}
                >
                  {data.name}
                </NavLink>
              </div>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
