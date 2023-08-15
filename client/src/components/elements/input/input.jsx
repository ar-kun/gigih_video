/* eslint-disable react/prop-types */
export const Input = (props) => {
 const { type, placeholder, name, className = 'text-sm border rounded w-full p-3 text-slate-700 placeholder:opacity-50' } = props;
 return <input type={`${type}`} className={`${className}`} placeholder={`${placeholder}`} name={`${name}`} id={`${name}`} />;
};
