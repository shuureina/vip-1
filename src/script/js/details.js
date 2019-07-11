;
! function() {
    //1.获取对应详情页的id
    var picid = location.search.substring(1).split('=')[1];
    const phpurl = 'http://10.31.158.73:8080/vip/php/';
    var addnum = 0;
    //2.将当前的id传给后端获取对应的数据
    $.ajax({
        type: "post",
        url: phpurl + 'details.php',
        dataType: "json",
        data: {
            picid: picid
        }
    }).done(function(data) {
        // console.log(data);
        $('.smallpic').attr('src', data.url);
        $('.smallpic').attr('picid', data.picid);
        $('.bigpic').attr('src', data.url);
        $('.title h2').html(data.title);
        $('.price span').html(data.price);
        let surlarr = data.simgurls.split(',');
        // console.log(surlarr);
        let templist = '';
        $.each(surlarr, function(index, value) {
            templist += '<li><img src="' + value + '" alt="' + index + '"></li>';
        });
        $('.movelist ul').append(templist);
    })

    //3.放大镜效果


    //4.购物车存储核心：商品的sid和商品的数量--cookie或者localStorage进行存储
    var arrid = []; //商品的Id
    var arrnum = []; //商品的数量
    function cookietoString() {
        if ($.cookie('cookieid') && $.cookie('cookienum')) { //判断是第一次还是多次存储
            arrid = $.cookie('cookieid').split(','); //存储商品的id
            arrnum = $.cookie('cookienum').split(','); //存储商品的数量
        }
    }
    $('#sub-btn').on('click', function() { //点击加入购物车按钮
        var $picid = $(this).parents('.product').find('.smallpic').attr('picid'); //
        cookietoString() //获得cookietoString存储数据
            // console.log($.inArray($picid, arrid));
            //判断当前的picid是否存在cookie中
        if ($.inArray($picid, arrid) === -1) { //不存在 存入cookie中
            arrid.push($picid);
            $.cookie('cookieid', arrid.toString(), 7);
            arrnum.push($("#count").val());
            $.cookie('cookienum', arrnum.toString(), 7);

        } else { //不返回-1 存在
            var num = Number(arrnum[$.inArray($picid, arrid)]) + Number($("#count").val()); //累加
            arrnum[$.inArray($picid, arrid)] = num;
            // console.log(arrnum);
            $.cookie('cookienum', arrnum.toString(), 7); //再次存入cookie中
        }
        $('.pop').css('display', 'block');
        $('.close').on('click', function() {
            $('.pop').css('display', 'none');
            clearInterval(judgetimer);
        })
        let count = 5;

        let judgetimer = setInterval(function() {
            $('.time').html(count);
            if (count <= 0) {
                clearInterval(judgetimer);
                $('.pop').css('display', 'none');
            }
            count--;
        }, 1000);
    });
    $('.num-add').on('click', function() {
        addnum++
        arrnum.push(addnum);

    });

}();