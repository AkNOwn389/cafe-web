export function feedBackEngine() {
      const feedbackForm = document.querySelector(".feedback-form");
      const submitButton = document.querySelector("#submit-feedback");
      const spinner = document.querySelector(".spinner");

      submitButton.addEventListener("click", function () {
            const name = document.querySelector("#name").value;
            const feedback = document.querySelector("#feedback").value;
            const rating = document.querySelector('input[name="rating"]:checked').value;

            // Dito mo isusunod ang logic para i-send ang feedback sa server
            // Pwedeng gamitin ang Fetch API o AJAX para dito

            // Sa pag-submit, ipakita ang spinner habang nagwo-work
            spinner.style.display = "block";
            feedbackForm.style.display = "none";

            // Pagkatapos ng pag-submit, puwede mong itago ang spinner at magpakita ng mensahe na "Thank you for your feedback!"
            setTimeout(function () {
                  spinner.style.display = "none";
                  feedbackForm.innerHTML = "<h2>Salamat sa iyong feedback!</h2>";
            }, 2000); // I-adjust ang oras ng pagtatapos base sa iyong preference
      });
};