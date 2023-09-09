export function searchBarOpener(){
      const searchBarContainer = document.querySelector('.search-input-bar');
      const searchBar = document.querySelector('.search-icon');
      const searchButton = document.querySelector('.input-text-bar');

      let isMenuBarOpen = false;

      searchBar.addEventListener('click', () => {
            if(!isMenuBarOpen){
                  searchBarContainer.classList.add('search-input-bar-open');
                  searchBarContainer.classList.remove('.search-input-bar-close');
                  searchButton.focus();
                  
            }else{
                  searchBarContainer.classList.remove('search-input-bar-open');
                  searchBarContainer.classList.add('.search-input-bar-close');
            };
            isMenuBarOpen = !isMenuBarOpen;
      });

};



