import AboutSection from './about';
import ScreeningSection from './screening-section';
import VideoSection from './video';

export default function Home() {
  return (
    <main className='flex w-full flex-col pt-14'>
      <ScreeningSection />
      <AboutSection />
      <VideoSection />
    </main>
  );
}
