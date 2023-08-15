/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { Button } from '../elements/button/Index';

export const Navbar = ({ login, register, name }) => {
 if (name === 'detail') {
  return (
   <div className="fixed top-0 z-30 w-full flex px-24 py-5 justify-between backdrop-blur-sm bg-white/30 shadow-sm shadow-zinc-700">
    <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-700">Arkun</p>
    <Link to="/" className="py-2 px-4 font-semibold rounded-md  bg-blue-600 text-white">
     <i className="fa-solid fa-arrow-left mr-2"></i>
     Back to List
    </Link>
   </div>
  );
 } else {
  return (
   <div className="fixed top-0 z-30 w-full flex px-24 py-5 justify-between backdrop-blur-sm bg-white/30 shadow-sm shadow-zinc-700">
    <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-700">Arkun</p>
    <div className="flex gap-5">
     <Button variant=" h-10 px-4 font-semibold rounded-md w-auto bg-blue-600 text-white" text="Login" onClick={login} />
     <Button variant=" h-10 px-4 font-semibold rounded-md w-auto bg-white text-" text="Register" onClick={register} />
    </div>
   </div>
  );
 }
};
