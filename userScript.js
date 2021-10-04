try {
    function addImage(link){
        const article = document.getElementsByTagName("article")[0];
        const section = document.createElement("section");
        const img = document.createElement("img");
        img.setAttribute("src", link);
        img.setAttribute("class", "full background");
        section.appendChild(img);
        article.appendChild(section);
    }
    
    for(let i=1; i<=33; i++){
        addImage("./slideImages/image (" + i + ").png");
    }

    
    const article = document.getElementsByTagName("article")[0];
    const section = article.getElementsByTagName("section")[10];
    section.insertAdjacentHTML("afterend","<section><video src='./video.mp4' class='full background' muted></video></section>");

} catch (err) {
    window.opener.console.log("userScript ERR:" + err.name + err.message);
}