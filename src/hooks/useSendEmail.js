import { useRef } from "react";
import emailjs from '@emailjs/browser';

 function useSendEmail() { 
     const formRef = useRef();
     const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm('service_msack18', 'template_6pwsmrc', formRef.current, {
        publicKey: 'DaPXYRYJippOSe6bc',
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