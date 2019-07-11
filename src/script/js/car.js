;
! function() {
    const phpurl = 'http://10.31.158.73:8080/vip/php/';
    // let date = new Date();
    // // console.log(date);
    // let m = date.getMinutes();
    // let s = date.getSeconds();
    let countdown = 30;
    console.log(m);
    console.log(s);

    function productlist(id, countnum) {
        $.ajax({
            url: phpurl + "car.php",
            dataType: "json",

        }).done(function(data) {
            console.log(data);
        })
    }




    $('.footer').load('footer.html');

}();