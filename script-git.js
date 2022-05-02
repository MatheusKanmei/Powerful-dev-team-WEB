const form = document.querySelector(".form");
const devs = document.querySelector(".devs");
const user_input = document.querySelector(".user-input");

form.addEventListener('submit', e => {
    e.preventDefault();
    consultar();
});

async function trataDados(){
    try{

    let user = await fetch(`https://api.github.com/users/${user_input.value}`)
    .then(response => response.json());
    //JSON.stringify(user);

    console.log(user);

    return {
        name: user.name, 
        avatar_url: user.avatar_url,
        followers: user.followers,
        public_gists: user.public_gists
    }
    } catch(e){
        return "Não foi possível concluir a busca"
    }
}

async function consultar() {
    const user_github = document.querySelector(".user-github");
    userData = await trataDados();
    console.log(userData)
    user_github.innerHTML =
    `   <h2 class="h2-user-github"> ${userData.name} </h2>
        <img class="avatar-photo" src=${userData.avatar_url}>  </img>
        <div class="user-github-info">
            <img class="followers-icon" src="https://static.thenounproject.com/png/410373-200.png"></img>
            <span>${userData.followers} Followers</span>
            <img class="gist-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAAEDCAMAAABQ/CumAAAAbFBMVEX///8AAADZ2dn7+/tOTk6Dg4NnZ2eqqqpubm78/PxycnJ7e3uAgICGhob4+PhTU1OXl5ff399ZWVm4uLhcXFydnZ2VlZVPT093d3ezs7MrKyvT09Pp6emioqINDQ28vLwzMzM6OjrLy8soKCjbawFpAAAE2ElEQVR4nO3d61LiQBCG4SCgqIBKlKOCuPd/j7vgCZJ0kj4xndrv/bmVyDy1SALMjFmGEEIIIYQQukz98NWN/nU1Hs0Wg+AtZqPx6rVq/Lf5rNehZvltUfCxTz0obvuPc8Ek9YAkTU6fRM+pRyNr9vur/ZB6LNJm34K71CORt/wU7FKPQ9PuSEg9Cl0HwVvqQeh66/x/wuG/YZN6CNo2XX8eHZ5JHb2q/fac/Uk9BG3rbJt6CNq2pRek+U3w5sURlwhPdW+KIvTUSLhKPcSmrkAIEAgRAiFCIEQIhAiBECEQIgRChECIEAgRAiFCIEQIhAiBECEQIgRChECIEAgRAiFCIEQIhAiBECEQIuRG6A9WvBNWg6nskbwI/Ydej2XIez2hwYkwPc69Zxjyw/ELkcGHMP1aPdDakH8e/yAxuBCmP+sfWhry7+MlBg/C9GQdUytD/nu8wOBAmJ6txGphyE+P5xvsCdPCWrKcJRAYzAlFQaOhtGaFa7AmlAUNhopVN0yDMaFfuSJxxxJwDbaEPrGajDQQK58eapeeehJuqfVwL9QZL8QJHIMlgRQ80udQhkVp0elFCAIBbRi0NhgSFhJBlj1ShssTBsRQ5k0nag1mBLFAbbAiKARagxFBJVAabAhKgc5gQlALVAYLgoFAYzAgUIKG60Ex8hrnTxBdky0NaoKZoOaer/5eQ0m4pXYsIe9N7Q06gq1AeO+tIlS/R5MLaMOsxqAh9KnV3WKByKAgeAhqDOT7aTnBR0AbnimDmOAl4BukBD8B2yAkkALBFU1rkBF8BTWGqtclEcFbwDNICOQeVmYC+t67wiAgkALW+wOxoXS/xCeQzyJTAW0oXeP4hBviR69tBVm2Jh7oRk3IhsSPvrYVjIiHGRcPlPw6X8TQWiB7Ub2Aob1AeGlzNzAE0hsMZwNHIL7NczWwBPKbbUcDT6B4y0Pt9ak2UIIhcbzijaeTgStQvf13MbAFug9hHAyUYEKfovsojDKMLijQfiBpbKA2cq0TqD8WNjWIBPpPtg0NMoHB9wtmBqHA4lseI4NUYPJdm4lBLLD5xtPAQAnoK5otQW9QCKy+/afuW1saKAFxb+pC0BlUAruZMGO5gRLct3tku/lIYoNSYDkr7F5m0ApM5+aJDGqB7SRPgUEvMJ5qSxnIAbFPcCdQQyJ/Rmlr48+WnMe0nnZeaajZJLrSwBLYT/6vMNRuc11h4AkclmCUDA0bdZcMTIHHQpiCoXGr8YKBK3BZjnRmaLFZ+pmB81rkRzi912i13fuJgS9wWpr3Y2i5Yf2PQSDwWiA5Zp77JBe4LVMdMk89Gtq9Pyjmtlh4yDzzSipwXLI92fCO3zR/VlEdVp1HCIQIgRAhECIEQoRAiBAIEQIhQiBECIQIgRAhECIEQoRAiBAIEQIhQiBECIQIgRAhECIEQoRAiBAIEfovCC2n16WrNNG1RLibDEM3KU2+z7bFf+la2+w99RC0vWfXqYeg7ZrctqYz3VCrIrrTv5fQjv8yvGelP+nQtY5/KmGfehSa9sfL3Sb1MDR9zVGmtnzrQD+bJ1LrZsN3MnOdWoMdvLOZ66sO3iptC3u5vXbuRmP0Wr4PH1I71wVsfU9smrrZzZfX4VvOd5v2f7oEIYQQQgghhBBCCCGEEEKo3F8zKGb+IO52lQAAAABJRU5ErkJggg=="></img>
            <span>${userData.public_gists} Gists publicados</span>
        </div>
        <button id="add-button" onclick="selectTeam()">+</button>`;
}

function renderDevs(){
    
}
function selectTeam(){
    devs.innerHTML = 
    `
        <div>
            <p>${userData.name}<p>
        </div>
    `
}