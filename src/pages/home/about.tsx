import { AboutCard } from '@/components/about-card/about-card';
import { tbcInfoData } from '@/components/about-card/data';

export default function AboutSection() {
  return (
    <section id='about' className='px-4 py-12 md:px-8 lg:px-12'>
      <h2 className='mb-8 text-center text-xl font-bold md:text-2xl'>
        TENTANG TBC
      </h2>
      <div className='mx-auto flex max-w-7xl flex-wrap justify-center gap-6'>
        {tbcInfoData.map((item, index) => (
          <AboutCard
            key={index}
            title={item.title}
            content={item.content}
            className='w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]'
          />
        ))}
      </div>
    </section>
  );
}
