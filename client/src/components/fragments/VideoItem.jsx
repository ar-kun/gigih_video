import { Link } from 'react-router-dom';
import { Input } from '../elements/input/input';

/* eslint-disable react/prop-types */
export const CardVideo = ({ children }) => {
 return (
  <div className="w-full md:w-[40%] lg:w-[30%] break-inside p-6 rounded-xl bg-white dark:bg-slate-800 flex flex-col bg-clip-border">{children}</div>
 );
};

const Header = ({ channelTitle, publishedAt, channelThumbnail }) => {
 return (
  <div className="flex pb-6 items-center justify-between">
   <div className="flex">
    <a className="inline-block mr-4" href="#">
     <img className="rounded-full max-w-none w-12 h-12" src={`${channelThumbnail}`} />
    </a>
    <div className="flex flex-col">
     <div>
      <a className="inline-block text-lg font-bold dark:text-white" href="#">
       {channelTitle}
      </a>
     </div>
     <div className="text-slate-500 dark:text-slate-400">{new Date(publishedAt).toUTCString()}</div>
    </div>
   </div>
  </div>
 );
};

const Body = ({ id, title, children }) => {
 return (
  <>
   <h2 className="text-xl font-semibold dark:text-white">
    <Link to={`/video/${id}`}>{title}</Link>
   </h2>
   <iframe
    width="560"
    height="315"
    src={`https://www.youtube.com/embed/${id}?clip=UgkxOVprsmZ48BA4fIKlq12KjEQsrRlari8U&amp;clipt=EAAYmHU`}
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
   ></iframe>
   <p className="dark:text-slate-200">{children}</p>
  </>
 );
};

const Footer = () => {
 return (
  <div className="relative mt-5 ">
   <Input
    type="text"
    placeholder="Write a comment"
    className="pt-2 pb-2 pl-3 w-full h-11 bg-slate-100 dark:bg-slate-600 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium pr-20"
   />
   <span className="flex gap-2 absolute right-3 top-2/4 -mt-2 items-center ">
    <i className="fa-regular fa-face-smile"></i>
    <i className="fa-regular fa-paper-plane"></i>
   </span>
  </div>
 );
};

CardVideo.Header = Header;
CardVideo.Body = Body;
CardVideo.Footer = Footer;
