import ScreeningForm from './screening-form';

export default function Screening() {
  return (
    <main className='from-secondary-green to-primary-green flex w-full flex-col bg-gradient-to-b pt-22 pb-8'>
      <h1 className='mb-8 text-center text-2xl font-bold'>
        SCREENING SEKARANG
      </h1>
      <div className='mx-auto max-w-3xl rounded-lg bg-white p-6'>
        <ScreeningForm />
      </div>
    </main>
  );
}
