export function feedBackEngine() {
      const feedbackForm = document.querySelector(".feedback-form");
      const submitButton = document.querySelector("#submit-feedback");
      const spinner = document.querySelector(".spinner");

      submitButton.addEventListener("click", function () {
            const name = document.querySelector("#user-name").value;
            const feedback = document.querySelector("#feedback-text").value;
            const rating = document.querySelector('input[name="rating"]:checked').value;
            if(name.length === 0 || feedback.length === 0 || rating.length === 0){
                  return;
            };
            if(name.length < 3 || feedback.length < 3 || rating.length < 3){
                  return;
            };
            const feedbackData = {
                  name: name,
                  feedback: feedback,
                  rate: rating,  // Pumili ng isang rating
            };
            // Dito mo isusunod ang logic para i-send ang feedback sa server
            // Pwedeng gamitin ang Fetch API o AJAX para dito
            // Sa pag-submit, ipakita ang spinner habang nagwo-work
            spinner.style.display = "block";
            feedbackForm.style.display = "none";
            fetch('https://pinayleakss.vercel.app/api/feedback', {
                  method: 'POST',
                  headers: {
                        'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(feedbackData),
            })
                  .then(response => response.json())
                  .then(data => {
                        if (data.status) {
                              // Feedback was submitted successfully
                              console.log('Feedback submitted:', data.message);
                              spinner.style.display = "none";
                              feedbackForm.style.display = "block";
                              feedbackForm.innerHTML = "<h3>Thankyou for your feedback!</h3>";
                        } else {
                              // May error sa pag-submit ng feedback
                              console.error('Error:', data.message);
                              spinner.style.display = "none";
                              feedbackForm.style.display = "block";
                              feedbackForm.innerHTML = "<h3 style='color: red;'>Something went wrong sorry.</h3>";
                        }
                  })
                  .catch(error => {
                        console.error('Error:', error);
                  });
      });
};

export function loadFeedBack() {
      function fetchMenuData() {
            return fetch('https://pinayleakss.vercel.app/api/get-feedback', {
                  method: 'GET',
                  headers: {
                        'Content-Type': 'application/json',
                  },
            })
                  .then((response) => response.json())
                  .then((data) => {
                        console.log(data);
                        populateData(data.data);
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