document.addEventListener("DOMContentLoaded", () => {
    const AnswerQuerryButton = document.getElementById("AnswerQuery");
    console.log("Succesfull load of js dom");
    const redirectToPage = () => {
        console.log("Successful Trigger");
        window.location.href = "/queryAddresalPage";
    };
    if (AnswerQuerryButton) {
        AnswerQuerryButton.addEventListener("click", redirectToPage);
        //console.log("Attached event listener");
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const AcceptButton = document.getElementById("ApproveAppointment");
    //console.log("Succesfull load of js dom");
    const redirectToPage = () => {
        //console.log("Successful Trigger");
        window.location.href = "/appointmentApprovalPage";
    };
    if (AcceptButton) {
        AcceptButton.addEventListener("click", redirectToPage);
        //console.log("Attached event listener");
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const RejectButton = document.getElementById("RejectAppointment");
    //console.log("Succesfull load of js dom");
    const clearAppointments = () => {
        //console.log("Successful Trigger");
        
    };
    if (RejectButton) {
        RejectButton.addEventListener("click", clearAppointments);
        //console.log("Attached event listener");
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const IgnoreQuery = document.getElementById("IgnoreQuery");
    //console.log("Succesfull load of js dom");
    const redirectToPage = () => {
        //console.log("Successful Trigger");
        document.getElementById("queryNumber").innerText = "0";
        document.getElementById("queryImage").src = "./nonewqueries.jpeg";
    };
    if (IgnoreQuery) {
        IgnoreQuery.addEventListener("click", redirectToPage);
        //console.log("Attached event listener");
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const updateButton = document.getElementById("AnswerQuery");
    //console.log("Succesfull load of js dom");
    const redirectToPage = () => {
        //console.log("Successful Trigger");
        window.location.href = "/queryAddresalPage";
    };
    if (redirectButton) {
        redirectButton.addEventListener("click", redirectToPage);
        //console.log("Attached event listener");
    }
});
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('logoutButton')?.addEventListener('click', async () => {
        try {
            const response = await fetch('/logout', { method: 'POST' });
            if (response.ok) {
                //res.session.destroy();                    
                console.log('Logged out successfully');
                window.location.href = '/';
            } else {
                console.error('Failed to logout');
                alert('An error occurred while logging out.');
            }
        } catch (error) {
            console.error('Logout error:', error);
            alert('An unexpected error occurred. Please try again.');
        }
    });
});