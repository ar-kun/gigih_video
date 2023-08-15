/* eslint-disable react/prop-types */
export const Label = (props) => {
 const { value, htmlFor } = props;
 return (
  <label htmlFor={`${htmlFor}`} className="block text-slate-700 text-sm font-bold mb-2">
   {value}
  </label>
 );
};
