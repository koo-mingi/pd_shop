<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>    
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>IT RECURIT 전문기업 - PD시스템</title>
<link href="${pageContext.request.contextPath}/css/css.css" rel="stylesheet" type="text/css" />
<style type="text/css">

style1 {color: #0099CC}
	
	.linked_btn_style {
	cursor: pointer;
	}
</style>

<body>

	<div id="header">
		  <h1><img class="out_top_menu_bar linked_btn_style" id="outMain.do" src="${pageContext.request.contextPath}/images/logo.png" alt="" /></h1>
		  <p>
       	    ${sessionScope.outname}(${sessionScope.outid}) 변호사 님이 로그인 하셨습니다.
       		<img id="logout_btn" class="linked_btn_style" src="${pageContext.request.contextPath}/images/logout_btn.gif" alt="" />
       	  </p>
       	  <ul class="clearfix">
			<li><img class="out_top_menu_bar linked_btn_style" id ="Top_OUT_legal_ad_up.do" src="${pageContext.request.contextPath}/images/gnb_list1.png" alt="" /></li>
			<li><img class="out_top_menu_bar linked_btn_style" id ="Top_OUT_legal_ad_re_WEB.do" src="${pageContext.request.contextPath}/images/gnb_list2.png" alt="" /></li>
			<li><img class="out_top_menu_bar linked_btn_style" id ="OUT_fixinfo.do" src="${pageContext.request.contextPath}/images/gnb_list3.png" alt="" /></li>
<%-- 			<li><img class="out_top_menu_bar linked_btn_style" id ="OUT_PRE_ENT_IWR_WEB.do" src="${pageContext.request.contextPath}/images/gnb_list4.png" alt="" /></li> --%>
<%-- 			<li><img class="out_top_menu_bar linked_btn_style" id ="OUT_edoc_adm_WEB.do" src="${pageContext.request.contextPath}/images/gnb_list5.png" alt="" /></li> --%>
		 </ul>
	</div>
	
<script type="text/javascript">
loginCheck();


	
	
	$(".out_top_menu_bar").click(function(){
		var url = $(this).attr("id");		
			location=url;			
	});
	
	$("#logout_btn").click(function(){
		logOut();
	});


function loginCheck(){
	
	var ch = '${sessionScope.outid}';
	
	if( ch == null || ch == ''){
		location= "index.do";
	}
}

function logOut(){	
	if(confirm("로그아웃 하시겠습니까? " )){	
		location.href="getLogout.do";		
	} else {		
		return;
	}
}
	

	

</script>
</body>
</html>