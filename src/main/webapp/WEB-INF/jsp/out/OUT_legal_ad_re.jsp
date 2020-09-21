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
	<script src="${pageContext.request.contextPath}/js/jquery-1.9.1.js" type="text/javascript" ></script>
	
<style type="text/css">
	#legaladv_cost_add_btn{
		display: none;
	}
	.linked_btn_style {
	cursor: pointer;
	}
	.each_cost:HOVER {
		background-color: #CCFFFF;
	}
	
	.number_style_right{
 		text-align: right;
	}
	
	.number_style_right > span{
		
/* 		background-color: red; */
		float:right;
		margin-right: 5px;
	}
			
</style>
</head>
<body>
	<div id="wrap">
		
		<div id="contents">
			<div>
				<h2 class="box" align="left"><img src="images/sub_tit2.png" alt="" /></h2>
				<div class="seachTable1">
					<table class="table_V1">
						<colgroup>
							<col width="20%" />
							<col width="*" />
						</colgroup>
					
						<tr>
							<th>의뢰인번호</th>
							<td>
							   <input type="text" id="legaladvRepMgrCode" readonly="readonly"/>
								<img id="cost_search_btn" class="linked_btn_style" src="images/search_btn1.gif"></img>
							</td>
						</tr>
					
					</table>
				</div>
				<h3 class="tit" align="left">회신정보</h3>
				<div class="seachTable2">
					<table class="table_V1">
						<colgroup>
							<col width="20%" />
							<col width="30%" />
							<col width="20%" />
							<col width="*" />
						</colgroup>
						<tr>
							<th>의뢰담당자</th>
							<td>
								<input type="text" name="reqMgrName" id="insaName" value="" readonly="readonly"></input>
							</td>
							<th>의뢰일자</th>
							<td>
								<input type="text" name="legaladvOutReqDate" id="legaladvOutReqDate" value="" readonly="readonly"></input>
							</td>
						</tr>
					</table>
				</div>
				
				<h3 class="tit" align="left">회신사항</h3>
				<div class="seachTable2">
					<table class="table_V1">
						<colgroup>
							<col width="12%" />
							<col width="*" />
						</colgroup>
						<tr>
							<th>회신제목</th>
							<td><input class="rep_result_text" type="text" maxlength="33" style="width:850px;" id="legaladvOutRepTit" name="legaladvOutRepTit" value="" /></td>
						</tr>
						<tr>
							<th>회신내용</th>
							<td><textarea class="rep_result_text" maxlength="83" id="legaladvOutRepCont" name="legaladvOutRepCont" cols="" rows="" style="width:850px; height:74px; margin:4px 0;" ></textarea></td>
						</tr>
						<tr>
							<th>기타회신사항</th>
							<td><textarea class="rep_result_text" maxlength="83" id="legaladvOutEtcRepPoin" name="legaladvOutEtcRepPoin" cols="" rows="" style="width:850px; height:74px; margin:4px 0;" ></textarea></td>
						</tr>
					</table>
				</div>
				
				<%-- 자문비 내역 --%>
				
				<h3 class="tit" align="left">자문비내역</h3>
				<div class="seachTable2">
				<table class="table_V2">
					<colgroup>
						<col width="5%" />
						<col width="*" />
						<col width="15%" />
						<col width="15%" />
						<col width="18%" />
					</colgroup>
					<tr>
						<th>No</th>
						<th>회신내용</th>
						<th>자문수수료</th>
						<th>부가세</th>
						<th>청구합계금액</th>
					</tr>		
				</table>
		</div>		
		
		<!-- 상세정보 조회 및 입력 수정 -->
		 <div align="right">
		    <img id="legaladv_cost_add_btn" src="images/icon_add_03.gif" class="linked_btn_style" alt="" />
		 </div>	
				<div class="seachTable1">
					<table class="table_V1">
						<colgroup>
							<col width="11%" />
							<col width="18%" />
							<col width="11%" />
							<col width="18%" />
							<col width="11%" />
							<col width="18%" />
							<col width="*" />
						</colgroup>
						
						<tr>
							<th><a name="section"></a>회신내용</th>
							<td colspan="6"><input type="text" maxlength="2000" style="width:850px;" id="legaladvCostRepCont" name="legaladvCostRepCont" disabled="disabled"/></td>
						</tr>
						<tr>
							<th>자문수수료</th>
							<td><input type="text" class="number_style_right" name="legaladvCostReqCost" id="legaladvCostReqCost" onkeyup="only();" disabled="disabled"/></td>
							<th>부가세</th>
							<td><input type="text" class="number_style_right" name="legaladvCostStax" id="legaladvCostStax" onkeyup="only1();" disabled="disabled" readonly="readonly" /></td>
							<th>청구합계금액</th>
							<td><input type="text" class="number_style_right" name="legaladvCostClamsumChg" id="legaladvCostClamsumChg" disabled="disabled" readonly="readonly" /></td>
							<td style="border:none !important;">
								<img class="linked_btn_style insert_delete" id="insert" src="images/input_btn.png" disabled="disabled"/>
								<img class="linked_btn_style insert_delete" id="delete" src="images/icon_delete_01.gif" disabled="disabled"/>
							</td>
						</tr>
					</table>
				</div>
				<p class="anBtn">
					<img id="legaladv_cost_save_btn" class="linked_btn_style" src="images/save_btn.png"/>
					<img id="legaladv_cost_cancel_btn" class="linked_btn_style" src="images/cancel_btn.png"/>
				</p>
			</div>
		</div>
		<div id="footer">
		
		</div>
	</div>


