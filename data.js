 function saveEmail() {
      let email = document.getElementById("emailInput").value;
      localStorage.setItem("userEmail", email); // stores in browser
      alert("Email saved locally: " + email);}