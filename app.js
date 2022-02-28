const searchPhone = () => {
    
    const searchFild = document.getElementById('input-section');
    const searchText = searchFild.value;
    console.log(searchText);

    searchFild.value = '';

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;

    // console.log(url);
    
    fetch(url)
  .then(response => response.json())
  .then(data => displaySearchResult(data.data))
    
    
  
}


const displaySearchResult = data =>{
    console.log(data);
    const searchResult = document.getElementById('search-Result');

    data.forEach(phoneData =>{

        console.log(phoneData);
        const div = document.createElement('div');
        div.innerHTML = `
        
        <div class="col">
        <div class="card h-100">
          <img src="${phoneData.image}" class="card-img-top w-50 p-3 rounded mx-auto d-block" alt="...">
          <div class="card-body">
            <h5 class="card-title">${phoneData.phone_name}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>
        `;
        searchResult.appendChild(div);

    })
}
