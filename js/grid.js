function gridDisp(){
    //gridの親
    let wrapper = $get("#wrapper");

    //pagesを全て表示
    for(let i=0; i<pages.length; i++){
        pages[i].hidden = false;
    }

    //上手く表示されないときは、position が曲者
    for(let i=0; i<pages.length; i++){
        //grid子
        const newDiv = document.createElement("div"); 
        newDiv.innerHTML = pages[i].outerHTML;
        newDiv.setAttribute("style","margin:0; padding:0; display:block");
        wrapper.appendChild(newDiv);
    }

    pageframe.hidden = true;
    $get("#wrapper").style.display = "grid";
   
    let grids = $get("#wrapper").children;
 
    document.onclick = function(){
        for(let i=0; i<grids.length; i++){
            grids[i].onclick=function(){
                page_countValue = i;//ページカウントを合わせる
                contents_countValue = 0;//コンテンツカウント初期化
                changePage(i);
                
                //コンテンツを全て非表示
                let contents = pages[page_countValue].getElementsByTagName("div");
                for(let i=0; i<contents.length; i++){
                    contents[i].hidden = true;
                }
 
                wrapper.hidden = true;//グリッド非表示
                pageframe.hidden = false;//ページ表示
            }
        }
    }
}