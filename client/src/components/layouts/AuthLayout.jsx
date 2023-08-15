/* eslint-disable react/prop-types */
export const AuthLayout = ({ children, title }) => {
 return (
  <>
   <div className="w-full max-w-xs mt-5">
    <h1 className="text-3xl font-bold underline mb-2 text-center">{title}</h1>
    <p className="font-medium text-slate-500">Welcome back! Please {title.toLowerCase()} to your account.</p>
    {children}
   </div>
  </>
 );
};
