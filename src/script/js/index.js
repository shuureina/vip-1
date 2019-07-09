$(function() {

    $.ajax({
        type: 'get',
        url: 'http://10.31.158.73:8080/vip/php/details.php',
        dateType: 'json',
        success: function(datajson) {
            const $fbcList = $('.fbc-list');
            const $fbcTriggercon = $('.fbc-trigger-con');

            let $dlen = JSON.parse(datajson).length;
            let $listtemp = '';
            let $contemp = '';
            for (let i = 0; i <= $dlen; i++) {
                let $pic = JSON.parse(datajson);
                let $fbcTriggerconli = $('.fbc-trigger-con li');
                let $fbcListitem = $('.fbc-list li');

                $listtemp = ` <li class="fbc-list-item">
                    <a href="http://10.31.158.73:8080/vip/src/details.html?sid=${$pic[i].picid}" target="_blank" class="fbc_list_img" alt="">
                        <img src="${$pic[i].url}" alt="${$pic[i].title}">
                    </a>
                </li>
               `;
                $contemp = ` <li>${$pic[i].title}</li>`;
                $fbcList.append($listtemp);
                $fbcListitem.first().addClass('show');
                $fbcTriggercon.append($contemp);
                $fbcTriggerconli.first().append("<span>|</span>");
            }

        }
    })
});