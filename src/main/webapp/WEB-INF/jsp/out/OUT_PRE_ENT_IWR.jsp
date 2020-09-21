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
	<title>준비서면</title>
<style type="text/css">
	.linked_btn_style {
	cursor: pointer;
	}
	.number_style_right{
		text-align: right;
	}
	#page_area{
/* 		background-color: yellow; */
		text-align: center;
	}
	.page_n{
		margin-left: 5px;
	}
	
	.now_page {
		color:blue;
		font-weight: bold;
	}
	
	.list_tr:HOVER{
		background-color: #CCFFFF;
	}
</style>


</head>
<body>

		
	<div id="contents">
	
		<div>
			<form:form commandName="outVO" name="OUT_PRE_ENT_IWR" method="post">
				<h2 class="box" align="left"><img src="images/sub_tit4.png" alt="" /></h2>
				
				<div class="seachTable1 clearfix">
					<div class="tableZone">
						<%-- 	<form:form commandName="outVO" name="instinsert" method="post"> --%>
	 					<%--     <form name="instinsert" method="post"> --%>
						<table class="table_V1">
							<colgroup>
								<col width="15%" />
								<col width="40%" />
								<col width="15%" />
								<col width="*" />
							</colgroup>
							<c:if test="${not empty preiwrListSelect}">
								<c:forEach var="outVo" items="${preiwrListSelect}" >	
									<tr>
										<th>소송관리번호</th>
										<td>
											<input type="text" id="lawsuitAdmNo" name="lawsuitAdmNo" value="${outVo.lawsuitAdmNo}" readonly="readonly"/>
											<img src="images/search_btn1.gif" id="lawsuitAdmNo_search_btn" class="linked_btn_style" />
										</td>
										<th>심급</th>
										<td>
											<%-- <input type=hidden id = "instAdmCode" value="${outVo.instAdmCode}"/> --%>
											<select id="instAdmCode" name="instAdmCode" onchange="javascript:instChange(this);" >
												
											</select>
										</td>
									</tr>
								</c:forEach>
							</c:if>		
							<c:if test="${empty preiwrListSelect}">	
								<tr>
										<th>소송관리번호</th>
										<td>
											<input type="text" disabled="disabled"/>
											<img src="images/search_btn1.gif" id="lawsuitAdmNo_search_btn" class="linked_btn_style" />
										</td>
										<th>심급</th>
										<td>
											<select disabled="disabled" style="width: 50px">
												
											</select>
										</td>
									</tr>
							</c:if>
						</table>
					</div>
					<p class="btn1">
						<img id="lawsuitAdmNo_reset_btn" class="linked_btn_style" src="images/reset_btn1.gif" alt="" /></a>
					</p>
				</div>
	
			<h3 class="tit" align="left">준비서면 기본사항</h3>
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
			<c:if test="${not empty preiwrListSelect}">	
				<c:forEach var="outVo" items="${preiwrListSelect}" >		
					<tr>
						<th>사건번호</th>
						<td><input type="text" value="${outVo.instAdmCaseNo}" disabled="disabled"></td>
						<th>소송진행상태</th>
						<td>
							<%-- <select id="${outVo.instAdmPrgrCode}"> --%>
	<%-- 						<input type=hidden id = "instAdmPrgrCode" value="${outVo.instAdmPrgrCode}" disabled="disabled"/> --%>
							<select id="instAdmPrgrCode" name="instAdmPrgrCode" disabled="disabled">
							<option value="" selected="selected"></option>
								<option value="001">발생</option>
								<option value="002">미결</option>
								<option value="003">종결</option>
								<option value="099">기타</option>
							</select>
						</td>
						<th>판사</th>
						<td>
							<input type="text" value="${outVo.instAdmJudName}" disabled="disabled"/>
						</td>
					</tr>
					<tr>
						<th>수행법원</th>
						<td>
	<%-- 						<input type=hidden id = "instAdmCortCode" value="${outVo.instAdmCortCode}" disabled="disabled"/> --%>
							
							<select id="instAdmCortCode" name="instAdmCortCode" disabled="disabled">
							  <option value="" selected="selected"></option>
								<c:forEach var="code" items="${cortCode}" >
								  <option value="${code.codeNo}">${code.codeName}</option>
							   </c:forEach>
							</select>
						</td>
						<th>소재기일자</th>
						<td colspan="3">
							<input type="text" style="width:485px;" value="${outVo.instAdmRaisreqDate}" disabled="disabled"/>
						</td>
					</tr>
					<tr>
						<th>심급명</th>
						<td colspan="5">
							<input type="text" style="width:810px" value="${outVo.instAdmName}" disabled="disabled"/>
						</td>
					</tr>
				</c:forEach>
			</c:if>		
			<c:if test="${empty preiwrListSelect}">	
				<tr>
						<th>사건번호</th>
						<td><input type="text" value="" disabled="disabled"></td>
						<th>소송진행상태</th>
						<td>
							<select disabled="disabled">
								<option value="">전체</option>
							</select>
						</td>
						<th>판사</th>
						<td>
							<input type="text" value="" disabled="disabled"/>
						</td>
					</tr>
					<tr>
						<th>수행법원</th>
						<td>
							<select disabled="disabled">
								<option value="">전체</option>
							</select>
						</td>
						<th>소재기일자</th>
						<td colspan="3">
							<input type="text" style="width:485px;" value="" disabled="disabled"/>
						</td>
					</tr>
					<tr>
						<th>심급명</th>
						<td colspan="5">
							<input type="text" style="width:810px" value="" disabled="disabled"/>
						</td>
					</tr>
			</c:if>
				</table>
			</div>
			<h3 class="tit" align="left">준비서면목록</h3>
			
			<table class="table_V2">
				<colgroup>
					<col width="8%" />
					<col width="10%" />
					<col width="14%" />
					<col width="*" />
					<col width="15%" />
					<col width="10%" />
				</colgroup>
				<tr>
					<th>No.</th>
					<th>변론차수</th>
					<th>쟁점사항구분</th>
					<th>준비서면제목</th>
					<th>작성일자</th>
					<th>완료여부</th>
				</tr>
			<c:if test="${not empty preiwrDetailListSelect}">	
				<c:forEach var="outVo" items="${preiwrDetailListSelect}" varStatus="status">	
				<tr onmouseover="onMenu(this)" onmouseout="outMenu(this)">
				
					<td style='cursor:pointer;' onclick="javascript:getDetail('${outVo.lawsuitAdmNo}','${outVo.instAdmCode}','${outVo.preIwrNo}');">${status.index+1}</td>
					 <c:choose>
						 <c:when test ="${outVo.preIwrDfsDeg == '001'}">
						   <td style='cursor:pointer;' onclick="javascript:getDetail('${outVo.lawsuitAdmNo}','${outVo.instAdmCode}','${outVo.preIwrNo}');">1차</td>
						 </c:when>
						 <c:when test ="${outVo.preIwrDfsDeg == '002'}">
						  <td style='cursor:pointer;' onclick="javascript:getDetail('${outVo.lawsuitAdmNo}','${outVo.instAdmCode}','${outVo.preIwrNo}');">2차</td>
						 </c:when>
						 <c:when test ="${outVo.preIwrDfsDeg == '003'}">
						   <td style='cursor:pointer;' onclick="javascript:getDetail('${outVo.lawsuitAdmNo}','${outVo.instAdmCode}','${outVo.preIwrNo}');">3차</td>
						 </c:when>
						 <c:when test ="${outVo.preIwrDfsDeg == '004'}">
						  <td style='cursor:pointer;' onclick="javascript:getDetail('${outVo.lawsuitAdmNo}','${outVo.instAdmCode}','${outVo.preIwrNo}');">4차</td>
						 </c:when>
						 <c:when test ="${outVo.preIwrDfsDeg == '005'}">
						   <td style='cursor:pointer;' onclick="javascript:getDetail('${outVo.lawsuitAdmNo}','${outVo.instAdmCode}','${outVo.preIwrNo}');">5차</td>
						 </c:when>
						 <c:when test ="${outVo.preIwrDfsDeg == '006'}">
						  <td style='cursor:pointer;' onclick="javascript:getDetail('${outVo.lawsuitAdmNo}','${outVo.instAdmCode}','${outVo.preIwrNo}');">6차</td>
						 </c:when>
						 <c:when test ="${outVo.preIwrDfsDeg == '007'}">
						   <td style='cursor:pointer;' onclick="javascript:getDetail('${outVo.lawsuitAdmNo}','${outVo.instAdmCode}','${outVo.preIwrNo}');">7차</td>
						 </c:when>
						 <c:when test ="${outVo.preIwrDfsDeg == '008'}">
						  <td style='cursor:pointer;' onclick="javascript:getDetail('${outVo.lawsuitAdmNo}','${outVo.instAdmCode}','${outVo.preIwrNo}');">8차</td>
						 </c:when>
						 <c:when test ="${outVo.preIwrDfsDeg == '009'}">
						   <td style='cursor:pointer;' onclick="javascript:getDetail('${outVo.lawsuitAdmNo}','${outVo.instAdmCode}','${outVo.preIwrNo}');">9차</td>
						 </c:when>
						 <c:otherwise>
						 <td style='cursor:pointer;' onclick="javascript:getDetail('${outVo.lawsuitAdmNo}','${outVo.instAdmCode}','${outVo.preIwrNo}');">10차</td>
						 </c:otherwise>
					</c:choose>
					<c:choose>
						 <c:when test ="${outVo.preIwrIssuSepcode == '001'}">
						   <td style='cursor:pointer;' onclick="javascript:getDetail('${outVo.lawsuitAdmNo}','${outVo.instAdmCode}','${outVo.preIwrNo}');">구상</td>
						 </c:when>
						 <c:when test ="${outVo.preIwrIssuSepcode == '002'}">
						  <td style='cursor:pointer;' onclick="javascript:getDetail('${outVo.lawsuitAdmNo}','${outVo.instAdmCode}','${outVo.preIwrNo}');">의료과실</td>
						 </c:when>
						 <c:when test ="${outVo.preIwrIssuSepcode == '003'}">
						  <td style='cursor:pointer;' onclick="javascript:getDetail('${outVo.lawsuitAdmNo}','${outVo.instAdmCode}','${outVo.preIwrNo}');">장기채무부존재</td>
						 </c:when>
						 <c:when test ="${outVo.preIwrIssuSepcode == '004'}">
						  <td style='cursor:pointer;' onclick="javascript:getDetail('${outVo.lawsuitAdmNo}','${outVo.instAdmCode}','${outVo.preIwrNo}');">특허</td>
						 </c:when>
						 <c:otherwise>
						 <td style='cursor:pointer;' onclick="javascript:getDetail('${outVo.lawsuitAdmNo}','${outVo.instAdmCode}','${outVo.preIwrNo}');">기타</td>
						 </c:otherwise>
					</c:choose>
						<%-- <td class="txt">${outVo.preIwrName}</td> --%>
						<td class="txt" style='cursor:pointer;' onclick="javascript:getDetail('${outVo.lawsuitAdmNo}','${outVo.instAdmCode}','${outVo.preIwrNo}');" >${outVo.preIwrName}</td>
						<%-- 				<td class="txt" onclick="getDetail(${preiwrDetailListSelect[0].lawsuitAdmNo},${preiwrDetailListSelect[0].instAdmCode},${preiwrDetailListSelect[0].preIwrNo});" style="cursor:pointer;">${outVo.preIwrName}</td> --%>
					<td style='cursor:pointer;' onclick="javascript:getDetail('${outVo.lawsuitAdmNo}','${outVo.instAdmCode}','${outVo.preIwrNo}');">${outVo.preIwrWritDate}</td>
					<c:choose>
						 <c:when test ="${outVo.preIwrCompWtr == 'Y'}">
						   <td style='cursor:pointer;' onclick="javascript:getDetail('${outVo.lawsuitAdmNo}','${outVo.instAdmCode}','${outVo.preIwrNo}');">완료</td>
						 </c:when>
						 <c:otherwise>
						 <td style='cursor:pointer;' onclick="javascript:getDetail('${outVo.lawsuitAdmNo}','${outVo.instAdmCode}','${outVo.preIwrNo}');">미완료</td>
						 </c:otherwise>
					</c:choose>
				</tr>
				</c:forEach>
			</c:if>	
			<c:if test="${empty preiwrDetailListSelect}">
				<tr>
					<td colspan="6" align="center" ><font size = 3>조회된사항이 없습니다.</font></td>
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
		 <!-- 상세정보 조회 및 입력 수정 -->
		 <div align="right">
		  
		    <c:if test="${not empty preiwrListSelect}">
		       <a href="#" onclick="javascript:setInsert(); return false;"><img src="images/icon_add_03.gif" alt="" /></a>
		    </c:if>
		 </div>
		<div class="seachTable1">
		<form name="pre" method="post">
			<table class="table_V1">
				
				<colgroup>
					<col width="13%" />
					<col width="20%" />
					<col width="10%" />
					<col width="19%" />
					<col width="13%" />
					<col width="*" />
				</colgroup>
				<tr>
					<th><a name="section"></a>
						<img src="images/point.png" alt="" />
						준비서면제목
					</th>
					<td colspan="5">
						<input type="hidden" id="lawsuitNo" name="lawsuitAdmNo" value="${preiwrListSelect[0].lawsuitAdmNo}" />
						<input type="hidden" id="instAcode" name = "instAdmCode" value="${preiwrListSelect[0].instAdmCode}"/>
						<input type="hidden" id="preIwrNo" name = "preIwrNo" />
						<input type="text" maxlength="33" style="width:830px;" id="preIwrName" name="preIwrName" disabled="disabled"/>
					</td>
				</tr>
				<tr>
					<th>
						준비서면내용
					</th>
					<td colspan="5">
						<textarea maxlength="666" style="width:830px; height:65px; margin:4px 0;" id="preIwrCont" name="preIwrCont" disabled="disabled"></textarea>
					</td>
				</tr>
				<tr>
					<th>
						<img src="images/point.png" alt="" />
						변론차수
					</th>
					<td>
						<input type="text" style="width: 100px" value="" id="preIwrDfsDeg" name="preIwrDfsDeg" disabled="disabled"/>차
					</td>
					<th>
						<img src="images/point.png" alt="" />
						쟁점사항구분
					</th>
					<td>
						<select id="preIwrIssuSepcode" name="preIwrIssuSepcode" disabled="disabled">
							<option value="001">구상</option>
							<option value="002">의료과실</option>
							<option value="003">장기채무부존재</option>
							<option value="004">특허</option>
							<option value="099">기타</option>
						</select>
					</td>
					<th>
						<img src="images/point.png" alt="" />
						완료여부
					</th>
					<td>
						<select id="preIwrCompWtr" name="preIwrCompWtr" disabled="disabled">
							<option value="N">미완료</option>
							<option value="Y">완료</option>
						</select>
					</td>
				</tr>
				<tr>
					<th>첨부파일</th>
						<td>
							<img class="linked_btn_style" id="file_add_btn" src="images/file_btn.gif" alt="" />
