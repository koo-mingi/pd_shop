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

<meta http-equiv="Content-Type" content="text/html; charset=utf-8"  />
<title>서증관리</title>

<link rel="stylesheet" href="//code.jquery.com/ui/1.10.4/themes/smoothness/jquery-ui.css">
<script src="//code.jquery.com/jquery-1.9.1.js"></script>
<script src="//code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
<link rel="stylesheet" href="/resources/demos/style.css">
<script type="text/javascript" charset="utf-8" src="jquery.mask.min.js"></script>
<script type="text/javascript">

	//초기값 세팅
	window.onload = function(){
		
		$('#lawsuitAdmNo').val('${lawsuitList[0].lawsuitAdmNo}');  //분류코드
		var caseCode = '${lawsuitList[0].lawsuitCaseTyCode}'; //사건유형
		var sepCode = '${lawsuitList[0].lawsuitCpPladefSepcode}'; // 원피고구분
		
		$('#CaseTyCode').val(caseCode);
		$('#Sepcode').val(sepCode);   
		$('#CortCode').val('${lawsuitList[0].lawsuitAplCortCode}');	
	};

	//파일첨부
	function upload(){
		
		var f = document.OUT_edoc_adm_save;

		if(f.edocAdmSeq.value==''){
			alert("사건호증 추가후 파일을 첨부하세요");
			return false;
		}
		if(f.edocAdmHozSepcode1.value==''&&f.edocAdmHozSepcode2.value==''){
			  alert("호증구분을 입력하세요");
			  f.edocAdmHozSepcode1.focus();
			  return false;
		}
	    if(f.edocAdmHozNo.value==''){
			  alert("호증번호를 입력하세요");
			  f.edocAdmHozNo.focus();
			  return false;
		}
	    if(f.edocAdmName.value==''){
			  alert("명칭을 입력하세요");
			  f.edocAdmName.focus();
			  return false;
		}
	    if(f.edocAdmWritDate.value==''){
			  alert("작성일을 입력하세요");
			  f.edocAdmWritDate.focus();
			  return false;
		}

	    var PopWindow = "파일추가";
	    var hwid=( ( screen.width ) ? ( screen.width-800 )/2:0 ) -70;
	   
	    window.open("",PopWindow,'width=800,height=420,toolbar=no,status=no,menubar=no,resizable=no,top=200,left='+hwid ); 
	   
	    f.target = PopWindow;
	    f.action = "AddFilePop2.do";
	    f.submit();
	} 

	//상세조회 ( 수정예약 )
	function getDetail(lawsuitAdmNo,edocAdmSeq){
	   $.ajax({
			cache: false
			, timeout: 5000
			, type: "POST"
			, url : "OUT_edoc_adm_DE_WEB.do"
			, data: {  
				lawsuitAdmNo : lawsuitAdmNo      // 의뢰번호
				,edocAdmSeq : edocAdmSeq
		    }
			, success : function(data) {
				var check=data.outedoc.edocAdmHozSepcode;
					
				if(data.outedoc.edocAdmHozSepcode=="001"){
					// 	$('#edocAdmHozSepcode1').attr('checked',true);
					document.OUT_edoc_adm_save.edocAdmHozSepcode[0].checked=true;
				}else if(data.outedoc.edocAdmHozSepcode=="002"){
					document.OUT_edoc_adm_save.edocAdmHozSepcode[1].checked=true;
				}

				$('#lawsuitAdmNo').val(data.outedoc.lawsuitAdmNo);
				$('#edocAdmSeq').val(data.outedoc.edocAdmSeq); 
				$('#edocAdmHozNo').val(data.outedoc.edocAdmHozNo); 
				$('#edocAdmHozkindSepcode').val(data.outedoc.edocAdmHozkindSepcode);
				$('#edocAdmName').val(data.outedoc.edocAdmName); 
				$('#edocAdmWritDate').val(data.outedoc.edocAdmWritDate); 
					 
			}
			, error: function(xhr, textStatus, errorThrown) {
    			console.log(errorThrown);
    		}
    		, complete: function() {  setDisabled();
    			document.location.hash='section'; }  // 성공시 페이지 포커스
			});  
	} 

	//준비서면 disalbled
	function setDisabled(){
		 
		$('#edocAdmHozSepcode1').attr('disabled', false);
		$('#edocAdmHozSepcode2').attr('disabled', false);
		$('#edocAdmHozNo').attr('disabled', false);
	    $('#edocAdmHozkindSepcode').attr('disabled', false);
	    $('#edocAdmName').attr('disabled', false);
	    $('#edocAdmWritDate').attr('disabled', false);
	    $('#insert').attr('disabled', false);
	    $('#delete').attr('disabled', false);
	    $('#fileAdd').attr('disabled', false);
	    document.location.hash='section';
	}

	//사건호증 신규추가
	function setInsert(){
		 $('#lawsuitAdmNo').val("${lawsuitList[0].lawsuitAdmNo}");
		 $('#edocAdmSeq').val("");
		 $('#edocAdmHozSepcode1').val("001"); 
		 $('#edocAdmHozSepcode1').attr('checked',true);
		 $('#edocAdmHozNo').val("");
		 $('#edocAdmHozkindSepcode').val("001");
	     $('#edocAdmName').val("");
	     $('#edocAdmWritDate').val("");
	     
	     $('#edocAdmHozSepcode1').attr('disabled', false);
	     $('#edocAdmHozSepcode2').attr('disabled', false);
	     $('#edocAdmHozNo').attr('disabled', false);
	     $('#edocAdmHozkindSepcode').attr('disabled', false);
	     $('#edocAdmName').attr('disabled', false);
	     $('#edocAdmWritDate').attr('disabled', false);
	     $('#insert').attr('disabled', false);
	     $('#delete').attr('disabled', true);
	     $('#fileAdd').attr('disabled', false);
	    
	} 

	// 사건호증 추가
	function sub( ){
		var f = document.OUT_edoc_adm_save;

		if(f.edocAdmHozSepcode1.value==''&&f.edocAdmHozSepcode2.value==''){
			  alert("호증구분을 입력하세요");
			  f.edocAdmHozSepcode1.focus();
			  return false;
		}
		if(f.edocAdmHozNo.value==''){
			  alert("호증번호를 입력하세요");
			  f.edocAdmHozNo.focus();
			  return false;
		}
		 if(f.edocAdmName.value==''){
			  alert("명칭을 입력하세요");
			  f.edocAdmName.focus();
			  return false;
		}
		if(f.edocAdmWritDate.value==''){
			  alert("작성일을 입력하세요");
			  f.edocAdmWritDate.focus();
			  return false;
		}
		if(confirm("저장하시겠습니까?")){
			alert("저장되었습니다");
			
		    f.action = "<c:url value='OUT_edoc_adm_save_WEB.do'/>";
			f.submit();
		}	
	}

	//사건호증 삭제
	function edocDelete(){
		var f = document.OUT_edoc_adm_save;

		if(f.lawsuitAdmNo.value==''||f.edocAdmSeq.value==''){
			alert("사건 호증을 선택하세요");
			return false;
		}
		if(confirm("삭제하시겠습니까?")){
			alert("삭제되었습니다");
			
		    f.action = "<c:url value='OUT_edoc_adm_delete_WEB.do'/>";
			f.submit();
		}
	}

	//달력
	// $(function() {	
	// 	var $calendar = $('.inputTxt2').datepicker({
	// 		  prevText : '이전달' // prev 아이콘의 툴팁.
	// 		, nextText : '다음달' // next 아이콘의 툴팁.
	// 		, buttonImageOnly: true
	// 	    , selectOtherMonths: true
	// 	   	, closeText: '닫기'
	// 	   	, buttonText:"달력"
	// 	    , showButtonPanel: true
	// 		, monthNamesShort : ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] // 월의 한글 형식.
	// 		, dayNamesMin : ['일', '월', '화', '수', '목', '금', '토'] // 요일의 한글 형식.
	// 		, dateFormat: "yymmdd" // 텍스트 필드에 입력되는 날짜 형식.
	//  		, currentText: '오늘 날짜' // 오늘 날짜로 이동하는 버튼 패널
	// 		, showMonthAfterYear: true // 월, 년순의 셀렉트 박스를 년,월 순으로 바꿔준다. 
	// 		, changeYear: true // 년을 바꿀 수 있는 셀렉트 박스를 표시한다.
	// 		, changeMonth: true // 월을 바꿀수 있는 셀렉트 박스를 표시한다.
	// 		, buttonImage: '&amp;lt;?=$g4[path]?&amp;gt;/img/calendar.gif'
			
	// 	});
	// });

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
	// $(function() {
	//     $( "#edocAdmWritDate" ).datepicker({
	//     	prevText : '이전달' // prev 아이콘의 툴팁.
	//       , nextText : '다음달' // next 아이콘의 툴팁.
	//       , monthNamesShort : ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] // 월의 한글 형식.
	//       , dayNamesMin : ['일', '월', '화', '수', '목', '금', '토'] // 요일의 한글 형식.
	//   	  , dateFormat: "yymmdd" // 텍스트 필드에 입력되는 날짜 형식.
	//       , closeText: '닫기'
	//     });
	//   });

	//호증번호 숫자만 입력
	function only(Ev) {
		
		var evCode = (window.netscape) ? Ev.which : event.keyCode;
		    
		    if(   (evCode < 48 || evCode > 57) && (evCode < 96 || evCode > 105) &&  evCode != 8 && evCode != 9   &&  evCode != 13  &&
		    	  (evCode < 37 || evCode > 40)  ){
		    	
		        if (window.netscape){  
		        	Ev.preventDefault();   
		        }else {  
		        	event.returnValue = false; 
		        	alert("숫자를 입력하세요"); 
		        	document.getElementById("edocAdmHozNo").value='';
					
		        };
		    };
		}

	//작성일 숫자만 입력
	function only1(Ev) {
		
		var evCode = (window.netscape) ? Ev.which : event.keyCode;
		    
		    if(   (evCode < 48 || evCode > 57) && (evCode < 96 || evCode > 105) &&  evCode != 8 && evCode != 9   &&  evCode != 13  &&
		    	  (evCode < 37 || evCode > 40)  ){
		    	
		        if (window.netscape){  
		        	Ev.preventDefault();   
		        }else {  
		        	event.returnValue = false; 
		        	alert("숫자를 입력하세요"); 
		        	document.getElementById("edocAdmWritDate").value='';
		        };
		    };
		}
	//팝업창 닫을시 부모창 호출
	function from_pop(reqNo,code){
		location.href="OUT_edoc_adm_WEB.do?reqNo="+reqNo+"&code="+code;
	}

	//페이지번호
	function linkPage1(pageNo) {
		document.OUT_edoc_adm.pageIndex1.value=pageNo;
	  	document.OUT_edoc_adm.pageIndex2.value=0;
		document.OUT_edoc_adm.action = "<c:url value='OUT_edoc_adm_WEB.do'/>";
		document.OUT_edoc_adm.submit();
	} 

	//페이지번호
	function linkPage2(pageNo) {
	 	document.OUT_edoc_adm.pageIndex1.value=0;
		document.OUT_edoc_adm.pageIndex2.value=pageNo;
		document.OUT_edoc_adm.action = "<c:url value='OUT_edoc_adm_WEB.do'/>";
		document.OUT_edoc_adm.submit();
	} 

	//테이블 선택 row bg 변경
	function onMenu(obj){
		obj.style.background = "#b0e0e6";
	}

	function outMenu(obj){
		obj.style.background = "#ffffff";
	}


	//검색 팝업창 open
	function getSearch(){
	  
	   var f = document.OUT_edoc_adm;
	   var PopWindow = "소송관리번호검색";
	   var hwid=( ( screen.width ) ? ( screen.width-800 )/2:0 ) -70;
	   
	   window.open("",PopWindow,'width=800,height=380,toolbar=no,status=no,menubar=no,resizable=no,top=200,left='+hwid ); 
	   
	   f.target = PopWindow;
	   f.action = "OUT_PRE_ENT_IWR_POP_WEB.do";
	   f.submit();
	}

