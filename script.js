const display = document.querySelector("#display"); // creo una constante para entrar al id display desde js
const buttons = document.querySelectorAll("button"); // creo una constante para entrar a todos los elementos button

//funcionalidad de la calculadora
buttons.forEach((item)=>{
    item.onclick = ()=>{
        if(item.id == "clear"){
            display.innerText="";
        }else if(item.id == "backspace"){
        let string = display.innerText.toString();
        display.innerText = string.substr(0,string.length - 1);
        }else if (display.innerText != "" && item.id == "equal"){
            display.innerText = eval(display.innerText);
        }else if (display.innerText == "" && item.id == "equal"){
            display.innerText = "Null";
            setTimeout (()=> (display.innerText = ""), 1000);
        }else {
            display.innerText += item.id;
        }
    }
})

//funcionalidad del botón de tema oscuro

const themeTogglerBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
let isDark = true;
themeTogglerBtn.onclick=()=>{
    calculator.classList.toggle("dark");    
    themeTogglerBtn.classList.toggle("active");
    isDark = !isDark;
}