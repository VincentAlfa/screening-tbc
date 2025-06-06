type VideoPlayerProps = {
  videoId: string;
  title: string;
  autoplay?: boolean;
};

export default function VideoPlayer({
  videoId,
  title,
  autoplay = false,
}: VideoPlayerProps) {
  const embedUrl = `https://www.youtube.com/embed/${videoId}${autoplay ? '?autoplay=1' : ''}`;

  return (
    <div className='flex flex-col'>
      <div className='aspect-video w-full overflow-hidden rounded-xl bg-white shadow-lg'>
        <iframe
          src={embedUrl}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          className='h-full w-full'
          title={title}
        />
      </div>
    </div>
  );
}
