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
            <h5 class="card-title">Name: ${phoneData.phone_name}</h5>
            <h6>Brand: ${phoneData.brand}</h6>
            <div>
            <button onclick="loadPhoneName('${phoneData.phone_name}')" type="button" class="btn btn-primary">Show Details</button>
            
            </div>

          </div>
        </div>
      </div>
        `;
        searchResult.appendChild(div);

    })
}

const loadPhoneName = iphone=>{

    const url =`https://openapi.programming-hero.com/api/phones?search=${iphone}`;
    console.log(url);

    fetch(url)
        .then(response => response.json())
        .then(data => displayphoneDetail(data.data[0]));


}

const displayphoneDetail = phone =>{
    const countryDiv = document.getElementById('phone-detail');
    countryDiv.innerHTML=`

    <h2></h2>
    <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
        <div class="col-md-4">
        <img src="${phone.image}" class="img-fluid rounded-start" alt="...">
        </div>
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text"> ${phone.brand}</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
    </div>
    </div>
    </div>
    
    `
    console.log(phone);
}

