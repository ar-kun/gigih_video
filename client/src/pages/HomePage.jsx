import { useEffect, useState } from 'react';
import { getVideos } from '../services/videoService';
import { CardVideo } from '../components/fragments/VideoItem';
import { Navbar } from '../components/layouts/Navbar';
import { Auth } from './partials/Auth';

function HomePage() {
 const [dataVideo, setDataVideo] = useState([]);
 const [showModal, setShowModal] = useState(false);
 const [authTitle, setAuthTitle] = useState('Login');
 const handleButtonClick = (title) => {
  setAuthTitle(title);
  setShowModal(true);
 };

 useEffect(() => {
  getVideos((data) => {
   setDataVideo(data);
  });
 }, []);

 //  console.log(dataVideo);
 return (
  <>
   <Navbar login={() => handleButtonClick('Login')} register={() => handleButtonClick('Register')} />
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

   <Auth
    title={authTitle}
    showModal={showModal}
    setShowModal={setShowModal}
    login={() => handleButtonClick('Login')}
    register={() => handleButtonClick('Register')}
   />
  </>
 );
}

export default HomePage;
