<%-- 로그인 팝업 --%>
<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="ui" uri="http://egovframework.gov/ctl/ui"%>

<!DOCTYPE html>
<html>

<head>

<meta charset=utf-8">
<meta http-equive="Content-Style-Type" content="text/css"/>  
<!-- <link href="../css/css.css" rel="stylesheet" type="text/css" /> -->
<link href="${pageContext.request.contextPath}/css/basic.css" rel="stylesheet" type="text/css" />
<link href="${pageContext.request.contextPath}/js/jquery-ui-1.10.3.custom.css" type="text/css"
	rel="stylesheet" />
<!-- JS - jQuery -->
<script src="<c:url value="${pageContext.request.contextPath}/js/jquery-1.9.0.js" />"></script>
<script src="${pageContext.request.contextPath}/js/jquery-1.9.1.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/js/jquery-ui-1.10.3.custom.js" type="text/javascript"></script>

<title> PD_LAW 외부변호사 시스템</title>

<style type="text/css">

	#legalOfficialinfoLyrPsw {
		width: 130px;	
	}
	
	#login_popup_table_top_img{
		width: 481px; 
		height: 25px;
	}
	
	#login_popup_table_bottom_img{
		 width: 481px;
		 height: 26px;
	}
	
	#login_main_body {
		width: 480px;
		margin: auto;
	}
	table {
		margin: auto;
	}
	
	#login_top {
		width: 480px;
		height: 27px;
		background-image: url(${pageContext.request.contextPath}/images/popup_table_top_01.jpg);
		background-repeat: no-repeat;
	}
	#login_middle {
		width: 480px;
		height: 200px;
		background-image: url(${pageContext.request.contextPath}/images/popup_table_back_01.jpg);
	}
	#login_bottom {
		width: 480px;
		height: 27px;
		background-image: url(${pageContext.request.contextPath}/images/popup_table_bottom_01.jpg);
		background-repeat: no-repeat;
	}
	
	table {
		width: 420px;
		border: 0px;
	}
	
	#error_msg {
		font-size: 2ex;
		color: red;
	}
	
	input {
		width: 130px;
		border-radius: 7px;
		border: 1px solid #282828;		
	}
	
	input:FOCUS {
		box-shadow: 0px 0px 10px #33CCFF;
		border:1px solid #33CCFF;
	}
	
	#loginBtn {
		width: 60px;
		height: 45px;
		border-radius: 10px;
		background: linear-gradient(#C9C9C9, #F4F4F4, #C9C9C9); /* Standard syntax */
		font-size: 13px;
		font-weight:bolder;
	}
	#loginBtn:HOVER, #loginBtn:FOCUS {
		background: linear-gradient(#33CCFF, #F4F4F4, #33CCFF); /* Standard syntax */
		/* 	color:#FFFFFF; */
	}
	#login_text {
		font-size: 15px;
		font-weight:bolder;
	}
	.linked_btn_style {
	cursor: pointer;
	}

	
</style>

</head>
<body>
	<div id="login_main_body">
		<div id="login_top">		
		</div>

		<div id="login_middle">
			<form name="doLogin" method="post">
				<table>
					<tr>
						<td colspan="5">&nbsp;</td>
					</tr>
					<tr>
						<td colspan="5" align="center">
							<img src="images/top_logo_01.jpg">
						</td>
					</tr>
					<tr>
						<td colspan="5">&nbsp;</td>
					</tr>
					<tr>
						<td colspan="5">&nbsp;<span id="error_msg"></span></td>
					</tr>
					<tr>
						<td width="30">&nbsp;</td>
						<td width="80"><span id="login_text">아 이 디</span></td>
						<td><input name="legalOfficialinfoRelaNo" type="text" id="legalOfficialinfoRelaNo" 
							maxlength="10" style="ime-mode:disabled" />
						</td>
						
						<td width="90" rowspan="2" align="left" valign="middle">
							<button type="button" id="loginBtn" class="linked_btn_style">로그인</button>
						</td>
					</tr>
					<tr>
						<td >&nbsp;</td>
						<td width="80"><span id="login_text">비밀번호</span></td>
						<td width="80">
							<input type="password" name="legalOfficialinfoLyrPsw" 
								id="legalOfficialinfoLyrPsw" maxlength="4"
								style="ime-mode:disabled"/>
						</td>
						<td width="20">&nbsp;</td>
					</tr>
				</table>
			</form>
		</div>

		<div id="login_bottom">
		</div>
		
	</div>

<script type="text/javascript">

	tab_index_init();

	function tab_index_init(){
		document.getElementById("legalOfficialinfoRelaNo").tabIndex="1";
		document.getElementById("legalOfficialinfoLyrPsw").tabIndex="2";
		document.getElementById("loginBtn").tabIndex="3";
	}

	var id_value;	// id
	var pw_value;	// pw
	var input_obj;	// 선택 객체

	$(document).ready(function(){
		$("#legalOfficialinfoRelaNo").focus();
		$("input").keyup(function(){
			input_obj = $(this);
			var key = input_obj.val().trim();
			key_check(key);
		});
		$('body').keyup(function (e){
			if(e.keyCode == 13) {
				loginCheck();
			}
		});	
		$("#loginBtn").click(function(){
			loginCheck();
		});
	});

	function loginCheck() {
		id_value = $("#legalOfficialinfoRelaNo").val().trim();	// id
		pw_value = $("#legalOfficialinfoLyrPsw").val().trim();	// pw
		
		if(id_value==""||id_value==null){
			$("#error_msg").text("아이디를 입력하세요");
			$("#legalOfficialinfoRelaNo").focus();
			return;
		}else if(id_value.length < 10){
			$("#error_msg").text("아이디는 10자리 입니다");
			$("#legalOfficialinfoRelaNo").focus();
			return;
		}else if(pw_value==""||pw_value==null){
			$("#error_msg").text("비밀번호를 입력하세요");
			$("#legalOfficialinfoRelaNo").focus();
			return;
		}
		
		$("#error_msg").text("로그인 중입니다");

		$.ajax({
			async: true
			, url: "outWebLoginCheck.do"
			, type: "post"
			, data: {"legalOfficialinfoRelaNo":id_value,"legalOfficialinfoLyrPsw":pw_value}
			, dataType: "json"
			, success: function(data){
				// alert(data);
				if(data == "" || data == null){
					$("#error_msg").text("아이디 또는 비밀번호가 일치하지 않습니다.");						
				}else{						
					$(data).each(function(i,vo){
						alert(decodeURIComponent(vo.legalOfficialinfoLyrName)+"님 환영합니다.");
						location = "outMain.do";
					}); // .each()										
				}//if
			}// function();				
		});//ajax()
	}// loginCheck()

	//id_숫자 입력 체크
	function key_check(key) {
	  
	    if(input_obj.attr("id")=="legalOfficialinfoRelaNo"){
	    	
	    	var id_re =new RegExp(/[^0-9]/g);
	    	
	    	if ( id_re.test(key)) {
		    	$("#error_msg").text("아이디는 숫자만 입력가능합니다.");
		    	input_obj.val(key.replace(id_re, ''));
		    	return;
		    } 
	    }else{
	    	var id_pw=new RegExp(/[^0-9]/g);
		    if ( id_pw.test(key)) {
				input_obj.val(key.replace(/[^0-9]/gi, ''));
				$("#error_msg").text("비밀번호는 숫자만 입력가능합니다.");
				input_obj.val(key.replace(id_pw, ''));
				return;
		    }
	    }
	    $("#error_msg").text("");
	}// key_check()
	
</script>
</body>

</html>