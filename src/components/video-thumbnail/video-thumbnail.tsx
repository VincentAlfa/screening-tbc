import type { VideoData } from "@/pages/video/videoData";

interface VideoThumbnailProps {
  video: VideoData;
  isActive: boolean;
  onClick: () => void;
}

export default function VideoThumbnail({
  video,
  isActive,
  onClick,
}: VideoThumbnailProps) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer overflow-hidden rounded-lg transition-all ${
        isActive ? 'ring-primary-green ring-4' : 'hover:scale-105'
      }`}
    >
      <div className='aspect-video w-full'>
        <img
          src={`https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`}
          alt={video.title}
          className='h-full w-full object-cover'
        />
      </div>
      <div className='bg-white p-2'>
        <p className='line-clamp-2 text-sm'>{video.title}</p>
      </div>
    </div>
  );
}