</script>

</head>
<body>
	
<div id="contents">		
		
	<div>
	<form:form commandName="outVO" name="OUT_edoc_adm" method="post">
	<input type="hidden"  name="legaladvOutReqLyrid" id=legaladvOutReqLyrid value="${sessionScope.id}">
		<h2 class="box" align="left">
			<img src="images/sub_tit5.png" alt="" />
		</h2>
		<div class="seachTable1">
			<table class="table_V1">
				<colgroup>
					<col width="20%" />
					<col width="*" />
				</colgroup>
			<c:if test="${not empty lawsuitList}">
				<c:forEach var="outVo" items="${lawsuitList}" >	
				<tr>
					<th>소송관리번호</th>
					<td>
						<input type="text" id="lawsuitAdmNo" name="lawsuitAdmNo" value="${outVo.lawsuitAdmNo}" readonly="readonly"/>
						<a href="#" onclick="getSearch();" >
							<img src="images/search_btn1.gif" alt="" />
						</a>
						<a href="OUT_edoc_adm_WEB.do">
							<img src="images/reset_btn1.gif" alt="" />
						</a>
					</td>
				</tr>
				</c:forEach>
			</c:if>	
			<c:if test="${empty lawsuitList}">
				<tr>
					<th>소송관리번호</th>
					<td>
						<input type="text" value="" disabled="disabled"/>
						<a href="#" onclick="getSearch();" >
							<img src="images/search_btn1.gif" />
						</a>
						<a href="#">
							<img src="images/reset_btn1.gif" />
						</a>
					</td>
				</tr>
			</c:if>
			</table>
		</div>

		<h3 class="tit" align="left">소송기본사항</h3>
		<div class="seachTable2">
			<table class="table_V1">
				<colgroup>
					<col width="13%" />
					<col width="20%" />
					<col width="13%" />
					<col width="20%" />
					<col width="13%" />
					<col width="*" />
				</colgroup>
				<c:if test="${not empty lawsuitList}">
					<c:forEach var="outVo" items="${lawsuitList}" >		
						<tr>
							<th>신청사건번호</th>
							<td>
								<input type="text" name="lawsuitAplCaseCode" value="${outVo.lawsuitAplCaseCode}" disabled="disabled"/>
							</td>
							<th>사건유형</th>
							<td>
								<select id="CaseTyCode" name="lawsuitCaseTyCode"  disabled="disabled">
									<option value="" selected="selected"></option>
									<option value="001">민사</option>
									<option value="002">형사</option>
									<option value="003">특허</option>
									<option value="004">행정</option>
									<option value="005">가사</option>
									<option value="099">기타</option>
								</select>
							</td>
							<th>소제기의뢰번호</th>
							<td>
								<input type="text" name="lawRaisreqNo" value="${outVo.lawRaisreqNo}" disabled="disabled"/>
							</td>
						</tr>
						<tr>
							<th>당사원피고구분</th>
							<td>
								<select id="Sepcode" name="lawsuitCpPladefSepcode" disabled="disabled">
									<option value="" selected="selected"></option>
									<option value="001">원고</option>
									<option value="002">피고</option>
								</select>
							</td>
							<th>소송제기사유</th>
							<td colspan="3">
								<input type="text" style="width:485px;" name="lawsuitRaisRea" value="${outVo.lawsuitRaisRea}" disabled="disabled"/>
							</td>
						</tr>
						<tr>
							<th>피고</th>
							<td>
								<input type="text" name="pladefName" value="${outVo.pladefName}" disabled="disabled"/>
							</td>
							<th>신청법원</th>
							<td colspan="3">
								<select id="CortCode" name="instAdmCortCode" disabled="disabled">
								  <option value="" selected="selected"></option>
									<c:forEach var="code" items="${cortCode}" >
									  <option value="${code.codeNo}">${code.codeName}</option>
								   </c:forEach>
								</select>
							</td>
						</tr>
					</c:forEach>
				</c:if>		
				<c:if test="${empty lawsuitList}">
					<tr>
						<th>신청사건번호</th>
						<td><input type="text" disabled="disabled"/></td>
						<th>사건유형</th>
						<td>
							<select disabled="disabled">
								<option value="">전체</option>
							</select>
						</td>
						<th>소제기의뢰번호</th>
						<td>
							<input type="text" disabled="disabled"/>
						</td>
					</tr>
					<tr>
						<th>당사원피고구분</th>
						<td>
							<select disabled="disabled">
								<option value="">전체</option>
							</select>
						</td>
						<th>소송제기사유</th>
						<td colspan="3">
							<input type="text" style="width:485px;" disabled="disabled"/>
						</td>
					</tr>
					<tr>
						<th>피고</th>
						<td>
							<input type="text" disabled="disabled"/>
						</td>
						<th>신청법원</th>
						<td colspan="3">
							<select disabled="disabled">
								<option value="">전체</option>
							</select>
						</td>
					</tr>
				</c:if>
			</table>
		</div>

		<h3 class="tit" align="left">사건호증목록</h3>
		<div class="management clearfix">
			
			<div class="left">
				<table class="table_V2">
					<colgroup>
						<col width="8%" />
						<col width="18%" />
						<col width="20%" />
						<col width="*" />
					</colgroup>
					<tr>
						<th colspan="4">갑호증</th>
					</tr>
					<tr>
						<th>No.</th>
						<th>번호</th>
						<th>종류</th>
						<th>명칭</th>
					</tr>
					<%int i=1; %>
					<c:if test="${not empty edocAdmList1}">
						<c:forEach var="outVo" items="${edocAdmList1}" varStatus="status">	
							<%-- 	<c:choose> --%>
							<%-- 	<c:when test ="${outVo.edocAdmHozSepcode == '001'}"> --%>
						 	<tr onmouseover="onMenu(this)" onmouseout="outMenu(this)">
								<td style='cursor:pointer;' onclick="javascript:getDetail('${outVo.lawsuitAdmNo}','${outVo.edocAdmSeq}');"><%=i++ %></td>
								<td style='cursor:pointer;' onclick="javascript:getDetail('${outVo.lawsuitAdmNo}','${outVo.edocAdmSeq}');">${outVo.edocAdmHozNo}</td>
								<c:choose>
									<c:when test="${outVo.edocAdmHozkindSepcode=='001'}">
										<td style='cursor:pointer;' onclick="javascript:getDetail('${outVo.lawsuitAdmNo}','${outVo.edocAdmSeq}');">첨부문서등록</td>
									</c:when>
									<c:when test="${outVo.edocAdmHozkindSepcode=='002'}">
										<td style='cursor:pointer;' onclick="javascript:getDetail('${outVo.lawsuitAdmNo}','${outVo.edocAdmSeq}');">보험금지급사실확인서</td>
									</c:when>
									<c:when test="${outVo.edocAdmHozkindSepcode=='003'}">
										<td style='cursor:pointer;' onclick="javascript:getDetail('${outVo.lawsuitAdmNo}','${outVo.edocAdmSeq}');">사진</td>
									</c:when>
									<c:otherwise>
										<td style='cursor:pointer;' onclick="javascript:getDetail('${outVo.lawsuitAdmNo}','${outVo.edocAdmSeq}');">기타</td>
									</c:otherwise>
								</c:choose>
								<td style='cursor:pointer;' onclick="javascript:getDetail('${outVo.lawsuitAdmNo}','${outVo.edocAdmSeq}');">${outVo.edocAdmName}</td>
							</tr>
							<%-- </c:when> --%>
							<%-- </c:choose>		  --%>
						</c:forEach>
					</c:if>		
					<c:if test="${empty edocAdmList1}">
						<tr>
							<td colspan="4">
								<font size="3">조회된 내용이 없습니다</font>
							</td>
						</tr>
					</c:if>
				</table>
				<p class="page">
					<c:if test="${not empty paginationInfo1}">
						<font color="blue">
							<ui:pagination paginationInfo="${paginationInfo1}" type="text" jsFunction="linkPage1" />
						    <form:hidden path="pageIndex1" />
						</font>
					</c:if>
				</p>
			</div>
				
			
			<div class="right">
				<table class="table_V2">
					<colgroup>
						<col width="8%" />
						<col width="18%" />
						<col width="20%" />
						<col width="*" />
					</colgroup>
					<tr>
						<th colspan="4">을호증</th>
					</tr>
					<tr>
						<th>No.</th>
						<th>번호</th>
						<th>종류</th>
						<th>명칭</th>
					</tr>
					<%int j=1; %>
					<c:if test="${not empty edocAdmList2}">
						<c:forEach var="outVo" items="${edocAdmList2}" varStatus="status">	
						<%-- <c:choose> --%>
						<%-- <c:when test ="${outVo.edocAdmHozSepcode == '002'}"> --%>
						 	<tr onmouseover="onMenu(this)" onmouseout="outMenu(this)">
								<td style='cursor:pointer;' onclick="javascript:getDetail('${outVo.lawsuitAdmNo}','${outVo.edocAdmSeq}');"><%=j++ %></td>
								<td style='cursor:pointer;' onclick="javascript:getDetail('${outVo.lawsuitAdmNo}','${outVo.edocAdmSeq}');">${outVo.edocAdmHozNo}</td>
								<c:choose>
									<c:when test="${outVo.edocAdmHozkindSepcode=='001'}">
										<td style='cursor:pointer;' onclick="javascript:getDetail('${outVo.lawsuitAdmNo}','${outVo.edocAdmSeq}');">첨부문서등록</td>
									</c:when>
									<c:when test="${outVo.edocAdmHozkindSepcode=='002'}">
										<td style='cursor:pointer;' onclick="javascript:getDetail('${outVo.lawsuitAdmNo}','${outVo.edocAdmSeq}');">보험금지급사실확인서</td>
									</c:when>
									<c:when test="${outVo.edocAdmHozkindSepcode=='003'}">
										<td style='cursor:pointer;' onclick="javascript:getDetail('${outVo.lawsuitAdmNo}','${outVo.edocAdmSeq}');">사진</td>
									</c:when>
									<c:otherwise>
										<td style='cursor:pointer;' onclick="javascript:getDetail('${outVo.lawsuitAdmNo}','${outVo.edocAdmSeq}');">기타</td>
									</c:otherwise>
								</c:choose>
								<td style='cursor:pointer;' onclick="javascript:getDetail('${outVo.lawsuitAdmNo}','${outVo.edocAdmSeq}');">${outVo.edocAdmName}</td>
							</tr>
