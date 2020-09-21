<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="ui" uri="http://egovframework.gov/ctl/ui"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>기일정보관리</title>
<!-- <link rel="stylesheet" href="//code.jquery.com/ui/1.10.4/themes/smoothness/jquery-ui.css"> -->
<link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">

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
			<h2 class="box">
				<img src="images/sub_tit3.png" alt="" />
			</h2>
			<input type="hidden" name="legaladvOutReqLyrid" id=legaladvOutReqLyrid value="${sessionScope.id}" />
			<div class="seachTable1 clearfix">
				<div class="tableZone">
					<table class="table_V1">
						<colgroup>
							<col width="15%" />
							<col width="37%" />
							<col width="20%" />
							<col width="*" />
						</colgroup>
						<tr>
							<th>소송관리번호</th>
							<td>
								<input type="text" id="lawsuitAdmNo" value="" readonly="readonly" style="width: 150px" />
								<img class="linked_btn_style" id="lawsuitAdmNo_search_btn" src="images/search_btn1.gif" alt="" />
							</td>
							<th>심급</th>
							<td>
								<select id="instAdmCode" name="instAdmCode" style="width: 160px" >
								</select>
							</td>
						</tr>
					</table>
				</div>
				<p class="btn1">
					<a href="OUT_fixinfo.do">
						<img src="images/reset_btn1.gif" alt="" />
					</a>
				</p>
			</div>

			<h3 class="tit">심급기본사항</h3>

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
					<tr>
						<th>사건번호</th>
						<td><input type="text" id="CaseNo" name="instAdmCaseNo"
							value="${fixLawVO.instAdmCaseNo}" readonly="readonly" /></td>
						<th>사건유형</th>
						<td><select class="outfixinfo_select" id="CaseTyCode" name="lawsuitCaseTyCode" disabled="disabled" style="width: 160px">
						</select></td>
						<th>진행상태</th>
						<td><select class="outfixinfo_select" id="PrgrCode" name="instAdmPrgrCode" disabled="disabled" style="width: 160px">		
						</select></td>
					</tr>
					<tr>
						<th>당사원피고구분</th>
						<td>
						    <select class="outfixinfo_select" id="Sepcode" name="lawsuitCpPladefSepcode" disabled="disabled" style="width: 160px">			
						    </select>
						</td>
						<th>피고</th>
						<td><input type="text" id="pladefName" name="pladefName"
							value="${fixLawVO.pladefName}" readonly="readonly" /></td>
						<th>청구소가</th>
						<td><input type="text" id="ClamVop" class="number_style_right" name="instAdmClamVop"
							value="${fixLawVO.instAdmClamVop}" readonly="readonly" /></td>
					</tr>
					<tr>
						<th>수행법원</th>
						<td colspan="5">
						  <select class="outfixinfo_select" id="CortCode" name="instAdmCortCode" disabled="disabled" style="width: 160px">
						  </select>
						</td>
					</tr>
				</table>
			</div>

			<h3 class="tit">기일정보</h3>

			<table id="outfixinfolist_table" class="table_V2">
				<colgroup>
					<col width="10%" />
					<col width="15%" />
					<col width="45%" />
					<col width="15%" />
					<col width="*" />
				</colgroup>
				<tr>
					<th>No.</th>
					<th>기일구분</th>
					<th>기일장소</th>
					<th>기일일시</th>
					<th>기일마감일시</th>
				</tr>
				
			</table>
			
			<div id="page_area">
			</div>

			<!-- //////////////////////////////////////////////////////////////////////////////// -->

			<!-- 상세정보 조회 및 입력 수정 -->
			<div align="right">
				<img class="linked_btn_style" id="outfixinfolist_add" src="images/icon_add_03.gif" alt="" />
				<img class="linked_btn_style" id="outfixinfolist_delete" src="images/icon_delete_01.gif" alt="" />
			</div>
			<div class="seachTable1">
			    <input type="hidden" name="lawFixinfoNum" id=lawFixinfoNum />
				<table class="table_V1">
					<colgroup>
						<col width="9%" />
						<col width="25%" />
						<col width="8%" />
						<col width="15%" />
						<col width="9%" />
						<col width="*" />
					</colgroup>
					<tr>
						<th>기일일시<a name="section"></a></th>
						<td><input type="text" id="lawFixinfoDate1" name="lawFixinfoDate1" 
						    class="inputTxt2" style="width: 90px;" disabled="disabled" />
						   <select id="lawFixinfoDate2" name="lawFixinfoDate2" disabled="disabled"></select>
						   <select id="lawFixinfoDate3" name="lawFixinfoDate3" disabled="disabled"></select>
						</td>
						<th>장소</th>
						<td><input type="text" id="lawFixinfoPlc"
							name="lawFixinfoPlc" onkeypress="javascript:textLengthChk(this)"
							maxlength="120" style="width: 125px;" disabled="disabled" /></td>
						<th rowspan="2">주요쟁점</th>
						<td rowspan="2">
						   <textarea id="lawFixinfoMainIssu" name="lawFixinfoMainIssu"
						    style="width: 310px; height: 47px;" readonly="readonly" disabled="disabled">
						   </textarea>
						</td>
					</tr>
					<tr>
						<th>마감일시</th>
						<td><input type="text" id="lawFixinfoDlinDate1" name="lawFixinfoDlinDate1" class="inputTxt2"
							style="width: 90px;" disabled="disabled" /> 
							<select id="lawFixinfoDlinDate2" name="lawFixinfoDlinDate2" disabled="disabled"></select>
						    <select id="lawFixinfoDlinDate3" name="lawFixinfoDlinDate3" disabled="disabled"></select>
						</td>
						<th>구분</th>
						<td>
						  <select class="outfixinfo_select" id="lawFixinfoSepcode" name="lawFixinfoSepcode" disabled="disabled">
						 </select>
						</td>
					</tr>
					<tr>
						<th>상대방주장</th>
						<td colspan="3">
						   <textarea id="lawFixinfoOthInsi" name="lawFixinfoOthInsi"
								style="width: 445px; height: 47px; margin: 4px 0;" readonly="readonly" disabled="disabled">
						   </textarea>
						</td>
						<th>재판부의견</th>
						<td>
						 <textarea id="lawFixinfoCortOpin" name="lawFixinfoCortOpin"
								 style="width: 310px; height: 47px;" readonly="readonly" disabled="disabled">
						 </textarea>
						</td>
					</tr>
					<tr>
						<th>당사주장</th>
						<td colspan="3">
						   <textarea id="lawFixinfoCpInsi" name="lawFixinfoCpInsi"
								style="width: 445px; height: 47px; margin: 4px 0;" readonly="readonly" disabled="disabled">
						   </textarea>
						</td>
						<th>변호사의견</th>
						<td>
						  <textarea id="lawFixinfoLyrOpin" name="lawFixinfoLyrOpin"
								onkeypress="javascript:textLengthChk(this);" maxlength="120"
								style="width: 310px; height: 47px;" disabled="disabled">
						  </textarea>
						</td>
					</tr>
				</table>
			</div>
			<p class="anBtn">
				<img class="linked_btn_style" id="saveBtn" src="${pageContext.request.contextPath}/images/save_btn.png" alt="" /> 
				<img class="linked_btn_style" id="cancelBtn" src="${pageContext.request.contextPath}/images/cancel_btn.png" alt="" />
			</p>                                
		</div>
	</div>
	


