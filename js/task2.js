const cars = data;
console.log(cars);

function display(){

    const container = document.getElementById("card-container");
    container.innerHTML="";

    cars.forEach(car => {
        const div = document.createElement("div");
        div.classList.add("col");
        div.innerHTML=`
    
        <div class="card h-100">
            <img src="${car.imageURL}" class="card-img-top" alt="car image">
            <div class="card-body">
                <h5 class="card-title">Car Name: ${car.name}</h5>
                <p class="card-text">
                    <strong> Car Details:  </strong> ${car.description}
                </p>
                <button class="btn btn-primary"> Price: ${car.price}</button>
            </div>
        </div>
        `;
        container.appendChild(div);
    });

}



function displayTwo(num){

    const container = document.getElementById("card-container");
    container.innerHTML="";

    for(let i=0; i<num; i++){     
        const div = document.createElement("div");
        div.classList.add("col");
        div.innerHTML=`
    
        <div class="card h-100">
            <img src="${cars[i].imageURL}" class="card-img-top" alt="car image">
            <div class="card-body">
                <h5 class="card-title">Car Name: ${cars[i].name}</h5>
                <p class="card-text">
                    <strong> Car Details:  </strong> ${cars[i].description}
                </p>
                <button class="btn btn-primary"> Price: ${cars[i].price}</button>
            </div>
        </div>
        `;
        container.appendChild(div);
    }

}

displayTwo(2);