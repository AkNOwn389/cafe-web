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
                  <img data-src="${item.imageSrc}" src="https://fakeimg.pl/300x400" alt="${item.name}" class="lazy-image loading"/>
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
            const lazyImgs = document.querySelectorAll('.lazy-image');
            const observer = new IntersectionObserver(
                  (entries, observer) => {
                        entries.forEach((entry) => {
                              if (entry.isIntersecting) {
                                    let img = entry.target;
                                    img.src = img.dataset.src;
                                    img.classList.remove('loading');
                                    img.classList.add('loaded');
                                    observer.unobserve(img);
                              }
                        });
                  }
            );

            lazyImgs.forEach((img) => {
                  console.log(img.classList);
                  observer.observe(img);
            });
      }
      fetchMenuData();
};