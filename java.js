const divWrapper = document.querySelector(".divWrapper");
const inputNumber = document.querySelector("#numberInput");
const resetButon = document.querySelector(".button.Reset")
const eraseButton = document.querySelector(".button.Erase")
const rainbowButton = document.querySelector(".button.Rainbow")


inputNumber.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
        divWrapper.innerHTML = " "
        const userNumber = inputNumber.value;
        const totalSize = userNumber**2;
        console.log(totalSize);
        
            for(let i = 0; i < totalSize; i++){ 
                divWrapper.style.gridTemplateColumns = `repeat(${userNumber}, ${userNumber}fr)`
                divWrapper.style.gridTemplateRows = `repeat(${userNumber}, ${userNumber}fr)`
                const innerDiv = document.createElement("div");
                innerDiv.classList.add("innerDiv")
                divWrapper.appendChild(innerDiv);
                innerDiv.addEventListener('mouseover', () => {
                    if (divWrapper.classList.contains("erase")) {
                        innerDiv.style.backgroundColor = "aliceblue"
                    } else if (divWrapper.classList.contains("rainbow")) {
                        innerDiv.style.backgroundColor = "#" + `${generateRandomColor()}`
                    } else innerDiv.style.backgroundColor = "black";
                })  
            }
    }

})
for (let i = 0; i <256; i++) {
    const innerDiv = document.createElement("div");
    innerDiv.classList.add("innerDiv")
    divWrapper.appendChild(innerDiv);
        innerDiv.addEventListener('mouseover', () => {
            if (divWrapper.classList.contains("erase")) {
                innerDiv.style.backgroundColor = "aliceblue"
            } else if (divWrapper.classList.contains("rainbow")) {
                innerDiv.style.backgroundColor = "#" + `${generateRandomColor()}`
            } else
            innerDiv.style.backgroundColor = "black";
        })
}

resetButon.addEventListener("click", () => {
    const innerDivs = document.getElementsByClassName("innerDiv");
    
    for (var div of innerDivs) {
        div.style.backgroundColor = "aliceblue";
    }
})

eraseButton.addEventListener("click", () => {
    divWrapper.classList.toggle("erase");
    eraseButton.classList.toggle("buttonSelect")
    
})

rainbowButton.addEventListener("click", () => {
    divWrapper.classList.toggle("rainbow");
    rainbowButton.classList.toggle("buttonSelect")    
})

function generateRandomColor() {
    const colorArray = ["A53D27", "4F8B3B", "492949", "C61FC6", "D5DE0D", "0D1ADE", "05DFF5", "FE00C4"]
    const ranNum = Math.floor(Math.random() * colorArray.length);
    const randomColor = colorArray[ranNum];
    return randomColor;
}