$(function () {
    fourTab();
    playSound();
    Auditions();
    eightTabs();
    houver();
    ck();

    function fourTab() {
       var tabNav = $(".fourTabNav li");
       var tabCen = $(".fourTabCen li");
        tabCen.hide();
        tabCen.eq(0).show();
        tabNav.each(function (i) {
            var _this = $(this);
            _this.hover(function () {
                tabNav.removeClass("active");
                _this.addClass("active");
                tabCen.hide();
                tabCen.eq(i).show();
                document.getElementById("f1").innerHTML = " <embed src=''></embed><img src='img/index/7.png' alt=''>";
                document.getElementById("f2").innerHTML = " <embed src=''></embed><img src='img/index/7.png' alt=''>";
                document.getElementById("f3").innerHTML = " <embed src=''></embed><img src='img/index/7.png' alt=''>";
                document.getElementById("f4").innerHTML = " <embed src=''></embed><img src='img/index/7.png' alt=''>";
                playSound();
            })
        })
     }
     /*播放声音*/
     function playSound() {
       var  array =[
           'http://yunque.guizu.me/audio/fangchan.mp3',
           'http://yunque.guizu.me/audio/licai.mp3',
           "http://yunque.guizu.me/audio/daikuan.mp3",
           'http://vma.oss-cn-hangzhou.aliyuncs.com/tongzhen/audio/peizi.mp3'
       ];
       var list =  $(".fourTabCen li");

       list.each(function (i) {
           var _this = $(this);
           var isTrue = true;
           _this.find("img").click(function () {
               console.log("asd");
             if (i === 0 ){
                 document.getElementById("f1").innerHTML = " <embed src="+array[i]+"></embed>";
             }else if (i === 1){
                 document.getElementById("f2").innerHTML = " <embed src="+array[i]+"></embed>";
             }else if (i === 2){
                 document.getElementById("f3").innerHTML = " <embed src="+array[i]+"></embed>";
             }else if (i === 3){
                 document.getElementById("f4").innerHTML = " <embed src="+array[i]+"></embed>";
             }else{
                 document.getElementById("f1").innerHTML = " <embed src="+array[i]+"></embed>";
             }
           });
       })
     }
     
     /*试听弹窗*/
     function Auditions() {
         var auditions = $("#auditions");
         var stTC = $(".stTC");
         auditions.click(function () {
             // stTC.addClass(" bounceInDown");
             stTC.removeClass("zoomOutDown");
             stTC.css("display","block");
             var tcx = $(".tcx");
             tcx.click(function () {
                 stTC.removeClass("bounceInDown");
                 // stTC.addClass("zoomOutDown");
                 stTC.hide(500);
             });
         });
     }

     /*选择切换*/
     function eightTabs() {
         var eightTabNavLi = $(".eightTabNav li");
         var eightTabCenLi = $(".eightTabCen li");
         eightTabNavLi.eq(0).addClass("active");
         eightTabCenLi.eq(0).show();
         eightTabNavLi.each(function (i) {
            var _this = $(this);
            _this.click(function () {
                eightTabNavLi.removeClass("active");
                _this.addClass("active");
                eightTabCenLi.hide(500);
                eightTabCenLi.eq(i).show(1000);
            });
         });
     }

     /*添加划过事件*/
     function houver() {
         $("#auditions").hover(function () {
             $("#auditions").addClass("wobble");
         },function () {
             $("#auditions").removeClass("wobble");
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
