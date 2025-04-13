console.log("Javascript loaded on:", window.location.pathname);
document.addEventListener("DOMContentLoaded", () => {
    const patientRedirectButton = document.getElementById("patient_button");
    console.log(patientRedirectButton);
    const redirectToPatientDashboard = () => {
        console.log("Successful Trigger");
        window.location.href = "/patient_dashboard";
    };
    if (patientRedirectButton) {
        patientRedirectButton.addEventListener("click", redirectToPatientDashboard);
        //console.log("Attached event listener");
    }
    
});

console.log("Javascript loaded on:", window.location.pathname);
document.addEventListener("DOMContentLoaded", () => {
    const doctorRedirectButton = document.getElementById("doctor_button");
    //console.log("Succesfull load of js dom");
    const redirectToDoctorLogin = () => {
        //console.log("Successful Trigger");
        window.location.href = "/doctorLogin";
    };
    if (doctorRedirectButton) {
        doctorRedirectButton.addEventListener("click", redirectToDoctorLogin);
        //console.log("Attached event listener");
    }
    
});