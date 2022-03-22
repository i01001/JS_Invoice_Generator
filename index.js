let services = [];
const washing = document.getElementById("wash");
const lawnn = document.getElementById("lawn");
const pressing = document.getElementById("pressure");
let trans = document.getElementById("transaction");
let storage = JSON.parse(localStorage.getItem("serv"));
let amount = document.getElementById("cashbreak");
let total = document.getElementById("total");
let resett = document.getElementById("invoice");

function washr(){
    console.log("temppp11")
    remove("wash");
}

function lawnr(){
    console.log("temppp22")
    remove("lawn")
}

function pressurer(){
    console.log("temppp33")
    remove("pressure")
}

function remove(entry){
    let temp = [];
    let t = 0;
    for(i = 0; i < services.length; i++){
        if(services[i] != entry){
            temp[t] = services[i];
            t++;
        }
    }
    console.log(temp)
    console.log(services)
    services = [];
    for(i = 0; i < temp.length; i++){
        services[i] = temp[i]
    }
    localStorage.setItem("serv", JSON.stringify(services));
    updatetrans();
}



washing.addEventListener("click", function(){
    updated("wash")})
lawnn.addEventListener("click", function(){
    updated("lawn")})
pressing.addEventListener("click",function(){
    updated("pressure")
})
resett.addEventListener("click", function(){
    localStorage.clear()
    services = [];
    updatetrans();
})

function updated(code){
    for(i = 0; i < services.length; i++){
        if(services[i] === code){
            return;
        }
    }
    services.push(code);
    localStorage.setItem("serv", JSON.stringify(services));
    updatetrans();
}
    updatetrans();

function updatetrans(){
    trans.innerHTML = "";
    for(i = 0; i < services.length; i++){
        trans.innerHTML += `<p>${services[i]}</p><button id='${services[i]}r' onclick='${services[i]}r()'>REMOVE ${services[i]}r</button>`;
    }
    updatetotal()
}

function updatetotal(){
    amount.innerHTML = "";
    let sum = 0;
    for(i = 0; i < services.length; i++){
        if(services[i] === "wash"){
            amount.innerHTML += `<p>10</p>`;
            sum += 10;
        }
        else if(services[i] === "lawn")
        {
            amount.innerHTML += `<p>20</p>`;
            sum += 20;
        }
        else if(services[i] === "pressure")
        {
            amount.innerHTML += `<p>30</p>`;
            sum += 30;
        }
    }
    total.innerHTML = "TOTAL AMOUNT: " + sum;
}
