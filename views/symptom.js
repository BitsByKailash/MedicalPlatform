document.addEventListener('DOMContentLoaded', function () {
    const textarea = document.getElementById('voiceTextarea');
    const micButton = document.getElementById('micButton');
  
    if (!window.SpeechRecognition && !window.webkitSpeechRecognition) {
      alert('Your browser does not support Speech Recognition. Try using Chrome or Edge.');
      return;
    }
  
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
  
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = 'en-US';
  
    micButton.addEventListener('click', () => {
      if (micButton.textContent.includes('Start')) {
        recognition.start();
        micButton.textContent = '🛑 Stop Voice Input';
      } else {
        recognition.stop();
        micButton.textContent = '🎙 Start Voice Input';
      }
    });
  
    recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map(result => result[0].transcript)
        .join('');
      textarea.value = transcript;
    };
  
    recognition.onerror = (event) => {
      alert(`Error occurred: ${event.error}`);
    };
  
    recognition.onend = () => {
      micButton.textContent = '🎙 Start Voice Input';
    };
  });

  console.log("Javascript loaded on:", window.location.pathname);
  document.addEventListener("DOMContentLoaded", () => {
      const submitButton = document.getElementById("submitButton");
      console.log(submitButton);
      if (submitButton) {
          submitButton.addEventListener("click", async function (event){
            event.preventDefault();
            console.log("Submitting form via Javascript.........");
            const userQuery = document.getElementById("voiceTextarea").value;
            if (userQuery.trim() === "") {
                alert("Please enter a valid review before submitting.");
                return;
            }
            const response = await fetch("/responsewnidow", {
                method: "POST",
               headers: {
                "Content-Type": "application/json",
               } ,
               body: JSON.stringify({"userQuery": `${userQuery}`})
            });
            const result = await response.json();
            if (result.redirect) {
                window.location.href = result.redirect;
            }
          });
          //console.log("Attached event listener");
      }
  });
  console.log("Javascript loaded on:", window.location.pathname);
  document.addEventListener("DOMContentLoaded", () => {
      const homeLink = document.getElementById("homeLink");
      console.log(homeLink);
      const redirectToDashBoard = () => {
          console.log("Successful Trigger");
          window.location.href = "/patient_dashboard";
      };
      if (homeLink) {
          homeLink.addEventListener("click", redirectToDashBoard);
          //console.log("Attached event listener");
      }
  });
  for (let index = 0; index < 9; index++) {
    const element = document.getElementById(`sympt`);
    
  }