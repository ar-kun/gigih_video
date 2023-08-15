/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export const Button = (props) => {
 const { variant = 'h-10 px-6 font-semibold rounded-md w-full bg-blue-600 text-white', text = '....', onClick } = props;
 return (
  <button className={`${variant}`} type="submit" onClick={onClick}>
   {text}
  </button>
 );
};
