<?php
    $roomCode = $_POST["message"];
    // file_put_contents("./pageCount.txt",$roomCode);

    $file = "../data.json";
    $json = file_get_contents($file); //指定したファイルの要素をすべて取得する
    $arr = json_decode($json,true);
    $page = $arr[$roomCode];

    echo $page;
?>