<!-- 							<input type="image" id="fileAdd" onclick="upload(); return false;" src="images/file_btn.gif" disabled="disabled"/> -->
						</td>
					<th>외부작성변호사</th>
					<td colspan="3">
					<input type="text" maxlength="10" style="ime-mode:disabled ;" id="preIwrOutLyrid" name="preIwrOutLyrid" readonly="readonly" disabled="disabled"/>
<!-- 						<input type="text" maxlength="10" style="width:500px" name="preIwrOutLyrid"/> -->
						</td>
					</tr>
				</table>
				</form>
			</div>
			<p class="anBtn">
			<c:if test="${not empty preiwrListSelect}">
<!-- 				<a href="#" onclick="sub();"><img src="images/save_btn.png" alt="" /></a> -->
				<input type="image" id="insert" src="images/save_btn.png" onclick="sub(); return false;" disabled="disabled"/>
<!-- 				<a href="#"><img src="images/cancel_btn.png" alt="" /></a> -->
				<a href="outMain.do"><img src="images/cancel_btn.png" alt="" /></a>
				<input type="image" id="delete" src="images/icon_delete_01.gif" onclick="preDelete(); return false;" disabled="disabled"></input>
			</c:if>
			<c:if test="${empty preiwrListSelect}">
<!-- 				<a href="#" onclick="alert('기본정보가 없습니다'); return false;"><img src="images/save_btn.png" alt="" /></a> -->
				<input type="image" src="images/save_btn.png" disabled="disabled" />
