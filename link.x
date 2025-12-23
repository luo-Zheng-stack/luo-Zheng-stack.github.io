<?php
$link=mysqli_connect("localhost","root","root","cafe_db");
if(!$link){
	echo "连接失败！";
	exit();
}
mysqli_set_charset($link,"utf8");
?>