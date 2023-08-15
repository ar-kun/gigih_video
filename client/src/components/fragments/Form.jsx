/* eslint-disable react/prop-types */
import { Button } from '../elements/button/Index';
import { InputForm } from '../elements/input/Index';

export const Form = ({ action, method }) => {
 if (action === '/login') {
  return (
   <form action={`${action}`} method={`${method}`}>
    <InputForm value="Email" type="email" name="email" placeholder="example@gmail.com" />
    <InputForm value="Password" type="password" name="password" placeholder="******" />
    <Button text="Login" />
   </form>
  );
 } else {
  return (
   <form action={`${action}`} method={`${method}`}>
    <InputForm value="Nama Lengkap" type="text" name="name" placeholder="Smits Matio" />
    <InputForm value="Email" type="email" name="email" placeholder="example@gmail.com" />
    <InputForm value="Password" type="password" name="password" placeholder="******" />
    <InputForm value="Confirm Password" type="password" name="password" placeholder="******" />
    <Button text="Register" />
   </form>
  );
 }
};
