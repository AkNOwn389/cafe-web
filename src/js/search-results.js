export function SearchEngine() {
      const searchButton = document.querySelector('.input-text-bar');
      const resultsContainer = document.querySelector('.result-container');
      const resultTitle = document.querySelector('.result-title-text');
      const resultSection = document.querySelector('.search-results');

      searchButton.addEventListener('input', handleSearch)

      function handleSearch() {
            fetch('json/menu.json')
                  .then((response) => {
                        if (!response.ok) {
                              throw new Error('Network response was not ok');
                        }
                        return response.json();
                  })
                  .then((jsonData) => {
                        // Gamitin ang jsonData para sa iyong logic
                        const searchTerm = searchButton.value.toLowerCase();
                        if(searchTerm === ''){
                              resultTitle.style.display = 'none';
                              resultsContainer.innerHTML = ``;
                              resultSection.style.display = 'none';
                              return;
                        };
                        resultSection.style.display = 'flex';
                        const results = jsonData.filter(item => item.name.toLowerCase().includes(searchTerm));
                        // Clear the previous results
                        resultsContainer.innerHTML = '';
                        if(results.length === 0){
                              resultTitle.style.display = 'flex';
                              resultTitle.textContent = 'No result found';
                              return;
                        };
                        // Display the search results
                        resultTitle.style.display = 'flex';
                        resultTitle.textContent = `${results.length} Result found`;
                        results.forEach(item => {
                              const resultItem = document.createElement('div');
                              resultItem.className = 'search-items';

                              resultItem.innerHTML = `
                              <div class="menu-items-image-container">
                              <img class="Lazy" src="${item.imageSrc}" alt="${item.name}"/>
                              </div>
                              <div class="item-description-container">
                              <h3 class="menu-item-name">${item.name}</h3>
                              <p class="menu-item-description">${item.description}</p>
                              <h3 class="menu-item-price">Price</h3>
                              <h4 class="menu-item-price-text">${item.price}</h4>
                              <button class="menu-item-buy-now Button">Order now</button>
                              </div>
                              `;

                              resultsContainer.appendChild(resultItem);
                              window.location.href="#searchs-results";
                              searchButton.focus();
                        });

                  })
                  .catch((error) => {
                        console.error('Error fetching JSON data:', error);
                  });



      };
};