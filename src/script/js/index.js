;
! function() {
    const phpurl = 'http://10.31.158.73:8080/vip/php/';
    const $SJbItemdata = $('.shop-sort .J-brand-item-data');
    const $CJbItemdata = $('.shop-coming .J-brand-item-data');
    $.ajax({
        url: phpurl + 'index.php',
        dateType: 'json',

    }).done(function(data) {
        let dataarr = JSON.parse(data);
        // console.log(dataarr);
        var $html = '';
        var $htmlS = '';
        var $htmlC = '';

        $.each(dataarr, function(index, value) {
            $html = `
                        <a href="details.html?picid=${value.picid}" class="brand-item-hover" target="_blank">
                            <img src="${value.indexurl}" alt="${value.title}">
                            <div class="brand-info"><span class="brand-name" title="${value.title}">${value.title}</span>
                                <div class="brand-discount-pms">
                                    <span class="brand-discount"><span class="dis-num">${value.sell}</span>折起</span>
                                </div>
                            </div>
                        </a>
                  `;
            $htmlS += `<div class="brand-item">` + $html + ` <span class="ui-btn-fav-like" role="button">
            <a class="vipFont"><svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shoucang11
            "></use>
            </svg></a>
            <span class="fav-hidden">收藏品牌</span>
    </span></div>`;
            $htmlC += '<div class="brand-item">' + $html + '<div class="book-notice"></div></div>';
        });


        $SJbItemdata.html($htmlS);
        $CJbItemdata.html($htmlC);
        // console.log($('.shop-sort .J-brand-item-data').find('img'));
        $(window).on('scroll', function() {
            var $scrolltop = $(window).scrollTop();
            var $clientheight = $(window).height();
            // console.log($scrolltop);
            let $imgarr = $('.shop-sort .J-brand-item-data').find('img');
            // console.log($imgtop);
            $.each($imgarr, function(index, element) {
                let $imgtop = $(element).offset().top;
                if ($imgtop < $scrolltop + $clientheight) {
                    $(element).eq(index).attr('src', $('img').attr('_src'));
                }
            })
        });

    });


}();