$(function() {
    $('#reg_mobile_form').validate({
        rules: {
            loginName: {
                required: true,
                minlength: 2,
                remote: { //把前端loginName 传给后端
                    url: 'http://10.31.158.73:8080/vip/php/registor.php',
                    type: 'post'
                }
            },
            password: {
                required: true,
                minlength: 5
            },
            confirmPassword: {
                required: true,
                minlength: 5,
                equalTo: "#J_mobile_pwd"
            },
            agree: "required"
        },
        messages: {

            loginName: {
                required: "请输入用户名",
                minlength: "用户名必需由两个字母组成"
            },
            password: {
                required: "请输入密码",
                minlength: "密码长度不能小于 5 个字母"
            },
            confirmPassword: {
                required: "请输入密码",
                minlength: "密码长度不能小于 5 个字母",
                equalTo: "两次密码输入不一致"
            },
            agree: "请接受我们的声明"
        }
    });
});
$.validator.setDefaults({
    /*添加校验成功后的执行函数--修改提示内容，并为正确提示信息添加新的样式(默认是valid)*/
    success: function() {
        $('.u-input-success').addClass('show');
    }
});
$('#J_mobile_name').on('blur', function() {
$('.u-input-tip .text').html('请输入')
});


// const $username = $('#J_mobile_name');
//     const $pwd = $("#J_mobile_pwd");
//     const $checkpwd = $("#J_mobile_confirm_pwd");
//     const $idcode = $("#J_mobile_code");
//     const phpurl = 'http://10.31.158.73:8080/vip/php/';
//     $username.on('blur', function() {

//         $.ajax({
//             type: "post",
//             url: phpurl + "registor.php",
//             data: {
//                 username: $username.value
//             },
//             dataType: "json",
//             success: function(data) {
//                 if (!data) {
//                     $('.control-group1 .u-input-success').css({
//                         visibility: visible,
//                         opacity: 1
//                     })
//                 } else {
//                     $('.control-group1 .u-input-warning').css({
//                         visibility: visible,
//                         opacity: 1
//                     })
//                     $(".u-input-tip .text").html('用户名已存在');
//                 }
//             }
//         });
//     });