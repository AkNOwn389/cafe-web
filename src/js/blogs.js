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
            const gridContainer = document.querySelector('.blogsAndNews-grid-container');

            menuData.forEach((item) => {
                  const menuItem = document.createElement('div');
                  menuItem.className = 'blogs-menu-items';

                  menuItem.innerHTML = `
                <div class="menu-items-image-container">
                  <img src="${item.imageSrc}" alt="${item.name}" class="menu-image">
                </div>
                <div class="blog-item-description-container">
                  <h3 class="blog-item-name">${item.name}</h3>
                  <p class="blog-item-description">${item.description}</p>
                  <button class="blogs-item Button">Watch</button>
                </div>
              `;

                  gridContainer.appendChild(menuItem);
            });
      }
      fetchMenuData();
};