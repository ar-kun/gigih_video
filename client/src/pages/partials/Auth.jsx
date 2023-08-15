/* eslint-disable react/prop-types */
// import { FormLogin } from '../components/fragments/FormLogin';
import { Button } from '../../components/elements/button/Index';
import { Form } from '../../components/fragments/Form';
import { AuthLayout } from '../../components/layouts/AuthLayout';

export const Auth = ({ title, showModal, setShowModal, login, register }) => {
 console.log('showModal:', showModal);
 return (
  <>
   {showModal ? (
    <>
     <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
       <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
        <div className="relative p-6 flex-auto">
         <Button
          variant="absolute right-2 top-2 h-8 px-2 font-semibold rounded-md w-8 bg-blue-600 text-white"
          text="X"
          onClick={() => setShowModal(false)}
         />
         <AuthLayout title={`${title}`}>
          <Form action={`/${title.toLowerCase()}`} method="post" />
          <p className="text-center mt-2">
           {title === 'Login' ? 'Don’t have an account? ' : 'Already have an account? '}
           {title === 'Login' ? (
            <Button variant="font-bold text-blue-400" text="Register" onClick={register} />
           ) : (
            <Button variant="font-bold text-blue-400" text="Login" onClick={login} />
           )}
          </p>
         </AuthLayout>
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
