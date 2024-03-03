

let fullName = prompt("Lütfen Adınızı Giriniz")

let myName = document.querySelector("#myName")

myName.innerHTML = `${myName.innerHTML}${fullName}`


let time =document.getElementById("myClock");

setInterval(( )=>{
    let d = new Date();
    time.innerHTML = d.toLocaleTimeString();
},1000)




const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const d = new Date();
let day = days[d.getDay()];

let myDate = document.querySelector("#myDate")

myDate.innerHTML =`${myDate.innerHTML}${day}`




document.getElementById("button5").addEventListener("mouseenter", run);
function run() {
    var btn = document.getElementById("button5");
    if (!btn.style.left) {
        // Default to 500 to start
        btn.style.left = "550px";
    } else {
        var posLeft = parseInt(btn.style.left); // parseInt ignores the px on the end
        if (posLeft >= 800) {
            btn.style.left = "200px";
        } else if (posLeft > 450) {
            posLeft += 150;
            btn.style.left = (posLeft + 150) + "px";
        }
    }
}
















