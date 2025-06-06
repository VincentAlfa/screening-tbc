export default function Footer() {
  return (
    <footer className='text-muted-foreground flex w-full flex-col items-center justify-center border border-t p-4 px-4 text-sm md:px-10 lg:flex-row'>
      <span className='text-center font-semibold text-gray-500'>
        Copyright © {new Date().getFullYear()}
      </span>
    </footer>
  );
}
