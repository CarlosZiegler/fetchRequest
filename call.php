<?php
// File in PHP server
// check if parameter shopTurnover was passed by post
if (isset($_POST["shopTurnover"])) {
    $shopTurnover = $_POST['shopTurnover'];  
} else {  
    $shopTurnover = "false";
}

// check if parameter index was passed by post
if (isset($_POST["index"])) {
    $index = $_POST['index']; 
} else {  
    $index = "";
}

// checked if functionover is true from Frontpage
if ($shopTurnover){
    echo json_encode(shopTurnover($index));  
}

function shopTurnover($index)
{
  $response = "My index is : ".$index;
  return $response;
}

?>
