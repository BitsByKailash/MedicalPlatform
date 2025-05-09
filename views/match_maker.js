document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn");
    console.log(buttons);
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            console.log("Redirecting to appointment page...");
            const doctorId = button.getAttribute('data-doctor-id');
            if (doctorId) {
                window.location.href = `/getAppt?doctorId=${doctorId}`; // Redirect to appointment page with doctor ID
            } else {
                console.error("Doctor ID not found on button.");
            }
        });
    });
});