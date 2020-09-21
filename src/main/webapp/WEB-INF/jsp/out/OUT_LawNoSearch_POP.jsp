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
	<title>소송관리번호조회</title>

<link href="${pageContext.request.contextPath}/css/css.css" rel="stylesheet" type="text/css" />
<link href="${pageContext.request.contextPath}/js/jquery-ui-1.10.3.custom.css" type="text/css" rel="stylesheet"  />

<!-- JS - jQuery -->
<script src="${pageContext.request.contextPath}/js/jquery-1.9.1.js" type="text/javascript" ></script>
<script src="${pageContext.request.contextPath}/js/jquery-ui-1.10.3.custom.js" type="text/javascript" ></script>

<style type="text/css">
	.linked_btn_style {
	cursor: pointer;
	}
	.result_tr:HOVER {
		background-color: #CCFFFF;
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
	
</style>

</head>

<body>
	<div id="popwrap">
		<h1><img src="images/pop_tit3.png" alt="" /></h1>
		<div class="seachTable1">
			<div class="popSeachBox">
				<select id="search_sbx" >
					<option value="0" selected >전체</option>
					<option value="1">소송관리번호</option>
					<option value="2">심급명</option>
					<option value="3">원피고명</option>
					<option value="4">소송담당자</option>
				</select>
					<input type="text" id="search_keyword" maxlength="60" value="" disabled="disabled"/>
					<img id="search_btn" class="linked_btn_style" src="images/search_btn1.gif"/>
					<img id="reset_btn" class="linked_btn_style" src="images/reset_btn1.gif"/>
			</div>                  
		</div>
		
		<table id="result_table" class="table_V2">
			<colgroup>
				<col width="12%" />
				<col width="9%" />
				<col width="42%" />
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
		</table>
		<div id="page_area">
		</div>
</div>


<script type="text/javascript">
var gbparam = "0"; // 검색 구분용
var searchKeyword; // 키워드

var page="1"; //현재 페이지
	
	$(document).ready(function(){
		// 		alert("페이지 시작");
		/* 로딩시 초기설정  */
		onload_init();
		
		/* 시작시 전체 검색 */
		outLawsuitAdmNoSelectWeb();
		
		/* 선택창 변경시 */
		$("#search_sbx").change(function(){
			$("#search_keyword").attr("disabled",false);
			gbparam = $(this).val();
		});	
		
		/* 검색버튼 클릭시 */
		$("#search_btn").click(function(){
			page="1"; // 페이지 값 초기화
			
			if(gbparam!="0" & ($("#search_keyword").val().trim()==""||$("#search_keyword").val().trim()==null)){
				alert("검색어를 입력해주세요");
				$("#search_btn").click.focus();
				return;
			}else{
				outLawsuitAdmNoSelectWeb();
			}
		});
		
		
		$("#search_keyword").keyup(function(e){
			if(e.keyCode == 13) {
				$("#search_btn").click();
			}
		});	
		
		/* 페이지 번호 클릭시 */
		$("body").on("click",".page_n",function(){
			page = $(this).attr("id");
			
			outLawsuitAdmNoSelectWeb();
		});
		
		
		/* 결과 클릭시 부모창으로 값 보내기 */
		$("body").on("click",".result_td",function(){
			var x = $(this).attr("id");
			window.opener.lis(x); // 부모창 함수
		});
	});


	/* 페이지 표시 */
	function pagingSet(){
		$.ajax({
			async: false
			, url: "selectOutLawNoSearchPoppagingSet.do"
			, type: "post"
			, data: {"keyword":searchKeyword
					,"gbcode":gbparam // 기본키 1개만 입력
					,"legaladvOutReqLyrid":"${sessionScope.outid}"
					, "page":page} // 기본키 1개만 입력
			, dataType: ""
			, success: function(data){
				$("#page_area > span").remove();
					if(data==""||data==null){
						alert("없음");
					}else{
						//alert(data); // 총 카운트 값
						var tpage= parseInt(parseInt(data)/5)+1;
						
						var before_page=parseInt(page)-1;
						if(page == "1"){
							before_page=page;
						}
						
						$("#page_area").append(
											'<span id="1" class="linked_btn_style page_n">[처음]</span><span id="'+before_page+'" class="linked_btn_style page_n">[이전]</span>'
											);
		
						for(var i=1; i<=tpage; i++){
							if(i==page){
								$("#page_area").append('<span id="'+i+'" class="linked_btn_style page_n now_page" >'+i+'</span>');
							}else{
								$("#page_area").append('<span id="'+i+'" class="linked_btn_style page_n">'+i+'</span>');
							}
						} //for
						
						var next_page=parseInt(page)+1;
						if(page ==tpage){
							next_page=page;
						}
						
						$("#page_area").append(											
											'<span id="'+next_page+'" class="linked_btn_style page_n">[다음]</span><span id="'+tpage+'" class="linked_btn_style page_n">[마지막]</span>'
												);
					}// if
					
					//selectOutLegaladvLawAdvWeb();
				}//function
		});//$.ajax
		
	}
	


	/* 로딩시 초기설정 */
	function onload_init(){
		$('#search_keyword').focus(); // 검색창 포커스
		$('body').keyup(function (e){ if(e.keyCode == 13){getSearch();}}); // Enter 키 액션
	}// onload_init()

	/* 전체 검색 */
	function outLawsuitAdmNoSelectWeb(){
		keyword_check();
		
		pagingSet();
		
		
		$.ajax({
			async: false
			, url: "outLawsuitAdmNoSelectWeb.do"
			, type: "post"
			, data: {"keyword":searchKeyword
					,"gbcode":gbparam
					,"page":parseInt(page)*5} // 기본키 1개만 입력
			, dataType: "json"
			, success: function(data){
				
						$(".result_tr").remove();
					
					if(data==""||data==null){
// 							alert("에러발생");
							$("#result_table").append(
										'<tr class="result_tr" align="center">'
										+ '<td colspan="6" align="center">'
										+ '<font size = 3>조회된사항이 없습니다.</font>'
										+ '</td>'
										+ '</tr>'
										);
					}else{
						$(data).each(function(i,vo){
							$("#result_table").append(
									'<tr class="result_tr linked_btn_style" >'
									+ '<td class="result_td" id="'+decodeURIComponent(vo.lawsuitAdmNo)+decodeURIComponent(vo.instAdmCode)+'" name="lawsuitAdmNo" >'+decodeURIComponent(vo.lawsuitAdmNo)+'</td>'
									+ '<td class="result_td" id="'+decodeURIComponent(vo.lawsuitAdmNo)+decodeURIComponent(vo.instAdmCode)+'" name="instAdmCode" >'+decodeURIComponent(vo.instAdmCode).replace(/00/,"")+'심</td>'
									+ '<td class="result_td" id="'+decodeURIComponent(vo.lawsuitAdmNo)+decodeURIComponent(vo.instAdmCode)+'">'+decodeURIComponent(vo.instAdmName).replace(/\+/gi," ").substring(0,25)+'</td>'
									+ '<td class="result_td" id="'+decodeURIComponent(vo.lawsuitAdmNo)+decodeURIComponent(vo.instAdmCode)+'">'+decodeURIComponent(vo.codeName)+'</td>'
									+ '<td class="result_td" id="'+decodeURIComponent(vo.lawsuitAdmNo)+decodeURIComponent(vo.instAdmCode)+'">'+decodeURIComponent(vo.pladefName)+'</td>'
									+ '<td class="result_td" id="'+decodeURIComponent(vo.lawsuitAdmNo)+decodeURIComponent(vo.instAdmCode)+'">'+decodeURIComponent(vo.insaName)+'</td>'
									+ '</tr>'
										);
						});//each
					}// if
				}//function
		});//$.ajax	
	}// outLawsuitAdmNoSelectWEB()	
	
	/* 검색시 키워드값 체크 */
	function keyword_check(){
		searchKeyword = $("#search_keyword").val().trim();
		if(searchKeyword==""||searchKeyword==null){searchKeyword=="ALL";}
	}// keyword_check()
	
	
	
	
// // 조회
// function getSearch(){
	
// 	var f = document.lawNoSearch;
// 	var vali=true;
// 	var temp = f.search1.value; 
	
// 	if( temp !='0' && f.search2.value == '' ){
		
// 	   alert("검색값을 입력하세요");
// 	   return;
// 	}	
		
//     f.action = "OUT_lawNo_search_POP.do";
// 	f.submit();
// }

// // 페이징 번호 클릭시
// function linkPage(pageNo) {
	
// 	var f = document.lawNoSearch;
// 	f.pageIndex.value=pageNo;
// 	f.action = "<c:url value='OUT_lawNo_page_POP.do'/>";
// 	f.submit();
// } 

// // 초기화
// function resetDo(){
// 	var f = document.lawNoSearch;
// 	 $('#search1').val(0);  
// 	 $('#search2').val(""); 
// 	f.pageIndex.value=1;
// 	f.action = "<c:url value='OUT_lawNo_search_POP.do'/>";
// 	f.submit();
// }

// // 기일정보페이지로 값넘김
// function getlawNo(lawNo,instCode){
// 	var f = document.lawNoSearch;
// 	f.lawsuitAdmNo.value=lawNo;
// 	f.instAdmCode.value = LPad(instCode, 3,"0");
// 	opener.name = "기일관리";
// 	f.target = opener.name;
// 	f.action = "<c:url value='getFixinfoList_POP.do'/>";  // 조회 
// 	f.submit();
// 	self.close();
// }

// //테이블 선택 row bg 변경
// function onMenu(obj){
// 	obj.style.background = "#b0e0e6";
// }
// function outMenu(obj){
// 	obj.style.background = "#ffffff";
// }

// // Lpad
// function LPad(digit, size, attatch) {
//     var add = "";
//     digit = digit.toString();

//     if (digit.length < size) {
//         var len = size - digit.length;
//         for (i = 0; i < len; i++) {
//             add += attatch;
//         }
//     }
//     return add + digit;
// }

// // input 최대값 체크 
// function textLengthChk(obj){
// 	var f=document.lawNoSearch;
// 	if(f.search1.value=="0"){
// 		alert("카테고리를 선택하세요");
// 		f.search2.value='';
// 		return false;
// 	}
// 	var st_len = 0;
// 	var maxlength = obj.getAttribute ? parseInt(obj.getAttribute("maxlength")) : "";
// 	if( obj.value == null ){
// 		 return 0;
// 	}
// 	for(var i=0;i<obj.value.length;i++){
// 		var es_len = escape(obj.value.charAt(i));
// 		if ( es_len.length == 1 ) {
//     		st_len ++;
// 		}
// 		else if ( es_len.indexOf("%u") != -1 ) {
//     		st_len += 2;
// 		}
// 		else if ( es_len.indexOf("%") != -1 ) {
//     		st_len += es_len.length/3;
// 		}
// 	}
// 	if(st_len >= maxlength){
// 		alert( maxlength*1/2 + " 자를 초과 입력할수 없습니다. \n 초과된 내용은 자동으로 삭제 됩니다. ");
// 	obj.value=obj.value.substring(0,maxlength);
// 	}
// }

</script>
</body>
</html>