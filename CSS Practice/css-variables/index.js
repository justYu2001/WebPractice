(function(){
    let redButton = document.querySelector(".red");
    let blueButton = document.querySelector(".blue");
    let greenButton = document.querySelector(".green");

    function setBackground(color){
        console.log(color);
        document.documentElement.style.setProperty("--bgc", color);
    }

    const redHexCode = "#ff2222";
    const greenHexCode = "#22ff22";
    const blueHexCode = "#2222ff";
    
    redButton.addEventListener("click", () => setBackground(redHexCode));
    greenButton.addEventListener("click", () => setBackground(greenHexCode));
    blueButton.addEventListener("click", () => setBackground(blueHexCode));
})()