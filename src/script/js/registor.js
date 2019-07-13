;
(function($) {
    const phpurl = 'http://10.31.158.73:8080/vip/php/';
    const $username = $('#J_user_name');
    const $phone = $('#J_mobile_phone');
    const $email = $('#J_email');
    const $conGroup = $('.control-group');
    const $tiptext = $('.u-input-tip .text');
    const $warning = $('.u-input-warning');
    const $success = $('.u-input-success');

    console.log($('#J_user_name').parent('.control-group'));
    $username.on('blur', function() {
        $.ajax({
            type: "post",
            url: phpurl + "registor.php",
            data: {
                loginName: $username.val()
            },
            dataType: "json",
            success: function(data) {
                console.log(data);
                if (!data) { //返回空 不存在用户名
                    $username.parent($conGroup).find($success).css({
                        'visibility': ' visible',
                        ' opacity': 1
                    })
                } else { //返回1 存在用户名 不能注册
                    $username.parent($conGroup).find($tiptext).html('该用户名已存在,请重新输入用户名');
                    $username.parent($conGroup).find($warning).css({
                        'visibility': ' visible',
                        ' opacity': 1
                    })
                    $username.parent($conGroup).addClass('z-u-form-item-warning');
                }
            }

        })

    })

})(jQuery);