<script type="text/javascript">
	var legaladvLawAdvReqNo;	// 자문의뢰번호
	var legaladvCostLawadvSeq;	// 자문비일련번호
	var gbRpMo;					// 회신 수정 구분자

	var gbparam;
	/* 비어있는 input 체크  */
	function empty_check(iobj){
		if(iobj.val()=="-"){
			iobj.val("");
		}
	};// empty_check();
	
	
	/* 조회페이지에서 넘어온 의뢰인 번호 체크 */
	function reqno_check(){
			var x = ${reqno};
		if(x=="0"){
			alert("먼저 의뢰받은 자문을 선택 하셔야 합니다.");
			location="Top_OUT_legal_ad_up.do";			
		}else{			
			legaladvLawAdvReqNo = x;
			selectOutLegaladvLawAdvWebOne(); // 의뢰인번호, 의뢰담당자, 의뢰일자 조회			
			
		}
	};// reqno_check()
	
	function selectOutLegaladvLawAdvWebOne(){
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

							$("#legaladvRepMgrCode").val(decodeURIComponent(vo.legaladvRepMgrCode));
							$("#insaName").val(decodeURIComponent(vo.insaName));
							$("#legaladvOutReqDate").val(decodeURIComponent(vo.legaladvOutReqDate));
							
							$("#legaladvOutRepTit").val(decodeURIComponent(vo.legaladvOutRepTit).replace(/\+/gi," "));
							$("#legaladvOutRepCont").val(decodeURIComponent(vo.legaladvOutRepCont).replace(/\+/gi," "));
							$("#legaladvOutEtcRepPoin").val(decodeURIComponent(vo.legaladvOutEtcRepPoin).replace(/\+/gi," "));
							
							if(decodeURIComponent(vo.legaladvOutRepTit).replace(/\+/gi," ")=="-"){
								gbRpMo = "N"; // 자문 제목 여부에 따른 회신/수정 구분
							}else{
								gbRpMo = "Y";
							}
						});//each
						
						selectOutLegaladvCostLawadvWeb();  // 자문비 조회
						
					}// if
				}//function
		});//$.ajax
	};// selectOutLegaladvLawAdvWebOne()
	
	function selectOutLegaladvCostLawadvWeb(){
		$.ajax({
			async: false
			, url: "selectOutLegaladvCostLawadvWeb.do"
			, type: "post"
			, data: {"legaladvLawAdvReqNo":legaladvLawAdvReqNo
					 ,"gbParam":"legaladvLawAdvReqNo"} // 기본키 1개만 입력
			, dataType: "json"
			, success: function(data){
					
					$(".each_cost").remove();
					$("#result_tr").remove();
					
					if(data==""||data==null){
// 							setDisabled(false);

							$("#legaladv_cost_add_btn").css("display","block");
					}else{
						setDisabled(true);
						
						var total_sum = 0;
						$(data).each(function(i,vo){
							$(".table_V2").append(
										'<tr class="each_cost">'
										+ '<td>'+(i+1)+'</td>'
										+ '<td class="cost_seq linked_btn_style" id="'+decodeURIComponent(vo.legaladvCostLawadvSeq)+'">'+decodeURIComponent(vo.legaladvCostRepCont).replace(/\+/gi," ")+'</td>'
										+ '<td class="cost_seq linked_btn_style number_style_right" id="'+decodeURIComponent(vo.legaladvCostLawadvSeq)+'"><span>'+set_comma(decodeURIComponent(vo.legaladvCostReqCost))+'</span></td>'
										+ '<td class="cost_seq linked_btn_style number_style_right" id="'+decodeURIComponent(vo.legaladvCostLawadvSeq)+'"><span>'+set_comma(decodeURIComponent(vo.legaladvCostStax))+'</span></td>'
										+ '<td class="cost_seq each_sum linked_btn_style number_style_right" id="'+decodeURIComponent(vo.legaladvCostLawadvSeq)+'"><span>'+set_comma(decodeURIComponent(vo.legaladvCostClamsumChg))+'</span></td>'
										+ '</tr>'
									);
							total_sum = (total_sum + parseInt(decodeURIComponent(vo.legaladvCostClamsumChg)));
						});//each
							$(".table_V2").append(
											'<tr id="result_tr">'
											+ '<th colspan="4">총 계</th>'
											+ '<th class="total_sum number_style_right"><span></span></th>'
											+ '</tr>'
												);
							$(".total_sum > span").text(set_comma(total_sum));
							$("#legaladv_cost_add_btn").css("display","block");
					}// if
				}//function
		});//$.ajax		
	};// selectOutLegaladvCostLawadvWeb()
	
	
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
	
	
	function selectOutLegaladvCostLawadvWebOne(){
		$.ajax({
			async: false
			, url: "selectOutLegaladvCostLawadvWeb.do"
			, type: "post"
			, data: {"legaladvLawAdvReqNo":legaladvLawAdvReqNo
					,"legaladvCostLawadvSeq":legaladvCostLawadvSeq
					,"gbParam":"legaladvCostLawadvSeq"} // 기본키 1개만 입력
			, dataType: "json"
			, success: function(data){
					if(data==""||data==null){
							alert("에러발생");
					}else{
						setDisabled(false);
						$(data).each(function(i,vo){
							
							$("#legaladvCostRepCont").val(decodeURIComponent(vo.legaladvCostRepCont).replace(/\+/gi," "));
							$("#legaladvCostReqCost").val(set_comma(decodeURIComponent(vo.legaladvCostReqCost)));
							$("#legaladvCostStax").val(set_comma(decodeURIComponent(vo.legaladvCostStax)));
							$("#legaladvCostClamsumChg").val(set_comma(decodeURIComponent(vo.legaladvCostClamsumChg)));
							
						});//each
					}// if
				}//function
		});//$.ajax		
	}// selectOutLegaladvCostLawadvWebOne()
	
	/* 자문비 저장, 수정, 삭제 */
	function cost_iud(obj){
		 
		var param_ko="";
		
		if(obj.attr("id")=="insert"){
			if(legaladvCostLawadvSeq ==""||legaladvCostLawadvSeq==null){
				gbparam = "insert";
				param_ko = "저장";
			}else{
				gbparam = "update";
				param_ko = "수정";
			}
		}else if(obj.attr("id")=="delete"){
			if(legaladvCostLawadvSeq ==""||legaladvCostLawadvSeq==null){
				setDisabled(true);
				return;
			}else{
				gbparam = "delete";
				param_ko = "삭제";
			}	
		}	
		if(!confirm("정말 "+param_ko+" 하시겠습니까?")){
			return;
		}else{
			var rpcont = $("#legaladvCostRepCont").val();		//회신내용		legaladvCostRepCont
			var rqcost = $("#legaladvCostReqCost").val().replace(/\,/gi,"");		//자문수수료	legaladvCostReqCost
			var costtax = $("#legaladvCostStax").val().replace(/\,/gi,"");			//부가세		legaladvCostStax
			var costcc = $("#legaladvCostClamsumChg").val().replace(/\,/gi,"");	//청구합계금액	legaladvCostClamsumChg

			legaladvCost_add(rpcont, rqcost, costtax, costcc, gbparam);
		}
	}// cost_iud()
	
	
	/* 자문비 입력, 수정, 삭제 */
	function legaladvCost_add(rpcont, rqcost, costtax, costcc, gbparam){
		$.ajax({
			async: false
			, url: "saveOutLegaladvCostLawadvWeb.do"
			, type: "post"
			, data: {"legaladvCostLawadvReqno":legaladvLawAdvReqNo
					,"legaladvCostLawadvSeq":legaladvCostLawadvSeq
					,"legaladvCostRepCont":rpcont
					,"legaladvCostReqCost":rqcost
					,"legaladvCostStax":costtax
					,"legaladvCostClamsumChg":costcc
					,"gbParam":gbparam} // 기본키 1개만 입력
			, dataType: ""
			, success: function(data){
					if(data==""||data==null||data=="404"){
							alert(data+" : 에러발생");
					}else{
						if(data=="3"){
							alert("저장하였습니다.");
						}else if(data=="11"){
							alert("수정하였습니다.");
						}else if(data=="1"){
							alert("삭제하였습니다.");
						}
						selectOutLegaladvCostLawadvWeb();
					}// if
				}//function
		});//$.ajax	
	};// legaladvCost_add(rpcont, rqcost, costtax, costcc)
	