<%-- 						 </c:when> --%>
<%-- 					</c:choose>	 --%>
				</c:forEach>
			</c:if>		
			<c:if test="${empty edocAdmList2}">
					<tr>
						<td colspan="4"><font size="3">조회된 내용이 없습니다</font></td>
					</tr>
			</c:if>
					
				</table>
				<p class="page">
					<c:if test="${not empty paginationInfo2}">
						<font color="blue">
							<ui:pagination paginationInfo="${paginationInfo2}" type="text" jsFunction="linkPage2" />
						    <form:hidden path="pageIndex2" />
						</font>
					</c:if>
				</p>	
			</div>
			</div>
			</form:form>
		</div>
		 <!-- 상세정보 조회 및 입력 수정 -->
		 <div align="right">
		  
		    <c:if test="${not empty lawsuitList}">
		       <a href="#" onclick="javascript:setInsert(); return false;"><img src="images/icon_add_03.gif" alt="" /></a>
		    </c:if>
		 </div>
		<h3 class="tit" align="left">사건호증추가</h3>
		<div class="seachTable2">
			<form name="OUT_edoc_adm_save" method="post">
				<table class="table_V1">
					<colgroup>
						<col width="13%" />
						<col width="20%" />
						<col width="13%" />
						<col width="20%" />
						<col width="13%" />
						<col width="*" />
					</colgroup>
					<tr>
						<th><a name="section"></a>호증구분</th>
						<td>
							
							<input type="hidden" id="lawsuitAdmNo" name="lawsuitAdmNo" value="${lawsuitList[0].lawsuitAdmNo}"/>
							<input type="hidden" id="edocAdmSeq" name="edocAdmSeq" />
							<input type="radio" id="edocAdmHozSepcode1" name="edocAdmHozSepcode" value="001" disabled="disabled" /> 갑호증
							<input type="radio" id="edocAdmHozSepcode2" name="edocAdmHozSepcode" value="002" disabled="disabled"/> 을호증
						</td>
						<th>호증번호</th>
						<td>
							<input type="text" maxlength="10" id="edocAdmHozNo" name="edocAdmHozNo" onkeyup="only();" disabled="disabled"/>
						</td>
						<th>호증종류</th>
						<td>
							<select id="edocAdmHozkindSepcode" name="edocAdmHozkindSepcode" disabled="disabled">
								<option value="001">첨부문서등록</option>
								<option value="002">보험금지급사실확인서</option>
								<option value="003">사진</option>
								<option value="099">기타</option>
							</select>
						</td>
					</tr>
					<tr>
						<th>명칭</th>
						<td colspan="3">
							<input type="text" maxlength="33" style="width:485px;" id="edocAdmName" name="edocAdmName" disabled="disabled"/>
						</td>
						<th>작성일</th>
						<td>
							<input type="text" id="edocAdmWritDate" name="edocAdmWritDate" class="inputTxt2" maxlength="8" onkeyup="only1();" disabled="disabled" readonly="readonly"/>
						</td>
					</tr>
					<tr>
						<th>첨부파일</th>
						<td colspan="3">
	<!-- 						<a href="#" onclick="upload(); return false;" ><img src="images/file_btn.gif" alt="" /></a> -->
							<input type="image" id="fileAdd" onclick="upload(); return false;" src="images/file_btn.gif" disabled="disabled"/>
						</td>
						<td colspan="2" style="border:none !importnat;">
							
	<!-- 						<a href="#" onclick="sub();"><img src="images/input_btn.png" alt="" /></a> -->
	<!-- 						<input type="image" src="images/icon_delete_01.gif" onclick="edocDelete();"></input> -->
							<!-- <a href="#"><img src="images/re_btn.png" alt="" /></a> --><!-- 수정버튼-->
						</td>
					</tr>
				</table>
			</form>
		</div>
		<p class="anBtn">
