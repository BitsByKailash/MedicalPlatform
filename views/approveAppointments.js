document.addEventListener("DOMContentLoaded", function () {
    const forms = document.querySelectorAll("form[action='/appointments/update']");

    forms.forEach(form => {
      form.addEventListener("submit", function (e) {
        const action = form.querySelector("input[name='action']").value;
        const confirmMsg = action === "approve"
          ? "Are you sure you want to approve this appointment?"
          : "Are you sure you want to reject this appointment?";

        if (!confirm(confirmMsg)) {
          e.preventDefault(); // Cancel submission
        }

        // Disable button after click
        const button = form.querySelector("button[type='submit']");
        button.disabled = true;
        button.textContent = action === "approve" ? "Approving..." : "Rejecting...";
      });
    });
  });

