<?php
include ('conn.php');
//后端获取前端的用户名和数据库进行匹配。
if(isset($_POST['loginName'])||isset($_POST['password'])){
    $name=$_POST['loginName'];
    $pwd=sha1($_POST['password']);
    
    $result =$conn->query("select * from vip_user where username='$name' and password='$pwd'");
 if($result->fetch_assoc()){
       echo true;//有值登录成功
 }else{
        echo false;//无值登陆失败
 }
}else{
    exit ("非法操作");
}


