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
<title> PD_LAW 외부변호사 시스템</title>
</head>
<!-- <link href="../css/css.css" rel="stylesheet" type="text/css" /> -->
<link href="${pageContext.request.contextPath}/css/basic.css" rel="stylesheet" type="text/css" />
<link href="${pageContext.request.contextPath}/js/jquery-ui-1.10.3.custom.css" type="text/css"
	rel="stylesheet" />
<!-- JS - jQuery -->
<script src="<c:url value="${pageContext.request.contextPath}/js/jquery-1.9.0.js" />"></script>
<script src="${pageContext.request.contextPath}/js/jquery-1.9.1.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/js/jquery-ui-1.10.3.custom.js" type="text/javascript"></script>
<script>

	//심급코드, 일시 세팅
	$(document).ready(function(){
		checkLogin(); 
	});

	function checkLogin(){
		var temp = '${msg}';
		
		if( temp == null || temp ==''){
		}else if( temp !=null && temp !='' && temp != '1' ){
			alert(temp);
			return false;
	 	}else{
	 		var frm = $('form[name="doLogin"]');
	 		var act = "<c:url value='getLogin.do'/>";
	 		   
	 		frm.attr('action', act );
	 		frm.attr('method', 'post');
	 		opener.name = "외부법률";
	 		frm.attr('target', opener.name); 
	 		frm.submit();
	 		self.close(); 
	 	}
	}

	jQuery(function() {
		$('input[name="id"]').focus();

		// 2013-01-18.idealful.로그인 처리 함수 실행
		$('#loginBtn').on('click', fnLogin);
		
		// 2013-01-25.idealful.엔터키를 누르면 로그인 처리 함수 실행
		$('body').keyup(function (e){
			if(e.keyCode == 13) { //enter key의 keyCode == 13
				fnLogin();
			}
		});
	});

	// 2013-01-25.idealful.로그인 함수
	function fnLogin() {
		
		var frm = $('form[name="doLogin"]');
		var act = "<c:url value='showLogin.do'/>";
		   
		frm.attr('action', act );
		frm.attr('method', 'post');
		//opener.name = "외부법률";
		frm.attr('target', '_self');  // 타겟  자기자신 
		frm.submit();
		//self.close(); 
		
	}

	//숫자입력 유효성
	function only(Ev) {
		
	    var evCode = (window.netscape) ? Ev.which : event.keyCode;
	    
	    if(   (evCode < 48 || evCode > 57) && (evCode < 96 || evCode > 105) &&  evCode != 8 && evCode != 9   &&  evCode != 13  &&
	    	  (evCode < 37 || evCode > 40)  ){
	    	
	        if (window.netscape){  
	        	Ev.preventDefault();   
	        }else {  
	        	event.returnValue = false; alert("숫자를 입력하세요"); 
	        	document.getElementById("legalOfficialinfoRelaNo").value="";
	        };
	    };
	}
</script>
<body>
	<div align="center">
		<br/>
		<table width="481" border="0" cellpadding="0" cellspacing="0">
			<tr>
				<td align="left" valign="top">
					<img
					src="${pageContext.request.contextPath}/images/popup_table_top_01.jpg" width="481" height="25" />
				</td>
			</tr>
			<tr>
				<td height="260" align="center" valign="top"
					background="${pageContext.request.contextPath}/images/popup_table_back_01.jpg">

					<form name="doLogin">
						<table width="420" border="0" cellpadding="2"
							cellspacing="00000000" >
							<tr>
								<td colspan="5">&nbsp;</td>
							</tr>
							<tr>
								<td colspan="5" align="center"><img
									src="images/top_logo_01.jpg"></td>
							</tr>
							<tr>
								<td colspan="5">&nbsp;</td>
							</tr>
							<tr>
								<td colspan="5">&nbsp;</td>
							</tr>
							<tr>
								<td width="30">&nbsp;</td>
								<td width="80">아이디</td>
								<td><input name="legalOfficialinfoRelaNo"
									type="text" id="legalOfficialinfoRelaNo" style="width:130px;" 
									maxlength="10" onkeypress="javascript:only();" /></td>
								
								<td width="90" rowspan="2" align="left" valign="middle"><img
									id="loginBtn" src="${pageContext.request.contextPath}/images/icon_login_01.jpg" width="52"
									height="45" style="cursor: pointer;" /></td>
							</tr>
							<tr>
								<td >&nbsp;</td>
								<td width="80">비밀번호</td>
								<td width="80"><input name="legalOfficialinfoLyrPsw" style="width:130px;" 
									type="password" id="legalOfficialinfoLyrPsw" maxlength="4"
									onkeypress="javascript:only();" /></td>
								<td width="20">&nbsp;</td>
							</tr>

						</table>
					</form>
				</td>	
			<tr>
				<td align="left" valign="top"><img
					src="${pageContext.request.contextPath}/images/popup_table_bottom_01.jpg" width="481" height="26" /></td>
			</tr>
		</table>
	</div>
</body>

</html>