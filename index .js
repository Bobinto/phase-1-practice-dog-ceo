document.addEventListener("DOMContentLoaded", () => {
    const breedsUrl = "https://dog.ceo/api/breeds/list/all";
    const breedsList = document.getElementById("breeds-list");
  
    
    function fetchAndPopulateBreeds() {
      fetch(breedsUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          Object.keys(data.message).forEach(breed => {
            const breedItem = document.createElement("li");
            breedItem.textContent = breed;
            breedsList.appendChild(breedItem);
          });
        })
        .catch(error => {
          console.error('There was a problem fetching the dog breeds:', error);
        });
    }
  
   
    fetchAndPopulateBreeds();
  
    
    const filterDropdown = document.getElementById("filter-dropdown");
    filterDropdown.addEventListener("change", () => {
      const selectedLetter = filterDropdown.value;
      const breedItems = breedsList.getElementsByTagName("li");
      Array.from(breedItems).forEach(breedItem => {
        if (breedItem.textContent.startsWith(selectedLetter)) {
          breedItem.style.display = "block";
        } else {
          breedItem.style.display = "none"; 
        }
      });
    });
  });
  