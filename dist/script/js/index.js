"use strict";!function(){var e=$(".shop-sort .J-brand-item-data"),o=$(".shop-coming .J-brand-item-data"),t=$(".J-index-floor"),d=$(".index-nav-item"),n=$("#J_sbar_top");$(window).on("scroll",function(){$("img").lazyload({effect:"fadeIn"})}),$.ajax({url:"http://10.31.158.73:8080/vip/php/index.php",dateType:"json"}).done(function(n){var a=JSON.parse(n),s="",i="",t="";$.each(a,function(n,a){s='\n                        <a href="details.html?picid='+a.picid+'" class="brand-item-hover" target="_blank">\n                            <img data-original="'+a.indexurl+'" alt="'+a.title+'" class="lazy">\n                            <div class="brand-info"><span class="brand-name" title="'+a.title+'">'+a.title+'</span>\n                                <div class="brand-discount-pms">\n                                    <span class="brand-discount"><span class="dis-num">'+a.sell+"</span>折起</span>\n                                </div>\n                            </div>\n                        </a>\n                  ",i+='<div class="brand-item">'+s+' <span class="ui-btn-fav-like" role="button">\n            <a class="vipFont"><svg class="icon" aria-hidden="true">\n            <use xlink:href="#icon-shoucang11\n            "></use>\n            </svg></a>\n            <span class="fav-hidden">收藏品牌</span>\n    </span></div>',t+='<div class="brand-item">'+s+'<div class="book-notice"></div></div>'}),e.html(i),o.html(t)}),$(window).on("scroll",function(){var i=$(window).scrollTop(),n=$(".index-content-wrp").offset().top;$("#vip-common-header").height()<i?$("#J_main_nav").addClass("main-nav-be-fixedtrans"):$("#J_main_nav").removeClass("main-nav-be-fixedtrans"),n<i?$("#J-index-nav-sort").addClass("is-lift-nav-fixed"):$("#J-index-nav-sort").removeClass("is-lift-nav-fixed"),t.each(function(n,a){var s=t.eq(n).offset().top;if(i<=s)return d.removeClass("curr"),d.eq(n).addClass("curr"),!1})}),d.on("click",function(){$(this).addClass("curr").siblings().removeClass("curr");var n=t.eq($(this).index()).offset().top;$("html,body").animate({scrollTop:n})}),n.on("click",function(){$("html,body").animate({scrollTop:0})}),$(".footer").load("footer.html")}();