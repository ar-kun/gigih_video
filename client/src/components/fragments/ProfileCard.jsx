/* eslint-disable react/prop-types */
import { Button } from '../elements/button/Index';

export const ProfileCard = ({ showModalChannel, dataChannel, setShowModalChannel, channelTitle }) => {
 const descriptionChannel = () => ({ __html: dataChannel.channelDescription.replace(/\n\n/g, '<br /><br />').replace(/\n/g, '<br />') });

 return (
  <>
   {showModalChannel ? (
    <>
     <div className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative  w-auto my-6 mx-auto rounded-lg max-w-3xl h-3/4 overflow-y-auto">
       <Button
        variant="absolute z-10 right-2 top-2 h-8 px-2 font-semibold rounded-md w-8 bg-blue-600 text-white"
        text="X"
        onClick={() => setShowModalChannel(false)}
       />
       <div className="border-0  shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
        <div className="relative p-6 flex-auto">
         <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800 w-full">
          <img className="w-24 h-24 rounded-full mx-auto" src={dataChannel.channelThumbnail} alt="" width="384" height="512" />
          <div className="pt-6 text-center space-y-4">
           <blockquote>
            <p dangerouslySetInnerHTML={descriptionChannel()} />
           </blockquote>
           <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">{channelTitle}</div>
            <div className="text-slate-700 dark:text-slate-500">Subscriber {dataChannel.subscriberCount}</div>
           </figcaption>
          </div>
         </figure>
        </div>
       </div>
      </div>
     </div>
     <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
   ) : null}
  </>
 );
};
