const divWrapper = document.querySelector(".divWrapper");
const inputNumber = document.querySelector("#numberInput");


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
                    innerDiv.style.backgroundColor = "black";
                })  
            }
    }

})
for (let i = 0; i <256; i++) {
    const innerDiv = document.createElement("div");
   innerDiv.classList.add("innerDiv")
    divWrapper.appendChild(innerDiv);
   innerDiv.addEventListener('mouseover', () => {
        innerDiv.style.backgroundColor = "black";
    })
}
