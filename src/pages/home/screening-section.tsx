import homeImg from '@/assets/home-img.webp';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link } from 'react-router';

export default function ScreeningSection() {
  const isMobile = useIsMobile();

  return (
    <section className='flex w-full flex-col md:flex-row'>
      <article
        className={`from-secondary-green to-primary-green flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-b px-4 py-8 text-justify text-base md:w-1/2 md:px-8 md:text-xl lg:px-12 lg:text-2xl ${
          isMobile ? 'min-h-[400px] pb-12' : ''
        }`}
      >
        <p className='mb-4'>
          Pernahkah Anda mengalami batuk yang tak kunjung sembuh, demam, atau
          berat badan menurun tanpa sebab yang jelas? Itu bisa jadi tanda-tanda
          awal Tuberkulosis (TBC).
        </p>
        <p className='mb-4'>
          Tapi jangan khawatir, TBC bisa disembuhkan jika ditemukan sejak dini.
          Dengan aplikasi ini, Anda dapat memeriksa gejala secara mandiri dan
          mendapatkan informasi yang tepat.
        </p>
        <p className='mb-4'>
          Mulailah langkah kecil hari ini untuk kesehatan yang lebih baik esok
        </p>
        <Link to='/screening' className='w-full pt-3 md:pt-0'>
          <Button className='w-full'>Mulai Screening</Button>
        </Link>
      </article>

      {!isMobile && (
        <figure className='h-[400px] w-full bg-blue-200 md:h-auto md:w-1/2'>
          <img
            src={homeImg}
            alt='Ilustrasi TBC'
            className='h-full w-full object-cover'
          />
          <figcaption className='sr-only'>Ilustrasi tentang TBC</figcaption>
        </figure>
      )}
    </section>
  );
}
