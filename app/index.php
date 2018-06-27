<?php
// Routing
if(!isset($_GET['q'])){
$q = '';
}else{
$q = $_GET['q'];
}

switch ($q) {
    case '':
        $page = 'home';
        break;
    case 'chapter1': 
        $page = 'chapter1';
        break;
    case 'chapter2': 
        $page = 'chapter2';
        break;
    case 'chapter3': 
        $page = 'chapter3';
        break;
    case 'chapter4': 
        $page = 'chapter4';
        break;
    
    default:
        $page = '404';
}


    include 'partials/_header.php';
    require 'pages/' . $page . '.php';
    include 'partials/_footer.php';
