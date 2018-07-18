$(function () {
    ck();
    var banner = new FragmentBanner({
        container : "#banner1",//选择容器 必选
        imgs : ['img/joinIn/banner1.jpg','img/joinIn/banner2.jpg'],//图片集合 必选
        size : {
            width : $(window).width(),
            height : 624
        },//容器的大小 可选
        //行数与列数 可选
        grid : {
            line : 1,
            list : 8
        },
        index: 0,//图片集合的索引位置 可选
        type : 2,//切换类型 1 ， 2 可选
        boxTime : 2000,//小方块来回运动的时长 可选
        fnTime : 8000//banner切换的时长 可选
    });
    tc();
    function tc() {
        var tc = $(".tc");
        tc.hide();
        $(".joinBnt").click(function () {
            tc.removeClass("zoomOutDown");
            tc.addClass("bounceInDown");
            tc.show();

        });
        $(".tkx").click(function () {
            tc.removeClass("bounceInDown");
            tc.addClass("zoomOutDown");
            tc.hide(5000);
        })
    }
    function ck() {
        var li = $(".ck ul li");
        li.find(".hide").hide();
        li.each(function (i) {
            var _this = $(this);
            _this.find(".show").click(function () {
                if (_this.find(".hide").css("display")==="block"){
                    _this.find(".hide").hide(1500);
                }else{
                    _this.find(".hide").show(1500);
                }

            });
        });
    }

});