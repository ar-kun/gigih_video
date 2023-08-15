/* eslint-disable react/prop-types */
import { Input } from './input';
import { Label } from './label';

export const InputForm = ({ type, value, placeholder, name }) => {
 return (
  <div className="mb-4">
   <Label value={`${value}`} htmlFor={`${name}`} />
   <Input type={`${type}`} placeholder={`${placeholder}`} name={`${name}`} />
  </div>
 );
};
