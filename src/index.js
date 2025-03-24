document.addEventListener("DOMContentLoaded", () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const imgContainer = document.getElementById("dog-image-container");
    const breedList = document.getElementById("dog-breeds");
    const breedDropdown = document.getElementById("breed-dropdown");

   s
    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            data.message.forEach(imgUrl => {
                let img = document.createElement("img");
                img.src = imgUrl;
                img.style.width = "200px";
                img.style.margin = "10px";
                imgContainer.appendChild(img);
            });
        });

   
    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            let breeds = Object.keys(data.message);
            renderBreeds(breeds);
        });

    function renderBreeds(breeds) {
        breedList.innerHTML = "";
        breeds.forEach(breed => {
            let li = document.createElement("li");
            li.textContent = breed;
            li.style.cursor = "pointer";
            li.addEventListener("click", () => {
                li.style.color = "blue";
            });
            breedList.appendChild(li);
        });
    }

   
    breedDropdown.addEventListener("change", (event) => {
        let selectedLetter = event.target.value;
        fetch(breedUrl)
            .then(response => response.json())
            .then(data => {
                let breeds = Object.keys(data.message);
                let filteredBreeds = breeds.filter(breed => breed.startsWith(selectedLetter));
                renderBreeds(filteredBreeds);
            });
    });
});
