document.getElementById("appointmentForm").addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const formData = new FormData(event.target);
    const appointmentData = Object.fromEntries(formData.entries());
    
    try {
        // Send appointment data to the server
        const response = await fetch("/bookAppointment", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(appointmentData)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }``

        const result = await response.json();
        alert(result.message); // Show success message

        // Optionally, redirect or update the UI
        window.location.href = '/patient_dashboard'; // Redirect to patient dashboard
    } catch (error) {
        console.error('Error booking appointment:', error);
        alert('Failed to book appointment. Please try again.');
    }
});

