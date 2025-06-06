import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';
import Sidebar from '@/components/sidebar/sidebar';
import { Outlet } from 'react-router';
export default function MainLayout() {
  return (
    <main className='font-plus-jakarta-sans flex min-h-screen w-full flex-col overflow-x-hidden'>
      <Navbar />
      <Sidebar />
      <section className='flex w-full flex-1'>
        <Outlet />
      </section>
      <Footer />
    </main>
  );
}
