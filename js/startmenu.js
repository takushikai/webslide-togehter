<<<<<<< HEAD
function $get(str){
    return document.querySelector(str);
}

$get("#startBtn").onclick = function(){
    start();
}


$get("#roomCode").onkeydown = function(e){
    if(e.key == "Enter"){
        e.preventDefault();
        start();
    }
}


function start(){
    roomCode = $get("#roomCode").value;
    startmenu.hidden = true;
    pageframe.hidden = false;
    const slideHTML = window.open("./slide.html");
    slideHTML.onload = function(){
        $get("#slideRapper").insertAdjacentHTML("afterbegin", slideHTML.document.getElementsByTagName("article")[0].innerHTML);
        slideHTML.close();
    }

    //メディアがあるならここで再生させるべき
=======
function $get(str){
    return document.querySelector(str);
}

$get("#startBtn").onclick = function(){
    start();
}


$get("#roomCode").onkeydown = function(e){
    if(e.key == "Enter"){
        e.preventDefault();
        start();
    }
}


function start(){
    roomCode = $get("#roomCode").value;
    startmenu.hidden = true;
    pageframe.hidden = false;
    const slideHTML = window.open("./slide.html");
    slideHTML.onload = function(){
        $get("#slideRapper").insertAdjacentHTML("afterbegin",slideHTML.document.body.innerHTML);
        slideHTML.close();
    }

    //メディアがあるならここで再生させるべき
>>>>>>> d9bac84c94039437db23939bf2dc6cf7a1181e46
}