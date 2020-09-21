<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
    
    
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>외부변호사시스템-피디시스템</title>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery-1.9.0.js"></script>
<style type="text/css">
	body, div {
		margin: 0px;
		padding: 0px;
	}
	

</style>
</head>

<body>
	<div id="login_form">
		<jsp:include page="/outWebLogin.do"/>
	</div>
<script type="text/javascript">
	
	/* 로그인 창 위치  */
	function login_form_position(){
		
		var main_height =  $(window).height();//document.documentElement.clientHeight;
		var login_form_height = $("#login_form").height();	
		
		$("#login_form").css("margin-top",((main_height/2)-(login_form_height/2)));	
	}// login_form_position()
	
	$(document).ready(function(){

		login_form_position();
	
		$(window).resize(function(){
			login_form_position();
		});	
	});
	
</script>
</body>
</html>