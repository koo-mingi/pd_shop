/**
 * @title 인적사항 스크립트
 * @author 임지나
 * @date 2012-09-02
 */

// 웹 브라우저가 DOM 트리를 생성한 후
$(function() {
	
});

/** 콤보박스 */
function infoList(seq,sabun) {
	$.ajax({
		type : 'GET',
		dataType : 'html',
		url : "updateAcadInfo.do?seq="+seq+"&aSabun="+sabun,
		success : function(data) {
			alert(data);
			$('#acadUpdate').html(data);		
			
		},
		error : function(data) {
			alert("실패");
		}
	});
}