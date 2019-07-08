<?php
include ("conn.php");

$result=$conn->query('select * from banpic');

$arr=array();
while($rows=$result->fetch_assoc()){
    array_push($arr,$rows);
}
echo json_encode($arr);