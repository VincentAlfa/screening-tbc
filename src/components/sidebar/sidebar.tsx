import { useSidebarContext } from '@/config/context/sidebar-context';
import { XIcon } from 'lucide-react';
import { NavLink } from 'react-router';
import { navList } from '@/components/navbar/navList';
import { Button } from '@/components/ui/button';

export default function Sidebar() {
  const { showSidebar, setShowSidebar } = useSidebarContext();

  return (
    <section
      className={`bg-opacity-60 fixed top-0 z-50 h-full w-full bg-black/50 ${
        showSidebar ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <aside
        className={`fixed left-0 flex h-full w-[80%] flex-col items-center gap-16 bg-white px-8 py-16 transition-transform duration-500 ease-in-out sm:w-[60%] md:hidden ${
          showSidebar ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <Button
          onClick={() => setShowSidebar(false)}
          className='absolute top-6 right-6 size-6'
        >
          <XIcon />
        </Button>

        <nav className='flex h-full w-full flex-col gap-4 font-medium'>
          {navList.map((item) => (
            <div key={item.name} className='flex flex-col gap-4'>
              <hr className='w-full' />
              <NavLink
                onClick={() => setShowSidebar(false)}
                to={item.link}
                className={({ isActive }) =>
                  isActive ? 'text-primary-blue' : 'text-black'
                }
              >
                {item.name}
              </NavLink>
            </div>
          ))}
          <hr className='w-full' />
        </nav>
      </aside>
    </section>
  );
}
