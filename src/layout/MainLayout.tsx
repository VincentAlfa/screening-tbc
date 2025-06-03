import { Outlet } from 'react-router';
export default function MainLayout() {
  return (
    <main className='h-screen w-full overflow-y-auto'>
      <section className='flex h-full w-full items-center justify-center'>
        <Outlet />
      </section>
    </main>
  );
}
