<?php
    $message = $_POST["message"];
    $input_data = json_decode($message,true);
    $roomCode = $input_data["roomCode"];
    $page = $input_data["page"];
    // file_put_contents("./pageCount.txt",$roomCode);

    $file = "../data.json";
    $json = file_get_contents($file); //指定したファイルの要素をすべて取得する
    $arr = json_decode($json,true);
    $arr[$roomCode] = $page;
    
    file_put_contents("./data.json",json_encode($arr));
    exit;
?>