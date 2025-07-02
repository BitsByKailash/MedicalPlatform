console.log("Javascript loaded on:", window.location.pathname);
document.addEventListener("DOMContentLoaded", () => {
    const trackButton = document.getElementsByClassName("btn-modern track-button");
    console.log(trackButton[0]);
    const redirectToStatusTracker = () => {
        console.log("Successful Trigger");
        window.location.href = "/status_Tracker";
    };
    if (trackButton) {
        trackButton[0].addEventListener("click", redirectToStatusTracker);
        //console.log("Attached event listener");
    }
});
console.log("Javascript loaded on:", window.location.pathname);
document.addEventListener("DOMContentLoaded", () => {
    const appointmrntButton = document.getElementsByClassName("btn-modern appointment-button");
    console.log(appointmrntButton[0]);
    const redirectTomatchMaker = () => {
        console.log("Successful Trigger");
        window.location.href = "/appointment_maker";
    };
    if (appointmrntButton) {
        appointmrntButton[0].addEventListener("click", redirectTomatchMaker);
        //console.log("Attached event listener");
    }
});
console.log("Javascript loaded on:", window.location.pathname);
document.addEventListener("DOMContentLoaded", () => {
    const symptomButton = document.getElementsByClassName("btn-modern symptom-button");
    console.log(symptomButton[0]);
    const redirectToSymptomDescriber = () => {
        console.log("Successful Trigger");
        window.location.href = "/symptom_describer";
    };
    if (symptomButton) {
        symptomButton[0].addEventListener("click", redirectToSymptomDescriber);
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