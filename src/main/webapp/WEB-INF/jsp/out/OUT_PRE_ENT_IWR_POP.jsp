<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="ui" uri="http://egovframework.gov/ctl/ui"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
	<link rel="stylesheet" type="text/css" href="css/css.css" />
	<title></title>
</head>

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
<style>
.ui-datepicker-week-end{color:red;}
.ui-datepicker-week-end.ui-state-default{color:red;}
</style>
<script type="text/javascript">

window.onload = selected;

//초기값 세팅
function selected(){
	 var selec='${lawNoVO.search1}'; 
	 $('#search1').val(selec);  
}

//조회
function getSearch(){
	var f = document.OUT_PRE_ENT_IWR_POP;
	var vali=true;
	var temp = f.search1.value; 
	/* if( temp !=0 && f.search2.value == '' ){
		
	   alert("검색값을 입력하세요");
	   vali=false;
	   return false;
	}	
	
	if(vali==true){
		
	    f.action = "OUT_lawNo_search_POP.do";
		f.submit();
	} */
	f.action = "OUT_PRE_ENT_IWR_POP_WEB.do";
	f.submit();
}
function linkPage(pageNo) {
	
	var f = document.OUT_PRE_ENT_IWR_POP;
	f.pageIndex.value=pageNo;
	f.action = "<c:url value='OUT_PRE_ENT_IWR_POP_WEB.do'/>";
	f.submit();
} 

//초기화
function resetDo(){
	
	var f = document.OUT_PRE_ENT_IWR_POP;
	 $('#search1').val(0);  
	 $('#search2').val(""); 
	f.pageIndex.value=1;
	f.action = "<c:url value='OUT_PRE_ENT_IWR_POP_WEB.do'/>";
	f.submit();
	
}

function clo(reqNo,code){
	window.opener.from_pop(reqNo,code);
	window.close();
}

function search(){
	var f=document.OUT_PRE_ENT_IWR_POP;
	if(f.search1.value=="0"){
		alert("카테고리를 선택하세요");
		f.search2.value='';
		
	}
}

//테이블 선택 row bg 변경
function onMenu(obj){
	obj.style.background = "#b0e0e6";
}
function outMenu(obj){
	obj.style.background = "#ffffff";
}
</script>

<body>
	<div id="popwrap">
		<form:form commandName="outVO" name="OUT_PRE_ENT_IWR_POP" method="post">
		<h1><img src="images/pop_tit3.png" alt="" /></h1>
		
		<div class="seachTable1">
			<div class="popSeachBox">
				<select id="search1" name="search1" id="search1">
					<option value="0">전체</option>
					<option value="1">소송관리번호</option>
					<option value="2">심급명</option>
					<option value="3">원피고명</option>
					<option value="4">소송담당자</option>
				</select>
				<input type="text" name="search2" id="search2" onkeyup="javascript:if(event.keyCode==13){getSearch();}else{search();}" value="${outVO.search2 }"/>
				<a href=# onclick='javascrrit:getSearch()'><input type="image" maxlength="100" src="images/search_btn1.gif" alt="" /></a>
				<a href=# onclick='javascrrit:resetDo()'><img src="images/reset_btn1.gif" alt="" /></a>
			</div>
		</div>
		
		<table class="table_V2">
			<colgroup>
				<col width="12%" />
				<col width="9%" />
				<col width="*" />
				<col width="11%" />
				<col width="13%" />
				<col width="13%" />
			</colgroup>
			
			<tr>
				<th>소송관리번호</th>
				<th>심급</th>
				<th>심급명</th>
				<th>원피고구분</th>
				<th>원피고명</th>
				<th>소송담당자명</th>
			</tr>
			
			<c:if test="${not empty LawNoSearch}">	
			<c:forEach var="outVo" items="${LawNoSearch}" >	
			<tr onmouseover="onMenu(this)" onmouseout="outMenu(this)">
				<td name="lawsuitAdmNo" onclick="javascript:clo(${outVo.lawsuitAdmNo},${outVo.instAdmCode});" style="cursor:pointer">${outVo.lawsuitAdmNo}</td>
<%-- 				<td>${outVo.lawsuitAdmNo}</td> --%>
<%-- 				<td name="instAdmCode" >${outVo.instAdmCode}</td> --%>
				
				 <c:choose>
					 <c:when test ="${outVo.instAdmCode == '001'}">
					   <td onclick="javascript:clo(${outVo.lawsuitAdmNo},${outVo.instAdmCode});" style="cursor:pointer">1차</td>
					 </c:when>
					 <c:when test ="${outVo.instAdmCode == '002'}">
					  <td onclick="javascript:clo(${outVo.lawsuitAdmNo},${outVo.instAdmCode});" style="cursor:pointer">2차</td>
					 </c:when>
					 <c:when test ="${outVo.instAdmCode == '003'}">
					  <td onclick="javascript:clo(${outVo.lawsuitAdmNo},${outVo.instAdmCode});" style="cursor:pointer">3차</td>
					 </c:when>
					 <c:when test ="${outVo.instAdmCode == '004'}">
					  <td onclick="javascript:clo(${outVo.lawsuitAdmNo},${outVo.instAdmCode});" style="cursor:pointer">4차</td>
					 </c:when>
					 <c:when test ="${outVo.instAdmCode == '005'}">
					  <td onclick="javascript:clo(${outVo.lawsuitAdmNo},${outVo.instAdmCode});" style="cursor:pointer">5차</td>
					 </c:when>
					 <c:when test ="${outVo.instAdmCode == '006'}">
					  <td onclick="javascript:clo(${outVo.lawsuitAdmNo},${outVo.instAdmCode});" style="cursor:pointer">6차</td>
					 </c:when>
					 <c:when test ="${outVo.instAdmCode == '007'}">
					  <td onclick="javascript:clo(${outVo.lawsuitAdmNo},${outVo.instAdmCode});" style="cursor:pointer">7차</td>
					 </c:when>
					 <c:when test ="${outVo.instAdmCode == '008'}">
					  <td onclick="javascript:clo(${outVo.lawsuitAdmNo},${outVo.instAdmCode});" style="cursor:pointer">8차</td>
					 </c:when>
					  <c:when test ="${outVo.instAdmCode == '009'}">
					  <td onclick="javascript:clo(${outVo.lawsuitAdmNo},${outVo.instAdmCode});" style="cursor:pointer">9차</td>
					 </c:when>
					 <c:otherwise>
					 <td onclick="javascript:clo(${outVo.lawsuitAdmNo},${outVo.instAdmCode});" style="cursor:pointer">10차</td>
					 </c:otherwise>
				</c:choose>
				
				<td class="txt" onclick="javascript:clo(${outVo.lawsuitAdmNo},${outVo.instAdmCode});" style="cursor:pointer">${outVo.instAdmName}</td>
				<td onclick="javascript:clo(${outVo.lawsuitAdmNo},${outVo.instAdmCode});" style="cursor:pointer">${outVo.lawsuitCpPladefSepcode}</td>
				<td onclick="javascript:clo(${outVo.lawsuitAdmNo},${outVo.instAdmCode});" style="cursor:pointer">${outVo.pladefName}</td>
				<td onclick="javascript:clo(${outVo.lawsuitAdmNo},${outVo.instAdmCode});" style="cursor:pointer">${outVo.insaName}</td>
			</tr>
			
		</c:forEach>
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
	</div>
	
</body>
</html>