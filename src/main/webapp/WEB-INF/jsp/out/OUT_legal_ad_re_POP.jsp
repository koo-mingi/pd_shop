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
	<title>법률자문회신 조회</title>
</head>
<link href="../css/css.css" rel="stylesheet" type="text/css" />
<link href="../css/basic.css" rel="stylesheet" type="text/css" />
<link href="../js/jquery-ui-1.10.3.custom.css" type="text/css" rel="stylesheet"  />

<!-- JS - jQuery -->
<script src="<c:url value="../js/jquery-1.9.0.js" />"></script>
<script src="../js/jquery-1.9.1.js" type="text/javascript" ></script>
<script src="../js/jquery-ui-1.10.3.custom.js" type="text/javascript" ></script>
<link rel="stylesheet" href="//code.jquery.com/ui/1.10.4/themes/smoothness/jquery-ui.css">
<script src="//code.jquery.com/jquery-1.9.1.js"></script>
<script src="//code.jquery.com/ui/1.10.4/jquery-ui.js"></script>

<!-- JS - datepicker 한글 -->
<script src="<c:url value='../js/jquery.ui.datepicker-ko.js' />"></script>
<!-- JS - datepicker UI -->
<script src="<c:url value='../js/jquery-ui-1.8.23.custom.js' />"></script>
<script src="<c:url value='../js/common.js' />"></script>
<script src="<c:url value='../js/commonUtil.js'/>"></script>
<script type="text/javascript">
window.onload = selected;

// 초기값 세팅
function selected(){
	
	 var selec='${outVO.legaladvLawAdvCode}'; //분류코드
	 var check='${outVO.legaladvRepWtr}';  // 회신여부
	 
	 $('#legaladvLawAdvCode').val(selec);  //분류코드
	 $('input:radio[name=legaladvRepWtr]:input[value='+check+']').attr("checked", true); //회신여부
}

//달력
$(function() {
	var $calendar = $('.inputTxt2').datepicker({
		  prevText : '이전달' // prev 아이콘의 툴팁.
		, nextText : '다음달' // next 아이콘의 툴팁.
		, closeText: '닫기'
		, showButtonPanel: true
		, monthNamesShort : ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] // 월의 한글 형식.
		, dayNamesMin : ['일','월', '화', '수', '목', '금', '토'] // 요일의 한글 형식.
		, dateFormat: "yymmdd" // 텍스트 필드에 입력되는 날짜 형식.
		, currentText: '오늘 날짜' // 오늘 날짜로 이동하는 버튼 패널
		, showMonthAfterYear: true // 월, 년순의 셀렉트 박스를 년,월 순으로 바꿔준다. 
		, changeYear: true // 년을 바꿀 수 있는 셀렉트 박스를 표시한다.
		, changeMonth: true // 월을 바꿀수 있는 셀렉트 박스를 표시한다.
		
	});
});


function only(Ev) {
	
var evCode = (window.netscape) ? Ev.which : event.keyCode;
    
    if(   (evCode < 48 || evCode > 57) && (evCode < 96 || evCode > 105) &&  evCode != 8 && evCode != 9   &&  evCode != 13  &&
    	  (evCode < 37 || evCode > 40)  ){
    	
        if (window.netscape){  Ev.preventDefault();   
        }else {  event.returnValue = false; alert("숫자를 입력하세요"); document.getElementById("legaladvLawAdvReqNo").value="";};
    };
}

//검색 조회
function getSearch( ){
	
	var f = document.OUT_legal_ad_re_POP;
	var startDate = $("input[name=legaladvReqDate1]").val();
	var endDate= $("input[name=legaladvReqDate2]").val();
    if( startDate > endDate){
    	alert("날짜를 확인해주세요");
    	$("input[name=legaladvReqDate1]").val("");
    	$("input[name=legaladvReqDate2]").val("");
    	return false;
    }
    var evCode = $("input[name=legaladvLawAdvReqNo]").val();
    if(/[^0123456789]/g.test(evCode)) {
    	alert("숫자를 입력하세요");
    	document.getElementById("legaladvLawAdvReqNo").value="";
    	return false;
    }
    
    f.action = "<c:url value='OUT_legal_ad_re_POP_WEB.do'/>";
	f.submit();
}
function clo(reqNo){
	window.opener.from_pop(reqNo);
	window.close();
}

