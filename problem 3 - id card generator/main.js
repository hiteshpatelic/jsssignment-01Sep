
function generatId (e){
    
    e.preventDefault();
    clearOldData();
    const getAllInput = document.querySelectorAll('input');
    const generetedCard = document.getElementsByClassName('studentInfo')[0];
    const prifilePicture = document.getElementsByClassName('profilePicture')[0];

    const createNane = document.createElement('h2');
    createNane.innerHTML = `Name: <b>${getAllInput[0].value}</b>`;

    const createCollageNane = document.createElement('h2');
    createCollageNane.innerHTML = `Collage Name: <b>${getAllInput[1].value}</b>`
    
    const createLocation = document.createElement('h2');
    createLocation.innerHTML = `Location: <b>${getAllInput[2].value}</b>`
    
    const createPicture = document.createElement('img');
    createPicture.setAttribute("src", getAllInput[3].value )
    prifilePicture.append(createPicture)

    generetedCard.append(createNane, createCollageNane, createLocation)
    document.getElementsByClassName('idCardView')[0].classList.remove("block") 
}


function clearOldData(){
    const generetedCard = document.getElementsByClassName('studentInfo')[0];
    const prifilePicture = document.getElementsByClassName('profilePicture')[0];
    console.log(generetedCard.childNodes, prifilePicture)
    
}