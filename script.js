let output = document.getElementById("results");
let textarea = document.getElementById("text");

textarea.focus();


//////////////////
textarea.addEventListener('keyup', (e)=>{
    createOutputs(e.target.value);

    if(e.key === 'Enter'){
        setTimeout(() => {
            e.target.value = '';
        }, 10);

        randomSelect();
    }
})
//////////////////////////////////////////
function createOutputs(input){
    let natijalar = input.split(",")
    .filter(tag => tag.trim() !== "")
    .map(tag => tag.trim());
    
    output.innerHTML = "";

    natijalar.forEach(tag => {
        let outputElement = document.createElement('span');
        outputElement.classList.add('results');
        outputElement.innerText = tag;
        output.appendChild(outputElement);
    });
}
//////////////////////////////////////////
function randomSelect(){
    let vaqtlar = 30;

    let interval = setInterval(() => {
        let randomOutput = pickRandomOutput();

        highlightOutput(randomOutput);

        setTimeout(() => {
            highlightLightOutput(randomOutput)
        }, 100)
    }, 100);

    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            let randomOutput = pickRandomOutput();

            highlightOutput(randomOutput)
        }, 100)
    }, vaqtlar * 100)
}

function pickRandomOutput() {
    let natijalar = document.querySelectorAll(".results");
    return natijalar[Math.floor(Math.random() * natijalar.length)]
}
function highlightOutput(tag){
    tag.classList.add('highlight')
}

function highlightLightOutput(tag){
    tag.classList.remove('highlight');
}