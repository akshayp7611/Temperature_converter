let value = 0;
let convertToC = false;

let degreeInputField = document.getElementById("input-degree") 

let typeSelector = document.getElementById("select-temp")
typeSelector.addEventListener("change", () => {
    if (typeSelector.value === "f") {
        convertToC = false
    } else {
        convertToC = true
    }
})

let resultInput = document.getElementById("input-result")

document.getElementById("btn-convert").addEventListener("click", () => {
    value = degreeInputField.value
    
    let result = 0;
    if (convertToC) {
        result = (value * 9/5) + 32
    } else {
        result = (value - 32) * (5/9)
    }
    console.log(result)
    resultInput.value = result.toFixed(4)
})