<!-- 				<a href="outMain.do"><img src="images/cancel_btn.png" alt="" /></a> -->
				<a href="outMain.do"><img src="images/cancel_btn.png" alt="" /></a>
				<input type="image" src="images/icon_delete_01.gif" disabled="disabled"></input>
			</c:if>
			</p>
		</div>
	</div>
	
	<div id="footer">
	
	</div>
<script type="text/javascript">
window.onload = function(){
	$('#lawsuitAdmNo').val('${preiwrListSelect[0].lawsuitAdmNo}');
	$('#instAdmCode').val('${preiwrListSelect[0].instAdmCode}');
	$('#instAdmPrgrCode').val('${preiwrListSelect[0].instAdmPrgrCode}');
	$('#instAdmCortCode').val('${preiwrListSelect[0].instAdmCortCode}');
};
//심급코드, 일시 세팅
$(document).ready(function(){
	
	addOP();  //심급차수
	
	$("#lawsuitAdmNo_search_btn").click(function(){
		getSearch();
	});
	
	$("#lawsuitAdmNo_reset_btn").click(function(){
		location="OUT_PRE_ENT_IWR_WEB.do";
	});
	
	$("#file_add_btn").click(function(){
		upload();
	});
	
});

//숫자만 체크
function only(Ev) {
	
	var evCode = (window.netscape) ? Ev.which : event.keyCode;
	    
	    if(   (evCode < 48 || evCode > 57) && (evCode < 96 || evCode > 105) &&  evCode != 8 && evCode != 9   &&  evCode != 13  &&
	    	  (evCode < 37 || evCode > 40)  ){
	    	
	        if (window.netscape){  Ev.preventDefault();   
	        }else {  event.returnValue = false; alert("숫자를 입력하세요"); document.getElementById("legaladvLawAdvReqNo").value="";};
	    };
	}
	
