console.log("Javascript loaded on:", window.location.pathname);
document.addEventListener("DOMContentLoaded", () => {
    const trackButton = document.getElementById("track_button");
    console.log(trackButton);
    const redirectToStatusTracker = () => {
        console.log("Successful Trigger");
        window.location.href = "/status_Tracker";
    };
    if (trackButton) {
        trackButton.addEventListener("click", redirectToStatusTracker);
        //console.log("Attached event listener");
    }
});
console.log("Javascript loaded on:", window.location.pathname);
document.addEventListener("DOMContentLoaded", () => {
    const appointmrntButton = document.getElementById("appointment_button");
    console.log(appointmrntButton);
    const redirectTomatchMaker = () => {
        console.log("Successful Trigger");
        window.location.href = "/appointment_maker";
    };
    if (appointmrntButton) {
        appointmrntButton.addEventListener("click", redirectTomatchMaker);
        //console.log("Attached event listener");
    }
});
console.log("Javascript loaded on:", window.location.pathname);
document.addEventListener("DOMContentLoaded", () => {
    const symptomButton = document.getElementById("symptom_button");
    console.log(symptomButton);
    const redirectToSymptomDescriber = () => {
        console.log("Successful Trigger");
        window.location.href = "/symptom_describer";
    };
    if (symptomButton) {
        symptomButton.addEventListener("click", redirectToSymptomDescriber);
        //console.log("Attached event listener");
    }
});
console.log("Javascript loaded on:", window.location.pathname);
document.addEventListener("DOMContentLoaded", () => {
    const homeLink = document.getElementById("homeLink");
    console.log(homeLink);
    const redirectToDashBoard = () => {
        console.log("Successful Trigger");
        window.location.href = "/";
    };
    if (homeLink) {
        homeLink.addEventListener("click", redirectToDashBoard);
        //console.log("Attached event listener");
    }
});
console.log("Javascript loaded on:", window.location.pathname);
document.addEventListener("DOMContentLoaded", () => {
    const trackLink = document.getElementById("trackLink");
    console.log(trackLink);
    const redirectTostatusTracker = () => {
        console.log("Successful Trigger");
        window.location.href = "/status_Tracker";
    };
    if (trackLink) {
        trackLink.addEventListener("click", redirectTostatusTracker);
        //console.log("Attached event listener");
    }
});
console.log("Javascript loaded on:", window.location.pathname);
document.addEventListener("DOMContentLoaded", () => {
    const homeLink = document.getElementById("consultLink");
    console.log(homeLink);
    const redirectToDashBoard = () => {
        console.log("Successful Trigger");
        window.location.href = "/appointment_maker";
    };
    if (homeLink) {
        homeLink.addEventListener("click", redirectToDashBoard);
        //console.log("Attached event listener");
    }
});