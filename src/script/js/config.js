//配置模块
require.config({
    baseUrl: 'https://cdn.bootcss.com/', //基路径：共同的路径
    paths: { //路径,不能带扩展名。
        'jquery': 'jquery/3.4.1/jquery.min',
        'jqcookie': 'jquery-cookie/1.4.1/jquery.cookie.min',
        'jqlazyload': 'jquery_lazyload/1.9.7/jquery.lazyload.min'
    },
    shim: { //让不支持amd规范的模块支持amd
        deps: [''], //依赖的模块
        exports: '' //暴露名称
    }
    // deps 为数组,表示其依赖的库, exports 表示输出的对象名
});