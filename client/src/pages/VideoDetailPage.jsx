import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getVideo } from '../services/videoService';
import { ProfileCard } from '../components/fragments/ProfileCard';

import { addComment, deleteComment, getCommentsById } from '../services/comentService';

export const VideoDetailPage = () => {
 const { id } = useParams();
 //  const [addComment, setAddComment] = useState('');
 const [dataVideo, setDataVideo] = useState([]);
 const [dataChannel, setDataChannel] = useState([]);
 const [showModalChannel, setShowModalChannel] = useState(false);
 const [commentsList, setCommentsList] = useState([]);

 const [commentData, setCommentData] = useState({
  videoID: id,
  comment: '',
  nama: 'shin',
 });

 const hadlerShowModalChannel = () => {
  setShowModalChannel(true);
 };

 useEffect(() => {
  getVideo(id, (data) => {
   setDataVideo(data.videoInfo);
   setDataChannel(data.channelInfo);
  });
 }, [id]);

 useEffect(() => {
  getCommentsById(id, (data) => {
   setCommentsList(data);
  });
 }, [id, commentData]);

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
   await addComment(commentData, () => {
    alert('Comment added successfully');
    setCommentData({
     ...commentData,
     comment: '',
    });
   });
  } catch (error) {
   console.error('Failed to add comment:', error);
  }
 };

 const handleDelete = async (commentId) => {
  try {
   await deleteComment(commentId, () => {
    alert('Comment deleted successfully');
    getCommentsById(id, (data) => {
     setCommentsList(data);
    });
   });
  } catch (error) {
   console.error('Failed to delete comment:', error);
  }
 };

 return (
  <>
   <div className="mx-16 flex flex-wrap my-28 justify-between bg-white rounded-lg p-5">
    <ProfileCard
     showModalChannel={showModalChannel}
     channelTitle={dataVideo.channelTitle}
     dataChannel={dataChannel}
     setShowModalChannel={setShowModalChannel}
    />
    <div className="w-full">
     <div className="flex gap-5 justify-between">
      <div className="w-[80%]">
       <iframe
        width="100%"
        height="700"
        src={`https://www.youtube.com/embed/${dataVideo.videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        // allowfullscreen
        className="rounded-lg"
       ></iframe>
      </div>
      <div className="relative w-[20%] flex justify-start flex-col-reverse items-end border border-slate-400 rounded-lg box-border p-5 mr-5 mt-5 shadow-md shadow-slate-400">
       <form onSubmit={handleSubmit} className="relative">
        <input
         type="text"
         placeholder="Write a comment"
         className="pt-2 pb-2 pl-3 w-full h-11 bg-slate-100 dark:bg-slate-600 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium pr-20 mt-5"
         value={commentData.comment}
         onChange={(e) => setCommentData({ ...commentData, comment: e.target.value })}
        />
        <button type="submit" className="absolute top-1/2 right-5">
         <i className="fa-regular fa-paper-plane"></i>
        </button>
       </form>
       <div className="flex justify-between flex-col w-full gap-5">
        {commentsList.length > 0 &&
         commentsList.map((item) => (
          <div key={item.id} className="flex justify-between items-center">
           <p className=" text-black">{item.comment}</p>
           <button onClick={() => handleDelete(item.id)} className="px-2 py-0 rounded-full bg-red-500 text-white">
            X
           </button>
          </div>
         ))}
       </div>
      </div>
     </div>
    </div>
    <div className="py-10">
     <h1 className="text-2xl font-semibold">{dataVideo.title}</h1>
     <div className="flex pb-6 items-center justify-between my-5">
      <div className="flex">
       <button className="inline-block mr-4" onClick={hadlerShowModalChannel}>
        <img className="rounded-full max-w-none w-12 h-12" src={dataChannel.channelThumbnail} />
       </button>
       <div className="flex flex-col">
        <div>
         <a className="inline-block text-lg font-bold dark:text-white" href="#">
          {dataVideo.channelTitle}
         </a>
        </div>
        <div className="text-slate-500 dark:text-slate-400">{new Date(dataVideo.publishedAt).toUTCString()}</div>
       </div>
      </div>
     </div>

     <pre>{dataVideo.description}</pre>
    </div>
   </div>
  </>
 );
};
