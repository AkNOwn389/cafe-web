export function displayedBestMenu() {
      function fetchMenuData() {
            return fetch('./json/best-menu.json')
                  .then((response) => response.json())
                  .then((data) => {
                        // Call a function to populate the grid with the data
                        populateGrid(data);
                  })
                  .catch((error) => {
                        console.error('Error fetching menu data:', error);
                  });
      }

      function populateGrid(menuData) {
            const gridContainer = document.querySelector('.best-menu-grid-container');

            menuData.forEach((item) => {
                  const menuItem = document.createElement('div');
                  menuItem.className = 'menu-items';

                  menuItem.innerHTML = `
                <div class="menu-items-image-container">
                  <img src="https://fakeimg.pl/200x300" data-src="${item.imageSrc}" alt="${item.name}" class="menu-image lazy loading"/>
                </div>
                <div class="item-description-container">
                  <h3 class="menu-item-name">${item.name}</h3>
                  <p class="menu-item-description">${item.description}</p>
                  <h3 class="menu-item-price">Price</h3>
                  <h4 class="menu-item-price-text">${item.price}</h4>
                  <button class="menu-item-buy-now Button">Order now</button>
                </div>
              `;

                  gridContainer.appendChild(menuItem);
            });
      }
      fetchMenuData();
};