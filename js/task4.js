const spinner=(isloading)=>{
    const container = document.getElementById("spinner");
    if(isloading){
        container.classList.remove("d-none");
    }
    else{
        container.classList.add("d-none");
    }
}

const loadData= async()=>{
    try{
        spinner(true);
        const url = `https://api.adviceslip.com/advice`;
        const res =await fetch(url);
        const data =await res.json();
        displayData(data.slip);
    }
    catch(ex){
        console.log(ex);
    }
}

const displayData=(data)=>{
    const id = data.id;
    document.getElementById("advice-id").innerText=id;

    const advice = data.advice;
    document.getElementById("advice-details").innerText=advice;
    spinner(false);
}

loadData();

