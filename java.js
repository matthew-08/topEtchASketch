const divWrapper = document.querySelector(".divWrapper")


for (let i = 0; i <16; i++) {
    const innerDiv = document.createElement("div");
    innerDiv.classList.add("innerDiv")
    divWrapper.appendChild(innerDiv);
    innerDiv.addEventListener('mouseover', () => {
        innerDiv.style.backgroundColor = "black";
    })
}