<script type="text/javascript">
	
	var lawsuitAdmNo; // 소송관리번호
	var instAdmCode; // 심급코드
	var pop;
	var page="1"; //현재 페이지
	var fixinfo_add; // 기일구분코드 
	var lawFixinfoNum; // 기일정보 일련번호
	
	var gbcode; // 신규 "insert", 수정"update", 삭제"delete" 구분코드
	
	<%--	구분이 진행인 기일이 등록되어 있으면 
		새로운 기일을 등록할 수 없도록 하며 
		구분이 취소시에만 새 기일의 등록이 가능해야 한다.
		기일의 상세사항은 구분이 마감 시에만 작성이 가능해야 한다.
	--%>
	
	
	/* 소송관리번호 검색 */
	function lawsuitAdmNo_search(){
		pop = window.open('lawsuitAdmNoSearchPage.do', 'lawsuitAdmNoSearchPage', 'width=850, height=340,menubar=no,scrollbars=yes, channelmode=no');
	}
	
	/* 로딩완료시 소송관리번호_체크 없으면 검색창 출력 */
	function onload_lawsuitAdmNo_check(){
		if($("#lawsuitAdmNo").val()==""||$("#lawsuitAdmNo").val()==null){
			alert("위임받은 소송관리번호를 선택해주세요.");
			lawsuitAdmNo_search();
		}
	}
	
	/* 구분코드 셋팅 */
	function selectGbCode(){
		$(".outfixinfo_select > option").remove();

		var x = ["A02","H02","A01","G02","K01"];
		
		var gbcode ="";

		for(var i=0; i<x.length; i++){
			// 			alert(x.length);
			gbcode=x[i];
			selectOutCommonCode(gbcode);
		}
	
	}// selectGbCode()

	/* 코드 셋팅 */
	function selectOutCommonCode(gbcode){
		// 			alert(gbcode);
		$.ajax({
			async: false
			, url: "selectOutCommonCode.do"
			, type: "post"
			, data: {"gbcode":gbcode} // 기본키 1개만 입력
			, dataType: "json"
			, success: function(data){
					
				// 						alert(data.length); // <------------------------ ok!!

				$("#CaseTyCode").attr("disabled",false);
				$("#Sepcode").attr("disabled",false);
				$("#CortCode").attr("disabled",false);
				$("#PrgrCode").attr("disabled",false);
				$("#lawFixinfoSepcode").attr("disabled",false);

				if(data==""||data==null){
						alert("에러발생");
				}else if(gbcode=="A02"){//사건유형코드
					$("#CaseTyCode").append('<option val="000">선택</option>'	);
					$(data).each(function(i,vo){		
						$("#CaseTyCode").append(
							'<option value="'+decodeURIComponent(vo.codeNo)+'">'
								+decodeURIComponent(vo.codeName).replace(/\+/gi," ")
								+'</option>'
						);
					});// each

					$("#CaseTyCode").val("000");

				}else if(gbcode=="H02"){	// 당사원피고구분코드
					$("#Sepcode").append('<option val="000">선택</option>'	);
					$(data).each(function(i,vo){								
						$("#Sepcode").append(
							'<option value="'+decodeURIComponent(vo.codeNo)+'">'
								+decodeURIComponent(vo.codeName).replace(/\+/gi," ")
								+'</option>'
						);
					});// each

					$("#Sepcode").val("000");

				}else if(gbcode=="A01"){	// 수행법원코드
					$("#CortCode").append('<option val="000">선택</option>'	);
					$(data).each(function(i,vo){								
						$("#CortCode").append(
							'<option value="'+decodeURIComponent(vo.codeNo)+'">'
								+decodeURIComponent(vo.codeName).replace(/\+/gi," ")
								+'</option>'
						);
					});// each
					$("#CortCode").val("000");

				}else if(gbcode=="G02"){	// 진행상태코드
					$("#PrgrCode").append('<option val="000">선택</option>'	);
					$(data).each(function(i,vo){								
						$("#PrgrCode").append(
							'<option value="'+decodeURIComponent(vo.codeNo)+'">'
								+decodeURIComponent(vo.codeName).replace(/\+/gi," ")
								+'</option>'
						);
					});// each
					$("#PrgrCode").val("000");

				}else if(gbcode=="K01"){	// 기일구분
					$("#lawFixinfoSepcode").append('<option val="000">선택</option>'	);
					$(data).each(function(i,vo){								
						$("#lawFixinfoSepcode").append(
							'<option value="'+decodeURIComponent(vo.codeNo)+'">'
								+decodeURIComponent(vo.codeName).replace(/\+/gi," ")
								+'</option>'
						);
					});// each
					$("#lawFixinfoSepcode").val("000");
				}// if
				
				$("#CaseTyCode").attr("disabled",true);
				$("#Sepcode").attr("disabled",true);
				$("#CortCode").attr("disabled",true);
				$("#PrgrCode").attr("disabled",true);
				$("#lawFixinfoSepcode").attr("disabled",true);
				
			}//function
		});//$.ajax	
	}// selectOutCommonCode()
	
	$(document).ready(function(){

		selectGbCode();
		onload_lawsuitAdmNo_check();

		/* 소송관리번호 검색 클릭시 */
		$("#lawsuitAdmNo_search_btn").click(function(){
			lawsuitAdmNo_search();
		});
		
		/* 심급코드 조회 */
		$("#instAdmCode").mouseover(function(){

			if($("#instAdmCode option").length == 1){
				lawsuitAdmNo = $("#lawsuitAdmNo").val().trim();
				selectOutWebFixInfoInstAdmCode();
			}else{
				return;
			}
		});
		
		/* 심급코드 값 변할때 조회 */ 
		$("#instAdmCode").change(function(){
			page="1";
			instAdmCode=$("#instAdmCode").val().replace(/심/,"");
			if(instAdmCode =="선택"){
				return;
			}
			selectOutFixInfo();
		});		
		
		/* 페이지 번호 클릭시 */
		$("body").on("click",".page_n",function(){
		page = $(this).attr("id");
			
			selectOutWebFixInfoListAll();
		
		});
		
		/* 기일정보 row 클릭시 */
		$("body").on("click",".list_tr",function(){
			lawFixinfoNum = $(this).attr("id");
			selectOutWebFixInfoListDetail();
		});
		
		/* 날짜변경시 마다 유효성 체크 */
		$("#lawFixinfoDate1").change(function(){
		
			var date1 = $("#lawFixinfoDate1").val().replace(/\-/gi,"");
			
			if(date_validate()=="x"){
				alert("시작일이 마감일보다 늦을 수 없습니다.");
				$(this).val(setdateformat(date1));
				$(this).focus();
				// 				return;
			}
				$(this).val(setdateformat(date1));
		});
		
		$("#lawFixinfoDlinDate1").change(function(){
			var date2 = $("#lawFixinfoDlinDate1").val().replace(/\-/gi,"");
			
			if(date_validate()=="x"){
				alert("마감일이 시작일보다 빠를 수 없습니다.");
				$(this).val(setdateformat(date2));
				$(this).focus();
				// 				return;
			}
			$(this).val(setdateformat(date2));
		});
		
		
		/* 저장버튼 클릭 */
		$("#saveBtn").click(function(){
			
			if(date_validate()=="x"){
				alert("날짜를 확인해주세요");
				return;
			}

			var d1 = $("#lawFixinfoDate1").val().replace(/\-/gi,"")+$("#lawFixinfoDate2").val()+$("#lawFixinfoDate3").val();
			var d2 = $("#lawFixinfoDlinDate1").val().replace(/\-/gi,"")+$("#lawFixinfoDlinDate2").val()+$("#lawFixinfoDlinDate3").val();
			var pl = $("#lawFixinfoPlc").val().trim();
			var sp = $("#lawFixinfoSepcode").val();
			var lo = $("#lawFixinfoLyrOpin").val();
			
			var an = lawsuitAdmNo; // 소송관리번호
			var ac = "00"+instAdmCode;
			var ln = lawFixinfoNum;
			var gb = gbcode;
			
			if(pl==""||pl==null){
				alert("기일 장소를 입력해주세요");
				$("#lawFixinfoPlc").focus();
				return;
			}else if(sp=="000"){
				alert("기일구분을 선택해주세요");
				$("#lawFixinfoSepcode").focus();
				return;
			}else if(lo==""||lo==null){
				alert("변호사의견을 작성해주세요");
				$("#lawFixinfoLyrOpin").focus();
				return;
			}
			
			if(!confirm("저장하시겠습니까?")){
				return;
			}
			
			saveOutWebFixInfoDetail(d1,d2,pl,sp,lo,an,ac,ln,gb);
		});
		

		
				/* 
				기일일시
			lawFixinfoDate1
			lawFixinfoDate2
			lawFixinfoDate3
		마감일시
			lawFixinfoDlinDate1
			lawFixinfoDlinDate2
			lawFixinfoDlinDate3
				*/
		
		/* 닫기버튼 클릭 */
		$("#cancelBtn").click(function(){
			location="outMain.do";
		});
		
		
		$("#outfixinfolist_add").click(function(){
			gbcode="insert";
			newReg();
		});
		
		$("#outfixinfolist_delete").click(function(){
			if(lawFixinfoNum ==""||lawFixinfoNum ==null){
				return;
			}
			gbcode="delete";
			
			if(!confirm("삭제하시겠습니까?")){
				return;
			}
			
			$("#saveBtn").click();
		});
	});// document
	
	/* 기일 상세 입력, 수정, 삭제 */
	function saveOutWebFixInfoDetail(d1,d2,pl,sp,lo,an,ac,ln,gb){
		// 		alert(d1+" : "+d2+" : "+pl+" : "+sp+" : "+lo+" : "+an+" : "+ac+" : "+ln+" : "+gb);
		
		$.ajax({
			async: false
			, url: "saveOutWebFixInfoDetail.do"
			, type: "post"
			, data: {"lawFixinfoDate":d1
					, "lawFixinfoDlinDate":d2
					, "lawFixinfoPlc":pl
					, "lawFixinfoSepcode":sp
					, "lawFixinfoLyrOpin":lo
					, "lawsuitAdmNo":an
					, "instAdmCode":ac
					, "lawFixinfoNum":ln
					, "gbcode":gb} // 
			, dataType: "json"
			, success: function(data){
				pop.close();
			
				if(data==""||data==null||data=="404"||data=="2"){
					alert("에러발생");
				}else{
					// 	 					alert(data);
			
					if(data=="11"){
						alert("수정하였습니다.");
					}else if(data=="3"){
						alert("저장하였습니다.");
					}else if(data=="1"){
						alert("삭제하였습니다.");
					}
					
					lawFixinfoNum="";
					selectOutWebFixInfoListAll()
				}// if
			}//function
		});//$.ajax	
	}// insertOutWebFixInfoDetail(d1,d2,pl,sp,lo)
	
	
	
	/* 날짜 유효성 체크 */
	function date_validate(){
		var date1 = $("#lawFixinfoDate1").val().replace(/\-/gi,"");	
		var date2 = $("#lawFixinfoDlinDate1").val().replace(/\-/gi,"");

		// 		alert(date1+" : "+date2);
		if(date1 == "" || date1 == null){
		}else if(date2 == "" || date2 == null){
		}else if(date1 > date2){
			return "x";
		}
	};

		
	/* 심급코드 조회 */
	function selectOutWebFixInfoInstAdmCode(){
		$.ajax({
			async: false
			, url: "selectOutWebFixInfoInstAdmCode.do"
			, type: "post"
			, data: {"lawsuitAdmNo":lawsuitAdmNo} // 기본키 1개만 입력
			, dataType: "json"
			, success: function(data){
				pop.close();
				
				if(data==""||data==null){
					alert("에러발생");
				}else{
					// 					alert(data);
				
					$(data).each(function(i,vo){
						instAdmCode=decodeURIComponent(vo.instAdmCode).replace(/00/,""); // 코드값 저장
						$("#instAdmCode > option").remove();
						$("#instAdmCode").append(
									'<option val="0">선택</option>'
									);
						for(var i=1;i<=instAdmCode;i++){
							$("#instAdmCode").append(
									'<option value="'+i+'" id="'+i+'">'+i+'심</option>'
									);
							}// for
						$("#instAdmCode").val("0");
					});//each
						// 							selectGbCode();
				}// if
			}//function
		});//$.ajax	
	}// selectOutWebFixInfoInstAdmCode()
	
	
	/* 팝업에서 받아온 소송번호 셋팅 */
	function lis(x){

		basicfixinfo_init();
		lawsuitAdmNo = $("#lawsuitAdmNo").val(x.substring(0,10));
		var ic = x.substring(10,13).replace(/00/,"");
		instAdmCode=ic; // 코드값 저장
		
		$("#instAdmCode > option").remove();
		
		$("#instAdmCode").append(
				'<option val="0">선택</option>'
				);			
		
		
		$("#instAdmCode").val("0");
		
		pop.close();
	}
	
	
	

	/* 소송번호, 심급번호로 기일정보 조회 */ 
	function selectOutFixInfo(){
		
		// 		alert(instAdmCode);	
		$.ajax({
			async: false
			, url: "selectOutWebFixInfoAll.do"
			, type: "post"
			, data: {"lawsuitAdmNo":lawsuitAdmNo
					 ,"instAdmCode":("00"+instAdmCode)	} // 기본키 1개만 입력
			, dataType: "json"
			, success: function(data){
				if(data==""||data==null){
					basicfixinfo_init();	
					alert("DB확인!!!");
				}else{
					// 					alert(data);//<-----작업중
											
					// 					$("#CaseTyCode").attr("disabled",false);
					// 					$("#Sepcode").attr("disabled",false);
					// 					$("#CortCode").attr("disabled",false);
					// 					$("#PrgrCode").attr("disabled",false);
						
					var pladefName = "";
					var ClamVop = 0;
					var cnt = 0;

					$(data).each(function(i,vo){
						
						cnt ++;
						
						$("#CaseNo").val(decodeURIComponent(vo.instAdmCaseNo)); 			// 사건번호
						$("#CaseTyCode").val(decodeURIComponent(vo.lawsuitCaseTyCode)); 	// 사건유형
						$("#PrgrCode").val(decodeURIComponent(vo.instAdmPrgrCode));			// 진행상태
						$("#Sepcode").val(decodeURIComponent(vo.lawsuitCpPladefSepcode));	// 원피고구분코드
						
						if(pladefName == ""){
							pladefName = pladefName+decodeURIComponent(vo.pladefName);
						}
						if(cnt > 1){
							pladefName = pladefName+"외 "+(cnt-1)+"명";
						}
						$("#pladefName").val(pladefName); // 피고명		
						
						ClamVop = ClamVop+parseInt(decodeURIComponent(vo.pladefClamVol));
						
						$("#ClamVop").val(set_comma(ClamVop)); // 사건번호
						
						$("#CortCode").val(decodeURIComponent(vo.instAdmCortCode)); 		// 수행법원
					});//each
					
					pagingSet();
				}// if
			}//function
		});//$.ajax	
	}// selectOutInstAdmCode(ic)
	
	function basicfixinfo_init(){
		$("#CaseNo").val("");
		$("#pladefName").val("");
		$("#ClamVop").val("");
		
		$("#Sepcode").val("000");
		$("#CaseTyCode").val("000");
		$("#CortCode").val("000");
		$("#PrgrCode").val("000");
	}
	
	/* 페이지 표시 */
	function pagingSet(){
		$.ajax({
			async: false
			, url: "selectOutWebFixInfoPagingSet.do"
			, type: "post"
			, data: {"lawsuitAdmNo":lawsuitAdmNo
				  	,"instAdmCode":("00"+instAdmCode)
					, "page":page} // 기본키 1개만 입력
			, dataType: ""
			, success: function(data){
				$("#page_area > span").remove();
					if(data==""||data==null){
// 						alert("없음");
						return;
					}else{
// 						alert(data); // 총 카운트 값
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
					
					/*  기일정보 목록 조회  */
					
					selectOutWebFixInfoListAll();//<-----작업중
				}//function
		});//$.ajax
		
	}
	
	
	
	
	/* 숫자 콤마 찍기 */
	function set_comma(x){
		var sx = String(x);
		var re = /(\-?\d+)(\d{3})($|\.\d+)/;
		
		if(re.test(x)){
			return sx.replace(re, function(str, p1,p2,p3){ return set_comma(p1)+","+p2+""+p3; } );
		}else{
			return sx;
		}
	}// set_comma()

	/* 기일정보 목록 조회 */
	function selectOutWebFixInfoListAll(){
		
		$.ajax({
			async: false
			, url: "selectOutWebFixInfoListAll.do"
			, type: "post"
			, data: {"lawsuitAdmNo":lawsuitAdmNo
					 ,"instAdmCode":("00"+instAdmCode)
					 , "page":page*5} // 기본키 1개만 입력
			, dataType: "json"
			, success: function(data){
						$(".outfixinfolist_tr").remove();
						detail_init();
					if(data==""||data==null){
// 							alert("기일정보 목록이 없음");
							
							$("#outfixinfolist_table").append(
											'<tr class="outfixinfolist_tr" align="center">'
											+ '<td colspan="5" align="center"><font size=3>조회된사항이 없습니다.</font></td>'
											+ '</tr>'
							); // append
							
							return;
					}else{

// 							alert(data);//<-----작업중
							
							$(data).each(function(i,vo){
								$("#outfixinfolist_table").append(
										'<tr class="list_tr outfixinfolist_tr linked_btn_style" id="'+decodeURIComponent(vo.lawFixinfoNum)+'" >'
										+'<td>'+(i+1)+'</td>'
										+'<td>'+setsepcode(decodeURIComponent(vo.lawFixinfoSepcode))+'</td>'
										+'<td>'+decodeURIComponent(vo.lawFixinfoPlc).replace(/\+/gi," ")+'</td>'
										+'<td>'+decodeURIComponent(vo.lawFixinfoDate).replace(/\+/gi," ")+'</td>'
										+'<td>'+decodeURIComponent(vo.lawFixinfoDlinDate).replace(/\+/gi," ")+'</td>'
										+'</tr>'
								
								); // append
							});//each
							
					}// if
				}//function
		});//$.ajax	
		
	}// selectOutWebFixInfoListAll()

	
	function setsepcode(x){
		if(x=="001"){
			x="변론조사기일";
		}else if(x=="002"){
			x="쟁점조사기일";
		}else if(x=="003"){
			x="집중증거조사기일";
		}else if(x=="004"){
			x="기타";
		}
		return x;
	}
	
	/* 기일정보 상세 조회 */ // 기일 일련번호 필요
	function selectOutWebFixInfoListDetail(){
		$.ajax({
			async: false
			, url: "selectOutWebFixInfoListDetail.do"
			, type: "post"
			, data: {"lawsuitAdmNo":lawsuitAdmNo
					 ,"instAdmCode":("00"+instAdmCode)
					 ,"lawFixinfoNum":lawFixinfoNum}
			, dataType: "json"
			, success: function(data){
				detail_init();
					if(data==""||data==null){
							alert("에러발생");
					}else{

// 							alert(data);//<-----작업중
							setDisabled();
							setSelectDate();	//날짜 셋팅
							var date1="";
							var date2="";
							$(data).each(function(i,vo){
								date1=decodeURIComponent(vo.lawFixinfoDate);
								date2=decodeURIComponent(vo.lawFixinfoDlinDate);
								
// 								alert(date1+" : "+date2);
								$("#lawFixinfoDate1").val(setdateformat(date1.substring(0, 8)));
								$("#lawFixinfoDate2").val(date1.substring(8, 10));
								$("#lawFixinfoDate3").val(date1.substring(10, 12));
								
								$("#lawFixinfoDlinDate1").val(setdateformat(date2.substring(0, 8)));
								$("#lawFixinfoDlinDate2").val(date2.substring(8, 10));
								$("#lawFixinfoDlinDate3").val(date2.substring(10, 12));
								
								$("#lawFixinfoPlc").val(decodeURIComponent(vo.lawFixinfoPlc).replace(/\+/gi," "));
								$("#lawFixinfoSepcode").val(decodeURIComponent(vo.lawFixinfoSepcode));
								$("#lawFixinfoOthInsi").val(decodeURIComponent(vo.lawFixinfoOthInsi).replace(/\+/gi," "));
								$("#lawFixinfoCpInsi").val(decodeURIComponent(vo.lawFixinfoCpInsi).replace(/\+/gi," "));
								$("#lawFixinfoMainIssu").val(decodeURIComponent(vo.lawFixinfoMainIssu).replace(/\+/gi," "));
								$("#lawFixinfoCortOpin").val(decodeURIComponent(vo.lawFixinfoCortOpin).replace(/\+/gi," "));
								$("#lawFixinfoLyrOpin").val(decodeURIComponent(vo.lawFixinfoLyrOpin).replace(/\+/gi," "));
								
								
								
							});//each
							gbcode = "update"; //update 구분코드
					}// if
				}//function
		});//$.ajax	
	}// selectOutWebFixInfoListDetail()
	
	/* 초기화 */
	function detail_init(){
		$("#lawFixinfoDate1").val("");
		$("#lawFixinfoDate2").val("00");
		$("#lawFixinfoDate3").val("00");
		
		$("#lawFixinfoDlinDate1").val("");
		$("#lawFixinfoDlinDate2").val("00");
		$("#lawFixinfoDlinDate3").val("00");
		
		$("#lawFixinfoPlc").val("");
		$("#lawFixinfoSepcode").val("000");
		$("#lawFixinfoOthInsi").val("");
		$("#lawFixinfoCpInsi").val("");
		$("#lawFixinfoMainIssu").val("");
		$("#lawFixinfoCortOpin").val("");
		$("#lawFixinfoLyrOpin").val("");
		
		
		$("#lawFixinfoDate1").attr("disabled",true);
		$("#lawFixinfoDate2").attr("disabled",true);
		$("#lawFixinfoDate3").attr("disabled",true);
		
		$("#lawFixinfoDlinDate1").attr("disabled",true);
		$("#lawFixinfoDlinDate2").attr("disabled",true);
		$("#lawFixinfoDlinDate3").attr("disabled",true);
		
		$("#lawFixinfoPlc").attr("disabled",true);
		$("#lawFixinfoSepcode").attr("disabled",true);
		$("#lawFixinfoLyrOpin").attr("disabled",true);
	}
	
	/* 날짜 포멧 */
	function setdateformat(x){
		
		x=(x.substring(0,4))+"-"+(x.substring(4,6))+"-"+(x.substring(6,8));
		
		return x;
	}// setdateformat();
	
	function setSelectDate(){
		$("#lawFixinfoDate2 > option").remove();
		
		for(var i=0;i<=24;i++){
			if(i<10){
				i="0"+i;
			}
			$("#lawFixinfoDate2").append(
					'<option value="'+i+'" id="'+i+'">'+i+'</option>'
					);
			}// for
		$("#lawFixinfoDate2").val("00");
		
		$("#lawFixinfoDate3 > option").remove();
		
		for(var i=0;i<=60;i++){
			if(i<10){
				i="0"+i;
			}
			$("#lawFixinfoDate3").append(
					'<option value="'+i+'" id="'+i+'">'+i+'</option>'
					);
			}// for
		$("#lawFixinfoDate3").val("00");
			
		$("#lawFixinfoDlinDate2 > option").remove();
		
		for(var i=0;i<=24;i++){
			if(i<10){
				i="0"+i;
			}
			$("#lawFixinfoDlinDate2").append(
					'<option value="'+i+'" id="'+i+'">'+i+'</option>'
					);
			}// for
		$("#lawFixinfoDlinDate2").val("00");
		
		$("#lawFixinfoDlinDate3 > option").remove();
		
		for(var i=0;i<=60;i++){
			if(i<10){
				i="0"+i;
			}
			$("#lawFixinfoDlinDate3").append(
					'<option value="'+i+'" id="'+i+'">'+i+'</option>'
					);
			}// for
		$("#lawFixinfoDlinDate3").val("00");	

	}// setSelectDate();
	
	
	/*	
기일일시
	lawFixinfoDate1
	lawFixinfoDate2
	lawFixinfoDate3
마감일시
	lawFixinfoDlinDate1
	lawFixinfoDlinDate2
	lawFixinfoDlinDate3
	*/
	
	// 신규 추가
	function newReg(){
		setInsert();
		$('input[name="lawFixinfoDate1"]').focus();
		
	}
	// 신규추가시 세팅
	function setInsert(){
		setSelectDate();
		 $('#lawFixinfoDate1').val(""); $('#lawFixinfoDate2').val("00");$('#lawFixinfoDate3').val("00");
	     $('#lawFixinfoPlc').val("");$('#lawFixinfoMainIssu').val("");$('#lawFixinfoDlinDate1').val(""); 
	     $('#lawFixinfoDlinDate2').val("00");$('#lawFixinfoDlinDate3').val("00");$('#lawFixinfoSepcode').val(""); 
	     $('#lawFixinfoOthInsi').val("");$('#lawFixinfoCortOpin').val("");$('#lawFixinfoCpInsi').val(""); 
	     $('#lawFixinfoLyrOpin').val("");$('#lawFixinfoNum').val(""); 
	     setDisabled();
	}

	// 기일 disalbled
	 function setDisabled(){
		 
		 $('#lawFixinfoDate1').attr('disabled', false);$('#lawFixinfoDate2').attr('disabled', false);
	     $('#lawFixinfoDate3').attr('disabled', false);$('#lawFixinfoPlc').attr('disabled', false);
	     $('#lawFixinfoDlinDate1').attr('disabled', false);$('#lawFixinfoDlinDate2').attr('disabled', false);
	     $('#lawFixinfoDlinDate3').attr('disabled', false);$('#lawFixinfoSepcode').attr('disabled', false);
	     $('#lawFixinfoLyrOpin').attr('disabled', false);
		
	}
	
/////////////////////////////////////////////////////////////////////////////////////////////////////////

// window.onload = selected;

//심급세팅
function addOP(ic){
	
	var f = $("#instAdmCode");
	var leng = parseInt(inst)+1;  
	 
	for( var i=1; i< leng ; i++){		
		var op = new Option();
		var val= LPad(i,"0",3); 
	    op.value = val ; // 값 설정
	    op.text = i+"심"; // 텍스트 설정
	    f.options.add(op); // 옵션 추가
	}
}

// 시, 분 세팅
function setHoMi(){
	
	var f = document.OutFixinfo;
		 
	for( var i=1; i<=23; i++){
		
		var op = new Option();
		var op2 = new Option();
		var val= LPad(i,"0", 2); 
	    op.value = val ; // 값 설정
	    op.text =  val; // 텍스트 설정
	    op2.value = val ; // 값 설정
	    op2.text =  val; // 텍스트 설정
	    f.lawFixinfoDate2.options.add(op); // 옵션 추가
	    f.lawFixinfoDlinDate2.options.add(op2);
	}
    for( var i=1; i<=59; i++){
		
		var op = new Option();
		var op2 = new Option();
		var val= LPad(i,"0", 2); 
	    op.value = val ; // 값 설정
	    op.text =  val; // 텍스트 설정
	    op2.value = val ; // 값 설정
	    op2.text =  val; // 텍스트 설정
	    f.lawFixinfoDate3.options.add(op); // 옵션 추가
	    f.lawFixinfoDlinDate3.options.add(op2);
	}
}

//조회시 초기값 세팅
function selected(){
	
	var instCode = '${fixLawVO.instAdmCode}'; //심급
	var caseCode = '${fixLawVO.lawsuitCaseTyCode}'; //사건유형
	var prgrCode = '${fixLawVO.instAdmPrgrCode}'; //진행상태
	var sepCode =  '${fixLawVO.lawsuitCpPladefSepcode}'; // 원피고구분
	var cortCode = '${fixLawVO.instAdmCortCode}'; // 법원코드
	
	$('#instAdmCode').val(instCode);
	$('#CaseTyCode').val(caseCode);
	$('#PrgrCode').val(prgrCode);
	$('#Sepcode').val(sepCode);
	$('#CortCode').val(cortCode);
	
	
	 var yM = '${fixinfoDetail.lawFixinfoDate}';  
     $('#lawFixinfoDate1').val(yM.substr(0,8)); 
     $('#lawFixinfoDate2').val(yM.substr(8,2));
     $('#lawFixinfoDate3').val(yM.substr(10,2));
     
     $('#lawFixinfoPlc').val('${fixinfoDetail.lawFixinfoPlc}'); 
     $('#lawFixinfoMainIssu').val('${fixinfoDetail.lawFixinfoMainIssu}');
     
     var yM2 = '${fixinfoDetail.lawFixinfoDlinDate}'; 
     $('#lawFixinfoDlinDate1').val(yM2.substr(0,8)); 
     $('#lawFixinfoDlinDate2').val(yM2.substr(8,2));
     $('#lawFixinfoDlinDate3').val(yM2.substr(10,2));
     
     $('#lawFixinfoSepcode').val('${fixinfoDetail.lawFixinfoSepcode}'); 
     $('#lawFixinfoOthInsi').val('${fixinfoDetail.lawFixinfoOthInsi}'); 
     $('#lawFixinfoCortOpin').val('${fixinfoDetail.lawFixinfoCortOpin}'); 
     $('#lawFixinfoCpInsi').val('${fixinfoDetail.lawFixinfoCpInsi}'); 
     $('#lawFixinfoLyrOpin').val('${fixinfoDetail.lawFixinfoLyrOpin}'); 
     
     $('#lawFixinfoNum').val('${fixinfoDetail.lawFixinfoNum}'); 	
     
} 

//검색 팝업창 open
function getSearch(){
  
   var f = document.OutFixinfo;
   var PopWindow = "소송관리번호검색";
   var hwid=( ( screen.width ) ? ( screen.width-800 )/2:0 ) -70;
   
   window.open("",PopWindow,'width=800,height=380,toolbar=no,status=no,menubar=no,resizable=no,top=200,left='+hwid ); 
   
   f.target = PopWindow;
   f.action = "OUT_LawNo_POP.do";
   f.submit();
}

//심급콤보 변경시 조회
function instChange(Obj){
	
	var f= document.OutFixinfo;
	var selCode = Obj.options[Obj.selectedIndex].value;
	f.instAdmCode.value=selCode;
	f.action = "<c:url value='getLawFixinfoList.do'/>";
	f.submit(); 
}

//페이징 번호 클릭시 조회
function linkPage(pageNo) {
	
	var f= document.OutFixinfo;
	f.pageIndex.value=pageNo;  // 조회하려는 페이지 넘버
	f.action = "<c:url value='getLawFixinfoList.do'/>";
	f.submit(); 
} 

// 상세조회 ( 수정예약 )
function getDetail(FixinfoNum){
	
   $.ajax({
    	  cache: false,
		  timeout: 5000,
		  type: "POST"
		, url : "getFixinfoDetail.do"
		, data:  {  
			        lawFixinfoNum : FixinfoNum      // 의뢰번호
			       ,lawsuitAdmNo : $('#lawNo').val()
			       ,instAdmCode : $('#instAdmCode').val()
	             }
		, success : function(data) {
			      
			     var yM = data.fixinfoDetail.lawFixinfoDate.substr(0,8);
			     var ho = data.fixinfoDetail.lawFixinfoDate.substr(8,2);
			     var mi = data.fixinfoDetail.lawFixinfoDate.substr(10,2);
			     $('#lawFixinfoDate1').val(yM); 
			     $('#lawFixinfoDate2').val(ho);
			     $('#lawFixinfoDate3').val(mi);
			     
			     $('#lawFixinfoPlc').val(data.fixinfoDetail.lawFixinfoPlc); 
			     $('#lawFixinfoMainIssu').val(data.fixinfoDetail.lawFixinfoMainIssu);
			     
			     var yM2 = data.fixinfoDetail.lawFixinfoDlinDate.substr(0,8);
			     var ho2 = data.fixinfoDetail.lawFixinfoDlinDate.substr(8,2);
			     var mi2 = data.fixinfoDetail.lawFixinfoDlinDate.substr(10,2);
			     $('#lawFixinfoDlinDate1').val(yM2); 
			     $('#lawFixinfoDlinDate2').val(ho2); 
			     $('#lawFixinfoDlinDate3').val(mi2); 
			     
			     $('#lawFixinfoSepcode').val(data.fixinfoDetail.lawFixinfoSepcode); 
			     $('#lawFixinfoOthInsi').val(data.fixinfoDetail.lawFixinfoOthInsi); 
			     $('#lawFixinfoCortOpin').val(data.fixinfoDetail.lawFixinfoCortOpin); 
			     $('#lawFixinfoCpInsi').val(data.fixinfoDetail.lawFixinfoCpInsi); 
			     $('#lawFixinfoLyrOpin').val(data.fixinfoDetail.lawFixinfoLyrOpin); 
			     
			     $('#lawFixinfoNum').val(data.fixinfoDetail.lawFixinfoNum); 
			     
			},
			error: function(xhr, textStatus, errorThrown) {
    			console.log(errorThrown);
    		},
    		complete: function() {  setDisabled();  
    		                       document.location.hash='section'; }  // 성공시 페이지 포커스
		});      
} 



// 기일 삭제
function deleteFix(){
	
	 var temp = $('#lawFixinfoNum').val();
	 var lyrOp = $('#lawFixinfoLyrOpin').val();
	 var startDate = $('#lawFixinfoDate1').val();
	 var endDate = $('#lawFixinfoDlinDate1').val(); 
	 var plc = $('#lawFixinfoPlc').val();
	 var sepCode = $('#lawFixinfoSepcode').val(); 
	 var el = document.getElementById('lawFixinfoLyrOpin').disabled ;
	 
	 if( el == true ){
		 
		 alert("삭제할 기일을 선택해주세요");
		 return ;
		 
	 }else{
	
		  if( (temp == null || temp =='') && startDate ==''  && endDate ==''
			  && plc ==''&& sepCode =='' && lyrOp ==''){
			  
			  alert( "삭제할 내역이 없습니다" );
			  return false;
			  
		  }else if( temp == null || temp =='' && startDate !=''  && endDate !=''
			  && plc !=''&& sepCode !='' && lyrOp !='' ){
			  
				 if(confirm("작성중인 내용을 삭제하시겠습니까?")){	
					
			        setInsert();
			        return false;
					
				} else {
					
					return;
				};	
			  
		  }else{
			  
			  if(confirm("삭제하시겠습니까? ")){	
					
				  var f = document.OutFixinfo;
				  f.action = "deleteFixinfo.do";
				  f.submit();
					
				} else {
					
					return;
				};	
			  
		  };
	 };
}

//기일 입력
function insertFix(){
	
	var el = document.getElementById('lawFixinfoLyrOpin').disabled ;

	if( el== true ){
		 
		alert("저장할 내용이 없습니다");
		 
	}else{
		
		var f = document.OutFixinfo;
		 
		if (f.lawFixinfoDate1.value == "") {
			
			alert("기일일자를 입력하세요.");
			f.lawFixinfoDate1.focus();
			return false;
			
		}else if (f.lawFixinfoPlc.value == "") {
			
			window.alert("장소를 입력하세요.");
			f.lawFixinfoPlc.focus();
			return false;
			
		}else if (f.lawFixinfoDlinDate1.value == "") {
			
			window.alert("마감일자를 입력하세요.");
			f.lawFixinfoDlinDate1.focus();
			return false;
			
		}else if (f.lawFixinfoSepcode.value == "") {		
			
			alert("기일구분을 선택해주세요.");
			f.lawFixinfoSepcode.focus();
			return false;
			
		}else if (f.lawFixinfoLyrOpin.value == "") {		
			
			alert("변호사의견을 입력해주세요.");
			f.lawFixinfoLyrOpin.focus();
			return false;
			
		}else if (f.lawFixinfoDate1.value > f.lawFixinfoDlinDate1.value ) {		
			
			alert("날짜를 확인해주세요.");
			f.lawFixinfoDate1.focus();
			return false;
		}else if (f.lawFixinfoDate2.value==''){
			alert("기일 일시을 확인해주세요.");
			f.lawFixinfoDate2.focus();
			return false;
		}else if (f.lawFixinfoDate3.value==''){
			alert("기일 일시를 확인해주세요.");
			f.lawFixinfoDate3.focus();
			return false;
		}else if (  f.lawFixinfoDlinDate2.value==''){
			alert("마감 일시을 확인해주세요.");
			f.lawFixinfoDlinDate2.focus();
			return false;
		}else if ( f.lawFixinfoDlinDate3.value==''){
			alert("마감 일시를 확인해주세요.");
			f.lawFixinfoDlinDate3.focus();
			return false;
		}
		
		if(confirm("저장하시겠습니까?")){	
			
			 f.action = "insertFixinfo.do";
			 f.submit();
			
		} else {
			
			return;
		};	
	};
}

//테이블 선택 row bg 변경
function onMenu(obj){
	obj.style.background = "#b0e0e6";
}
function outMenu(obj){
	obj.style.background = "#ffffff";
}

// 최대값 체크 
function textLengthChk(obj){
	
	var st_len = 0;
	var maxlength = obj.getAttribute ? parseInt(obj.getAttribute("maxlength")) : "";
	if( obj.value == null ){
		 return 0;
	};
	
	for(var i=0;i<obj.value.length;i++){
		var es_len = escape(obj.value.charAt(i));
		if ( es_len.length == 1 ) {
    		st_len ++;
		}else if ( es_len.indexOf("%u") != -1 ) {
    		st_len += 2;
		}else if ( es_len.indexOf("%") != -1 ) {
    		st_len += es_len.length/3;
		};
	};
	if(st_len >= maxlength){
		alert( maxlength + " 자를 초과 입력할수 없습니다. \n 초과된 내용은 자동으로 삭제 됩니다. ");
	obj.value=obj.value.substring(0,maxlength);
	};
}

// 자릿수 세팅
function LPad(digit,attatch, size ) {
    var add = "";
    digit = digit.toString();

    if (digit.length < size) {
        var len = size - digit.length;
        for (var i = 0 ; i < len; i++) {
            add += attatch;
        };
    };
    return add + digit;
}

//날짜 입력
$(function() {
	var $calendar = $('.inputTxt2').datepicker({
		  prevText : '이전달' // prev 아이콘의 툴팁.
		, nextText : '다음달' // next 아이콘의 툴팁.
		, monthNamesShort : ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] // 월의 한글 형식.
		, dayNamesMin : ['일','월', '화', '수', '목', '금', '토'] // 요일의 한글 형식.
		, dateFormat: "yymmdd" // 텍스트 필드에 입력되는 날짜 형식.
		, currentText: '오늘 날짜' // 오늘 날짜로 이동하는 버튼 패널
		, showMonthAfterYear: true // 월, 년순의 셀렉트 박스를 년,월 순으로 바꿔준다. 
		, changeYear: true // 년을 바꿀 수 있는 셀렉트 박스를 표시한다.
		, changeMonth: true // 월을 바꿀수 있는 셀렉트 박스를 표시한다.
		
	});
});


</script>	
	
	
</body>
</html>

