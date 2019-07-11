$(function() {
    const $ctgroup1 = $('.control-group1');
    const $mbname = $('#J_mobile_name');
    const $pwd = $("#J_mobile_pwd");
    const $tiptext = $('.control-group1 .u-input-tip .text');
    $('#reg_mobile_form').validate({
        rules: {
            loginName: {
                required: true,
                minlength: 2,
                remote: { //把前端loginName 传给后端
                    url: 'http://10.31.158.73:8080/vip/php/registor.php', //后台处理程序
                    type: 'post', //数据发送方式
                    dataType: 'json', //接收数据的格式
                    data: { //要传递的数据
                        username: function() {
                            return $('#J_mobile_name').val();
                        }
                    }
                }
            },
            pvcode: {
                required: true,
                minlength: 6,
                maxlength: 6
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
        errorPlacement: function(error, element) {
            $(element).closest('.control-group').find('.text').append(error);
        },
        errorElement: "span",
        errorClass: 'text',
        messages: {

            loginName: {
                required: "请输入11位手机号码",
                minlength: "用户名必需由两个字母组成"
            },
            pvcode: {
                required: "请输入6位验证码(只要是6个数字就可以)",
                minlength: "验证码输入错误",
                maxlength: "验证码输入错误"
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
        },
        submitHander: function(form) {
            location.assign('http://10.31.158.73:8080/vip/src/login.html');
            form.submit();
        }

    });

});
$.validator.setDefaults({
    /*添加校验成功后的执行函数--修改提示内容*/
    success: function(span) {
        $('.u-input-success').addClass('show');
        $.ajax({
            type: "post",
            url: "http://10.31.158.73:8080/vip/php/registor.php",
            data: "json",
            dataType: {
                username: function() {
                    return $('#J_mobile_name').val();
                },
                pwd: $pwd.val()

            },
            success: function(response) {

            }
        });
    }
});