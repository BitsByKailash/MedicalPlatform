document.addEventListener("DOMContentLoaded", () => {
    const submitButton = document.getElementsByClassName("btn btn-success");
    const doctorSaidTextarea = document.getElementsByClassName("form-control DoctorSaid");
    console.log(submitButton, doctorSaidTextarea);
    for(let i=0; i<submitButton.length; i++)
    {
        
        const button = submitButton[i];
        
        button.addEventListener("click", async () => {
        const doctorResponse = doctorSaidTextarea[i].value;
        const queryID = i+9;
        console.log(doctorResponse, button);
        console.log(queryID);
        try {
            const res = await fetch("/submitDoctorQuery", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    response: doctorResponse,
                    queryId: queryID,
                }),
            });
        
            if (!res.ok) {
                const errorData = await res.json().catch(() => ({})); // fallback for non-JSON
                alert(errorData.error || "An unexpected error occurred.");
                return;
            }
        
            const result = await res.json(); // safe to parse now
            console.log(result);
            console.log("Does result.message exist?", Boolean(result.message));
            if (result.message) {
                //submitButton.remove();
                //doctorSaidTextarea.remove();
                button.remove();
                doctorSaidTextarea[i].remove();
                alert("Successfully submitted the response.");
                const resolvedMessage = document.createElement("b");
                resolvedMessage.textContent = "Query Resolved";
                document.body.appendChild(resolvedMessage);
            } else {
                alert(result.error || "Unknown error.");
            }
        
        } catch (error) {
            alert("Failed to submit the query. Please try again later.");
            console.error("Submission error:", error);
        }
        
    });
}
});
document.addEventListener("DOMContentLoaded", () => {
    const dashboardButton = document.getElementById("dashboardButton");
    dashboardButton.addEventListener("click", () => {
        window.location.href = "/doctor_dashboard";
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const logoutButton = document.getElementById("logoutButton");
    logoutButton.addEventListener("click", () => {
        fetch("/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => {
            if (response.ok) {
                window.location.href = "/"; // Redirect to login page
            } else {
                alert("Failed to log out. Please try again.");
            }
        })
        .catch((error) => {
            console.error("Logout error:", error);
            alert("An error occurred while logging out. Please try again.");
        });
    });
});
