import { useEffect, useState } from 'react';
import { getVideos } from '../services/videoService';
import { CardVideo } from '../components/fragments/VideoItem';

function HomePage() {
 const [dataVideo, setDataVideo] = useState([]);

 useEffect(() => {
  getVideos((data) => {
   setDataVideo(data);
  });
 }, []);

 console.log(dataVideo);
 return (
  <>
   <div className="flex flex-wrap mx-24 gap-10 justify-center mt-28">
    {dataVideo.length > 0 &&
     dataVideo.map((video) => (
      <CardVideo key={video.videoId}>
       <CardVideo.Header channelTitle={video.channelTitle} publishedAt={video.publishedAt} channelThumbnail={video.channelThumbnail} />
       <CardVideo.Body id={video.videoId} title={video.title}>
        {video.description}
       </CardVideo.Body>
       <CardVideo.Footer />
      </CardVideo>
     ))}
   </div>
  </>
 );
}

export default HomePage;
