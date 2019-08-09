$(function(){
    	$(".dianji").click(function(){
 $(".qiehuan").toggle();
});
$(".qiehuan").click(
    		function(){
    			$(this).hide();
    		}
    	);
    	$(".xuanzeuL2 li").click(
    		function(){
    			var neirong=$(this).text();
//  			var str_before = neirong.split('check')[0];
//  			console.log(neirong);
    			$(".dianji").text(neirong);
    			$(this).addClass("current");
    			$(this).siblings().removeClass("current");
    			$(".qiehuan").hide();
    		}
    	);	
    	$(".search-delete").click(function() {
        $("input[id='search-input']").val("").focus(); // 清空并获得焦点
    });
    $(".search-delete").click(function() {
        $("input[id='search']").val("").focus(); // 清空并获得焦点
    });
    $(".zhi").click(function(){
    	$("#tanchuang").hide();
    });
     $(".zhi2").click(function(){
    	$("#tanchuang2").hide();
    	$("#half").hide();
    });
     $(".tanBig").click(function(){
    	$("#tanchuang2").show();
    	$("#half").show();
    });
    })