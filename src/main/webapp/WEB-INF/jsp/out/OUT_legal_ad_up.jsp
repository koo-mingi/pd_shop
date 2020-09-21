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
	<title>법률자문조회</title>
	<link href="${pageContext.request.contextPath}/css/css.css" rel="stylesheet" type="text/css" />
	<link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">

<style type="text/css">
	#error_msg{
		color: red;
	}	
	.linked_btn_style {
		cursor: pointer;
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
	<div id="contents">
		<h2 class="box"><img src="images/sub_tit1.png" alt="" /></h2>
		<!--///////////////////////////  검색조건  ///////////////////////////////  -->
		<div class="seachTable1">
			<table class="table_V1">
				<colgroup>
					<col width="15%" />
					<col width="35%" />
					<col width="15%" />
					<col width="*" />
				</colgroup>
				<tr>
					<th>의뢰번호</th>
					<td><input type="text" name="legaladvLawAdvReqNo" id="legaladvLawAdvReqNo" maxlength="10" />
					              &nbsp;&nbsp;<span id="error_msg"></span></td>
					<th>의뢰일자</th>
					<td><input  name="legaladvOutReqDate1" id="legaladvOutReqDate1" value="" class="inputTxt2"  readonly="readonly" />
					    - <input  name="legaladvOutReqDate2" id="legaladvOutReqDate2" value="" class="inputTxt2"  readonly="readonly" /></td>
				</tr>
				<tr>
					<th>법률자문구분</th>
					<td>
						<select name="legaladvLawAdvCode" id="legaladvLawAdvCode" style="width: 160px">
						    <option value="000" selected>전제</option>
							<option value="001">보상손사자문</option>
							<option value="002">계약관련자문</option>
							<option value="003">일반자문</option>
						</select>
					</td>
					<th>회신여부</th>
					<td id=legaladvOutRepWtr>
						<span><input type="radio" class="legaladvOutRepWtr" name="legaladvOutRepWtr" value="A"  checked /> 전체</span>
						<span><input type="radio" class="legaladvOutRepWtr" name="legaladvOutRepWtr" value="Y" /> 회신</span>
						<span><input type="radio" class="legaladvOutRepWtr" name="legaladvOutRepWtr" value="N"/> 미회신</span>
					</td>
				</tr>
			</table>
	
			<p class="seachBtn1">
				<img id="search_btn" class="style_btn linked_btn_style" src="images/search_btn1.gif" alt="" />
				<img id="reset_btn" class="style_btn linked_btn_style" src="images/reset_btn1.gif" alt="" />
			</p>
		 <%-- </form>  --%>
		</div>
		<!--///////////////////////////  검색조건  end ///////////////////////////////  -->
	
		
		<!--///////////////////////////  조회 목록   ///////////////////////////////  -->
	
		<div class="requestListTable">
			<table class="table_V2" id="table_V2">
				<colgroup>
					<col width="10%" />
					<col width="10%" />
					<col width="35%" />
					<col width="7%" />
					<col width="10%" />
					<col width="10%" />
					<col width="10%" />
					<col width="8%" />
				</colgroup>
				<tr>
					<th>의뢰번호</th>
					<th>법률자문구분</th>
					<th>의뢰제목</th>
					<th>회신여부</th>
					<th>의뢰일자</th>
					<th>의뢰담당자</th>
					<th>회신일자</th>
					<th>회신</th>
				</tr>
				
				
					<tr align='center' id="is_not_search">						
						<td colspan="8" align="center"><font size = 3>조회된사항이 없습니다.</font></td>
					</tr>						
			    
			</table>
			<div id="page_area">
			
			</div>
	   
	   <!--///////////////////////////  상세조회         ///////////////////////////////  -->
       <div class="mt35" >
        <h3 class="tit">법률자문의뢰사항</h3>
		<div class="requesInput">
			<table class="table_V1">
				<colgroup>
					<col width="12%" />
					<col width="13%" />
					<col width="12%" />
					<col width="13%" />
					<col width="12%" />
					<col width="13%" />
					<col width="12%" />
					<col width="*" />
			   </colgroup>
				 <tr>
					<th>법률자문구분<a name="section"></a></th>
					<td><input type="text" style="width:110px;" readonly="readonly" id="detail_legaladvLawAdvCode"/></td>
					<th>의뢰담당자</th>
					<td><input type="text" style="width:110px;" readonly="readonly" id="detail_reqMgrName"/></td>
					<th>의뢰일자</th>
					<td><input type="text" style="width:110px;" readonly="readonly" id="detail_legaladvOutReqDate" /></td>
					<th>회신요청일자</th>
					<td><input type="text" style="width:110px;" readonly="readonly" id="detail_legaladvOutReqRepdate"/></td>
				</tr>
				<tr>
					<th>의뢰제목</th>
					<td colspan="7"><input type="text" style="width:860px;" readonly="readonly" id="detail_legaladvAdvTit" /></td>
				</tr>
				<tr>
					<th>사실관계</th>
					<td colspan="7"><textarea cols="" rows="" style="width:860px; height:74px; margin:4px 0;" readonly="readonly" id="detail_legaladvOutReqFact"> </textarea></td>
				</tr>
				<tr>
					<th>질의사항</th>
					<td colspan="7"><textarea cols="" rows="" style="width:860px; height:74px; margin:4px 0;" readonly="readonly" id="detail_legaladvOutReqQues"></textarea></td>
				</tr>
				<tr>
					<th>요청사항</th>
					<td colspan="7"><textarea cols="" rows="" style="width:860px; height:74px; margin:4px 0;" readonly="readonly" id="detail_legaladvOutReqReq"></textarea></td>
				</tr>
		
			</table>
		 </div>    
	 </div>
	 
		     <!--///////////////////////////  상세조회 end   ///////////////////////////////  -->
     	<p class="anBtn">
			<a href="outMain.do"><img src="${pageContext.request.contextPath}/images/cancel_btn.png" alt="" /></a>
	     </p>
</div>


<script type="text/javascript">


	var legaladvLawAdvReqNo;	//#legaladvLawAdvReqNo
	var legaladvOutReqDate1;		//#legaladvOutReqDate1
	var legaladvOutReqDate2;		//#legaladvOutReqDate2
	var legaladvLawAdvCode;		//#legaladvLawAdvCode
	var legaladvOutRepWtr = "A";	//.legaladvOutRepWtr
	var select_tr = null;
	var page="1"; //현재 페이지

	
	
	$("#legaladvLawAdvReqNo").focus();
	
	$("#legaladvLawAdvReqNo").focusout(function(){
		$("#error_msg").text("");			
	});
	
	$("#legaladvLawAdvReqNo").keyup(function(e){
		larno_check(e);
	});
	
	$('body').keyup(function (e){
		if(e.keyCode == 13) {
			legaladv_search();
		}
	});
	
	/* 검색버튼 클릭시 */
	$("#search_btn").click(function(){
		page="1";
// 		alert("검색클릭 : "+legaladvLawAdvReqNo+" : "+page);
		legaladvLawAdvReqNo = $("#legaladvLawAdvReqNo").val().trim();
		legaladvLawAdvCode = $("#legaladvLawAdvCode").val().trim();
		
		
		if(legaladvLawAdvReqNo == "" || legaladvLawAdvReqNo == null){
			legaladvLawAdvReqNo=="all";
		}
		legaladvLawAdvReqParamsSet();
		
	});
	
	/* 날짜 입력시 */
	$(".inputTxt2").change(function(){		
		date_validate();
		var x = $(this).val();
		$(this).val(setdateformat(x));
	});
	
	$(".legaladvOutRepWtr").focus(function(){
		legaladvOutRepWtr = $(this).val();
	});
	
	$("body").on("click",".reqno",function(){		
		legaladvLawAdvReqNo = $(this).attr("id");
// 		alert("reqno클릭 : "+legaladvLawAdvReqNo+" : "+page);
		selectOutLegaladvLawAdvWebDetail();
	});
	
	
	$("body").on("mouseover",".is_search",function(){
		select_tr = $(this);
		$(this).css("background-color","#CCFFFF");	
	});
	
	$("body").on("mouseout",".is_search",function(){
		select_tr = null;
		$(this).css("background-color","");	
	});
	
	
	/* 수정 버튼 클릭 */
	$("body").on("click",".legaladvOutRepWtr_modi_btn",function(){
		legaladvLawAdvReqNo=$(this).attr("id");
		post_OUT_legal_ad_re_WEB();		
	});
	
	/* 회신 버튼 클릭 */
	$("body").on("click",".legaladvOutRepWtr_reply_btn",function(){
		legaladvLawAdvReqNo=$(this).attr("id");
		post_OUT_legal_ad_re_WEB();
	});


	/* 초기화 버튼 클릭시 */
	$("#reset_btn").click(function(){
		location="Top_OUT_legal_ad_up.do";
	});
	
	$("body").on("click",".page_n",function(){
		page = $(this).attr("id");
		legaladvLawAdvReqNo="";
		legaladvLawAdvReqParamsSet()
	});
	
	/* post방식으로 보내기 */
		function post_OUT_legal_ad_re_WEB(){
// 		alert(legaladvLawAdvReqNo);
			$.ajax({
				async: false
				, url: "post_OUT_legal_ad_re_WEB.do"
				, type: "post"
				, data: {"legaladvLawAdvReqNo":legaladvLawAdvReqNo}
				, dataType: ""
				, success: function(data){
					location="Top_OUT_legal_ad_re_WEB.do";
				}//function
			});//$.ajax
		};// post_OUT_legal_ad_re_WEB()()

	
	/* 검색 */
	function selectOutLegaladvLawAdvWeb(){
		$.ajax({
			async: false
			, url: "selectOutLegaladvLawAdvWeb.do"
			, type: "post"
			, data: {"legaladvLawAdvReqNo":legaladvLawAdvReqNo
					,"date1":legaladvOutReqDate1
					,"date2":legaladvOutReqDate2
					,"legaladvLawAdvCode":legaladvLawAdvCode
					,"legaladvOutRepWtr":legaladvOutRepWtr
					,"legaladvOutReqLyrid":"${sessionScope.outid}"
					,"page":parseInt(page)*10}
			, dataType: "json"
			, success: function(data){
						$("#is_not_search").remove();	
						$(".is_search").remove();
					if(data==""||data==null){
							$("#table_V2").append(	
												'<tr align="center" id="is_not_search">'						
												+'<td colspan="8" align="center"><font size = 3>조회된사항이 없습니다.</font></td>'
												+'</tr>'
											);
							$("#page_area > span").remove();
							alert("검색 결과가 없습니다.");
					}else{
	
						var x="미회신";
						$(data).each(function(i,vo){
							
							if(decodeURIComponent(vo.legaladvOutRepWtr)=="Y"){
								x="회신";
							}
							
							$("#table_V2").append('<tr class="is_search">'
									+ '<td><span class="reqno linked_btn_style" id="'+decodeURIComponent(vo.legaladvLawAdvReqNo)+'" >'
									+ decodeURIComponent(vo.legaladvLawAdvReqNo)
									+ '</span></td>'
									+ '<td><span class="reqno linked_btn_style" id="'+decodeURIComponent(vo.legaladvLawAdvReqNo)+'" >'
									+ decodeURIComponent(vo.codeName).replace(/\+/gi," ")
									+ '</span></td>'
									+ '<td><span class="reqno linked_btn_style" id="'+decodeURIComponent(vo.legaladvLawAdvReqNo)+'" >'
									+ decodeURIComponent(vo.legaladvAdvTit).replace(/\+/gi," ")
									+ '</span></td>'
									+ '<td><span class="reqno linked_btn_style" id="'+decodeURIComponent(vo.legaladvLawAdvReqNo)+'" >'
									+ x
									+ '</span></td>'
									+ '<td><span class="reqno linked_btn_style" id="'+decodeURIComponent(vo.legaladvLawAdvReqNo)+'" >'
									+ setdateformat(decodeURIComponent(vo.legaladvOutReqDate))
									+ '</span></td>'
									+ '<td><span class="reqno linked_btn_style" id="'+decodeURIComponent(vo.legaladvLawAdvReqNo)+'" >'
									+ decodeURIComponent(vo.insaName)
									+ '</span></td>'
									+ '<td><span class="reqno linked_btn_style" id="'+decodeURIComponent(vo.legaladvLawAdvReqNo)+'" >'
									+ setdateformat(decodeURIComponent(vo.legaladvOutRepDate))
									+ '</span></td>'
									+ '<td id="reply_'+i+'"><span class="reqno linked_btn_style" id="'+decodeURIComponent(vo.legaladvLawAdvReqNo)+'" >'
									+ '</span></td>'
									+ '</tr>'
									); // append
								if(decodeURIComponent(vo.legaladvOutRepWtr)=="Y"){
									$("#reply_"+i).append(
											'<img src="images/modi_btn.gif" class="legaladvOutRepWtr_modi_btn  linked_btn_style" id="'+decodeURIComponent(vo.legaladvLawAdvReqNo)+'" alt="" />'
											);							
								}else{
									$("#reply_"+i).append(
											'<img src="images/answer_btn.gif" class="legaladvOutRepWtr_reply_btn  linked_btn_style" id="'+decodeURIComponent(vo.legaladvLawAdvReqNo)+'" alt="" />'
											);
								}// if
						});// each
					}// if
			}//function
		});//$.ajax
	};// selectOutLegaladvLawAdvWeb()

	
	/* 날짜 포멧 */
	function setdateformat(x){
		
		x=(x.substring(0,4))+"-"+(x.substring(4,6))+"-"+(x.substring(6,8));
		
		return x;
	}// setdateformat();
	
	
	/* 파라미터값 셋팅 */
	function legaladvLawAdvReqParamsSet(){		
		
// 		alert("파라미터셋팅 : "+legaladvLawAdvReqNo+" : "+page);
		
		var check = date_validate();
		if(check=="3"){
			return false;
		}else if(check=="1"){
			alert("검색 시작일을 입력해주세요");
			return;
		}else if(check=="2"){
			alert("검색 마지막일을 입력해주세요");
			return;
		}else if(check=="0"){
			return false;
		}
		
		//page = "1";
		pagingSet();
		// selectOutLegaladvLawAdvWeb();
		
	};	
	
	/* 페이지 표시 */
	function pagingSet(){
		$.ajax({
			async: false
			, url: "selectpagingSet.do"
			, type: "post"
			, data: {"legaladvLawAdvReqNo":legaladvLawAdvReqNo
					,"date1":legaladvOutReqDate1
					,"date2":legaladvOutReqDate2
					,"legaladvLawAdvCode":legaladvLawAdvCode
					,"legaladvOutRepWtr":legaladvOutRepWtr
					,"legaladvOutReqLyrid":"${sessionScope.outid}"
					, "page":page} // 기본키 1개만 입력
			, dataType: ""
			, success: function(data){
				$("#page_area > span").remove();
					if(data==""||data==null){
						alert("없음");
					}else{
						//alert(data); // 총 카운트 값
						var tpage= parseInt(parseInt(data)/10)+1;
						
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
					
					selectOutLegaladvLawAdvWeb();
				}//function
		});//$.ajax
		
	}
	
	/* 오늘 날짜 추출 */
	function today_date(){
		var D = new Date();
		var d = D.getDate();
		if(d<10){d = "0"+d;}
		return D.getFullYear()+""+(D.getMonth()+1)+""+d;
	}// today_date()
	
	/* 날짜 유효성 체크 */
	function date_validate(){
		legaladvOutReqDate1 = $("#legaladvOutReqDate1").val().replace(/\-/gi,"");	
		legaladvOutReqDate2 = $("#legaladvOutReqDate2").val().replace(/\-/gi,"");

		var date = today_date();
		
		
		if(legaladvOutReqDate1 == "" || legaladvOutReqDate1 == null){
			return "1";
		}else if(legaladvOutReqDate2 == "" || legaladvOutReqDate2 == null){
			return "2";
		}else if(legaladvOutReqDate2 > date){
			alert("마지막일는 오늘보다 늦을 수 없습니다.");
			$("#legaladvOutReqDate2").focus();
			return "0";
		}else if(legaladvOutReqDate1 > legaladvOutReqDate2){
			alert("검색 시작일이 마지막일보다 늦을 수 없습니다.");
			$("#legaladvOutReqDate1").focus();
			return "3";
		}
		return "ok";
	};

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
			, buttonImage: '&amp;lt;?=$g4[path]?&amp;gt;/img/calendar.gif'
		    
		});
	});
	
		// 숫자 체크
		function larno_check(e){
			var evCode = e.keyCode;
			 if(   (evCode < 48 || evCode > 57) && (evCode < 96 || evCode > 105) &&  evCode != 8 && evCode != 9   &&  evCode != 13  &&
			    	  (evCode < 37 || evCode > 40)  ){
				 
				 $("#legaladvLawAdvReqNo").val("");
				 $("#error_msg").text("숫자만 입력해주세요");
			    }else{
			    	$("#error_msg").text("");
			    }// if -1
		}// larno_check(e)
		
		/* 세부검색 */
		function selectOutLegaladvLawAdvWebDetail(){
			$.ajax({
				async: false
				, url: "selectOutLegaladvLawAdvWebDetail.do"
				, type: "post"
				, data: {"legaladvLawAdvReqNo":legaladvLawAdvReqNo
						 ,"gbParam":"legaladvLawAdvReqNo"} // 기본키 1개만 입력
				, dataType: "json"
				, success: function(data){
						if(data==""||data==null){
						}else{
							$(data).each(function(i,vo){
								$("#detail_legaladvLawAdvCode").val(decodeURIComponent(vo.codeName).replace(/\+/gi," ")); 			// 법률자문구분이름
								$("#detail_reqMgrName").val(decodeURIComponent(vo.insaName).replace(/\+/gi," ")); 					// 의뢰담당자
								$("#detail_legaladvOutReqDate").val(setdateformat(decodeURIComponent(vo.legaladvOutReqDate))); 							// 의뢰일자
								$("#detail_legaladvOutReqRepdate").val(setdateformat(decodeURIComponent(vo.legaladvOutReqRepdate)));				// 회신요청일자
								$("#detail_legaladvAdvTit").val(decodeURIComponent(vo.legaladvAdvTit).replace(/\+/gi," "));			// 의뢰제목
								$("#detail_legaladvOutReqFact").val(decodeURIComponent(vo.legaladvOutReqFact).replace(/\+/gi," "));	// 사실관계
								$("#detail_legaladvOutReqQues").val(decodeURIComponent(vo.legaladvOutReqQues).replace(/\+/gi," "));	// 질의사항
								$("#detail_legaladvOutReqReq").val(decodeURIComponent(vo.legaladvOutReqReq).replace(/\+/gi," "));	// 요청사항
							});
						}// if
					}//function
			});//$.ajax
		}//
		
	
</script >



</body>
</html>