/* 자문비 입력창 disalbled */
function setDisabled(x){
	 $('#legaladvCostRepCont').val("");
	 $('#legaladvCostReqCost').val("");
	 $('#legaladvCostStax').val("");
	 $('#legaladvCostClamsumChg').val("");
	 
	$('#legaladvCostRepCont').attr('disabled', x);
	$('#legaladvCostReqCost').attr('disabled', x);
    $('#legaladvCostStax').attr('disabled', x);
    $("#legaladvCostClamsumChg").attr('disabled', x);
    $('#insert').attr('disabled', x);
    $('#delete').attr('disabled', x);
    
}// setDisabled(x)


	function only(Ev) {
		
		var evCode = (window.netscape) ? Ev.which : event.keyCode;
		    
		    if(   (evCode < 48 || evCode > 57) && (evCode < 96 || evCode > 105) &&  evCode != 8 && evCode != 9   &&  evCode != 13  &&
		    	  (evCode < 37 || evCode > 40)  ){
		    	
		        if (window.netscape){  Ev.preventDefault();   
		        }else {  event.returnValue = false; alert("숫자를 입력하세요"); document.getElementById("legaladvCostReqCost").value="";};
		    };
		 	var a=parseInt($("#legaladvCostReqCost").val());
		 	var b=parseInt($("#legaladvCostStax").val());
		 	if(a==""||a==null||a==0){
		 		$("#legaladvCostReqCost").val("0");
		 		$("#legaladvCostStax").val("0");
		 	}else{	 		
		 		$("#legaladvCostStax").val(parseInt(a*0.1));
		 		b=parseInt($("#legaladvCostStax").val());
		 	};	
		 	$("#legaladvCostClamsumChg").val(a+b);
	}
	
	function only1(Ev) {
		
		var evCode = (window.netscape) ? Ev.which : event.keyCode;
		    
		    if(   (evCode < 48 || evCode > 57) && (evCode < 96 || evCode > 105) &&  evCode != 8 && evCode != 9   &&  evCode != 13  &&
		    	  (evCode < 37 || evCode > 40)  ){
		    	
		        if (window.netscape){  Ev.preventDefault();   
		        }else {  event.returnValue = false; alert("숫자를 입력하세요"); document.getElementById("legaladvCostStax").value="";};
		    };
		 	var a=parseInt($("input[name=legaladvCostReqCost]").val());
		 	var b=parseInt($("input[name=legaladvCostStax]").val());
		 	if(a==''&&b==''){
		 		document.getElementById("legaladvCostClamsumChg").value=0;
		 	}else if(a==null&&b!=null){
		 		document.getElementById("legaladvCostClamsumChg").value=b;
		 	}else if(a!=""&&b==""){
		 		document.getElementById("legaladvCostClamsumChg").value=a;
		 	}else{
		 		document.getElementById("legaladvCostClamsumChg").value=a+b;
		 	};	
	}


	/* 자문 회신, 수정  */
	function saveOutLegaladvRep(lart, larc, laerp){
		
		$.ajax({
			async: false
			, url: "saveOutLegaladvRep.do"
			, type: "post"
			, data: {"legaladvLawAdvReqNo":legaladvLawAdvReqNo
					,"legaladvOutRepTit":lart
					,"legaladvOutRepCont":larc
					,"legaladvOutEtcRepPoin":laerp
					,"legaladvOutRepWtr":gbRpMo
					,"gbParam":gbparam} // 기본키 1개만 입력
			, dataType: ""
			, success: function(data){
					if(data==""||data==null||data=="404"){
							alert(data+" : 에러발생");
					}else{
						selectOutLegaladvLawAdvWebOne();
						alert("저장하였습니다.");
					}// if
				}//function
		});//$.ajax	
		
	}//saveLegaladvRep()
	
	/* 저장 버튼 클릭시 유효성 체크 */
	function legaladv_cost_save_validate(){
		
		// 제목, 내용, 기타 체크
		var lart = $("#legaladvOutRepTit").val();
		var larc = $("#legaladvOutRepCont").val();
		var laerp = $("#legaladvOutEtcRepPoin").val();
		
		if(lart=="-"||lart==""||lart==null){
			alert("제목은 반드시 입력하셔야 합니다.");
			return;
		}else if(larc=="-"||larc==""||larc==null){
			alert("내용은 반드시 입력하셔야 합니다.");
			return;
		}else if(laerp=="-"){
			laerp="";
		}
		
		// 회신, 수정 구분
		if(gbRpMo == "N"){
			if(confirm("회신하시겠습니까?")){
				gbRpMo="Y";
				gbparam="N";
			}else{
				return;
			}
		}else if(gbRpMo == "Y"){
			if(confirm("수정하시겠습니까?")){
				gbparam="Y";
			}else{
				return;
			}
		}
		
		saveOutLegaladvRep(lart, larc, laerp);		
	}// legaladv_cost_save_validate()
	
