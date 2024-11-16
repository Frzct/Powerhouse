
const inputObject = document.getElementById("input1")
const inputObject2 = document.getElementById("input2")
const SendButton = document.getElementById("dominance")
const Product = document.getElementById("product")

const inputted1 = document.getElementById("Inputted1")
const inputted2 = document.getElementById("Inputted2")
const Answers = {}
const CarbonEmissionHelp = [
    {
        comment: `
        You are singlehandedly carrying pollution.
        Reduce electricity use of this particular area by a lot.
        Use an energy-efficient counterpart.
        When not using, turn off EVERY SINGLE THING related to this.
        `
    },
    {
        carbonCount: 6, 
        comment: `
        You're above average in carbon emission (in electricity use).
        - Energy efficiency is key. If you are using lights or any appliances, use a more energy-efficient counterpart.
        - Refrain from using if unneeded
        `
    },
    {
        carbonCount: 4.5, 
        comment: `
        You're just about average.
        Cut electricity costs by saving power.
        And save your appliances from running overnight. Except your fridge.
        `
    },
    {
        carbonCount: 3, 
        comment: `
        You're below average in carbon emission (in electricity use).
        Keep going, try to cut a few more if you could.
        If you can, though:
        - Public Transportation
        - Turn off the lights/electronics if unneeded
        
        `
    },
    {
        comment: `
        You are a non-carbon-based lifeform.
        We don't have any feedback for you, you've definitely done well in saving the environment.
        Pat yourself in the back.
        `
    }
]

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

    const f = () => {
        let start = CarbonEmissionHelp[0]
        for (i = (CarbonEmissionHelp.length > 1? 1: 0); i < CarbonEmissionHelp.length; i++){
            const h = CarbonEmissionHelp[i]
            if (!h.carbonCount){ return h.comment }
            if (final < h.carbonCount){ 
                start = h
                continue 
            }

            return start.comment

        }
    }
    if (isNaN(final)){ 
        Product.innerHTML = `The carbon footprint was not found. 
        <br>Check every field for any non-number characters. 
        <br>Then, press "enter" after clicking on each of them.`
        return 
    }
    Product.innerText = `
    The carbon footprint your business has is ${final} tons, of CO2.
    We have some very, very positive comments for you!
    ---
    ${f()}
    `
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
