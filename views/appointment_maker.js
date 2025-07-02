  // Initialize date picker
  flatpickr("#date", {
    dateFormat: "Y-m-d",
    altInput: true,
    altFormat: "F j, Y"
  });

  // Initialize time picker
  flatpickr("#time", {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    time_24hr: false,
    altInput: true,
    altFormat: "h:i K"
  });

  // Handle appointment form submission
  document.getElementById("submitButton").addEventListener("click", async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Extract values manually since name and phone are in <div> tags
    const patientname = document.getElementById("nameDisplay").innerText.trim();
    const phoneno = document.getElementById("phoneDisplay").innerText.trim();
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const doctorId = "<%= doctorId %>"; // Server-side rendered doctorId

    // Validate
    if (!patientname || !phoneno || !date || !time) {
      alert("All fields are required.");
      return;
    }

    const appointmentData = {
      doctorId,
      name: patientname,
      phone: phoneno,
      date,
      time
    };

    try {
      const response = await fetch("/bookAppointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(appointmentData)
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      alert(result.message);

      // Redirect to patient dashboard
      window.location.href = "/patient_dashboard";
    } catch (error) {
      console.error("Error booking appointment:", error);
      alert("Failed to book appointment. Please try again.");
    }
  });
