


let prueba = document.querySelectorAll(".item")   

function sitios(number , text , title , color , titleStyle , boton , go){
    prueba[number].innerHTML = `<div class="destroy">
    <p class="${color}"> ${text}</p>
    <h3 class="${titleStyle}">${title}</h3>`+`
        <button class="boton-bg" onclick="go(${go})"><svg xmlns="http://www.w3.org/2000/svg" fill="${boton}" height="48" width="48"><path d="M24 31.3 31.3 24 24 16.7 21.9 18.8 25.6 22.5H16.5V25.5H25.6L21.9 29.2ZM24 44Q19.75 44 16.1 42.475Q12.45 40.95 9.75 38.25Q7.05 35.55 5.525 31.9Q4 28.25 4 24Q4 19.8 5.525 16.15Q7.05 12.5 9.75 9.8Q12.45 7.1 16.1 5.55Q19.75 4 24 4Q28.2 4 31.85 5.55Q35.5 7.1 38.2 9.8Q40.9 12.5 42.45 16.15Q44 19.8 44 24Q44 28.25 42.45 31.9Q40.9 35.55 38.2 38.25Q35.5 40.95 31.85 42.475Q28.2 44 24 44ZM24 41Q31.25 41 36.125 36.125Q41 31.25 41 24Q41 16.75 36.125 11.875Q31.25 7 24 7Q16.75 7 11.875 11.875Q7 16.75 7 24Q7 31.25 11.875 36.125Q16.75 41 24 41ZM24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Z"/></svg></button>
    </div>
    `
    // go(go);
}

function chau(number){
    prueba[number].innerHTML = ""
}
function go(link){ window.location.href = link}