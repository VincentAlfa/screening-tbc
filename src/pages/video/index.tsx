import VideoPlayer from '@/components/video-player/video-player';
import VideoThumbnail from '@/components/video-thumbnail/video-thumbnail';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { videoData, type VideoData } from './videoData';

export default function Video() {
  const [currentVideo, setCurrentVideo] = useState<VideoData>(videoData[0]);
  const [shouldAutoPlay, setShouldAutoPlay] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const VIDEOS_PER_PAGE = 9;
  const totalPages = Math.ceil(videoData.length / VIDEOS_PER_PAGE);

  const indexOfLastVideo = currentPage * VIDEOS_PER_PAGE;
  const indexOfFirstVideo = indexOfLastVideo - VIDEOS_PER_PAGE;
  const currentVideos = videoData.slice(indexOfFirstVideo, indexOfLastVideo);

  useEffect(() => {
    setShouldAutoPlay(false);
  }, []);

  const handleVideoChange = (video: VideoData) => {
    setCurrentVideo(video);
    setShouldAutoPlay(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
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
          {currentVideos.map((video) => (
            <VideoThumbnail
              key={video.id}
              video={video}
              isActive={currentVideo.id === video.id}
              onClick={() => handleVideoChange(video)}
            />
          ))}
        </div>

        <div className='mt-8 flex items-center justify-center gap-2'>
          {currentPage > 1 && (
            <Button
              variant='outline'
              onClick={goToPrevPage}
              className='cursor-pointer text-sm'
            >
              « Prev
            </Button>
          )}
          <span className='mx-2 text-sm'>
            {currentPage} / {totalPages}
          </span>
          {currentPage < totalPages && (
            <Button
              variant='outline'
              onClick={goToNextPage}
              className='cursor-pointer text-sm'
            >
              Next »
            </Button>
          )}
        </div>
      </div>
    </main>
  );
}
