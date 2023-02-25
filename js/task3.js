const loadData=(res)=>{
    fetch(`https://restcountries.com/v3.1/region/${res}`)
    .then(res => res.json())
    .then(data=> displayData(data))
    .catch(ex=>{
        console.log(ex);
    })
}

const displayData=(data)=>{
    const container = document.getElementById("card-container");
    data.forEach(country => {
        console.log(country);
        const div = document.createElement("div");
        div.classList.add("col");
        div.innerHTML=`
            <div class="card h-100">
                <img src="${country.flags.png}" class="card-img-top h-50" alt="...">
                <div class="card-body h-50 my-auto">
                    <div class="">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        </p>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(div);
    });

}

document.getElementById("select").addEventListener("click",(event)=>{
    const res = event.target.value;
    loadData(res);
});

