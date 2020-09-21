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
<script src="<c:url value="../js/jquery-1.9.0.js" />"></script>
<script src="../js/jquery-1.9.1.js" type="text/javascript" ></script>
<script src="../js/jquery-ui-1.10.3.custom.js" type="text/javascript" ></script>
<!-- JS - datepicker 한글 -->
<script src="<c:url value='../js/jquery.ui.datepicker-ko.js' />"></script>
<!-- JS - datepicker UI -->
<script src="<c:url value='../js/jquery-ui-1.8.23.custom.js' />"></script>
<script src="<c:url value='../js/common.js' />"></script>
<script src="<c:url value='../js/commonUtil.js'/>"></script>
<%String N=request.getParameter("No"); %>

<script type="text/javascript">
	function upload(){
		if(document.fileUp.file.value==''){
			alert("파일을 첨부하세요");
			return false;
		}

		var obj=document.getElementsByName("che");

		for(var i=0;i<obj.length;i++){
			if(obj[i].checked==true){
				alert("선택된 파일의 체크를 해제하세요");
				return false;
			}
		}

		var f=document.fileUp;
		f.lawsuitAdmNo.value='${outVO.lawsuitAdmNo}';
		f.edocAdmSeq.value='${outVO.edocAdmSeq}';	
		f.action = "<c:url value='AddFilePopUp_WEB.do'/>";
		f.submit();
	}

	function linkPage(pageNo) {
		
		document.AddFilePop.pageIndex.value=pageNo;
		document.AddFilePop.action = "<c:url value='AddFilePop2.do'/>";
		document.AddFilePop.submit();
	} 

	function doOpenCheck(chk,seq,lawNo,edocSeq,fileName){
		var obj=document.getElementsByName("che");
		for(var i=0;i<obj.length;i++){
			if(obj[i]!=chk){
				obj[i].checked=false;
			}else{
				$('#addFileRelSeq').val(seq);
				$('#lawsuitNo').val(lawNo);
				$('#edocSeq').val(edocSeq);
				$('#fileName').val(fileName);
			}
		}
	}

	function deleteFile(){
		var obj=document.getElementsByName("che");
		var bool=false;

		for(var i=0;i<obj.length;i++){
			if(obj[i].checked==true){
				document.AddFilePop.action = "<c:url value='deleteFilePop2.do'/>";
				document.AddFilePop.submit();
				bool=true;
			}
		}

		if(bool==false){
			alert("파일을 선택하세요");
			return false;
		}
	}

	function downloadFile(){
		var obj=document.getElementsByName("che");
		var bool=false;

		for(var i=0;i<obj.length;i++){
			if(obj[i].checked==true){
				document.AddFilePop.action = "<c:url value='downloadFileEdoc.do'/>";
				document.AddFilePop.submit();
				bool=true;
			}
		}

		if(bool==false){
			alert("파일을 선택하세요");
			return false;
		}
	}
</script>

</head>
<body>
	<div id="popwrap">
		<form:form commandName="outVO" name="AddFilePop" method="post">
			<h1>
				<img src="images/pop_tit2.png" />
			</h1>
			<table class="table_V2 mt10">
				<colgroup>
					<col width="4%" />
					<col width="8%" />
					<col width="12%" />
					<col width="*" />
					<col width="11%" />
					<col width="12%" />
					<col width="10%" />
				</colgroup>
				<tr>
					<th>선택</th>
					<th>No.</th>
					<th>일련번호</th>
					<th>파일이름</th>
					<th>크기</th>
					<th>등록일자</th>
					<th>확장자</th>
				</tr>
				<c:if test="${not empty addFileList}">
					<input type="hidden" id="addFileRelSeq" name="addFileRelSeq" />
					<input type="hidden" id="lawsuitNo" name="lawsuitAdmNo" value="${addFileList[0].lawsuitAdmNo}"/>
					<input type="hidden" id="edocSeq" name="edocAdmSeq" value="${addFileList[0].edocAdmSeq}"/>
					<input type="hidden" id="fileName" name="addFileSerFileName" />

					<c:forEach var="outVo" items="${addFileList}" varStatus="status">
						<tr>
							<td>
								<input type="checkbox" name="che" onclick="doOpenCheck(this,'${outVo.addFileRelSeq}','${outVo.lawsuitAdmNo}','${outVo.edocAdmSeq}','${outVo.addFileSerFileName}');"></input>
							</td>
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
						<td colspan="7" align="center">
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
		<form method = "post" name="fileUp" enctype="multipart/form-data">
			<p class="fileBtn">
				<input type="file" name="file" size="40"></input>
				<input type="hidden" id="lawsuitAdmNo" name="lawsuitAdmNo"/>
				<input type="hidden" id="edocAdmSeq" name="edocAdmSeq"/>
				<a href="#" onclick="upload();">
					<img src="images/file_btn1.gif" />
				</a>
				<a href="#">
					<img src="images/file_btn2.gif" onclick="downloadFile();"/>
				</a>
				<a href="#">
					<img src="images/file_btn3.gif" onclick="deleteFile();"/>
				</a>
			</p>
		</form>	
	</div>
</body>
</html>