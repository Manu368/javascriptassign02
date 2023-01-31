alert("Welcome to My Second Assignment");


var assign = false;



function manu() {

    if(assign == false){
    document.getElementById("button01").textContent = "Switch to Light Theme";
    document.getElementById("button01").style.backgroundColor = "lightgreen";
    document.body.style.backgroundColor = "black";
    document.getElementById("heading01").style.color = "white";
    document.getElementById("heading02").style.color = "white";
    document.getElementById("paragraph01").style.color = "white";
    document.getElementById("horizontal").style.backgroundColor = "white";
    assign = true;
}
else {
    document.getElementById("button01").textContent = "Switch to Dark Theme";
    document.getElementById("button01").style.backgroundColor = "pink";
    document.body.style.backgroundColor = "white";
    document.getElementById("heading01").style.color = "black";
    document.getElementById("heading02").style.color = "black";
    document.getElementById("paragraph01").style.color = "black";
    document.getElementById("horizontal").style.backgroundColor = "black";
    assign = false;
}
}

