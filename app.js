let busObject ={
    vehicle: 'Bus',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60 ',
    farePerKilo: 3,
    // farePerKilo means price per kilometer travel
    capacity: 35,
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem sint tempora saepe dolores amet quisquam recusandae, pariatur possimus blanditiis perferendis.'
}
let carObject ={
    vehicle: 'Car',
    imageUrl: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    farePerKilo: 8,
    // farePerKilo means price per kilometer travel
    capacity: 4,
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem sint tempora saepe dolores amet quisquam recusandae, pariatur possimus blanditiis perferendis.'
}
let bikeObject ={
    vehicle: 'Bike',
    imageUrl: 'https://images.unsplash.com/photo-1515777315835-281b94c9589f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW90b3JiaWtlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    farePerKilo: 5,
    // farePerKilo means price per kilometer travel
    capacity: 2,
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem sint tempora saepe dolores amet quisquam recusandae, pariatur possimus blanditiis perferendis.'
}


function displayService(service){

const mainSection = document.getElementById('main-section');
let stringified = JSON.stringify(service);
const div = document.createElement('div');

div.innerHTML = `
<div class="card mx-auto my-5" style="max-width: 800px;">
        <div class="row g-2">
          <div class="col-md-5">
            <img src="${service.imageUrl}" class="img-fluid rounded-start h-100" alt="">
            
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <h5 class="card-title">Transport Mood: ${service.vehicle}</h5>
              <p class="card-text">${service.description}</p>
              <p class="card-text"><small class="text-muted px-3">Fare per kilo $${service.farePerKilo}</small><small class="text-muted px-3">Capacity ${service.capacity} person</small></p>
              <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary " onclick = 'handleBooking(${stringified})'        data-bs-toggle="modal" data-bs-target="#exampleModal">
            BOOK NOW
    </button>
            </div>

          </div>
        </div>
      </div>
      

`

mainSection.appendChild(div)

}

displayService(carObject);
displayService(busObject);
displayService(bikeObject);

// handle booking info

function handleBooking(object){
  
  let stringified = JSON.stringify(object);
    console.log(object);
let modalHeading = document.getElementById('exampleModalLabel');
modalHeading.innerText = object.vehicle;


let modalBody = document.getElementById('modalBody');
modalBody.innerHTML =`
<div class="card mx-auto" style="width: 25rem;">
  <img src=${object.imageUrl} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Vehicle Mood : ${object.vehicle}</h5>
    <p class="card-text"> ${object.description}</p>
    <p class="card-text"><small class="text-muted px-3">Fare per kilo: $${object.farePerKilo}</small><small class="text-muted px-3">Capacity: ${object.capacity} person</small></p>
    <div class="d-flex flex-column gap-3" role="search">
              <input class="form-control " type="search" placeholder="Search" aria-label="Search">
              <input class="form-control " type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" onclick ="calculateCost(${stringified})" type="submit">Submit</button>
            </div
            
  </div>
</div>
`

    }


    let calculateCost = (costing) =>{
console.log(costing.farePerKilo);
    }