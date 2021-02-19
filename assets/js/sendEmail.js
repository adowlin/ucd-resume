function sendMail(contactForm) {
    emailjs.send("service_6i30xfe","rosie_8om116n", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    )
    
    document.formu1.reset(); // clears the form data when submitted
    return false; // prevents page reload
}