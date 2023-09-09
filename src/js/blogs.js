export function displayBlogs() {
      function fetchMenuData() {
            return fetch('./json/blog-and-news.json')
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
            const gridContainer = document.querySelector('.blogsAndNews-container');

            menuData.forEach((item) => {
                  const menuItem = document.createElement('div');
                  menuItem.className = 'swiper-slide box';

                  menuItem.innerHTML = `
                  <div class="blogs-image-container">
                  <img class="Lazy" src="${item.imageSrc}" alt="${item.name}"/>
                  </div>
                  <div class="description-container">
                  <h3 class="blog-item-title">${item.name}</h3>
                  <p class="blog-item-description">${item.description}</p>
                  <button class="blog-item-watch-button Button">
                  Watch
                  </button>
                  </div>
                  `;

                  gridContainer.appendChild(menuItem);
            });
      }
      fetchMenuData();
};