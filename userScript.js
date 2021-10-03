// window.opener.console.log("hello");
function addImage(link){
    const article = document.getElementsByTagName("article")[0];
    const section = document.createElement("section");
    const img = document.createElement("img");
    img.setAttribute("src", link);
    img.setAttribute("class", "full background");
    section.appendChild(img);
    article.appendChild(section);
}

for(let i=80; i<=100; i++){
    addImage("./slideImages/スクリーンショット (" + i + ").png");
}

for(let i=102; i<=113; i++){
    addImage("スクリーンショット (" + i + ").png");
}