//심급 차수 세팅
function addOP(){
	var f = document.OUT_PRE_ENT_IWR.instAdmCode;
	// 	var f=document.getElementById("instAdmCode");
	var inst='${instSet[0].instAdmCode}'; 
	var leng = parseInt(inst)+1;  
	
	for( var i=1; i< leng ; i++){
		
		var op = new Option();
		var val= LPad(i,"0",3); 
	    op.value = val ; // 값 설정
	    op.text = i+"차"; // 텍스트 설정
	    f.options.add(op); // 옵션 추가
	}
}

//자릿수 세팅
function LPad(digit,attatch, size ) {
    var add = "";
    digit = digit.toString();

    if (digit.length < size) {
        var len = size - digit.length;
        for (var i = 0 ; i < len; i++) {
            add += attatch;
        }
    }
    return add + digit;
}

//준비서면 신규추가
function setInsert(){
	$('#lawsuitNo').val("${preiwrListSelect[0].lawsuitAdmNo}");
	$('#instAcode').val("${preiwrListSelect[0].instAdmCode}");
	$('#preIwrNo').val("");
	$('#preIwrName').val(""); 
	$('#preIwrCont').val("");
	$('#preIwrDfsDeg').val("1");
	$('#preIwrIssuSepcode').val("001");
	$('#preIwrCompWtr').val("N");
	$('#preIwrOutLyrid').val("${outVO.preIwrOutLyrid}");
	$('#insert').attr('disabled', false);
	$('#delete').attr('disabled', true);
	
	$('#preIwrName').attr('disabled', false);
	$('#preIwrCont').attr('disabled', false);
	$('#preIwrDfsDeg').attr('disabled', false);
	$('#preIwrIssuSepcode').attr('disabled', false);
	$('#preIwrCompWtr').attr('disabled', false);
	$('#preIwrOutLyrid').attr('disabled', false);
	$('#fileAdd').attr('disabled', true);
	//  document.location.hash="preIwrName";
	// 	document.getElementById('preIwrName').scrollIntoView(true);
}

