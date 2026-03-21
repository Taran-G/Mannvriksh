

 function useSendToGoogleSheets(formRef) { 
     
     const sendToSheets = (e) => {
        e.preventDefault();

        const form = formRef.current;
     const formData ={
        name:form.name.value,
        contact:form.contact.value,
        message:form.message.value
     }

        fetch("https://script.google.com/macros/s/AKfycbzGWJ1WxVifYaxEYMY-uOZ6ofcU-do8bMkYq0Bcmr9xrd40KU_9Op1hRiU8HW1xGClG/exec", {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(formData),
      }) .then(() => {
                console.log("Success: Data sent to Google Sheets" );
            })
            .catch((error) => {
                console.error("Error:", error);
            });
      
     }
     return {sendToSheets};
}
export default useSendToGoogleSheets;