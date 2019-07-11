;
! function() {
    //1.获取对应详情页的id
    var picid = location.search.substring(1).split('=')[1];
    console.log(picid);
    const phpurl = 'http://10.31.158.73:8080/vip/php/';

    //2.将当前的id传给后端获取对应的数据
    $.ajax({
        type: "post",
        url: phpurl + 'details.php',
        dataType: "json",
        data: {
            picid: picid
        }
    }).done(function(data) {
        console.log(data);
        $('.smallpic').attr('src', data.url);
        $('.bigpic').attr('src', data.url);
        $('.title h2').html(data.title);
        $('.price span').html(data.price);
        let surlarr = data.simgurls.split(',');
        console.log(surlarr);
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
        if (getcookie('cookieid') && getcookie('cookienum')) { //判断是第一次还是多次存储
            arrid = getcookie('cookieid').split(','); //存储商品的id
            arrnum = getcookie('cookienum').split(','); //存储商品的数量
        }
    }


}();