//심급콤보 변경시 조회
function instChange(Obj){
	
	var f= document.OUT_PRE_ENT_IWR;
	var selCode = Obj.options[Obj.selectedIndex].value;
	$('#instAcode').val($('#instAdmCode').val());
	f.lawsuitAdmNo.value="${preiwrListSelect[0].lawsuitAdmNo}";
	f.instAdmCode.value=selCode;
	f.action = "<c:url value='OUT_PRE_ENT_IWR_WEB.do'/>";
	f.submit(); 
}

//파일첨부
function upload(){
	var f=document.pre;
	if(f.preIwrNo.value==''){
		alert("준비서면 추가후 파일을 첨부하세요")
		return false;
	}
	if(f.preIwrName.value==''){
		alert("준비서면제목을 입력하세요");
		f.preIwrName.focus();
		return false;
	}
	
	var PopWindow = "파일추가";
	var hwid=( ( screen.width ) ? ( screen.width-800 )/2:0 ) -70;
	
	window.open("",PopWindow,'width=800,height=420,toolbar=no,status=no,menubar=no,resizable=no,top=200,left='+hwid ); 
	
	f.target = PopWindow;
	f.action = "AddFilePop1.do";
	f.submit();
}

//상세조회
function getDetail(lawsuitAdmNo,instAdmCode,preIwrNo){
	$.ajax({
		async: false
		  	, url : "OUT_PRE_ENT_IWR_DE_WEB.do"
		, type: "POST"
		, data: {"lawsuitAdmNo" : lawsuitAdmNo      // 의뢰번호
			       , "instAdmCode" : instAdmCode
			       , "preIwrNo" : preIwrNo }
		, dataType: "json"
		, success : function(data) {
			// 	alert(data);
				
			$(data).each(function(i,vo){
				 $('#lawsuitNo').val(decodeURIComponent(vo.lawsuitAdmNo));
				 $('#instAcode').val(decodeURIComponent(vo.instAdmCode)); 
				 $('#preIwrNo').val(decodeURIComponent(vo.preIwrNo)); 
			     $('#preIwrName').val(decodeURIComponent(vo.preIwrName)); 
			     $('#preIwrCont').val(decodeURIComponent(vo.preIwrCont)); 
			     $('#preIwrDfsDeg').val(decodeURIComponent(vo.preIwrDfsDeg));
			     $('#preIwrIssuSepcode').val(decodeURIComponent(vo.preIwrIssuSepcode)); 
			     $('#preIwrCompWtr').val(decodeURIComponent(vo.preIwrCompWtr)); 
			     $('#preIwrOutLyrid').val(decodeURIComponent(vo.preIwrOutLyrid));
			})// each
		}
	});// ajax 
}// getDetail();

