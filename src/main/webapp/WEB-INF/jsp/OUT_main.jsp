
<%@ page contentType="text/html; charset=utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="ui" uri="http://egovframework.gov/ctl/ui"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>

<head>
<title>PD_LAW_E</title>
<link href="${pageContext.request.contextPath}/css/css.css" rel="stylesheet" type="text/css" />
<!-- <link href="../css/basic.css" rel="stylesheet" type="text/css" /> -->
<link href="${pageContext.request.contextPath}/js/jquery-ui-1.10.3.custom.css" type="text/css" rel="stylesheet"  />

<!-- JS - jQuery -->
<script src="${pageContext.request.contextPath}/js/jquery-1.9.1.js" type="text/javascript" ></script>
<script src="${pageContext.request.contextPath}/js/jquery-ui-1.10.3.custom.js" type="text/javascript" ></script>
<!-- JS - datepicker 한글 -->
<script src="<c:url value='${pageContext.request.contextPath}/js/jquery.ui.datepicker-ko.js' />"></script>
<!-- JS - datepicker UI -->
<script src="<c:url value='${pageContext.request.contextPath}/js/jquery-ui-1.8.23.custom.js' />"></script>
<script src="<c:url value='${pageContext.request.contextPath}/js/common.js' />"></script>
<script src="<c:url value='${pageContext.request.contextPath}/js/commonUtil.js'/>"></script>
<style>
	.ui-datepicker-week-end{color:red;}
	.ui-datepicker-week-end.ui-state-default{color:red;}
	
	style1 {color: #0099CC}
	
	.linked_btn_style {
	cursor: pointer;
	}
</style>


</head> 

<body>	
    
	<div align="center">
		<div>
			<jsp:include page="/topPage.do"/>
		</div>				
			<table width="1024" cellpadding="0" cellspacing="0"  border="0">
			<tr>
				<td valign="top" >
					<div align="right" id="out_main_center">
						<jsp:include page="${center}" />			
					</div>
				</td>
			</tr>			
			</table>
		<div style="clear: both;" align="center">
			<jsp:include page="/bottomPage.do" />
		</div>
	</div>
</body>



</html>