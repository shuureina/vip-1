"use strict";!function(){var d=$(".shop-sort .J-brand-item-data"),e=$(".shop-coming .J-brand-item-data");$(window).on("scroll",function(){var n=$(".shop-sort .J-brand-item-data").find("img");$.each(n,function(n,a){$(a).lazyload({effect:"fadeIn"})})}),$.ajax({url:"http://10.31.158.73:8080/vip/php/index.php",dateType:"json"}).done(function(n){var a=JSON.parse(n),s="",i="",t="";$.each(a,function(n,a){s='\n                        <a href="details.html?picid='+a.picid+'" class="brand-item-hover" target="_blank">\n                            <img data-original="'+a.indexurl+'" alt="'+a.title+'" class="lazy">\n                            <div class="brand-info"><span class="brand-name" title="'+a.title+'">'+a.title+'</span>\n                                <div class="brand-discount-pms">\n                                    <span class="brand-discount"><span class="dis-num">'+a.sell+"</span>折起</span>\n                                </div>\n                            </div>\n                        </a>\n                  ",i+='<div class="brand-item">'+s+' <span class="ui-btn-fav-like" role="button">\n            <a class="vipFont"><svg class="icon" aria-hidden="true">\n            <use xlink:href="#icon-shoucang11\n            "></use>\n            </svg></a>\n            <span class="fav-hidden">收藏品牌</span>\n    </span></div>',t+='<div class="brand-item">'+s+'<div class="book-notice"></div></div>'}),d.html(i),e.html(t)})}();