//준비서면 disalbled
function setDisabled(){
	$('#preIwrName').attr('disabled', false);
	$('#preIwrCont').attr('disabled', false);
	$('#preIwrDfsDeg').attr('disabled', false);
	$('#preIwrIssuSepcode').attr('disabled', false);
	$('#preIwrCompWtr').attr('disabled', false);
	$('#preIwrOutLyrid').attr('disabled', false);
	$('#insert').attr('disabled', false);
	$('#delete').attr('disabled', false);
	$('#fileAdd').attr('disabled', false);
}

function from_pop(reqNo,code){
	location.href="OUT_PRE_ENT_IWR_WEB.do?reqNo="+reqNo+"&code="+code;
}

//준비서면 저장,수정
function sub(){
	var f=document.pre;
	if(f.preIwrName.value==''){
		alert("준비서면제목을 입력하세요");
		f.preIwrName.focus();
		return false;
	}
	if(f.preIwrDfsDeg.value==''){
		alert("변론차수를 입력하세요");
		f.preIwrDfsDeg.focus();
		return false;
	}
	if(f.preIwrIssuSepcode.value==''){
		alert("쟁점사항구분을 입력하세요");
		f.preIwrIssuSepcode.focus();
		return false;
	}
	if(f.preIwrCompWtr.value==''){
		alert("완료여부를 입력하세요");
		f.preIwrCompWtr.focus();
		return false;
	}
	
	if(confirm("저장하시겠습니까")==true){
		alert("저장되었습니다");
		pre.action = "<c:url value='OUT_PRE_ENT_IWR_SAVE_WEB.do?'/>";
		pre.submit();
	}
}

//준비서면 삭제
function preDelete(){
	if(confirm("삭제하시겠습니까?")){
		alert("삭제되었습니다");
		pre.action = "<c:url value='OUT_PRE_ENT_IWR_DELETE_WEB.do?'/>";
		pre.submit();
	}
	
}
//준비서면목록 페이징
function linkPage(pageNo) {
	
	document.OUT_PRE_ENT_IWR.pageIndex.value=pageNo;
	document.OUT_PRE_ENT_IWR.action = "<c:url value='OUT_PRE_ENT_IWR_WEB.do'/>";
	document.OUT_PRE_ENT_IWR.submit();
} 

//검색 팝업창 open
function getSearch(){
  
   var f = document.OUT_PRE_ENT_IWR;
   var PopWindow = "소송관리번호검색";
   var hwid=( ( screen.width ) ? ( screen.width-800 )/2:0 ) -70;
   
   window.open("",PopWindow,'width=800,height=380,toolbar=no,status=no,menubar=no,resizable=no,top=200,left='+hwid ); 
   
   f.target = PopWindow;
   f.action = "OUT_PRE_ENT_IWR_POP_WEB.do";
   f.submit();
}

//테이블 선택 row bg 변경
function onMenu(obj){
	obj.style.background = "#b0e0e6";
}
function outMenu(obj){
	obj.style.background = "#ffffff";
}

</script>
</body>
</html>