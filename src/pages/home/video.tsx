import { Button } from '@/components/ui/button';
import { Link } from 'react-router';

function YouTubeEmbed({
  videoId,
  className,
}: {
  videoId: string;
  className?: string;
}) {
  return (
    <div
      className={`aspect-video w-full overflow-hidden rounded-xl shadow-lg ${className}`}
    >
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        className='h-full w-full'
        title='YouTube video player'
      />
    </div>
  );
}

export default function VideoSection() {
  const featuredVideoId = 'G4142KR9A8I';

  return (
    <section className='from-secondary-green to-primary-green flex min-h-[70vh] w-full flex-col items-center justify-center bg-gradient-to-b px-4 py-10'>
      <h2 className='mb-8 text-center text-2xl font-bold uppercase'>
        Video Edukasi
      </h2>

      <div className='mx-auto mb-8 w-full max-w-2xl md:max-w-3xl'>
        <YouTubeEmbed videoId={featuredVideoId} />
      </div>

      <div className='w-full max-w-2xl md:max-w-3xl'>
        <Link to='/video-edukasi' className='block w-full'>
          <Button className='w-full'>Video Edukasi Lainnya</Button>
        </Link>
      </div>
    </section>
  );
}
