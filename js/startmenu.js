$get("#startBtn").onclick = function(){
    roomCode = $get("#roomCode").value;
    startmenu.hidden = true;
    pageframe.hidden = false;
}


$get("#roomCode").onkeydown = function(e){
    if(e.key == "Enter"){
        e.preventDefault();
        roomCode = $get("#roomCode").value;
        startmenu.hidden = true;
        pageframe.hidden = false;
    }
}
