"use strict";$(function(){$(".control-group1"),$("#J_mobile_name"),$("#J_mobile_pwd"),$(".control-group1 .u-input-tip .text");$("#reg_mobile_form").validate({rules:{loginName:{required:!0,minlength:2,remote:{url:"http://10.31.158.73:8080/vip/php/registor.php",type:"post",dataType:"json",data:{username:function(){return $("#J_mobile_name").val()}}}},pvcode:{required:!0,minlength:6,maxlength:6},password:{required:!0,minlength:5},confirmPassword:{required:!0,minlength:5,equalTo:"#J_mobile_pwd"},agree:"required"},errorPlacement:function(e,r){$(r).closest(".control-group").find(".text").append(e)},errorElement:"span",errorClass:"text",messages:{loginName:{required:"请输入11位手机号码",minlength:"用户名必需由两个字母组成"},pvcode:{required:"请输入6位验证码(只要是6个数字就可以)",minlength:"验证码输入错误",maxlength:"验证码输入错误"},password:{required:"请输入密码",minlength:"密码长度不能小于 5 个字母"},confirmPassword:{required:"请输入密码",minlength:"密码长度不能小于 5 个字母",equalTo:"两次密码输入不一致"},agree:"请接受我们的声明"},submitHander:function(e){location.assign("http://10.31.158.73:8080/vip/src/login.html"),e.submit()}})}),$.validator.setDefaults({success:function(e){$(".u-input-success").addClass("show"),$.ajax({type:"post",url:"http://10.31.158.73:8080/vip/php/registor.php",data:"json",dataType:{username:function(){return $("#J_mobile_name").val()},pwd:$pwd.val()},success:function(e){}})}});