import { useRef } from "react";
import emailjs from '@emailjs/browser';

 function useSendEmail() { 
     const formRef = useRef();
     const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm('service_msack18', 'template_6pwsmrc', formRef.current, {
        publicKey: 'DaPXYRYJippOSe6bc',

        // .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        // publicKey: 'YOUR_PUBLIC_KEY',

      })
      .then(        
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );

     }
     return {formRef, sendEmail};
}
export default useSendEmail;
