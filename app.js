function RandomRGBValue(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function GetARandomColor() {

    return `RGB(${RandomRGBValue(0, 255)},${RandomRGBValue(0, 255)},${RandomRGBValue(0, 255)})`
}

function GiveAllDivsABackgroundColor() {
    const allDivs = document.getElementsByTagName("div");
    console.log(allDivs);
    Array.from(allDivs).forEach(div => {
        div.style.backgroundColor = GetARandomColor();
        div.style.border = `1px solid ${GetARandomColor()}`
    })
}
GiveAllDivsABackgroundColor();