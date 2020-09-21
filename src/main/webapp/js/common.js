/**
 * @title 공통 스크립트
 * @author 김윤범
 * @date 2012-08-27_1246
 */

// 웹 브라우저가 DOM 트리를 생성한 후
/** 콤보박스 */
function comboBox(classCode) {
	$.ajax({
		type : 'GET',
		dataType : 'html',
		url : "getComboBox.do?codeNumber=" + classCode,
		success : function(data) {
			// 등급구분코드
			if (classCode == 'B01') {
				$('#classGbnCode').html(data);
			}
			
			// 지역구분코드
			if (classCode == 'P01') {
				$('#wrkPosbArea').html(data);
			}

			// 경력구분코드
			if (classCode == 'F01') {
				$('#carrierGbnCode').html(data);
			}

			// 학력구분코드
			if (classCode == 'G01') {
				$('#acadGbnCode').html(data);
			}

			// PJ진행상태구분코드
			if (classCode == 'K01') {
				$('#progStateCode').html(data);
			}
			
			// 지원분야
			//if (classCode == 'O01') {
				$('#suppAreaCode').html(data);
			//}

			// PJ형태
			if (classCode == 'R01') {
				$('#pjtGbn').html(data);
			}

			// 장비그룹
			if (classCode == 'D01') {
				$('#eqmGroup').html(data);
			}
		},
		error : function(data) {
			alert("실패");
		}
	});
}

/** 정규식 - 숫자 */
function validateNum(text) {
	pattern = new RegExp(/^[0-9]*$/);
	return pattern.test(text);
}

/** 정규식 - 영문자 */
function validateEng(text) {
	pattern = new RegExp(/^[A-z]*$/);
	return pattern.test(text);
}

/** 정규식 - 한글 */
function validateKor(text) {
	pattern = new RegExp(/^[가-힣]*$/);
	return pattern.test(text);
}

/** 정규식 - 일반 전화번호 */
function validatePhone(text) {
	pattern = new RegExp(/^\d{2,3}-\d{3,4}-\d{4}$/);
	return pattern.test(text);
}

/** 정규식 - 휴대 전화번호 */
function validateMobilePhone(text) {
	pattern = new RegExp(/^\d{3}-\d{3,4}-\d{4}$/);
	return pattern.test(text);
}

/** 정규식 - 이메일 */
function validateEmail(text) {
	pattern = new RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+$/);
	return pattern.test(text);
}

/** 정규식 - 파일이름 */
function validateFile(text) {
	pattern = new RegExp(/^[\:\.\\0-9a-zA-Z]*$/);
	return pattern.test(text);
}

/** 정규식 - 사업자등록번호 */
function validateCmpRegNo(text) {
	pattern = new RegExp(/^[0-9]{4,10}$/);
	return pattern.test(text);
}

/** 정규식 - 주민등록번호 */
function validateJuminNo(text) {
	pattern = new RegExp(/\d{6} \- [1-4]\d{6}/);
	return pattern.test(text);
}

/** 정규식 - IP 주소 */
function validateJuminNo(text) {
	pattern = new RegExp(
			/([0-9]{1,3}) \. ([0-9]{1,3}) \. ([0-9]{1,3}) \. ([0-9]{1,3})/);
	return pattern.test(text);
}