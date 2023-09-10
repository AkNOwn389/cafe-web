export function feedBackEngine() {
      const feedbackForm = document.querySelector(".feedback-form");
      const submitButton = document.querySelector("#submit-feedback");
      const spinner = document.querySelector(".spinner");

      submitButton.addEventListener("click", function () {
            const name = document.querySelector("#name").value;
            const feedback = document.querySelector("#feedback").value;
            const rating = document.querySelector('input[name="rating"]:checked').value;

            const feedbackData = {
                  name: name,
                  feedback_text: feedback,
                  rating: rating,  // Pumili ng isang rating
            };
            // Dito mo isusunod ang logic para i-send ang feedback sa server
            // Pwedeng gamitin ang Fetch API o AJAX para dito
            // Sa pag-submit, ipakita ang spinner habang nagwo-work
            spinner.style.display = "block";
            feedbackForm.style.display = "none";
            // fetch('https://shop-project-one.vercel.app/api/feedback/', {
            //       method: 'POST',
            //       headers: {
            //             'Content-Type': 'application/json',
            //             'X-CSRFToken': csrf_token,  // Maaari mong kunin mula sa template
            //       },
            //       body: JSON.stringify(feedbackData),
            // })
            //       .then(response => response.json())
            //       .then(data => {
            //             if (data.status) {
            //                   // Feedback was submitted successfully
            //                   console.log('Feedback submitted:', data.message);
            //             } else {
            //                   // May error sa pag-submit ng feedback
            //                   console.error('Error:', data.message);
            //             }
            //       })
            //       .catch(error => {
            //             console.error('Error:', error);
            //       });
            // Pagkatapos ng pag-submit, puwede mong itago ang spinner at magpakita ng mensahe na "Thank you for your feedback!"
            setTimeout(function () {
                  spinner.style.display = "none";
                  feedbackForm.style.display = "block";
                  feedbackForm.innerHTML = "<h3>Thankyou for your feedback!</h3>";
            }, 2000); // I-adjust ang oras ng pagtatapos base sa iyong preference
      });
};

export function loadFeedBack() {
      function fetchMenuData() {
            return fetch('./json/feedback.json')
                  .then((response) => response.json())
                  .then((data) => {
                        // Call a function to populate the grid with the data
                        populateData(data);
                  })
                  .catch((error) => {
                        console.error('Error fetching menu data:', error);
                  });
      };

      function populateData(menuData) {
            const gridContainer = document.querySelector('.customer-feedback-wrapper');

            menuData.forEach((item) => {
                  const menuItem = document.createElement('div');
                  menuItem.className = 'user-feed-box swiper-slide';

                  menuItem.innerHTML = `
                        <h3 class="user-name">${item.name}</h3>
                        <div class="rate-container">
                              <h3>Rates:</h3>
                              <h3 class="user-rate">${item.rate}</h3>
                        </div>
                        <p class="user-feedback">${item.feedback}</p>
                  `;

                  gridContainer.appendChild(menuItem);
            });
      };

      fetchMenuData();
};