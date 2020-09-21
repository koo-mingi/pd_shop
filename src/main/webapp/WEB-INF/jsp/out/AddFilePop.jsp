<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="ui" uri="http://egovframework.gov/ctl/ui"%>     
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>

<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
<link rel="stylesheet" type="text/css" href="css/css.css" />
<title>첨부파일 조회</title>


<link href="../css/css.css" rel="stylesheet" type="text/css" />
<link href="../js/jquery-ui-1.10.3.custom.css" type="text/css" rel="stylesheet"  />

<!-- JS - jQuery -->
<script src="../js/jquery-1.9.1.js" type="text/javascript" ></script>
<script src="../js/jquery-ui-1.10.3.custom.js" type="text/javascript" ></script>
<!-- JS - datepicker 한글 -->
<script src="<c:url value='../js/jquery.ui.datepicker-ko.js' />"></script>
<!-- JS - datepicker UI -->
<script src="<c:url value='../js/jquery-ui-1.8.23.custom.js' />"></script>
<script src="<c:url value='../js/common.js' />"></script>
<script src="<c:url value='../js/commonUtil.js'/>"></script>

<script type="text/javascript">
	function upload(){
		alert($("input[name=filename]").val());
		
		fileUp.action = "<c:url value='AddFilePopUp.do?'/>";
		fileUp.submit();
	}

	function linkPage(pageNo) {
		document.AddFilePop.pageIndex.value=pageNo;
		document.AddFilePop.action = "<c:url value='AddFilePop.do'/>";
		document.AddFilePop.submit();
	} 
</script>

</head>
<body>
	<div id="popwrap">
		<form:form commandName="outVO" name="AddFilePop" method="post">
			<h1>
				<img src="images/pop_tit2.png" alt="" />
			</h1>
			<table class="table_V2 mt10">
				<colgroup>
					<col width="8%" />
					<col width="12%" />
					<col width="*" />
					<col width="11%" />
					<col width="13%" />
					<col width="13%" />
				</colgroup>
				<tr>
					<th>No.</th>
					<th>일련번호</th>
					<th>파일이름</th>
					<th>크기</th>
					<th>등록일자</th>
					<th>확장자</th>
				</tr>
				<c:if test="${not empty addFileList}">
					<c:forEach var="outVo" items="${addFileList}" varStatus="status">
						<tr>
							<td>${status.index+1}</td>
							<td>${outVo.addFileRelSeq}</td>
							<td class="txt">${outVo.addFileSerFileName}</td>
							<td>${outVo.addFileSize}</td>
							<td>${outVo.addFileRegDate}</td>
							<td>${outVo.addFilePcFileExt}</td>
						</tr>
					</c:forEach>
				</c:if>	
				<c:if test="${empty addFileList}">
					<tr>
						<td colspan="6" align="center">
							<font size="3">조회된 내용이 없습니다</font>
						</td>
					</tr>
				</c:if>	
			</table>
			<p class="page">
				<c:if test="${not empty paginationInfo}">
					<font color="blue">
						<ui:pagination paginationInfo="${paginationInfo}" type="text" jsFunction="linkPage" />
					    <form:hidden path="pageIndex" />
					</font>
				</c:if>
			</p>
		</form:form>
		<form name="fileUp">
			<p class="fileBtn">
				<input type="file" name="file" size="40"></input>
				<a href="#" onclick="upload();">	
					<img src="images/file_btn1.gif" alt="" />	
				</a>
				<a href="#">
					<img src="images/file_btn2.gif" alt="" />
				</a>
				<a href="#">
					<img src="images/file_btn3.gif" alt="" />
				</a>
			</p>
		</form>	
	</div>
</body>
</html>