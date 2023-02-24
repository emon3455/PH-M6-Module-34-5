const user = person.result;

// console.log(person.message);
document.getElementById("section-header").innerText = person.message;

user.forEach(element => {
   
    const container = document.getElementById("card-container");
    console.log();
    const div = document.createElement("div");
    div.classList.add("col");

    div.innerHTML=`
        <div class="card">

            <div class="card-header">
                ${element.name.common}
            </div>

            <div class="card-body">
                <p class="card-text"> <span>Age:  ${element.age}</span></p>
                <p class="card-text"> <span>Street: </span> ${element.address.street}  <span>House No: </span> ${element.address.house}</p>
            </div>

        </div>
    `; 
    container.appendChild(div);   
});