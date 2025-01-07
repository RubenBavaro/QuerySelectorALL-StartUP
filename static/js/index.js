let el = document.querySelectorAll(".myElement");

function colorChange(event) {
    let element = event.target;
    if (element.classList.contains("yellowBg")) {
        element.classList.remove("yellowBg");
        element.classList.add("greenBg");
    } else if (element.classList.contains("greenBg")) {
        element.classList.remove("greenBg");
        element.classList.add("yellowBg");
    }

}

for (let i = 0; i < el.length; i++) {
    let elements = el[i];
    console.log(elements);

    elements.addEventListener("click", colorChange);
}