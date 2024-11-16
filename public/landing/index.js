
const inputObject = document.getElementById("input1")
const inputObject2 = document.getElementById("input2")
const SendButton = document.getElementById("dominance")
const Product = document.getElementById("product")

const inputted1 = document.getElementById("Inputted1")
const inputted2 = document.getElementById("Inputted2")
const Answers = {

}


SendButton.addEventListener("click", (ev) => {
    let list = []
    for (i = 1; i <= 2; i++){
        const inp = `input${i}`
        const findAnswer = Answers[inp]

        if (!findAnswer){ 
            Product.innerText = `Input field ${i}, there's Nothing There (Hello?)`
            return
        }

        list.push(findAnswer)

    }
    
    console.log(list)
    const final = list[0] * list[1] / 1000

    if (isNaN(final)){ 
        Product.innerHTML = `The carbon footprint was not found. <br>Check every field for any non-number characters. <br>Then, press "enter" after clicking on each of them.`
        return 
    }
    Product.innerText = `The carbon footprint you're business has is ${final} tons, of CO2.`
})

inputObject.addEventListener("keypress", (ev) => {
    if (ev.key !== "Enter"){ return }
    const txt = inputObject.value

    console.log(txt)
    Answers["input1"] = txt

    inputted1.innerText = (txt? `Inputted! Its ${txt}`: "")
})

inputObject2.addEventListener("keypress", (ev) => {
    if (ev.key !== "Enter"){ return }
    let txt = Number(inputObject2.value) 

    if (isNaN(txt)){

        inputObject2.value = 0.56
        txt = Number(inputObject2.value)
    }
    
    console.log(txt)
    
    Answers["input2"] = txt

    inputted2.innerText = (txt? `Inputted! Its ${txt}`: "")
})
