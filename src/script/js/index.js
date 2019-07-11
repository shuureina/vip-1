;
! function() {
    const phpurl = 'http://10.31.158.73:8080/vip/php/';
    const $JbItemdata = $('.shop-sort .J-brand-item-data');

    $.ajax({
        url: phpurl + 'index.php',
        dateType: 'json',

    }).done(function(data) {
        let dataarr = JSON.parse(data);
        console.log(dataarr);
        var $html = '<div>';

        $.each(dataarr, function(index, value) {
            $html += `<div class="brand-item">
                        <a href="http://10.31.158.73:8080/vip/src/details.html?picid=${value.picid}" class="brand-item-hover" target="_blank">
                            <img src="${value.indexurl}" alt="${value.title}">
                            <div class="brand-info"><span class="brand-name" title="${value.title}">${value.title}</span>
                                <div class="brand-discount-pms">
                                    <span class="brand-discount"><span class="dis-num">${value.sell}</span>折起</span>
                                </div>
                            </div>
                        </a>
                        <span class="ui-btn-fav-like" role="button">
                                <a class="vipFont"><svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-shoucang11
                                "></use>
                                </svg></a>
                                <span class="fav-hidden">收藏品牌</span>
                        </span>
                    </div>
                   
                    `;
        });
        $html += '<div>';
        $JbItemdata.html($html);

    });



}();