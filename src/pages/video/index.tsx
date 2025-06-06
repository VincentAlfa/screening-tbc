import VideoPlayer from '@/components/video-player/video-player';
import VideoThumbnail from '@/components/video-thumbnail/video-thumbnail';
import { useState, useEffect } from 'react';
import { videoData, type VideoData } from './videoData';

export default function Video() {
  const [currentVideo, setCurrentVideo] = useState<VideoData>(videoData[0]);
  const [shouldAutoPlay, setShouldAutoPlay] = useState<boolean>(true);

  useEffect(() => {
    setShouldAutoPlay(false);
  }, []);

  const handleVideoChange = (video: VideoData) => {
    setCurrentVideo(video);
    setShouldAutoPlay(true);
  };

  return (
    <main className='from-secondary-green to-primary-green flex w-full flex-col bg-gradient-to-b pt-16 pb-8'>
      <h1 className='mb-8 pt-8 text-center text-2xl font-bold'>
        VIDEO EDUKASI
      </h1>
      <div className='mx-auto w-full max-w-4xl px-4'>
        <div className='mb-8 w-full'>
          <VideoPlayer
            videoId={currentVideo.videoId}
            title={currentVideo.title}
            autoplay={shouldAutoPlay}
          />
        </div>

        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {videoData.map((video) => (
            <VideoThumbnail
              key={video.id}
              video={video}
              isActive={currentVideo.id === video.id}
              onClick={() => handleVideoChange(video)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
