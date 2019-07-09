<?php

require "conn.php";


//后端获取前端的用户名和数据库进行匹配。
if(isset($_POST['loginName'])||isset($_POST['form-submit'])){
    $name=@$_POST['loginName'];
    
 
}else{
    exit ("非法操作");
}
   $result=$conn->query("select * from vip_user where username='$name'");
    if($result->fetch_assoc()){//如果有值代表用户名存在
        echo true;//有重复
    }else{
        echo false;//没有重复
    }
//根据form内部name值获取前端表单提交的值
if(isset($_POST['submit']) && $_POST['sbumit'] == "注册"){
    $user=$_POST['loginName'];
    $pwd=$_POST['password'];
    $result = $conn->query("insert vip_user(id,username,password,date) values(null,'$user','$pwd',NOW())");
    header ('location:login.html');
}

 