$(document).ready(function(){
	reqno_check(); // 자문의뢰번호 체크
	
	$(".rep_result_text").click(function(){
		var iobj = $(this); // input obj
		empty_check(iobj);// 빈 값"-"체크
	});
	

	/* 검색버튼 클릭시 */
	$("#cost_search_btn").click(function(){
		location="OUT_legal_ad_up.do";
	});
	
	/* 닫기버튼 클릭시 */
	$("#legaladv_cost_cancel_btn").click(function(){
		location="outMain.do";
	});	
	/* 저장버튼 클릭시 */
	$("#legaladv_cost_save_btn").click(function(){
		
		if($("#legaladvCostClamsumChg").val()!="" & $("#legaladvCostClamsumChg").val()!=null){
			if(!confirm("저장되지 않은 자문비 내역이 있습니다. 계속진행하시겠습니까?")){
				return;
			}
		}
		
		// 회신입력칸 유효성 검사
		legaladv_cost_save_validate();
		
		
		
	});
	
	/* 신규 버튼 클릭 */ 
	$("#legaladv_cost_add_btn").click(function(){
		
		if(gbRpMo!="Y"){
			alert("먼저 회신사항을 저장하셔야 합니다.");
			return;
		}
		
		setDisabled(false);
		legaladvCostLawadvSeq = ""; // 자문비 일련번호 초기화
		$("#legaladvCostRepCont").focus();
	});

	/* 자문비 목록 선택 */
	$("body").on("click",".cost_seq",function(){
		legaladvCostLawadvSeq = $(this).attr("id");
		selectOutLegaladvCostLawadvWebOne();
	});
	
	/* 자문비 저장, 수정, 삭제 */
	$(".insert_delete").click(function(){
		
		if($("#legaladvCostRepCont").val()==""||$("#legaladvCostRepCont").val()==null){
			alert("회신내용을 입력해야합니다.");
			$("#legaladvCostRepCont").focus();
			return;
		}
		var obj = $(this);
		cost_iud(obj);
	});
	
	/* 자문비 입력칸 포커스 */
	$("#legaladvCostReqCost").focus(function(){
		var x = $(this).val().replace(/\,/gi,"");
		$(this).val(x);
	});
	
	
	/* 자문비 입력시 콤마 */
	$("#legaladvCostReqCost").change(function(){
		$(this).val(set_comma($(this).val()));
		$("#legaladvCostStax").val(set_comma($("#legaladvCostStax").val()));
		$("#legaladvCostClamsumChg").val(set_comma($("#legaladvCostClamsumChg").val()));
		
	});
	
})// document




</script>

</body>
</html>