//페이징 번호 클릭시
function linkPage(pageNo) {
	
	document.OUT_legal_ad_re_POP.pageIndex.value=pageNo;  // 조회하려는 페이지 넘버
	document.OUT_legal_ad_re_POP.action = "<c:url value='OUT_legal_ad_re_POP_WEB.do'/>";
	document.OUT_legal_ad_re_POP.submit(); 
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
		<h1><img src="images/pop_tit1.png" alt="" /></h1>
		<form:form commandName="outVO" name="OUT_legal_ad_re_POP" method="post">
		<div class="seachTable1">
		
			<table class="table_V1">
				<colgroup>
					<col width="13%" />
					<col width="25%" />
					<col width="13%" />
					<col width="27%" />
					<col width="13%" />
					<col width="*" />
				</colgroup>
				<tr>
					<th>의뢰번호</th>
					<td>
						<input type="text" name="legaladvLawAdvReqNo" id="legaladvLawAdvReqNo" maxlength="10"  onkeypress="javascript:if( event.keyCode==13){getSearch();}else{only();}" 
								onFocus="this.value='';return true;" value="${outVO.legaladvLawAdvReqNo}"/>
					</td>
					<th>의뢰일자</th>
					<td colspan="3">
						<input type="text" name=legaladvReqDate1 id="legaladvReqDate1" value="${outVO.legaladvReqDate1 }" class="inputTxt2" maxlength="8" onkeyup="only();" onkeypress="only();" /> 
						  - <input type="text" name=legaladvReqDate2 id="legaladvReqDate2" value="${outVO.legaladvReqDate2 }" class="inputTxt2" maxlength="8" onkeyup="only();" onkeypress="only();"/>
					</td>
				</tr>
				<tr>
					<th>법률자문구분</th>
					<td>
						<select name="legaladvLawAdvCode" id=legaladvLawAdvCode>
							<option value="" selected>전체</option>
							<option value="001">보상손사자문</option>
							<option value="002">계약관련자문</option>
							<option value="003">일반자문</option>
						</select>
					</td>
					<th>회신여부</th>
					<td id="legaladvRepWtr">
						<input type="radio" name="legaladvRepWtr" value="" checked/> 전체 
						<input type="radio" name="legaladvRepWtr" value="Y"/> 회신
						<input type="radio" name="legaladvRepWtr" value="N"/> 미회신
					</td>
					<td colspan="2" style="border:none;">
						<input type="image" name="search" src="images/search_btn1.gif" onclick="getSearch();"></input>
<!-- 						<input type="image" name="reset" src="images/reset_btn1.gif" onclick="getSearch();"></input> -->
<!-- 						<a href="#" onclick="javascript:sub()"><img src="images/search_btn1.gif" alt="" /></a> -->
						<a href="OUT_legal_ad_re_POP_WEB.do" ><img src="images/reset_btn1.gif" alt="" /></a>
					</td>
				</tr>
			</table>
		

		</div>
	
	 <input type=hidden name=legaladvOutReqLyrid id=legaladvOutReqLyrid value="2013082601"/>
		<table class="table_V2">
			<colgroup>
				<col width="13%" />
				<col width="13%" />
				<col width="*" />
				<col width="10%" />
				<col width="12%" />
				<col width="13%" />
				<col width="12%" />
			</colgroup>
			<tr>
				<th>의뢰번호</th>
				<th>법률자문구분</th>
				<th>의뢰제목</th>
				<th>회신여부</th>
				<th>의뢰일자</th>
				<th>의뢰담당자</th>
				<th>회신일자</th>
			</tr>
	<c:if test="${not empty outListPop}">
		<c:forEach var="outVo" items="${outListPop}" >	
	
			<tr onmouseover="onMenu(this)" onmouseout="outMenu(this)">
				
				<td onclick="javascript:clo(${outVo.legaladvLawAdvReqNo});" style="cursor:pointer">
					${outVo.legaladvLawAdvReqNo}
<%-- 					<a href="OUT_legal_ad_re.do?reqNo=${outVo.legaladvLawAdvReqNo}">${outVo.legaladvLawAdvReqNo}</a> --%>
				</td>
				
<%-- 				<td>${outVo.legaladvLawAdvCode}</td> --%>
				 <c:choose>
					 <c:when test ="${outVo.legaladvLawAdvCode == '001'}">
					   <td onclick="javascript:clo(${outVo.legaladvLawAdvReqNo});" style="cursor:pointer">보상손사자문</td>
					 </c:when>
					 <c:when test ="${outVo.legaladvLawAdvCode == '002'}">
					  <td onclick="javascript:clo(${outVo.legaladvLawAdvReqNo});" style="cursor:pointer">계약관련자문</td>
					 </c:when>
					 <c:otherwise>
					 <td onclick="javascript:clo(${outVo.legaladvLawAdvReqNo});" style="cursor:pointer">일반자문</td>
					 </c:otherwise>
				</c:choose>
				<td class="txt" onclick="javascript:clo(${outVo.legaladvLawAdvReqNo});" style="cursor:pointer">${outVo.legaladvOutReqTit}</td>
				<td onclick="javascript:clo(${outVo.legaladvLawAdvReqNo});" style="cursor:pointer">${outVo.legaladvRepWtr}</td>
				<td onclick="javascript:clo(${outVo.legaladvLawAdvReqNo});" style="cursor:pointer">${outVo.legaladvOutReqDate}</td>
				<td onclick="javascript:clo(${outVo.legaladvLawAdvReqNo});" style="cursor:pointer">${outVo.reqMgrName}</td>
				<td onclick="javascript:clo(${outVo.legaladvLawAdvReqNo});" style="cursor:pointer">${outVo.legaladvRepDate}</td>
			</tr>
	
		</c:forEach>
	</c:if>		
	<c:if test="${empty outListPop}">
		
		<tr align='center'>						
					<td colspan="7" align="center" ><font size = 3>조회된사항이 없습니다.</font></td>
		</tr>
		
	</c:if>
		</table>
	
			<p class="page">
			  <c:if test="${not empty paginationInfo}">
				<font color="blue">
				  <ui:pagination paginationInfo="${paginationInfo}" type="text" jsFunction="linkPage" />
			      <form:hidden id="pageIndex" path="pageIndex"  />
			    </font>
			  </c:if>
			</p>
			</form:form>
	</div>
	
</body>
</html>