<%-- 			<c:if test="${not empty preiwrListSelect}"> --%>
<!-- 				<a href="#" onclick="sub();"><img src="images/save_btn.png" alt="" /></a> -->
			<input type="image" id="insert" onclick="sub(); return false;" src="images/save_btn.png" disabled="disabled"/>
			<a href="outMain.do"><img src="images/cancel_btn.png" alt="" /></a>
<!-- 				<a href="#" onclick="edocDelete();"><img src="images/icon_delete_01.gif" alt="" /></a> -->
			<input type="image" id="delete" onclick="edocDelete(); return false;" src="images/icon_delete_01.gif" disabled="disabled"/>
<!-- 				<input type="image" src="images/icon_delete_01.gif" onclick="edocDelete();"></input> -->
<%-- 			</c:if> --%>
<%-- 			<c:if test="${empty preiwrListSelect}"> --%>
<!-- 				<a href="#" onclick="alert('기본정보가 없습니다'); return false;"><img src="images/save_btn.png" alt="" /></a> -->
<!-- 				<a href="outMain.do"><img src="images/cancel_btn.png" alt="" /></a> -->
<!-- 				<input type="image" src="images/icon_delete_01.gif" onclick="preDelete();"></input> -->
<%-- 			</c:if> --%>
		</p>
	</div>

<div id="footer">

</div>
</body>
</html>