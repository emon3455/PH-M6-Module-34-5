const spinner=(isloading)=>{
    const container = document.getElementById("spinner");
    if(isloading){
        container.classList.remove("d-none");
    }
    else{
        container.classList.add("d-none");
    }
}

const loadData=(res)=>{
    spinner(true);
    const url =`https://api.dictionaryapi.dev/api/v2/entries/en/${res}`;
    fetch(url)
    .then(res=> res.json())
    .then(data=>displayData(data[0]))
    .catch(ex=>{
        console.log(ex);
    })
}

const displayData=(data)=>{
    console.log();
    const container=document.getElementById("display-container");
    container.innerHTML=`
        <h2>${data.word}</h2>
        <h5 class="text-primary">${data.phonetic}</h5>
        <hr>
        <h5>${data.meanings[0].partOfSpeech}</h5>
        <h5>Meaning:</h5>
        <p>
           ${data.meanings[0].definitions[0].definition}
           ${data.meanings[0].definitions[1].definition}
           ${data.meanings[0].definitions[2].definition}
        </p>
        <p> <strong>Synonyms:</strong> ${data.meanings[0].synonyms[0]} </p>
        <hr>

    `;
    spinner(false);
}

document.getElementById("search-btn").addEventListener("click",()=>{
    const result = document.getElementById("input-field").value;
    loadData(result);
})

// loadData();