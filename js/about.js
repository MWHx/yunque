$(function () {
    Auditions();
    /*试听弹窗*/
    function Auditions() {
        var auditions1 = $("#sy");
        var auditions2 = $("#hz");
        var stTC1 = $(".stTC1");
        var stTC2 = $(".stTC2");
        auditions1.click(function () {
            // stTC.addClass(" bounceInDown");
            stTC1.removeClass("zoomOutDown");
            stTC1.css("display","block");
            stTC2.css("display","none");
            var tcx = $(".tcx");
            tcx.click(function () {
                stTC1.removeClass("bounceInDown");
                // stTC.addClass("zoomOutDown");
                stTC1.hide(500);
            });
        });
        auditions2.click(function () {
            // stTC.addClass(" bounceInDown");
            stTC2.removeClass("zoomOutDown");
            stTC2.css("display","block");
            stTC1.css("display","none");
            var tcx = $(".tcx");
            tcx.click(function () {
                stTC2.removeClass("bounceInDown");
                // stTC.addClass("zoomOutDown");
                stTC2.hide(500);
            });
        });
    }

});
