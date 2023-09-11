const content = documents.getElementById("content");

const historia = [
    {
        message: "Historia, você prefere 1 ou 2?",
        options:[1,2]
    },
    {
        message: "Você prefere 1",
        options:[]
    },
    {
        message: "Você prefere 2",
        options:[]
    }
]

function getStep(){
    const urlParams = new URLSearchParams(window, location, seach);
    let step = urlParams.get("Step");
    step = parseInt(step);
    return historia[step]
}
window.addEventListener("load", () => {
    const passo = getStep();
    let mensage = passo.message;
    for(option of passo.mensage){
        const a = `?step=${option}`
        a.href = `?step=${option}`
        messagem.replace("{}", a)
    }
    
    const p = document.createElement("p");
    p.innerText = mensagem
 
    content.appendChild(p)
})

    