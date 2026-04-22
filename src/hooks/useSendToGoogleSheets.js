function useSendToGoogleSheets(formRef) { 
     
     const sendToSheets = (e) => {
        e.preventDefault();

        const form = formRef.current;
     const formData ={
        name:form.name.value,
        contact:form.contact.value,
        message:form.message.value
     }

        fetch("https://script.google.com/macros/s/AKfycbx-fj-QxKtu8_QBd4htW1cEk5P5PMdNIza8pzafSgWwDBW0zWCJx2TcgHPIlQcJX4uWwA/exec", {
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
