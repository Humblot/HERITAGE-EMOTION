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

    case 'chapter-1': 
        $page = 'chapter-1';
        break;

    case 'chapter-2': 
        $page = 'chapter-2';
        break;

    case 'chapter-3': 
        $page = 'chapter-3';
        break;

    case 'chapter-4': 
        $page = 'chapter-4';
        break;
    
    default:
        $page = '404';
        break;
}

 require 'views/pages/' .$page. '.php';


