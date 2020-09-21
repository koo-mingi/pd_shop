/*----------------------------------------------------------------------------------------------------------------------------------
 * PROJ		: 신사업 구축 프로젝트
 * NAME		: Constant
 * DESC		: 웹사이트 공통 모듈
 * Author	: park jun yong
 * VER		: v1.0
 * Copyright 2012 All right reserved
 *----------------------------------------------------------------------------------------------------------------------------------
 * 								변 경 사 항
 *----------------------------------------------------------------------------------------------------------------------------------
 *    DATE			   AUTHOR						DESCRIPTION
 *----------------------------------------------------------------------------------------------------------------------------------
 * 2012.05.21		   park jun yong				최초작성 (변수명은 camelCase / 메소드명은 small under_score로 명명, 내부 변수명은 차후 수정)
 *--------------------------------------------------------------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------------------------------------------------------------
 * 메소드 분류			| 메소드 이름			| 메소드 역할
 *----------------------+-----------------------+-----------------------------------------------------------------------------------
 * StringUtil 			| get_byte_len_ws		| 원본문자열의 BYTE크기를 반환한다
 * StringUtil 			| get_utfbyte_len_ws	| 원본문자열의 BYTE크기(UTF-8)를 반환한다
 * StringUtil 			| substr_byte_ws		| Byte 단위로 문자열을 자른다
 * StringUtil 			| replace_char_ws		| 원본문자열에서 변환대상문자를 변환할문자로 변경한후 반환한다
 * StringUtil 			| replace_all_ws		| 원본문자열에서 변환대상문자를 변환할문자로 일괄 변경한후 반환한다 
 * StringUtil 			| is_num_ws				| 원본문자열이 문자가 포함되어있는지 검사한다
 * StringUtil 			| is_hangul_ws			| 원본문자열이 한글인지 검사한다 
 * StringUtil 			| get_pad_ws			| 원본문자열을 원하는 길이만큼 필러를 이용해 채워 반환한다 / 필러는 좌측,우측에 선택적으로 넣을 수 있다
 * StringUtil 			| cut_left_ws			| 원본문자열을 왼쪽에서 길이만큼 자른다
 * StringUtil 			| cut_mid_ws			| 원본문자열을 지정된 위치에서 길이만큼 자른다
 * StringUtil 			| cut_right_ws			| 원본문자열을 오른쪽에서 왼쪽으로 길이만큼 자른다
 * StringUtil 			| trim_ws				| 원본문자열에서 공백을 제거한다
 * StringUtil 			| trim_left_ws			| 원본문자열에서 왼쪽의 공백을 제거한다
 * StringUtil 			| trim_right_ws			| 원본문자열에서 오른쪽의 공백을 제거한다
 * StringUtil 			| is_empty_ws			| 입력값이 NULL인지 체크한다 (비어 있으면 true/비어있지 않으면 false)
 * StringUtil 			| is_not_empty_ws		| 입력값이 NULL인지 체크한다 (비어 있으면 false/비어있지 않으면 true)
 * StringUtil 			| is_email_ws			| 입력값이 이메일 형식인지 체크한다
 * StringUtil 			| is_format_ws			| 입력값이 사용자가 정의한 포맷 형식인지 체크한다
 * StringUtil 			| is_phone_ws			| 입력값이 전화번호 형식(숫자-숫자-숫자)인지 체크한다
 * StringUtil 			| is_ssno_ws			| 주민등록번호 유효성 검증한다
 * StringUtil 			| is_bzno_ws			| 사업자번호 유효성 검증한다 
 * StringUtil 			| format_str_ws			| 문자열을 입력한 포맷으로 변경한다
 * StringUtil 			| format_phone_ws		| 전화번호 형태의 패턴을 반환한다
 * StringUtil 			| conv_phone_ws			| 전화번호 형태로 변환 합니다
 * StringUtil 			| format_ssbzno_ws		| 주민등록번호 사업자번호 형태로 변환 합니다
 * StringUtil 			| remove_pattern_ws		| 입력된 문자값에서 '-', '/', '.', ':', ' '(공백)을 없앤다
 * StringUtil 			| get_ssbzno_ws			| 주민등록번호, 사업자번호의 패턴을 반환한다
 * StringUtil 			| html_escape_ws		| Html 태그를 Escape 처리한다
 * StringUtil 			| html_unescape_ws		| Html 태그를 UnEscape 처리한다
 * StringUtil           | cur_tail_ws           | 문자열이 해당 길이보다 크면, 자른 후 줄임말을 붙여준다 길이는 기본문자들(영어/숫자등)이 1으로, 다국어(한글등)이면 2로 계산한다
 *----------------------+-----------------------+----------------------------------------------------------------------------------- 
 * NumberUtil			| parse_num_ws			| 문자를 숫자로 소숫점, 음수처리한다
 * NumberUtil			| add_comma_ws			| 금액에 3자리 단위로 콤마 처리한다
 * NumberUtil			| sub_comma_ws			| 콤마가 들어간 숫자에서 ","를 뺀다
 *----------------------+-----------------------+----------------------------------------------------------------------------------- 
 * DateUtil				| is_date_mmdd_ws		| MMDD형식으로 입력된 날짜가 정상적인지 체크하여 정상여부를 반환한다
 * DateUtil				| is_date_yyyymm_ws		| YYYYMM형식으로 입력된 날짜가 정상적인지 체크하여 정상여부를 반환한다
 * DateUtil				| is_date_yymm_ws		| YYMM형식으로 입력된 날짜가 정상적인지 체크하여 정상여부를 반환한다
 * DateUtil				| is_date_yyyymmdd_ws	| YYYYMMDD형식으로 입력된 날짜가 정상적인지 체크하여 정상여부를 반환한다
 * DateUtil				| is_date_yymmdd_ws		| YYMMDD형식으로 입력된 날짜가 정상적인지 체크하여 정상여부를 반환한다
 * DateUtil				| oper_date_ws			| 금일을 기준으로 날짜를 연산해 준다
 * DateUtil				| get_today_ws			| 금일날짜를 8자리 년월일 형태로 반환한다
 * DateUtil				| add_day_yyyymmdd_ws	| 기준날짜에서 oper_date만큼 지난 년월일	을 8자리 년월일 형태로 반환한다
 * DateUtil				| sub_day_yyyymmdd_ws	| 기준날짜에서 oper_date이전의 년월일을 8자리 년월일 형태로 반환한다
 * DateUtil				| add_day_yymmdd_ws		| 기준날짜에서 oper_date이후의 년월일을 8자리 년월일 형태로 반환한다
 * DateUtil				| sub_day_yymmdd_ws		| 기준날짜에서 oper_date이전의 년월일을 8자리 년월일 형태로 반환한다
 * DateUtil				| add_month_yyyymmdd_ws	| YYYYMMDD형식으로 월수덧셈한다
 * DateUtil				| sub_month_yyyymmdd_ws	| YYYYMMDD형식으로 월수뺄셈한다
 * DateUtil				| add_month_yymmdd_ws	| YYMMDD형식으로 월수덧셈한다
 * DateUtil				| sub_month_yymmdd_ws	| YYMMDD형식으로 월수뺄셈한다
 * DateUtil				| spec_day_yyyymmdd_ws	| 특정시작일자부터 특정종료일자 일수를 구하여 반환한다
 * DateUtil				| spec_month_yyyymmdd_ws| 특정시작일자부터 특정종료일자 개월수를 구하여 반환한다
 * DateUtil				| get_week_day_ws		| 대상 년월일의 요일을 반환한다
 * DateUtil				| get_last_day_ws		| 대상날짜가 포함된 월의 마지막 날을 반환한다
 * DateUtil				| get_timestamp_ws	    | 현재 시스템의 YYYYMMDD HH:MM:SS를 반환한다
 * DateUtil             | get_24hhmmss_time_ws  | 현재 시스템의 24시간 기준의 시분초를 반환한다 
 * DateUtil				| is_time_hhmmss_ws		| 대상 시각이 정상적인 시각인지 확인한다
 * DateUtil				| get_sys_date_ws		| 시스템 년월일을 가져온다
 * DateUtil				| get_sys_time_ws		| 시스템 시분초를 가져온다
 * DateUtil				| is_hour_ws			| 유효한(존재하는) 시(時)인지 체크한다
 * DateUtil				| is_min_ws				| 유효한(존재하는) 분(分)인지 체크한다
 * DateUtil				| is_month_ws			| 유효한(존재하는) 월(月)인지 체크한다
 * DateUtil				| is_day_ws				| 유효한(존재하는) 일(日)인지 체크한다
 * DateUtil				| compare_date_ws		| 시작일자와 종료일자를 비교(종료일자가 크면 true, 시작일자가 크면 false)한다
 * DateUtil				| get_first_week_ws		| 해당 주기의 처음 날짜를 구한다
 * DateUtil				| get_last_week_ws		| 해당 주기의 마지막 날짜를 구한다
 * DateUtil				| to_date_ws			| 해당 날짜의 Date 객체 얻어온다
 * DateUtil				| get_week_from_date_ws	| 해당날짜의 주기를 구한다
 * DateUtil				| format_date_ws		| 날짜 형식을 포맷팅한다 (YYYY-MM-DD, OR YYYY + seperator + MM + seperator + DD)
 * DateUtil				| format_date_kr_ws		| 날짜 형식을 포맷팅한다 (YYYY년 MM월 DD일)
 *----------------------+-----------------------+-----------------------------------------------------------------------------------
 * CollectionUtil		| get_array_idx_ws		| 배열에서 key값의 index를 반환한다
 * CollectionUtil		| compare_arrays_ws		| 두개의 배열을 비교한다
 * CollectionUtil       | remove_element_ws     | 배열에서 해당 데이터를 삭제후 반환한다
 *----------------------+-----------------------+-----------------------------------------------------------------------------------
 * BizUtil				| enc_pattern_ws		| 암호화할 문자열의 뒷자리부터 '*' 패턴을 적용한다
 * BizUtil				| link_to_ws			| 해당 화면으로 이동한다
 * BizUtil				| get_ui_path_ws		| UI 이름으로 UI 패스를 리턴한다
 * BizUtil				| get_pfm_chnl_type_ws	| UI 이름으로 UI 화면 타입을 리턴한다 
 * BizUtil				| set_param_to_opener_ws| 부모 창에 파라미터를 전달하고 닫는다 
 * BizUtil				| is_vcno_ws			| 입력값이 차량번호 형식인지 체크한다  
 * BizUtil 				| get_ulclass_pattern_ws| '<ul class/>' 패턴을 적용한다 (<ul class='grid_list'><li>frstCnt</li><li>scndCnt</li></ul>)
 * BizUtil 				| close_popup_ws		| 팝업 창을 닫는다
 *----------------------------------------------------------------------------------------------------------------------------------

 /*----------------------------------------------------------------------------------------------------------------------------------
 * BEGIN OF Imports
 *----------------------------------------------------------------------------------------------------------------------------------*/

imports('/js/ws_ui_constant.js'); // 웹사이트.UI매핑상수

/*----------------------------------------------------------------------------------------------------------------------------------
 * END OF Imports
 *----------------------------------------------------------------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------------------------------------------------------------
 * BEGIN OF StringUtil
 *----------------------------------------------------------------------------------------------------------------------------------*/

/**
 * StringUtil - 원본문자열의 BYTE크기를 반환한다
 * 
 * @param strSource :
 *            string : 원본문자열
 * @return number : 원본문자열의 BYTE크기
 */
function get_byte_len_ws(strSource) {
    var charSingleChar;
    var nResult = 0;
    for ( var n = 0; n < strSource.length; n++) {
        charSingleChar = strSource.charCodeAt(n);
        nResult += charSingleChar <= 255 ? 1 : 2;
    }
    return parseInt(nResult);
}

/**
 * StringUtil - 원본문자열의 BYTE크기(UTF-8)를 반환한다
 * 
 * @param strSource :
 *            string : 원본문자열
 * @return number : 원본문자열의 BYTE크기
 */
function get_utfbyte_len_ws(strSource) {
    var charSingleChar;
    var nResult = 0;
    for ( var n = 0; n < strSource.length; n++) {
        charSingleChar = strSource.charCodeAt(n);
        nResult += charSingleChar <= 255 ? 1 : 3;
    }
    return parseInt(nResult);
}

/**
 * StringUtil - Byte 단위로 문자열을 자른다
 * 
 * @param str
 * @param startIdx
 * @param endIdx
 * @returns {string}
 */
function substr_byte_ws(str, startIdx, endIdx) {
    var arr = [];
    for ( var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) <= 255) {
            arr.push(i);
        } else {
            arr.push(i);
            arr.push(i);
        }
    }
    if (arr[startIdx] == arr[endIdx]) {
        return false;
    } else {
        return str.substring(arr[startIdx], arr[endIdx]);
    }
}

/**
 * StringUtil - 원본문자열에서 변환대상문자를 변환할문자로 변경한후 반환한다
 * 
 * @param strData :
 *            string : 원본문자열
 * @param cSource :
 *            char : 변환대상문자
 * @param cChange :
 *            char : 변환할문자
 * @return string : 변환된문자열
 */
function replace_char_ws(strData, cSource, cChange) {
    var nLength = get_byte_len_ws(strData);
    var cText;
    var strResult = "";
    var nCount;
    for (nCount = 0; nCount < nLength; nCount++) {
        cText = substr_byte_ws(strData, nCount, nCount + 1);
        if (cText == cSource) {
            strResult += cChange;
        } else {
            strResult += cText;
        }
    }
    return strResult;
}

/**
 * StringUtil - 원본문자열에서 변환대상문자를 변환할문자로 일괄 변경한후 반환한다
 * 
 * @param strData :
 *            string : 원본문자열
 * @param cSource :
 *            char : 변환대상문자
 * @param cChange :
 *            char : 변환할문자
 * @return string : 변환된문자열
 */
function replace_all_ws(strData, cSource, cChange) {
    return strData.split(cSource).join(cChange);
}

/**
 * StringUtil - 원본문자열이 문자가 포함되어있는지 검사한다
 * 
 * @param strSource :
 *            string : 원본문자열
 * @return boolean : 숫자여부
 */
function is_num_ws(strSource) {
    var bValid = true;
    var strValue = strSource.toString().replace(/-/g, "");
    for ( var i = 0; i < get_byte_len_ws(strValue); i++) {
        var ch = substr_byte_ws(strValue, i, i + 1).toUpperCase();
        if (ch >= "0" && ch <= "9") {
            bValid = true;
        } else {
            bValid = false;
            break;
        }
    }
    return bValid;
}

/**
 * StringUtil - 원본문자열이 한글인지 검사한다
 * 
 * @param strSource :
 *            string : 원본문자열
 * @return boolean : 한글여부
 */
function is_hangul_ws(strSource) {
    var isHangul = false;
    for ( var n = 0; n < strSource.length; n++) {
        charSingleChar = strSource.charCodeAt(n);
        isHangul = charSingleChar <= 255 ? false : true;
        if (isHangul == true) n = get_byte_len_ws(strSource);
    }
    return isHangul;
}

/**
 * StringUtil - 원본문자열을 원하는 길이만큼 필러를 이용해 채워 반환한다 / 필러는 좌측,우측에 선택적으로 넣을 수 있다
 * 
 * @param source :
 *            string : 원본문자열
 * @param filler :
 *            string : 채워줄문자
 * @param datamaxlen :
 *            number : 반환문자길이
 * @param leftfill :
 *            boolean : 왼쪽부터 채울지 여부
 * @return string : 가공된 문자열
 */
function get_pad_ws(source, filler, datamaxlen, leftfill) {
    var prefiller = "";
    for ( var i = 0; i < datamaxlen; i++)
        prefiller += filler;
    if (leftfill == true) {
        prefiller = prefiller + source;
        prefiller = substr_byte_ws(prefiller, get_byte_len_ws(prefiller) - datamaxlen, get_byte_len_ws(prefiller));
    } else {
        prefiller = source + prefiller;
        prefiller = substr_byte_ws(prefiller, 0, datamaxlen);
    }
    return prefiller;
}

/**
 * StringUtil - 원본문자열을 왼쪽에서 길이만큼 자른다
 * 
 * @param strSource :
 *            string : 원본문자열
 * @param nLength :
 *            number : 길이
 * @return string : 자른 문자열
 */
function cut_left_ws(strSource, nLength) {
    if (get_byte_len_ws(strSource) == 0) {
        // alert("문자열이 존재하지 않습니다");
        return "";
    } else if (get_byte_len_ws(strSource) < nLength) {
        // alert("추출할 문자열의 마지막 위치가 전체 문자열의 크기보다 클 수 없습니다");
        return "";
    } else if (nLength == 0) {
        // alert("마지막 위치에 0 값이 들어올수 없습니다");
        return "";
    }
    var strReturn = substr_byte_ws(strSource, 0, nLength);
    return strReturn;
}

/**
 * StringUtil - 원본문자열을 지정된 위치에서 길이만큼 자른다
 * 
 * @param strSource :
 *            string : 원본문자열
 * @param nStartPos :
 *            number : 시작위치
 * @param nLength :
 *            number : 길이
 * @return string : 자른 문자열
 */
function cut_mid_ws(strSource, nStartPos, nLength) {
    if (get_byte_len_ws(strSource) == 0) {
        // alert("문자열이 존재하지 않습니다");
        return "";
    } else if (get_byte_len_ws(strSource) < nStartPos) {
        // alert("추출할 문자열의 시작위치가 전체 문자열의 크기보다 클 수 없습니다");
        return "";
    } else if (get_byte_len_ws(strSource) < nLength) {
        // alert("추출할 문자열의 마지막 위치가 전체 문자열의 크기보다 클 수 없습니다");
        return "";
    } else if (nStartPos == 0) {
        // alert("시작위치는 1부터 시작입니다");
        return "";
    } else if (nLength == 0) {
        // alert("마지막 위치에 0 값이 들어올수 없습니다");
        return "";
    }
    var strReturn = substr_byte_ws(strSource, nStartPos - 1, nStartPos - 1 + nLength);
    return strReturn;
}

/**
 * StringUtil - 원본문자열을 오른쪽에서 왼쪽으로 길이만큼 자른다
 * 
 * @param strSource :
 *            string : 원본문자열
 * @param nLength :
 *            number : 길이
 * @return string : 자른 문자열
 */
function cut_right_ws(strSource, nLength) {
    if (get_byte_len_ws(strSource) == 0) {
        // alert("문자열이 존재하지 않습니다");
        return "";
    } else if (get_byte_len_ws(strSource) < nLength) {
        // alert("추출할 문자열의 위치가 전체 문자열의 크기보다 클 수 없습니다");
        return "";
    } else if (nLength == 0) {
        // alert("추출할 위치에 0 값이 들어올수 없습니다");
        return "";
    }
    var nPos = get_byte_len_ws(strSource) - nLength;
    var strReturn = substr_byte_ws(strSource, nPos, nPos + nLength);
    return strReturn;
}

/**
 * StringUtil - 원본문자열에서 공백을 제거한다
 * 
 * @param strSource :
 *            string : 원본문자열
 * @return string : 공백제거된 문자열
 */
function trim_ws(strSource) {
    return strSource.replace(/^\s+|\s+$/g, "");
}

/**
 * StringUtil - 원본문자열에서 왼쪽의 공백을 제거한다
 * 
 * @param strSource :
 *            string : 원본문자열
 * @return string : 공백제거된 문자열
 */
function trim_left_ws(strSource) {
    return strSource.replace(/^\s+/, "");
}

/**
 * StringUtil - 원본문자열에서 오른쪽의 공백을 제거한다
 * 
 * @param strSource :
 *            string : 원본문자열
 * @return string : 공백제거된 문자열
 */
function trim_right_ws(strSource) {
    return strSource.replace(/\s+$/, "");
}

/**
 * StringUtil - 입력값이 NULL인지 체크 (비어 있으면 true/비어있지 않으면 false)
 * 
 * @param asValue :
 *            string : 원본문자열
 * @return boolean : 널 유무
 */
function is_empty_ws(asValue) {
    if (asValue == null || asValue == undefined || asValue.toString().replace(/ /g, "") == "") {
        return true;
    }
    return false;
}

/**
 * StringUtil - 입력값이 NULL인지 체크 (비어 있으면 false/비어있지 않으면 true)
 * 
 * @param asValue :
 *            string : 원본문자열
 * @return boolean : 널 유무
 */
function is_not_empty_ws(asValue) {
    if (asValue == null || asValue == undefined || asValue.toString().replace(/ /g, "") == "") {
        return false;
    }
    return true;
}

/**
 * StringUtil - 입력값이 영어/숫자 형식인지 체크한다
 * 
 * @param asValue :
 *            string : 원본문자열
 * @return boolean : 특수문자 제외 유무
 */
function is_AZ09_ws(asValue) {
    var strFormat = /[a-z]|[A-Z]|[0-9]/;
    return is_format_ws(asValue, strFormat);
}

/**
 * StringUtil - 입력값이 한글 형식인지 체크한다
 * 
 * @param asValue :
 *            string : 원본문자열
 * @return boolean : 특수문자 제외 유무
 */
function is_hangul_ws(asValue) {
    var strFormat = /^[가-힣]*$/;
    return is_format_ws(asValue, strFormat);
}

/**
 * StringUtil - 입력값이 이메일 형식인지 체크한다
 * 
 * @param asValue :
 *            string : 원본문자열
 * @return boolean : 메일형식 유무
 */
function is_email_ws(asValue) {
    var strFormat = /^((\w|[\-\.])+)@((\w|[\-\.])+)\.([A-Za-z]+)$/;
    return is_format_ws(asValue, strFormat);
}

/**
 * StringUtil - 입력값이 사용자가 정의한 포맷 형식인지 체크한다
 * 
 * @param asValue :
 *            string : 원본문자열
 * @param asFormat :
 *            string : 포멧형식
 * @return boolean : 일치하는지 유무
 */
function is_format_ws(asValue, asFormat) {
    if (is_empty_ws(asValue)) return true;
    if (asValue.search(asFormat) != -1) return true;
    return false;
}

/**
 * StringUtil - 입력값이 전화번호 형식(숫자-숫자-숫자)인지 체크한다
 * 
 * @param asValue :
 *            string : 원본문자열
 * @return boolean : 전화번호 유무
 */
function is_phone_ws(asValue) {
    var strFormat = /^\d{2,4}-\d{3,4}-\d{4}$/;
    return is_format_ws(asValue, strFormat);
}

/**
 * StringUtil - 입력값이 카드번호 형식인지 체크한다
 * 
 * @param asValue :
 *            string : 원본문자열
 * @return boolean : 전화번호 유무
 */
function is_cardno_ws(asValue) {
    var strFormat = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    return is_format_ws(asValue, strFormat);
}

/**
 * StringUtil - 주민등록번호 유효성 검증한다
 * 
 * @param asValue :
 *            string : 원본문자열
 * @return boolean : 전화번호 유무
 */
function is_ssno_ws(asValue) {
    var arrRegNo = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    var intSum = 0;
    var intMod = 0;
    var i = 0;
    var bValid = true;
    if (is_empty_ws(asValue)) bValid = false;
    var strValue = asValue.toString().replace(/-/g, "");
    if (get_byte_len_ws(strValue) != 13 || !is_num_ws(strValue)) {
        // alert("주민등록번호는 13자리 숫자입니다");
        bValid = false;
    }
    for (i = 0; i < 13; i++)
        arrRegNo[i] = substr_byte_ws(strValue, i, i + 1);
    for (i = 0; i < 12; i++)
        intSum += arrRegNo[i] * ((i > 7) ? (i - 6) : (i + 2));
    intMod = 11 - intSum % 11;
    if (intMod >= 10) intMod -= 10;
    if (intMod != arrRegNo[12]) {
        // alert("올바르지 않은 주민등록번호입니다");
        bValid = false;
    }
    return bValid;
}

/**
 * StringUtil - 사업자번호 유효성 검증한다
 * 
 * @param asValue :
 *            string : 원본문자열
 * @return boolean : 사업자번호 유무
 */
function is_bzno_ws(asValue) {
    var intSumMod = 0;
    var bValid = true;
    if (is_empty_ws(asValue)) bValid = false;
    var strValue = asValue.toString().replace(/-/g, "");
    if (get_byte_len_ws(strValue) != 10 || !is_num_ws(strValue)) {
        // alert("사업자등록번호는 10자리 숫자입니다");
        bValid = false;
    }
    intSumMod += parseInt(substr_byte_ws(strValue, 0, 1));
    intSumMod += parseInt(substr_byte_ws(strValue, 1, 2)) * 3 % 10;
    intSumMod += parseInt(substr_byte_ws(strValue, 2, 3)) * 7 % 10;
    intSumMod += parseInt(substr_byte_ws(strValue, 3, 4)) * 1 % 10;
    intSumMod += parseInt(substr_byte_ws(strValue, 4, 5)) * 3 % 10;
    intSumMod += parseInt(substr_byte_ws(strValue, 5, 6)) * 7 % 10;
    intSumMod += parseInt(substr_byte_ws(strValue, 6, 7)) * 1 % 10;
    intSumMod += parseInt(substr_byte_ws(strValue, 7, 8)) * 3 % 10;
    intSumMod += Math.floor(parseInt(substr_byte_ws(strValue, 8, 9)) * 5 / 10);
    intSumMod += parseInt(substr_byte_ws(strValue, 8, 9)) * 5 % 10;
    intSumMod += parseInt(substr_byte_ws(strValue, 9, 10));
    if (intSumMod % 10 != 0) {
        // alert("올바르지 않은 사업자등록번호입니다");
        bValid = false;
    }
    return bValid;
}

/**
 * StringUtil - 문자열을 입력한 포맷으로 변경한다
 * 
 * @param strValue :
 *            string : 원본문자열
 * @param strFormat :
 *            string : 포맷
 * @return string : 변경된 문자열
 */
function format_str_ws(strValue, strFormat) {
    var strData;
    var strPattern;
    var intLen;
    var intPos;
    intPos = -1;
    strPattern = /-/g;
    if (strValue == null || get_byte_len_ws(strValue) < 1 || strFormat == null || get_byte_len_ws(strFormat) < 1) return strValue;
    strData = strValue.replace(strPattern, "");
    intLen = get_byte_len_ws(strData);
    if (intLen != get_byte_len_ws(strFormat.replace(strPattern, ""))) return strValue;
    while (true) {
        intPos = strFormat.indexOf("-", intPos + 1);
        if (intPos < 1) break;
        strData = substr_byte_ws(strData, 0, intPos) + "-" + substr_byte_ws(strData, intPos);
    }
    return strData;
}

/**
 * StringUtil - 전화번호 형태의 패턴을 반환한다
 * 
 * @param strSource :
 *            string : 원본문자열
 * @return string : 패턴
 */
function format_phone_ws(strSource) {
    strSource = trim_ws(strSource);
    if (strSource == "" || strSource == null) {
        // alert("원본 데이터를 입력해주세요.");
        return "";
    }
    var strPattern = /-/g;
    strSource = strSource.replace(strPattern, "");
    var nSourceLen = get_byte_len_ws(strSource);
    var strDestData = "";
    // 전화번호가 12자리 보다 큰경우
    if (nSourceLen > 12 || nSourceLen < 9) {
        return "";
    } else if (nSourceLen == 12) {
        strDestData = "ZZZZZZZZZZZZ";
        strDestData = cut_left_ws(strDestData, 4) + "-" + cut_mid_ws(strDestData, 4, 4) + "-" + cut_right_ws(strDestData, 4);
    } else if (nSourceLen == 9) {
        strDestData = "ZZZZZZZZZ";
        if (cut_left_ws(strSource, 2) !== "02") {
            // alert("유효한 전화번호가 아닙니다");
            return "";
        }
        strDestData = cut_left_ws(strDestData, 2) + "-" + cut_mid_ws(strDestData, 3, 3) + "-" + cut_right_ws(strDestData, 4);
    } else if (nSourceLen == 11) {
        var nNum = parseInt(cut_left_ws(strSource, 2));
        if (nNum == 1) {
            // alert("휴대폰 전화번호");
        } else if (nNum >= 2 && nNum <= 6) {
            // alert("일반 전화번호");
        } else {
            // alert("유효한 전화번호가 아닙니다");
            return "";
        }
        strDestData = "ZZZZZZZZZZZ";
        var nMidLen = nSourceLen - 7;
        strDestData = cut_left_ws(strDestData, 3) + "-" + cut_mid_ws(strDestData, 4, nMidLen) + "-" + cut_right_ws(strDestData, 4);
    } else if (nSourceLen == 10) {
        var nNum = parseInt(cut_left_ws(strSource, 2));
        if (nNum == 1) {
            // alert("휴대폰 전화번호");
        } else if (nNum >= 2 && nNum <= 6) {
            // alert("일반 전화번호");
        } else {
            // alert("유효한 전화번호가 아닙니다");
            return "";
        }
        strDestData = "ZZZZZZZZZZ";
        if (cut_left_ws(strSource, 2) === "02") {
            strDestData = cut_left_ws(strDestData, 2) + "-" + cut_mid_ws(strDestData, 3, 4) + "-" + cut_right_ws(strDestData, 4);
        } else {
            strDestData = cut_left_ws(strDestData, 3) + "-" + cut_mid_ws(strDestData, 4, 3) + "-" + cut_right_ws(strDestData, 4);
        }
    } else {
        return "";
    }
    return strDestData;
}

/**
 * StringUtil - 전화번호 형태로 변환 합니다
 * 
 * @param strSource :
 *            string : 원본문자열
 * @return string : 변경된 문자열
 */
function conv_phone_ws(strSource) {
    strSource = trim_ws(strSource);
    if (strSource == "" || strSource == null) {
        // alert("원본 데이터를 입력해주세요.");
        return "";
    }
    var strPattern = /-/g;
    strSource = strSource.replace(strPattern, "");
    var nSourceLen = get_byte_len_ws(strSource);
    var strDestData = "";
    // 전화번호가 12자리 보다 큰경우
    if (nSourceLen > 12 || nSourceLen < 9) {
        return strSource;
    } else if (nSourceLen == 12) {
        strDestData = cut_left_ws(strSource, 4) + "-" + cut_mid_ws(strSource, 4, 4) + "-" + cut_right_ws(strSource, 4);
    } else if (nSourceLen == 9) {
        if (cut_left_ws(strSource, 2) !== "02") {
            // alert("유효한 전화번호가 아닙니다");
            return strSource;
        }
        strDestData = cut_left_ws(strSource, 2) + "-" + cut_mid_ws(strSource, 3, 3) + "-" + cut_right_ws(strSource, 4);
    } else if (nSourceLen == 11) {
        var nNum = parseInt(cut_left_ws(strSource, 2));
        if (nNum == 1) {
            // alert("휴대폰 전화번호");
        } else if (nNum >= 2 && nNum <= 6) {
            // alert("일반 전화번호");
        } else {
            // alert("유효한 전화번호가 아닙니다");
            return strSource;
        }
        var nMidLen = nSourceLen - 7;
        strDestData = cut_left_ws(strSource, 3) + "-" + cut_mid_ws(strSource, 4, nMidLen) + "-" + cut_right_ws(strSource, 4);
    } else if (nSourceLen == 10) {
        var nNum = parseInt(cut_left_ws(strSource, 2));
        if (nNum == 1) {
            // alert("휴대폰 전화번호");
        } else if (nNum >= 2 && nNum <= 6) {
            // alert("일반 전화번호");
        } else {
            // alert("유효한 전화번호가 아닙니다");
            return strSource;
        }
        if (cut_left_ws(strSource, 2) === "02") {
            strDestData = cut_left_ws(strSource, 2) + "-" + cut_mid_ws(strSource, 3, 4) + "-" + cut_right_ws(strSource, 4);
        } else {
            strDestData = cut_left_ws(strSource, 3) + "-" + cut_mid_ws(strSource, 4, 3) + "-" + cut_right_ws(strSource, 4);
        }
    } else {
        return strSource;
    }
    return strDestData;
}

/**
 * StringUtil - 주민등록번호 사업자번호 형태로 변환 합니다
 * 
 * @param strSource :
 *            string : 원본문자열
 * @return string : 변경된 문자열
 */
function format_ssbzno_ws(strSource) {
    strSource = trim_ws(strSource);
    if (strSource == "" || strSource == null) {
        // alert("원본 데이터를 입력해주세요.");
        return "";
    }
    var strPattern = /-/g;
    strSource = strSource.replace(strPattern, "");
    var nSourceLen = get_byte_len_ws(strSource);
    /*
     * if (nSourceLen != get_byte_len_ws(strSource.replace(strPattern, ""))) { // alert("원본데이터에 '-'이 포함되어있습니다"); return strSource; }
     */
    var strDestData = "";
    var nNcnt = 3;
    var nRcnt = 2;
    if (nSourceLen == 10) {
        // alert("사업자번호 입니다");
        strDestData = cut_left_ws(strSource, nSourceLen - nRcnt);
        strDestData = get_pad_ws(strDestData, "*", nSourceLen, false);
        strDestData = cut_left_ws(strDestData, 3) + "-" + cut_mid_ws(strDestData, 4, 2) + "-" + cut_right_ws(strDestData, 5);
    } else if (nSourceLen == 13) {
        // alert("주민등록번호 입니다");
        strDestData = cut_left_ws(strSource, nSourceLen - nNcnt);
        strDestData = get_pad_ws(strDestData, "*", nSourceLen, false);
        strDestData = cut_left_ws(strDestData, 6) + "-" + cut_mid_ws(strDestData, 7, 7);
    } else {
        // alert("유효하지 않은 주민(사업자)번호 입니다");
        return strSource;
    }
    return strDestData;
}

/**
 * StringUtil - 입력된 문자값에서 '-', '/', '.', ':', ' '(공백)을 없앤다
 * 
 * @param asValue :
 *            string : 원본문자열
 * @return string : 변경된 문자열
 */
function remove_pattern_ws(asValue) {
    return asValue.toString().replace(/-/g, "").replace(/\//g, "").replace(/\./g, "").replace(/:/g, "").replace(/ /g, "");
}

/**
 * StringUtil - 주민등록번호, 사업자번호의 패턴을 반환한다
 * 
 * @param strSource :
 *            string : 원본문자열
 * @return string : 변경된 문자열
 */
function get_ssbzno_ws(strSource) {
    strSource = trim_ws(strSource);
    if (strSource == "" || strSource == null) {
        // alert("원본 데이터를 입력해주세요.");
        return "";
    }
    var strPattern = /-/g;
    strSource = strSource.replace(strPattern, "");
    var nSourceLen = get_byte_len_ws(strSource);
    /*
     * if (nSourceLen != get_byte_len_ws(strSource.replace(strPattern, ""))) { // alert("원본데이터에 '-'이 포함되어있습니다"); return strSource; }
     */
    var strDestData = "";
    var nNcnt = 3;
    var nRcnt = 2;
    if (nSourceLen == 10) {
        // alert("사업자번호 입니다");
        strDestData = "ZZZZZZZZZZ";
        strDestData = cut_left_ws(strDestData, nSourceLen - nRcnt);
        strDestData = get_pad_ws(strDestData, "X", nSourceLen, false);
        strDestData = cut_left_ws(strDestData, 3) + "-" + cut_mid_ws(strDestData, 4, 2) + "-" + cut_right_ws(strDestData, 5);
    } else if (nSourceLen == 13) {
        // alert("주민등록번호 입니다");
        strDestData = "ZZZZZZZZZZZZZ";
        strDestData = cut_left_ws(strDestData, nSourceLen - nNcnt);
        strDestData = get_pad_ws(strDestData, "X", nSourceLen, false);
        strDestData = cut_left_ws(strDestData, 6) + "-" + cut_mid_ws(strDestData, 7, 7);
    } else {
        // alert("유효하지 않은 주민(사업자)번호 입니다");
        return "";
    }
    return strDestData;
}

/**
 * StringUtil - Html 태그를 Escape 처리한다
 * 
 * @param strSource :
 *            string : 원본문자열
 * @return string : 변경된 문자열
 */
function html_escape_ws(str) {
    str = str.replace(/&/g, "&amp;");
    str = str.replace(/</g, "&lt;");
    str = str.replace(/>/g, "&gt;");
    str = str.replace(/\"/g, "&quot;");
    return str;
}

/**
 * StringUtil - Html 태그를 UnEscape 처리한다
 * 
 * @param strSource :
 *            string : 원본문자열
 * @return string : 변경된 문자열
 */
function html_unescape_ws(str) {
    str = str.replace(/&amp;/g, "&amp;");
    str = str.replace(/&lt;/g, "&lt;");
    str = str.replace(/&gt;/g, "&gt;");
    str = str.replace(/&quot;/g, "\"");
    return str;
}

/**
 * StringUtil - 문자열이 해당 길이보다 크면, 자른 후 줄임말을 붙여준다 길이는 기본문자들(영어/숫자등)이 1으로, 다국어(한글등)이면 2로 계산한다
 * 
 * @param str 문자열
 * @param size 길이(byte 길이)
 * @param tail 줄임말
 * @return
 */
function cur_tail_ws(str, size, tail) {
    if (str == null) {
        return "";
    }
    var tailLen = (tail != null) ? get_byte_len_ws(tail) : 0;
    var maxLen = size - tailLen;
    var curLen = 0;
    var index = 0;
    for (index = 0; index < str.length && curLen < maxLen; index++) {
        if (str.charCodeAt(index) <= 255) {
            curLen++;
        } else {
            curLen++;
            curLen++;
        }
    }
    if (index == str.length) {
        return str;
    } else {
        var result = "";
        result = result + str.substring(0, index);
        if (tail != null) {
            result = result + tail;
        }
        return result;
    }
}

/*----------------------------------------------------------------------------------------------------------------------------------
 * END OF StringUtil
 *----------------------------------------------------------------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------------------------------------------------------------
 * BEGIN OF NumberUtil
 *----------------------------------------------------------------------------------------------------------------------------------*/

/**
 * NumberUtil - 문자를 숫자로 소숫점, 음수처리한다
 * 
 * @param strSource :
 *            string : 원본문자열
 * @param bDot :
 *            boolean : 소숫점 사용여부
 * @return number : 숫자
 */
function parse_num_ws(strSource, bDot) {
    if (is_empty_ws(bDot)) bDot = false;
    if (strSource == null || strSource == undefined || strSource.toString().replace(/ /g, "") == "") return "";
    var intNumber = strSource.toString().replace(/,/g, "").replace(/ /g, "");
    if (intNumber.toString().indexOf(".") > -1) {
        if (bDot == false) {
            intNumber = substr_byte_ws(intNumber, 0, intNumber.toString().indexOf("."));
        }
    }
    var bolMinus = false;
    var bolDot = false;
    var dotPos;
    var dotU;
    var dotD;
    var commaFlag;
    var strOut = "";
    if (intNumber < 0) {
        intNumber *= -1;
        bolMinus = true;
    }
    if (intNumber.toString().indexOf(".") > -1) {
        if (bDot == false) {
            intNumber = substr_byte_ws(intNumber, 0, intNumber.toString().indexOf("."));
        }
    }
    if (intNumber.toString().indexOf(".") > -1) {
        dotPos = intNumber.toString().split(".");
        dotU = Number(dotPos[0], 10).toString();
        dotD = dotPos[1];
        bolDot = true;
    } else {
        dotU = Number(intNumber.toString(), 10).toString();
        dotD = "";
    }
    commaFlag = get_byte_len_ws(dotU) % 3;
    if (commaFlag) {
        strOut = substr_byte_ws(dotU, 0, commaFlag);
        // if (get_byte_len_ws(dotU) > 3) strOut += ","; // 콤마 패턴 X
    }
    for ( var i = commaFlag; i < get_byte_len_ws(dotU); i += 3) {
        strOut += substr_byte_ws(dotU, i, i + 3);
        // if (i < get_byte_len_ws(dotU) - 3) strOut += ","; // 콤마 패턴 X
    }
    if (bolMinus) strOut = "-" + strOut;
    if (bolDot) strOut = strOut + "." + dotD;
    if (strOut == null || strOut == "") strOut = "0";
    return parseFloat(strOut);
}

/**
 * NumberUtil - 금액에 3자리 단위로 콤마 처리한다
 * 
 * @param value
 * @returns {String}
 */
function add_comma_ws(sval) {
    if (sval == "0") return "0";
    var reg = /(^[+-]?\d+)(\d{3})/;
    var n = (sval + "");
    while (reg.test(n)) {
        n = n.replace(reg, '$1' + ',' + '$2');
    }
    return n;
}

/**
 * NumberUtil - 콤마가 들어간 숫자에서 ","를 뺀다
 * 
 * @param me
 * @returns {String}
 */
function sub_comma_ws(strSource) {
    return strSource.replace(/\,/g, "");
}

/*----------------------------------------------------------------------------------------------------------------------------------
 * END OF NumberUtil
 *----------------------------------------------------------------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------------------------------------------------------------
 * BEGIN OF DateUtil
 *----------------------------------------------------------------------------------------------------------------------------------*/

/**
 * DateUtil - MMDD형식으로 입력된 날짜가 정상적인지 체크하여 정상여부를 반환한다
 * 
 * @param strDate
 *            :string : 월일 형태의 날짜
 * @return boolean : 정상적인 날짜 여부
 */
function is_date_mmdd_ws(strDate) {
    // alert("is_date_mmdd_ws(" + strDate + ")");
    var strPattern = /-/g;
    strDate = strDate.replace(strPattern, "");
    try {
        if (get_byte_len_ws(strDate) == 4) {
            var cTemp = new Date();
            var cYYYY = cTemp.getYear();
            var cMM = parseInt(substr_byte_ws(strDate, 0, 2), 10) - 1;
            var cDD = substr_byte_ws(strDate, 2, 4);
            var cDate = new Date(cYYYY, cMM, cDD);
            // alert(cDate.getMonth() + " 비교 " + cMM);
            if (cDate.getMonth() != cMM || cDate.getDate() != cDD) {
                return false;
            } else
                return true;
        } else {
            // alert("비정상적인 날짜입니다" + strDate);
            return false;
        }
    } catch (EXCEP) {
        // alert("비정상적인 날짜입니다" + strDate);
        return false;
    }
}

/**
 * DateUtil - YYYYMM형식으로 입력된 날짜가 정상적인지 체크하여 정상여부를 반환한다
 * 
 * @param strDate :
 *            string : 년월 형태의 날짜
 * @return boolean : 정상적인 날짜 여부
 */
function is_date_yyyymm_ws(strDate) {
    // alert("is_date_yyyymm_ws(" + strDate + ")");
    var strPattern = /-/g;
    strDate = strDate.replace(strPattern, "");
    try {
        if (get_byte_len_ws(strDate) == 6) {
            var cYYYY = substr_byte_ws(strDate, 0, 4);
            var cMM = parseInt(substr_byte_ws(strDate, 4, 6), 10) - 1;
            var cDate = new Date(cYYYY, cMM);
            if (cDate.getFullYear() != cYYYY || cDate.getMonth() != cMM) {
                return false;
            } else
                return true;
        } else {
            // alert("비정상적인 날짜입니다" + strDate);
            return false;
        }
    } catch (EXCEP) {
        // alert("비정상적인 날짜입니다" + strDate);
        return false;
    }
}

/**
 * DateUtil - YYMM형식으로 입력된 날짜가 정상적인지 체크하여 정상여부를 반환한다
 * 
 * @param strDate :
 *            string : 년2자리 월 형태의 날짜
 * @return boolean : 정상적인 날짜 여부
 */
function is_date_yymm_ws(strDate) {
    // alert("is_date_yymm_ws(" + strDate + ")");
    var strPattern = /-/g;
    strDate = strDate.replace(strPattern, "");
    try {
        if (get_byte_len_ws(strDate) == 4) {
            var cYYYY = substr_byte_ws(strDate, 0, 2);
            var cMM = parseInt(substr_byte_ws(strDate, 2, 4), 10) - 1;
            var cDate = new Date(cYYYY, cMM);
            if (cDate.getYear() != cYYYY || cDate.getMonth() != cMM) {
                return false;
            } else
                return true;
        } else {
            // alert("비정상적인 날짜입니다" + strDate);
            return false;
        }
    } catch (EXCEP) {
        // alert("비정상적인 날짜입니다" + strDate);
        return false;
    }
}

/**
 * DateUtil - YYYYMMDD형식으로 입력된 날짜가 정상적인지 체크하여 정상여부를 반환한다
 * 
 * @param strDate :
 *            string : 년월일 형태의 날짜
 * @return boolean : 정상적인 날짜 여부
 */
function is_date_yyyymmdd_ws(strDate) {
    // alert("is_date_yyyymmdd_ws(" + strDate + ")");
    var strPattern = /-/g;
    strDate = strDate.replace(strPattern, "");
    try {
        if (get_byte_len_ws(strDate) == 8) {
            var cYYYY = substr_byte_ws(strDate, 0, 4);
            var cMM = parseInt(substr_byte_ws(strDate, 4, 6), 10) - 1;
            var cDD = substr_byte_ws(strDate, 6, 8);
            var cDate = new Date(cYYYY, cMM, cDD);
            if (cDate.getFullYear() != cYYYY || cDate.getMonth() != cMM || cDate.getDate() != cDD) {
                return false;
            } else
                return true;
        } else {
            // alert("비정상적인 날짜입니다" + strDate);
            return false;
        }
    } catch (EXCEP) {
        // alert("비정상적인 날짜입니다" + strDate);
        return false;
    }
}

/**
 * DateUtil - YYMMDD형식으로 입력된 날짜가 정상적인지 체크하여 정상여부를 반환한다
 * 
 * @param strDate :
 *            string : 년2자리 월 형태의 날짜
 * @return boolean : 정상적인 날짜 여부
 */
function is_date_yymmdd_ws(strDate) {
    // alert("is_date_yymmdd_ws(" + strDate + ")");
    var strPattern = /-/g;
    strDate = strDate.replace(strPattern, "");
    try {
        if (get_byte_len_ws(strDate) == 6) {
            var cYYYY = substr_byte_ws(strDate, 0, 2);
            var cMM = parseInt(substr_byte_ws(strDate, 2, 4), 10) - 1;
            var cDD = substr_byte_ws(strDate, 4, 6);
            var cDate = new Date(cYYYY, cMM, cDD);
            if (cDate.getYear() != cYYYY || cDate.getMonth() != cMM || cDate.getDate() != cDD) {
                return false;
            } else
                return true;
        } else {
            // alert("비정상적인 날짜입니다" + strDate);
            return false;
        }
    } catch (EXCEP) {
        // alert("비정상적인 날짜입니다" + strDate);
        return false;
    }
}

/**
 * DateUtil - 금일을 기준으로 날짜를 연산해 준다
 * 
 * @param add_minusDate :
 *            number : 계산할 날짜
 * @param op :
 *            string : 사용할 연산자 ( + , - )
 * 
 * @return string : 8자리 년월일
 */
function oper_date_ws(add_minusDate, op) {
    // alert("oper_date_ws(" + add_minusDate + "," + op + ")");
    var newDate = new Date();
    newDate.setDate(eval(newDate.getDate() + op + parseInt(add_minusDate, 10)));
    var calculyear = newDate.getFullYear();
    var calculmonth = newDate.getMonth() + 1;
    calculmonth = calculmonth < 10 ? get_pad_ws(calculmonth, "0", 2, true) : calculmonth;
    var calculdate = newDate.getDate();
    calculdate = calculdate < 10 ? get_pad_ws(calculdate, "0", 2, true) : calculdate;
    var calculateDate = calculyear.toString(10) + calculmonth.toString(10) + calculdate.toString(10);
    return calculateDate;
}

/**
 * DateUtil - 금일날짜를 8자리 년월일 형태로 반환한다
 * 
 * @return string : 8자리 년월일
 */
function get_today_ws() {
    var newDate = new Date(); // 날짜값 가져오기
    var calculyear = newDate.getFullYear();
    var calculmonth = newDate.getMonth() + 1;
    calculmonth = calculmonth < 10 ? get_pad_ws(calculmonth, "0", 2, true) : calculmonth;
    var calculdate = newDate.getDate();
    calculdate = calculdate < 10 ? get_pad_ws(calculdate, "0", 2, true) : calculdate;
    var calculateDate = calculyear.toString(10) + calculmonth.toString(10) + calculdate.toString(10);
    return calculateDate;
}

/**
 * DateUtil - 기준날짜에서 oper_date만큼 지난 년월일을 8자리 년월일 형태로 반환한다
 * 
 * @param strDate :
 *            string : 기준날짜 년월일
 * @param oper_date :
 *            number : 더할 일수
 * 
 * @return string : 8자리 년월일
 */
function add_day_yyyymmdd_ws(strDate, oper_date) {
    // alert("add_day_yyyymmdd_ws(" + strDate + "," + oper_date + ")");
    try {
        if (is_date_yyyymmdd_ws(strDate) == true) {
            var op = "+";
            var cYYYY = substr_byte_ws(strDate, 0, 4);
            var cMM = parseInt(substr_byte_ws(strDate, 4, 6), 10) - 1;
            var cDD = substr_byte_ws(strDate, 6, 8);
            var newDate = new Date(cYYYY, cMM, cDD);
            newDate.setDate(eval(newDate.getDate() + op + parseInt(oper_date, 10)));
            var calculyear = newDate.getFullYear();
            var calculmonth = newDate.getMonth() + 1;
            calculmonth = calculmonth < 10 ? get_pad_ws(calculmonth, "0", 2, true) : calculmonth;
            var calculdate = newDate.getDate();
            calculdate = calculdate < 10 ? get_pad_ws(calculdate, "0", 2, true) : calculdate;
            var calculateDate = calculyear.toString(10) + calculmonth.toString(10) + calculdate.toString(10);
            return calculateDate;
        }
    } catch (EXCEP) {
        // alert("입력된 일자가 -" + strDate + "- 날짜형식에 맞지 않습니다");
        return "";
    }
}

/**
 * DateUtil - 기준날짜에서 oper_date이전의 년월일을 8자리 년월일 형태로 반환한다
 * 
 * @param strDate :
 *            string : 기준날짜 년월일
 * @param oper_date :
 *            number : 뺄 일수
 * 
 * @return string : 8자리 년월일
 */
function sub_day_yyyymmdd_ws(strDate, oper_date) {
    // alert("sub_day_yyyymmdd_ws(" + strDate + "," + oper_date + ")");
    try {
        if (is_date_yyyymmdd_ws(strDate) == true) {
            var op = "-";
            var cYYYY = substr_byte_ws(strDate, 0, 4);
            var cMM = parseInt(substr_byte_ws(strDate, 4, 6), 10) - 1;
            var cDD = substr_byte_ws(strDate, 6, 8);
            var newDate = new Date(cYYYY, cMM, cDD);
            newDate.setDate(eval(newDate.getDate() + op + parseInt(oper_date, 10)));
            var calculyear = newDate.getFullYear();
            var calculmonth = newDate.getMonth() + 1;
            calculmonth = calculmonth < 10 ? get_pad_ws(calculmonth, "0", 2, true) : calculmonth;
            var calculdate = newDate.getDate();
            calculdate = calculdate < 10 ? get_pad_ws(calculdate, "0", 2, true) : calculdate;
            var calculateDate = calculyear.toString(10) + calculmonth.toString(10) + calculdate.toString(10);
            return calculateDate;
        }
    } catch (EXCEP) {
        alert("입력된 일자가 -" + strDate + "- 날짜형식에 맞지 않습니다");
        return "";
    }
}

/**
 * DateUtil - 기준날짜에서 oper_date이후의 년월일을 8자리 년월일 형태로 반환한다
 * 
 * @param strDate :
 *            string : 기준날짜 년(2자리)월일
 * @param oper_date :
 *            number : 더할 일수
 * @return string : 8자리 년월일
 */
function add_day_yymmdd_ws(strDate, oper_date) {
    // alert("add_day_yymmdd_ws(" + strDate + "," + oper_date + ")");
    try {
        if (is_date_yymmdd_ws(strDate) == true) {
            var op = "+";
            var cYYYY = substr_byte_ws(strDate, 0, 2);
            var cMM = parseInt(substr_byte_ws(strDate, 2, 4), 10) - 1;
            var cDD = substr_byte_ws(strDate, 4, 6);
            var newDate = new Date(cYYYY, cMM, cDD);
            newDate.setDate(eval(newDate.getDate() + op + parseInt(oper_date, 10)));
            var calculyear = newDate.getYear();
            var calculmonth = newDate.getMonth() + 1;
            calculmonth = calculmonth < 10 ? get_pad_ws(calculmonth, "0", 2, true) : calculmonth;
            var calculdate = newDate.getDate();
            calculdate = calculdate < 10 ? get_pad_ws(calculdate, "0", 2, true) : calculdate;
            var calculateDate = calculyear.toString(10) + calculmonth.toString(10) + calculdate.toString(10);
            if (cYYYY < 10)
                return "0" + calculateDate;
            else
                return calculateDate;
        }
    } catch (EXCEP) {
        // alert("입력된 일자가 -" + strDate + "- 날짜형식에 맞지 않습니다");
        return "";
    }
}

/**
 * DateUtil - 기준날짜에서 oper_date이전의 년월일을 8자리 년월일 형태로 반환한다
 * 
 * @param strDate :
 *            string : 기준날짜 년(2자리)월일
 * @param oper_date :
 *            number : 뺄 일수
 * @return string : 8자리 년월일
 */
function sub_day_yymmdd_ws(strDate, add_minusDate) {
    // alert("sub_day_yymmdd_ws(" + strDate + "," + oper_date + ")");
    try {
        if (is_date_yymmdd_ws(strDate) == true) {
            var op = "-";
            var cYYYY = substr_byte_ws(strDate, 0, 2);
            var cMM = parseInt(substr_byte_ws(strDate, 2, 4), 10) - 1;
            var cDD = substr_byte_ws(strDate, 4, 6);
            var newDate = new Date(cYYYY, cMM, cDD);
            newDate.setDate(eval(newDate.getDate() + op + parseInt(add_minusDate, 10)));
            var calculyear = newDate.getYear();
            var calculmonth = newDate.getMonth() + 1;
            calculmonth = calculmonth < 10 ? get_pad_ws(calculmonth, "0", 2, true) : calculmonth;
            var calculdate = newDate.getDate();
            calculdate = calculdate < 10 ? get_pad_ws(calculdate, "0", 2, true) : calculdate;
            var calculateDate = calculyear.toString(10) + calculmonth.toString(10) + calculdate.toString(10);// 
            if (cYYYY < 10)
                return "0" + calculateDate;
            else
                return calculateDate;
        }
    } catch (EXCEP) {
        // alert("입력된 일자가 -" + strDate + "- 날짜형식에 맞지 않습니다");
        return "";
    }
}

/**
 * DateUtil - YYYYMMDD형식으로 월수덧셈한다
 * 
 * @param strDate :
 *            string : 기준날짜 년월일
 * @param oper_date :
 *            number : 더할 개월수
 * @return string : 8자리 년월일
 */
function add_month_yyyymmdd_ws(strDate, oper_date) {
    // alert("add_month_yyyymmdd_ws(" + strDate + "," + oper_date + ")");
    try {
        if (is_date_yyyymmdd_ws(strDate) == true) // 정상날짜 체크
        {
            var cYYYY = substr_byte_ws(strDate, 0, 4);
            var cMM = parseInt(substr_byte_ws(strDate, 4, 6), 10) + parseInt(oper_date, 10) - 1;
            var cDD = substr_byte_ws(strDate, 6, 8);
            var newDate = new Date(cYYYY, cMM, "01");
            var calculyear = newDate.getFullYear();
            var calculmonth = newDate.getMonth() + 1;
            calculmonth = calculmonth < 10 ? get_pad_ws(calculmonth, "0", 2, true) : calculmonth;
            var calculdate = newDate.getDate();
            calculdate = calculdate < 10 ? get_pad_ws(calculdate, "0", 2, true) : calculdate;
            var calculateDate = calculyear.toString(10) + calculmonth.toString(10) + calculdate.toString(10);// 
            var tempDate = get_last_day_ws(calculateDate);
            if (parseInt(substr_byte_ws(tempDate, 6, 8), 10) < parseInt(cDD, 10)) // 이달의
            // 마지막
            // 날짜와
            // 지정한
            // 날짜를
            // 비교하여
            // 날짜입력
            {
                calculdate = substr_byte_ws(tempDate, 6, 8) < 10 ? get_pad_ws(substr_byte_ws(tempDate, 6, 8), "0", 2, true) : substr_byte_ws(tempDate, 6, 8);
                calculmonth = parseInt(calculmonth, 10) < 10 ? get_pad_ws(parseInt(calculmonth, 10), "0", 2, true) : parseInt(calculmonth, 10);
                calculdate = parseInt(calculdate, 10) < 10 ? get_pad_ws(parseInt(calculdate, 10), "0", 2, true) : parseInt(calculdate, 10);
                calculateDate = calculyear.toString(10) + calculmonth.toString(10) + calculdate.toString(10);
                return calculateDate;
            } else {
                calculdate = cDD < 10 ? get_pad_ws(cDD, "0", 2, true) : cDD;
                calculmonth = parseInt(calculmonth, 10) < 10 ? get_pad_ws(parseInt(calculmonth, 10), "0", 2, true) : parseInt(calculmonth, 10);
                calculdate = parseInt(calculdate, 10) < 10 ? get_pad_ws(parseInt(calculdate, 10), "0", 2, true) : parseInt(calculdate, 10);
                calculateDate = calculyear.toString(10) + calculmonth.toString(10) + calculdate.toString(10);
                return calculateDate;
            }
        }
    } catch (EXCEP) {
        // alert("입력된 일자가 -" + strDate + "- 날짜형식에 맞지 않습니다");
        return "";
    }
}

/**
 * DateUtil - YYYYMMDD형식으로 월수뺄셈한다
 * 
 * @param strDate :
 *            string : 기준날짜 년월일
 * @param oper_date :
 *            number : 뺄 개월수
 * @return string : 8자리 년월일
 */
function sub_month_yyyymmdd_ws(strDate, oper_date) {
    // alert("sub_month_yyyymmdd_ws(" + strDate + "," + oper_date + ")");
    try {
        if (is_date_yyyymmdd_ws(strDate) == true) {
            var cYYYY = substr_byte_ws(strDate, 0, 4);
            var cMM = parseInt(substr_byte_ws(strDate, 4, 6), 10) - parseInt(oper_date, 10) - 1;
            var cDD = substr_byte_ws(strDate, 6, 8);
            var newDate = new Date(cYYYY, cMM, "01");
            var calculyear = newDate.getFullYear();
            var calculmonth = newDate.getMonth() + 1;
            calculmonth = calculmonth < 10 ? get_pad_ws(calculmonth, "0", 2, true) : calculmonth;
            var calculdate = newDate.getDate();
            calculdate = calculdate < 10 ? get_pad_ws(calculdate, "0", 2, true) : calculdate;
            var calculateDate = calculyear.toString(10) + calculmonth.toString(10) + calculdate.toString(10);
            var tempDate = get_last_day_ws(calculateDate);
            if (parseInt(substr_byte_ws(tempDate, 6, 8), 10) < parseInt(cDD, 10)) {
                calculdate = substr_byte_ws(tempDate, 6, 8) < 10 ? get_pad_ws(substr_byte_ws(tempDate, 6, 8), "0", 2, true) : substr_byte_ws(tempDate, 6, 8);

                calculmonth = parseInt(calculmonth, 10) < 10 ? get_pad_ws(parseInt(calculmonth, 10), "0", 2, true) : parseInt(calculmonth, 10);
                calculdate = parseInt(calculdate, 10) < 10 ? get_pad_ws(parseInt(calculdate, 10), "0", 2, true) : parseInt(calculdate, 10);
                calculateDate = calculyear.toString(10) + calculmonth.toString(10) + calculdate.toString(10);
                return calculateDate;
            } else {
                calculdate = cDD < 10 ? get_pad_ws(cDD, "0", 2, true) : cDD;
                calculmonth = parseInt(calculmonth, 10) < 10 ? get_pad_ws(parseInt(calculmonth, 10), "0", 2, true) : parseInt(calculmonth, 10);
                calculdate = parseInt(calculdate, 10) < 10 ? get_pad_ws(parseInt(calculdate, 10), "0", 2, true) : parseInt(calculdate, 10);
                calculateDate = calculyear.toString(10) + calculmonth.toString(10) + calculdate.toString(10);
                return calculateDate;
            }
        }
    } catch (EXCEP) {
        // alert("입력된 일자가 -" + strDate + "- 날짜형식에 맞지 않습니다");
        return "";
    }
}

/**
 * DateUtil - YYMMDD형식으로 월수덧셈한다
 * 
 * @param strDate :
 *            string : 기준날짜 년(2자리)월일
 * @param oper_date :
 *            number : 더할 개월수
 * 
 * @return string : 8자리 년월일
 */
function add_month_yymmdd_ws(strDate, oper_date) {
    // alert("add_month_yymmdd_ws(" + strDate + "," + oper_date + ")");
    try {
        if (is_date_yymmdd_ws(strDate) == true) {
            var cYear2;
            var cYYYY = substr_byte_ws(strDate, 0, 2);
            var cMM = parseInt(substr_byte_ws(strDate, 2, 4), 10) + parseInt(oper_date, 10) - 1;
            var cDD = substr_byte_ws(strDate, 4, 6);
            if (cYYYY < 30)
                cYear2 = "20" + substr_byte_ws(strDate, 0, 2).toString(10);
            else
                cYear2 = "19" + substr_byte_ws(strDate, 0, 2).toString(10);
            var newDate = new Date(cYear2, cMM, "01");
            var calculyear = newDate.getFullYear();
            var calculmonth = newDate.getMonth() + 1;
            calculmonth = calculmonth < 10 ? get_pad_ws(calculmonth, "0", 2, true) : calculmonth;
            var calculdate = newDate.getDate();
            calculdate = calculdate < 10 ? get_pad_ws(calculdate, "0", 2, true) : calculdate;
            var calculateDate = calculyear.toString(10) + calculmonth.toString(10) + calculdate.toString(10);
            var tempDate = get_last_day_ws(calculateDate);
            if (parseInt(substr_byte_ws(tempDate, 6, 8), 10) < parseInt(cDD, 10)) {
                calculdate = substr_byte_ws(tempDate, 6, 8) < 10 ? get_pad_ws(substr_byte_ws(tempDate, 6, 8), "0", 2, true) : substr_byte_ws(tempDate, 6, 8);
                calculmonth = parseInt(calculmonth, 10) < 10 ? get_pad_ws(parseInt(calculmonth, 10), "0", 2, true) : parseInt(calculmonth, 10);
                calculdate = parseInt(calculdate, 10) < 10 ? get_pad_ws(parseInt(calculdate, 10), "0", 2, true) : parseInt(calculdate, 10);
                calculateDate = calculyear.toString(10) + calculmonth.toString(10) + calculdate.toString(10);
                return substr_byte_ws(calculateDate, 2, 8);
            } else {
                calculdate = cDD < 10 ? get_pad_ws(cDD, "0", 2, true) : cDD;
                calculmonth = parseInt(calculmonth, 10) < 10 ? get_pad_ws(parseInt(calculmonth, 10), "0", 2, true) : parseInt(calculmonth, 10);
                calculdate = parseInt(calculdate, 10) < 10 ? get_pad_ws(parseInt(calculdate, 10), "0", 2, true) : parseInt(calculdate, 10);
                calculateDate = calculyear.toString(10) + calculmonth.toString(10) + calculdate.toString(10);
                return substr_byte_ws(calculateDate, 2, 8);
            }
        }
    } catch (EXCEP) {
        // alert("입력된 일자가 -" + strDate + "- 날짜형식에 맞지 않습니다");
        return "";
    }
}

/**
 * DateUtil - YYMMDD형식으로 월수뺄셈한다
 * 
 * @param strDate :
 *            string : 기준날짜 년(2자리)월일
 * @param oper_date :
 *            number : 뺄 개월수
 * @return string : 8자리 년월일
 */
function sub_month_yymmdd_ws(strDate, oper_date) {
    // alert("sub_month_yymmdd_ws(" + strDate + "," + oper_date + ")");
    try {
        if (is_date_yymmdd_ws(strDate) == true) {
            var cYear2;
            var cYYYY = substr_byte_ws(strDate, 0, 2);
            var cMM = parseInt(substr_byte_ws(strDate, 2, 4), 10) - parseInt(oper_date, 10) - 1;
            var cDD = substr_byte_ws(strDate, 4, 6);
            if (cYYYY < 30)
                cYear2 = "20" + substr_byte_ws(strDate, 0, 2).toString(10);
            else
                cYear2 = "19" + substr_byte_ws(strDate, 0, 2).toString(10);
            var newDate = new Date(cYear2, cMM, "01");
            var calculyear = newDate.getFullYear();
            var calculmonth = newDate.getMonth() + 1;
            calculmonth = calculmonth < 10 ? get_pad_ws(calculmonth, "0", 2, true) : calculmonth;
            var calculdate = newDate.getDate();
            calculdate = calculdate < 10 ? get_pad_ws(calculdate, "0", 2, true) : calculdate;
            var calculateDate = calculyear.toString(10) + calculmonth.toString(10) + calculdate.toString(10);
            var tempDate = get_last_day_ws(calculateDate);
            if (parseInt(substr_byte_ws(tempDate, 6, 8), 10) < parseInt(cDD, 10)) {
                calculdate = substr_byte_ws(tempDate, 6, 8) < 10 ? get_pad_ws(substr_byte_ws(tempDate, 6, 8), "0", 2, true) : substr_byte_ws(tempDate, 6, 8);
                calculmonth = parseInt(calculmonth, 10) < 10 ? get_pad_ws(parseInt(calculmonth, 10), "0", 2, true) : parseInt(calculmonth, 10);
                calculdate = parseInt(calculdate, 10) < 10 ? get_pad_ws(parseInt(calculdate, 10), "0", 2, true) : parseInt(calculdate, 10);
                calculateDate = calculyear.toString(10) + calculmonth.toString(10) + calculdate.toString(10);
                return substr_byte_ws(calculateDate, 2, 8).toString(10);
            } else {
                calculdate = cDD < 10 ? get_pad_ws(cDD, "0", 2, true) : cDD;
                calculmonth = parseInt(calculmonth, 10) < 10 ? get_pad_ws(parseInt(calculmonth, 10), "0", 2, true) : parseInt(calculmonth, 10);
                calculdate = parseInt(calculdate, 10) < 10 ? get_pad_ws(parseInt(calculdate, 10), "0", 2, true) : parseInt(calculdate, 10);
                calculateDate = calculyear.toString(10) + calculmonth.toString(10) + calculdate.toString(10);
                return substr_byte_ws(calculateDate, 2, 8).toString(10);
            }
        }
    } catch (EXCEP) {
        // alert("입력된 일자가 -" + strDate + "- 날짜형식에 맞지 않습니다");
        return "";
    }
}

/**
 * DateUtil - 특정시작일자부터 특정종료일자 일수를 구하여 반환한다
 * 
 * @param strDate :
 *            string : 기준날짜 년월일
 * @param endDate :
 *            string : 목적날짜 년월일
 * @return number : 기준일과 목적일 사이의 일수
 */
function spec_day_yyyymmdd_ws(startDate, endDate) {
    // alert("spec_day_yyyymmdd_ws(" + startDate + "," + endDate + ")");
    try {
        if (is_date_yyyymmdd_ws(startDate) == true && is_date_yyyymmdd_ws(endDate) == true) {
            var cStartYYYY = substr_byte_ws(startDate, 0, 4);
            var cStartMM = parseInt(substr_byte_ws(startDate, 4, 6), 10) - 1;
            var cStartDD = substr_byte_ws(startDate, 6, 8);
            var cEndYYYY = substr_byte_ws(endDate, 0, 4);
            var cEndMM = parseInt(substr_byte_ws(endDate, 4, 6), 10) - 1;
            var cEndDD = substr_byte_ws(endDate, 6, 8);

            var Start_dt = new Date(cStartYYYY, cStartMM, cStartDD);
            var End_dt = new Date(cEndYYYY, cEndMM, cEndDD);

            if (End_dt.getTime() < Start_dt.getTime()) {
                // alert("시작일자가 (" + startDate + ") 종료일자보다 (" + endDate + ")
                // 큽니다");
                return "";
            } else if (End_dt.getTime() == Start_dt.getTime()) {
                return "0";
            } else if (End_dt.getTime() > Start_dt.getTime()) {
                var strret = (End_dt.getTime() - Start_dt.getTime()) / 1000 / 60 / 60 / 24;
                return strret;
            }
        }
    } catch (EXCEP) {
        // alert("시작일자-" + startDate + " 또는 종료일자가-"+ endDate + " 날짜형식에 맞지
        // 않습니다");
        return "";
    }
}

/**
 * DateUtil - 특정시작일자부터 특정종료일자 개월수를 구하여 반환한다
 * 
 * @param strDate :
 *            string : 기준날짜 년월일
 * @param endDate :
 *            string : 목적날짜 년월일
 * @return number : 기준일과 목적일 사이의 개월수
 */
function spec_month_yyyymmdd_ws(startDate, endDate) {
    // alert("spec_month_yyyymmdd_ws(" + startDate + "," + endDate + ")");
    try {
        if (is_date_yyyymmdd_ws(startDate) == true && is_date_yyyymmdd_ws(endDate) == true) {
            var cYYYY1 = substr_byte_ws(startDate, 0, 4);
            var cMM2 = parseInt(substr_byte_ws(startDate, 4, 6), 10) - 1;
            var cYYYY3 = substr_byte_ws(endDate, 0, 4);
            var cMM4 = parseInt(substr_byte_ws(endDate, 4, 6), 10) - 1;
            if (cYYYY3 < cYYYY1) {
                alert("시작년도가 (" + startDate + ") 종료년도보다 (" + endDate + ") 큽니다");
                return "";
            } else if (cYYYY3 == cYYYY1) {
                if (cMM4 < cMM2) {
                    alert("시작달이 (" + startDate + ") 종료달보다 (" + endDate + ") 큽니다");
                    return "";
                } else if (cMM4 == cMM2) {
                    return "0";
                } else if (cMM4 > cMM2) {
                    return cMM4 - cMM2;
                }
            } else if (cYYYY3 > cYYYY1) {
                var tempyear = cYYYY3 - cYYYY1;
                tempyear = tempyear * 12 + cMM4;
                return tempyear - cMM2;
            }
        }
    } catch (EXCEP) {
        // alert("시작일자-" + startDate + "또는 종료일자가-" + endDate + " 날짜형식에 맞지
        // 않습니다");
        return "";
    }
}

/**
 * DateUtil - 대상 년월일의 요일을 반환한다
 * 
 * @param strDate :
 *            string : 기준날짜 년월일
 * @param isEnglish :
 *            boolean : 영문여부
 * @return string : 한글,혹은 영어로된 요일 ("일요일","월요일","화요일","수요일","목요일","금요일","토요일") ("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturdy")
 */
function get_week_day_ws(strDate, isEnglish) {
    // alert("get_week_day_ws(" + strDate + "," + isEnglish + ")");
    try {
        if (is_date_yyyymmdd_ws(strDate) == true) {
            var cYYYY = substr_byte_ws(strDate, 0, 4);
            var cMM = parseInt(substr_byte_ws(strDate, 4, 6), 10) - 1;
            var cDD = substr_byte_ws(strDate, 6, 8);
            var week;
            var weekDay;
            var cDate = new Date(cYYYY, cMM, cDD);
            if (isEnglish == false)
                week = new Array("일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일");
            else
                week = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturdy");
            weekDay = week[cDate.getDay()];
            // alert("요일 : " + weekDay);
            return weekDay;
        }
    } catch (EXCEP) {
        // alert("입력된 일자가 -" + strDate + "- 날짜형식에 맞지 않습니다");
        return "";
    }
}

/**
 * DateUtil - 대상날짜가 포함된 월의 마지막 날을 반환한다
 * 
 * @param strDate :
 *            string : 기준날짜 년월일
 * @return number : 해당 월의 마지막 일수
 */
function get_last_day_ws(strDate) {
    // alert("get_last_day_ws(" + strDate + ")");
    strDate = substr_byte_ws(strDate, 0, 6).toString(10) + "01";
    try {
        if (is_date_yyyymmdd_ws(strDate) == true) {
            var cYYYY = substr_byte_ws(strDate, 0, 4);
            var cMM = substr_byte_ws(strDate, 4, 6);
            var cDD = "01";
            var op = "-";
            var newDate = new Date(cYYYY, cMM, cDD);
            newDate.setDate(eval(newDate.getDate() + op + 1));
            var calculyear = newDate.getFullYear();
            var calculmonth = newDate.getMonth() + 1;
            calculmonth = calculmonth < 10 ? get_pad_ws(calculmonth, "0", 2, true) : calculmonth;
            var calculdate = newDate.getDate();
            var calculateDate = calculyear.toString(10) + calculmonth.toString(10) + calculdate.toString(10);
            return calculateDate;
        }
    } catch (EXCEP) {
        // alert("입력된 일자가 -" + strDate + "- 날짜형식에 맞지 않습니다");
        return "";
    }
}

/**
 * DateUtil - 현재 시스템의 YYYYMMDD HH:MM:SS를 반환한다
 * 
 * @returns {string} 현재 YYYYMMDD HH:MM:SS
 */
function get_timestamp_ws() {
    var timestamp = "";
    timestamp += format_date_ws(get_today_ws());
    timestamp += " ";
    timestamp += replace_all_ws(format_str_ws(get_24hhmmss_time_ws(), "ZZ-ZZ-ZZ"), "-", ":");
    return timestamp;
}

/**
 * DateUtil - 현재 시스템의 24시간 기준의 시분초를 반환한다
 * 
 * @return string : 현재 시(24)분초
 */
function get_24hhmmss_time_ws() {
    var newDate = new Date();
    var hours = newDate.getHours();
    var minutes = newDate.getMinutes();
    var sec = newDate.getSeconds();
    hours = hours < 10 ? get_pad_ws(hours, "0", 2, true) : hours;
    minutes = minutes < 10 ? get_pad_ws(minutes, "0", 2, true) : minutes;
    sec = sec < 10 ? get_pad_ws(sec, "0", 2, true) : sec;
    var strTime = hours.toString(10) + minutes.toString(10) + sec.toString(10);
    return strTime;
}

/**
 * DateUtil - 대상 시각이 정상적인 시각인지 확인한다
 * 
 * @param strTime :
 *            string : HHMMSS형태의 시각
 * @return boolean : 현재 시(24)분초
 */
function is_time_hhmmss_ws(strTime) {
    if (get_byte_len_ws(strTime) == 6) {
        var hours = substr_byte_ws(strTime, 0, 2);
        var minutes = substr_byte_ws(strTime, 2, 4);
        var sec = substr_byte_ws(strTime, 4, 6);
        if (((hours >= 0) && (hours <= 23)) && ((minutes >= 0) && (minutes <= 59)) && ((sec >= 0) && (sec <= 59))) {
            return true;
        } else
            return false;
    } else
        return false;
}

/**
 * DateUtil - 시스템 년월일을 가져온다
 * 
 * @return string : 년월일
 */
function get_sys_date_ws() {
    var objDate = new Date();
    var strYear = objDate.getFullYear().toString(10);
    var strMonth = (objDate.getMonth() + 1).toString(10);
    var strDay = objDate.getDate().toString(10);
    var strReturn;
    if (get_byte_len_ws(strMonth) == 1) strMonth = "0" + strMonth;
    if (get_byte_len_ws(strDay) == 1) strDay = "0" + strDay;
    strReturn = strYear + strMonth + strDay;
    return strReturn;
}

/**
 * DateUtil - 시스템 시분초를 가져온다
 * 
 * @return string : 시분초
 */
function get_sys_time_ws() {
    var objDate = new Date();
    var strHours = objDate.getHours().toString(10);
    var strMinutes = objDate.getMinutes().toString(10);
    var strSecond = objDate.getSeconds().toString(10);
    var strReturn;
    if (get_byte_len_ws(strHours) == 1) strHours = "0" + strHours;
    if (get_byte_len_ws(strMinutes) == 1) strMinutes = "0" + strMinutes;
    if (get_byte_len_ws(strSecond) == 1) strSecond = "0" + strSecond;
    strReturn = strHours + strMinutes + strSecond;
    return strReturn;
}

/**
 * DateUtil - 유효한(존재하는) 시(時)인지 체크한다
 * 
 * @param hh :
 *            string : 시간
 * @return boolean :
 */
function is_hour_ws(hh) {
    var intHour = parseInt(hh, 10);
    return (intHour >= 1 && intHour <= 24);
}

/**
 * DateUtil - 유효한(존재하는) 분(分)인지 체크한다
 * 
 * @param mi :
 *            string : 분
 * @return boolean :
 */
function is_min_ws(mi) {
    var intMin = parseInt(mi, 10);
    return (intMin >= 1 && intMin <= 60);
}

/**
 * DateUtil - 유효한(존재하는) 월(月)인지 체크한다
 * 
 * @param mm :
 *            string : 초
 * @return boolean :
 */
function is_month_ws(mm) {
    var intMonth = parseInt(mm, 10);
    return (intMonth >= 1 && intMonth <= 12);
}

/**
 * DateUtil - 유효한(존재하는) 일(日)인지 체크한다
 * 
 * @param yyyy :
 *            string : 년
 * @param mm :
 *            string : 월
 * @param dd :
 *            string : 일
 * @return boolean :
 */
function is_day_ws(yyyy, mm, dd) {
    var intMonth = parseInt(mm, 10) - 1;
    var intDay = parseInt(dd, 10);
    var arrLastDay = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
    if ((yyyy % 4 == 0 && yyyy % 100 != 0) || yyyy % 400 == 0) arrLastDay[1] = 29;
    return (intDay >= 1 && intDay <= arrLastDay[intMonth]);
}

/**
 * DateUtil - 시작일자와 종료일자를 비교(종료일자가 크면 true, 시작일자가 크면 false)한다
 * 
 * @param asFDate :
 *            string : 시작일
 * @param asTDate :
 *            string : 종료일
 */
function compare_date_ws(asFDate, asTDate) {
    var iFDate = parseInt(remove_pattern_ws(asFDate));
    var iTDate = parseInt(remove_pattern_ws(asTDate));
    return iFDate <= iTDate ? true : false;
}

/**
 * DateUtil - 해당 주기의 처음 날짜를 구한다
 * 
 * @param strYears :
 *            string : 년
 * @param strSelectWeek :
 *            string : 주
 * @return string : 년월일
 */
function get_first_week_ws(strYears, strSelectWeek) {
    if (strYears == "" || strSelectWeek == "") return;
    var Date = to_date_ws(strYears + "0101");
    var nDay = Date.getDay();
    var arrLastDay = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
    var nYear = parseInt(strYears, 10);
    if ((nYear % 4 == 0 && nYear % 100 != 0) || nYear % 400 == 0) arrLastDay[1] = 29;
    var nTotalDay = 0;
    for ( var n = 0; n < arrLastDay.length; n++) {
        nTotalDay += arrLastDay[n];
    }
    var nTempDate = nTotalDay + nDay;
    var nWeeks = Math.ceil(nTempDate / 7);
    var nYear = parseInt(strYears, 10);
    var tmpYear = "" + nYear;
    tmpYear = substr_byte_ws(tmpYear, 0, 4);
    var nPosMon = 0;
    var nPosDay = 1;
    var strYear;
    var strMonth;
    var strDay;
    for ( var i = 1; i <= nWeeks; i++) {
        if (i == 1) {
            nPosDay = (7 - nDay);
            if (strSelectWeek == i) {
                strYear = get_pad_ws(tmpYear, "0", 4, true);
                strMonth = get_pad_ws(nPosMon + 1, "0", 2, true);
                strDay = get_pad_ws(nPosDay, "0", 2, true);
                return sub_day_yyyymmdd_ws(strYear + strMonth + strDay, 5);
            }
        } else {
            nPosDay += 7;
            if (nPosDay > arrLastDay[nPosMon]) {
                nPosDay = nPosDay - arrLastDay[nPosMon];
                nPosMon++;
            }
            if (nPosMon > 11) {
                nYear++;
                nPosMon = 0;
            }
            if (strSelectWeek == i) {
                strYear = get_pad_ws(tmpYear, "0", 4, true);
                strMonth = get_pad_ws(nPosMon + 1, "0", 2, true);
                strDay = get_pad_ws(nPosDay, "0", 2, true);
                return sub_day_yyyymmdd_ws(strYear + strMonth + strDay, 5);
            }
        }
    }
}

/**
 * DateUtil - 해당 주기의 마지막 날짜를 구한다
 * 
 * @param strYears :
 *            string : 년
 * @param strSelectWeek :
 *            string : 주
 * @return string : 년월일
 */
function get_last_week_ws(strYears, strSelectWeek) {
    if (strYears == "" || strSelectWeek == "") return;
    var Date = to_date_ws(strYears + "0101");
    var nDay = Date.getDay();
    var arrLastDay = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
    var nYear = parseInt(strYears, 10);
    if ((nYear % 4 == 0 && nYear % 100 != 0) || nYear % 400 == 0) arrLastDay[1] = 29;
    var nTotalDay = 0;
    for ( var n = 0; n < arrLastDay.length; n++) {
        nTotalDay += arrLastDay[n];
    }
    var nTempDate = nTotalDay + nDay;
    var nWeeks = Math.ceil(nTempDate / 7);
    var nYear = parseInt(strYears, 10);
    var tmpYear = "" + nYear;
    tmpYear = substr_byte_ws(tmpYear, 0, 4);
    var nPosMon = 0;
    var nPosDay = 1;
    var strYear;
    var strMonth;
    var strDay;
    for ( var i = 1; i <= nWeeks; i++) {
        if (i == 1) {
            nPosDay = (7 - nDay);
            if (strSelectWeek == i) {
                strYear = get_pad_ws(tmpYear, "0", 4, true);
                strMonth = get_pad_ws(nPosMon + 1, "0", 2, true);
                strDay = get_pad_ws(nPosDay, "0", 2, true);
                return strYear + strMonth + strDay;
            }
        } else {
            nPosDay += 7;
            if (nPosDay > arrLastDay[nPosMon]) {
                nPosDay = nPosDay - arrLastDay[nPosMon];
                nPosMon++;
            }
            if (nPosMon > 11) {
                nYear++;
                nPosMon = 0;
            }
            if (strSelectWeek == i) {
                strYear = get_pad_ws(tmpYear, "0", 4, true);
                strMonth = get_pad_ws(nPosMon + 1, "0", 2, true);
                strDay = get_pad_ws(nPosDay, "0", 2, true);
                return strYear + strMonth + strDay;
            }
        }
    }
}

/**
 * DateUtil - 해당 날짜의 Date 객체 얻어온다
 * 
 * @param asDate :
 *            string : 년월일
 * @return object : date
 */
function to_date_ws(asDate) {
    var strDate = asDate.toString().replace(/-/g, "").replace(/\//g, "").replace(/\./g, "").replace(/:/g, "").replace(/ /g, "");
    var year = "";
    var month = "";
    var day = "";
    var hour = "";
    var min = "";
    if (get_byte_len_ws(strDate) == 6) {
        year = substr_byte_ws(strDate, 0, 4);
        month = substr_byte_ws(strDate, 4, 6) - 1;
        return new Date(year, month, 1);
    } else if (get_byte_len_ws(strDate) == 8) {
        year = substr_byte_ws(strDate, 0, 4);
        month = substr_byte_ws(strDate, 4, 6) - 1;
        day = substr_byte_ws(strDate, 6, 8);
        return new Date(year, month, day);
    } else if (get_byte_len_ws(strDate) == 12) {
        year = substr_byte_ws(strDate, 0, 4);
        month = substr_byte_ws(strDate, 4, 6) - 1;
        day = substr_byte_ws(strDate, 6, 8);
        hour = substr_byte_ws(strDate, 8, 10);
        min = substr_byte_ws(strDate, 10, 12);
        return new Date(year, month, day, hour, min);
    }
    return null;
}

/**
 * DateUtil - 해당날짜의 주기를 구한다
 * 
 * @param strDate :
 *            string : 년월일
 * @return number : 주기
 */
function get_week_from_date_ws(strDate) {
    if (strDate == "") return;
    var strYears = cut_left_ws(strDate, 4);
    var strMonth = cut_mid_ws(strDate, 5, 2);
    var strDay = trim_right_ws(strDate, 2);
    var Date = to_date_ws(strYears + "0101");
    var nDay = Date.getDay();
    var arrLastDay = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
    var nYear = parseInt(strYears, 10);
    if ((nYear % 4 == 0 && nYear % 100 != 0) || nYear % 400 == 0) arrLastDay[1] = 29;
    var nToDays = 0;
    for ( var n = 0; n < parseInt(strMonth, 10) - 1; n++) {
        nToDays += arrLastDay[n];
    }
    nToDays += parseInt(strDay, 10) + nDay;
    return Math.ceil(nToDays / 7);
}

/**
 * DateUtil - 날짜 형식을 포맷팅한다 (YYYY-MM-DD, OR YYYY + seperator + MM + seperator + DD)
 * 
 * @param strDate
 * @param format
 * @returns
 */
function format_date_ws(strDate, seperator) {
    var formatDate = "";
    if (is_date_yyyymmdd_ws(strDate)) {
        formatDate = format_str_ws(strDate, "####-##-##");
        if (seperator == null || seperator == "-") {
            return formatDate;
        } else {
            formatDate = formatDate.replace(/-/g, seperator);
            return formatDate;
        }
    } else {
        return "";
    }
}

/**
 * DateUtil - 날짜 형식을 포맷팅한다 (YYYY년 MM월 DD일)
 * 
 * @param strDate
 * @param format
 * @returns
 */
function format_date_kr_ws(strDate) {
    if (is_date_yyyymmdd_ws(strDate)) {
        return substr_byte_ws(strDate, 0, 4) + "년 " + substr_byte_ws(strDate, 4, 6) + "월 " + substr_byte_ws(strDate, 6, 8) + "일";
    } else {
        return "";
    }
}

/*----------------------------------------------------------------------------------------------------------------------------------
 * END OF DateUtil
 *----------------------------------------------------------------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------------------------------------------------------------
 * BEGIN OF CollectionUtil
 *----------------------------------------------------------------------------------------------------------------------------------*/

/**
 * 배열에서 key값의 index를 반환한다
 * 
 * @param keyName
 * @returns {Number}
 */
function get_array_idx_ws(keyName) {
    var i = 0;
    for (key in keyName) {
        i++;
    }
    return i;
}

/**
 * 두개의 배열을 비교한다
 * 
 * @param a
 * @param b
 * @returns {Boolean}
 */
function compare_arrays_ws(a, b, is_sort) {
    if (is_empty_ws(is_sort)) is_sort = true;
    if (is_sort) {
        a = a.sort();
        b = b.sort();
    }
    if (a == b) {
        return true;
    }
    if (get_array_idx_ws(a) != get_array_idx_ws(b)) {
        return false;
    }
    for (key in a) {
        if (a[key] != b[key]) {
            return false;
        }
    }
    return true;
}

/**
 * 배열에서 해당 데이터를 삭제후 반환한다
 * 
 * @param arrSrc :
 *            array : 원본배열
 * @param delElement :
 *            element : 삭제요소
 * @return array : 반환배열
 */
function remove_element_ws(arrSrc, val) {
    for ( var i = 0; i < arrSrc.length; i++) {
        if (arrSrc[i] == val) {
            arrSrc.splice(i, 1);
            i--;
        }
    }
    return arrSrc;
}

/**
 * 배열 중복 체크한다
 * 
 * @param arrSrc
 * @returns {array}
 */
function validate_multiset_element_ws(arrSrc) {
    var dest = "";
    var arrDest = arrSrc.slice();
    var i = 0;
    arrDest.sort(function(a, b) {
        i++;
        if (a == b) {
            dest += i + ":" + a + "┐";
            return 0;
        }
        return (a > b) ? 1 : -1;
    });
    return dest;
}

/*----------------------------------------------------------------------------------------------------------------------------------
 * END OF CollectionUtil
 *----------------------------------------------------------------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------------------------------------------------------------
 * BEGIN OF BizUtil
 *----------------------------------------------------------------------------------------------------------------------------------*/

/**
 * BizUtil - 암호화할 문자열의 뒷자리부터 '*' 패턴을 적용한다
 * 
 * @param str
 *            암호화할 문자열
 * @param str_type
 *            암호화 타입(전화번호, 이메일, ID, 주민등록번호, 증권번호, 차량번호, 차대번호, 계좌번호)
 * @returns {string}
 */
function enc_pattern_ws(str, str_type) {
    var filler = "";
    var fillerSize = 0;
    switch (str_type) {
        case "TELNO": // TELNO : 전화번호 (뒷 4자리 *처리)
            fillerSize = 4;
            break;
        case "EMAIL": // EMAIL: 이메일 (뒷 2자리 *처리)
            fillerSize = 2;
            break;
        case "ID": // ID : ID (뒷 2자리 *처리)
            fillerSize = 2;
            break;
        case "IHRGNO": // IHRGNO : 주민등록번호 (뒷 7자리 *처리)
            fillerSize = 7;
            break;
        case "PCNO": // PCNO : 증권번호 (뒷 3자리 *처리)
            fillerSize = 3;
            break;
        case "VCNO": // VCNO : 차량번호 (뒷 2자리 *처리)
            fillerSize = 2;
            break;
        case "CARBDYNO":// CARBDYNO : 차대번호 (뒷 4자리 *처리)
            fillerSize = 4;
            break;
        case "BANO": // BANO : 계좌번호 (뒷 3자리 *처리)
            fillerSize = 3;
            break;
        default:
            break;
    }
    for ( var i = 0; i < fillerSize; i++) {
        filler += "*";
    }
    var is_filler_bigger_than_src = false; // filler 크기보다 원본 데이터의 크기가 작을 때, 데이터 크기만큼
    if (get_byte_len_ws(str) - get_byte_len_ws(filler) <= 0) {
        is_filler_bigger_than_src = true;
    }
    var tgt_str = "";
    if (is_filler_bigger_than_src) {
        tgt_str = str;
    } else {
        tgt_str = get_pad_ws(substr_byte_ws(str, 0, get_byte_len_ws(str) - fillerSize), filler, get_byte_len_ws(str), false);
    }
    return tgt_str;
}

/**
 * BizUtil - 해당 화면으로 이동한다
 * 
 * @param scr_id
 * @param param
 * @param is_debug
 * @returns {string}
 */
function link_to_ws(scr_id, param, is_debug) {
    if (is_empty_ws(param)) param = "";
    if (is_empty_ws(is_debug)) is_debug = false;

    var root_path = "/websquare/websquare.jsp?w2xPath=";
    var ui_path = "";
    if (get_ui_path_ws(scr_id) == false) {
        return false;
    } else {
        ui_path = get_ui_path_ws(scr_id);
    }
    var full_path = ""; // FULL PATH
    if (is_not_empty_ws(WS_UI_MAP[scr_id])) {
        full_path = root_path + ui_path;
        if (is_debug)
            lig_msg.fn_alert('g', 'bypass', [ "[DEBUG:Y]\n" + WS_UI_MAP[scr_id] + " " + scr_id + "으로 이동합니다\n\n" + "path: [" + ui_path + "]" + "\nparam: ["
                    + param + "]" ]);
    } else {
        lig_msg.fn_alert('g', 'bypass', [ "[" + scr_id + "] ID가 /js/ws_ui_constant.js의 웹사이트 화면 JSON MAP 누락되었습니다\n/js/ws_ui_constant.js를 갱신해 주세요" ]);
        return false;
    }
    location.href = full_path;
}

/**
 * BizUtil - 해당 화면으로 이동한다
 * 
 * @param scr_id
 * @param param
 * @param is_debug
 * @returns {string}
 */
function link_to_admin_ws(scr_id, param, is_debug) {
    if (is_empty_ws(param)) param = "";
    if (is_empty_ws(is_debug)) is_debug = false;

    var root_path = "/cdwadm/websquare_cdwadm.jsp?w2xPath=";
    var ui_path = "";
    if (get_ui_path_ws(scr_id) == false) {
        return false;
    } else {
        ui_path = get_ui_path_ws(scr_id);
    }
    var full_path = ""; // FULL PATH
    if (is_not_empty_ws(WS_UI_MAP[scr_id])) {
        full_path = root_path + ui_path;
        if (is_debug)
            lig_msg.fn_alert('g', 'bypass', [ "[DEBUG:Y]\n" + WS_UI_MAP[scr_id] + " " + scr_id + "으로 이동합니다\n\n" + "path: [" + ui_path + "]" + "\nparam: ["
                    + param + "]" ]);
    } else {
        lig_msg.fn_alert('g', 'bypass', [ "[" + scr_id + "] ID가 /js/ws_ui_constant.js의 웹사이트 화면 JSON MAP 누락되었습니다\n/js/ws_ui_constant.js를 갱신해 주세요" ]);
        return false;
    }
    location.href = full_path;
}

/**
 * BizUtil - 해당 화면으로 이동한다 (파라미터 XML이 아닌 파라미터 Value 처리)
 * 
 * @param scr_id
 * @param param
 * @param is_debug
 * @returns {string}
 */
function link_to_ws_value(scr_id, param, is_debug) {
    if (is_empty_ws(param)) param = "";
    if (is_empty_ws(is_debug)) is_debug = false;
    fn_setValue("linkParam", param);
    var root_path = "/websquare/websquare.jsp?w2xPath=";
    var ui_path = "";
    if (get_ui_path_ws(scr_id) == false) {
        return false;
    } else {
        ui_path = get_ui_path_ws(scr_id);
    }
    var full_path = ""; // FULL PATH
    if (is_not_empty_ws(WS_UI_MAP[scr_id])) {
        full_path = root_path + ui_path;
        if (is_debug)
            lig_msg.fn_alert('g', 'bypass', [ "[DEBUG:Y]\n" + WS_UI_MAP[scr_id] + " " + scr_id + "으로 이동합니다\n\n" + "path: [" + ui_path + "]" + "\nparam: ["
                    + param + "]" ]);
    } else {
        lig_msg.fn_alert('g', 'bypass', [ "[" + scr_id + "] ID가 /js/ws_ui_constant.js의 웹사이트 화면 JSON MAP 누락되었습니다\n/js/ws_ui_constant.js를 갱신해 주세요" ]);
        return false;
    }
    location.href = full_path;
}

/**
 * BizUtil - UI 이름으로 UI 패스를 리턴한다
 * 
 * @param scr_id
 * @returns {string}
 */
function get_ui_path_ws(scr_id) {
    var arr_scr_id_path = scr_id.toLowerCase().split("_");
    if (arr_scr_id_path.length <= 2) {
        lig_msg.fn_alert('g', 'bypass', [ "[" + scr_id + "] ID가 화면 ID 형식에 맞지 않습니다" ]);
        return false;
    }
    var ui_path = "";
    if (arr_scr_id_path.length == 4) { // 2DEPTH 화면 패스
        ui_path = "/" + arr_scr_id_path[1] + "/" + arr_scr_id_path[2] + "/" + scr_id + ".xml";
    } else if (arr_scr_id_path.length == 3) { // 1DEPTH 웹세일즈 메인 화면 패스
        ui_path = "/" + arr_scr_id_path[1] + "/" + scr_id + ".xml";
    }
    if ("ma" == arr_scr_id_path[1]) { // 0DEPTH 메인 화면 패스
        ui_path = "/" + scr_id + ".xml";
    }
    return ui_path;
}

/**
 * BizUtil - UI 이름으로 UI 화면 타입을 리턴한다
 * 
 * @param scr_id
 * @returns {string}
 */
function get_pfm_chnl_type_ws(scr_id) {
    var arr_scr_id_path = scr_id.split("_");
    if (arr_scr_id_path.length <= 2) {
        lig_msg.fn_alert('g', 'bypass', [ "[" + scr_id + "] ID가 화면 ID 형식에 맞지 않습니다" ]);
        return false;
    }
    var scr_id_type = substr_byte_ws(arr_scr_id_path[3], 4, 5);
    if (scr_id_type == "M")
        return "BS";
    else
        return "PO";
}

/**
 * BizUtil - 부모 창에 파라미터를 전달하고 닫는다
 * 
 * @param ui_nm
 * @param param_doc
 */
function set_param_to_opener_ws(ui_nm, param_doc) {
    if (param_doc == null) {
        eval("opener.callback_" + ui_nm + "(\"\");");
    } else {
        eval("opener.callback_" + ui_nm + "(WebSquare.xml.serialize(param_doc));");
    }
    close_popup_ws();
}

/**
 * BizUtil - 입력값이 차량번호 형식인지 체크한다
 * 
 * @param asValue :
 *            string : 원본문자열
 * @return boolean : 차량번호형식 유무
 */
function is_vcno_ws(asValue) {
    var strFormat = /^([가-힣ㄱ-ㅎㅏ-ㅣ\x20]{2})?\d{2}[가-힣ㄱ-ㅎㅏ-ㅣ\x20]\d{4}$/g;
    return is_format_ws(asValue, strFormat);
}

/**
 * BizUtil - '
 * <ul class/>' 패턴을 적용한다 (
 * <ul class='grid_list'>
 * <li>frstCnt</li>
 * <li>scndCnt</li>
 * </ul>)
 * 
 * @param ul_class
 * @param frst_str
 * @param scnd_str
 * @returns {String}
 */
function get_ulclass_pattern_ws(ul_class, frst_str, scnd_str) {
    if (is_empty_ws(frst_str) && is_empty_ws(scnd_str)) {
        return "";
    }
    var ul_class_fic = "<ul class='" + ul_class + "'><li>";
    ul_class_fic += frst_str;
    ul_class_fic += "</li><li>";
    ul_class_fic += scnd_str;
    ul_class_fic += "</li></ul>";
    return ul_class_fic;
}

/**
 * BizUtil - 팝업 창을 닫는다
 */
function close_popup_ws() {
    window.open('about:blank', '_self').close();
}

/**
 * BizUtil - ProFrame 메시지로 메시지 창을 출력한다
 * 
 * @param doc
 */
function open_pfm_msg_ws(doc) {
    var PFM_RESULT_MAP = pfm_result(doc);
    // var msg = "[" + PFM_RESULT_MAP.type + "] " + PFM_RESULT_MAP.title + "\n"
    // + PFM_RESULT_MAP.msg;
    lig_msg.fn_alert('g', 'bypass', [ PFM_RESULT_MAP.msg ]);
}

/**
 * BizUtil - websquare.jsp의 instance node를 삭제한다
 * 
 * @param xpath
 */
function remove_instance_node_ws(xpath) {
    top.window.frames[0].WebSquare.ModelUtil.removeInstanceNode(xpath);
}

/**
 * BizUtil - 입력된 년월일과 특정일을 받아 만 나이를 리턴한다
 * 
 * @param strDate
 * @param format
 * @returns
 */
function getAgeYYYY(code_fiscale, curr_dt) {
    if (get_byte_len_ws(curr_dt) != 8) {
        return 0;
    }
    var curr_yy = substr_byte_ws(curr_dt, 0, 4);
    var curr_mm = substr_byte_ws(curr_dt, 4, 6);
    var curr_dd = substr_byte_ws(curr_dt, 6, 8);
    var birth_yy = substr_byte_ws(code_fiscale, 0, 4);
    var birth_mm = substr_byte_ws(code_fiscale, 4, 6);
    var birth_dd = substr_byte_ws(code_fiscale, 6, 8);
    var age = Number(curr_yy) - Number(birth_yy);
    if (Number(curr_mm) == Number(birth_mm)) {
        if (Number(curr_dd) < Number(birth_dd)) {
            age = Number(age) - Number(1);
        }
    } else if (Number(curr_mm) < Number(birth_mm)) {
        age = Number(age) - Number(1);
    }
    return age;
}

/**
 * BizUtil - 주민등록번호와 오늘날짜(yyyyMMdd)를 받아 만 나이를 리턴한다
 * 
 * @param v_cust_id_no
 * @param today
 * @returns {Number}
 */
function getAge(v_cust_id_no, today) {
    var curr_dt = today;
    var birth = v_cust_id_no;
    if (get_byte_len_ws(curr_dt) != 8) {
        return 0;
    }
    var curr_yy = substr_byte_ws(curr_dt, 0, 4);
    var curr_mm = substr_byte_ws(curr_dt, 4, 1);
    var curr_dd = substr_byte_ws(curr_dt, 6, 8);
    var birth_yy = substr_byte_ws(birth, 0, 2);
    var birth_gbn = substr_byte_ws(birth, 6, 7);
    if (birth_gbn == "3" || birth_gbn == "4" || birth_gbn == "7" || birth_gbn == "8") {
        birth_yy = "20" + birth_yy;
    } else if (birth_gbn == "9" || birth_gbn == "0") {
        birth_yy = "18" + birth_yy;
    } else {
        birth_yy = "19" + birth_yy;
    }
    var birth_mm = substr_byte_ws(birth, 2, 4);
    var birth_dd = substr_byte_ws(birth, 4, 6);
    var age = Number(curr_yy) - Number(birth_yy);
    if (Number(curr_mm) == Number(birth_mm)) {
        if (Number(curr_dd) < Number(birth_dd)) {
            age = Number(age) - Number(1);
        }
    } else if (Number(curr_mm) < Number(birth_mm)) {
        age = Number(age) - Number(1);
    }
    return age;
}

/**
 * BizUtil - 주민등록번호와 오늘날짜(yyyyMMdd)를 받아 생년을 리턴한다
 * 
 * @param v_cust_id_no
 * @param today
 * @returns
 */
function getYear(v_cust_id_no, today) {
    var curr_dt = today;
    var birth = v_cust_id_no;
    if (get_byte_len_ws(curr_dt) != 8) {
        return 0;
    }
    var curr_yy = substr_byte_ws(curr_dt, 0, 4);
    var curr_mm = substr_byte_ws(curr_dt, 4, 6);
    var curr_dd = substr_byte_ws(curr_dt, 6, 8);
    var birth_yy = substr_byte_ws(birth, 0, 2);
    var birth_gbn = substr_byte_ws(birth, 6, 7);
    if (birth_gbn == "3" || birth_gbn == "4" || birth_gbn == "7" || birth_gbn == "8") {
        birth_yy = "20" + birth_yy;
    } else if (birth_gbn == "9" || birth_gbn == "0") {
        birth_yy = "18" + birth_yy;
    } else {
        birth_yy = "19" + birth_yy;
    }
    var birth_mm = substr_byte_ws(birth, 2, 4);
    var birth_dd = substr_byte_ws(birth, 4, 6);
    var age = Number(curr_yy) - Number(birth_yy);
    if (Number(curr_mm) == Number(birth_mm)) {
        if (Number(curr_dd) < Number(birth_dd)) {
            age = Number(age) - Number(1);
        }
    } else if (Number(curr_mm) < Number(birth_mm)) {
        age = Number(age) - Number(1);
    }
    return birth_yy;
}

/**
 * BizUtil - 세션 정보를 출력한다
 * 
 * @returns {String}
 */
function get_session_inf_ws() {
    var S_CUST_NM = ("S_CUST_NM: " + fn_get_session_info("S_CUST_NM"));
    var S_CUST_SSNO = ("S_CUST_SSNO: " + fn_get_session_info("S_CUST_SSNO"));
    var S_CUST_NO = ("S_CUST_NO: " + fn_get_session_info("S_CUST_NO"));
    var S_CUST_EMAIL = ("S_CUST_EMAIL: " + fn_get_session_info("S_CUST_EMAIL"));
    var S_MBLPHN_TELNO = ("S_MBLPHN_TELNO: " + fn_get_session_info("S_MBLPHN_TELNO"));
    var S_OWNHM_TELNO = ("S_OWNHM_TELNO: " + fn_get_session_info("S_OWNHM_TELNO"));
    var S_WKPLC_TELNO = ("S_WKPLC_TELNO: " + fn_get_session_info("S_WKPLC_TELNO"));
    var SESSION_INF = S_CUST_NM + "\n" + S_CUST_SSNO + "\n" + S_CUST_NO + "\n" + S_CUST_EMAIL + "\n" + S_MBLPHN_TELNO + "\n" + S_OWNHM_TELNO + "\n"
            + S_WKPLC_TELNO;
    return SESSION_INF;
}

/**
 * BizUtil - 보안등급에 따른 로그인 페이지 리다이렉트 처리한다
 * 
 * @returns {Boolean}
 */
function redrct_login_ws() {
    var scr_id = fn_getValue("g_ui_id");
    // 화면 ID NULL 체크
    if (is_empty_ws(scr_id)) {
        lig_msg.fn_alert('g', 'bypass', [ "현재의 화면 ID가 정의되지 않았습니다" ]);
        return false;
    }
    // 화면 ID VALIDATION 체크
    var arr_scr_id_path = scr_id.toUpperCase().split("_");
    if (arr_scr_id_path.length <= 2) {
        lig_msg.fn_alert('g', 'bypass', [ "[" + scr_id + "] ID가 화면 ID 형식에 맞지 않습니다" ]);
        return false;
    }
    // 로그인 필요여부 체크
    if (is_empty_ws(WS_UI_SECLV_MAP[scr_id])) {
        lig_msg.fn_alert('g', 'bypass', [ "[" + scr_id + "] ID가 /js/ws_ui_constant.js의 웹사이트 보안등급 JSON MAP 누락되었습니다\n/js/ws_ui_constant.js를 갱신해 주세요" ]);
        return false;
    }
    // 화면 ID 로그인 필수여부 체크
    if (WS_LOGIN_NOT_NEEDED == WS_UI_SECLV_MAP[scr_id]) {
        return true;
    }
    if ("Y" != fn_getValue("isLogin")) { // 로그인 체크        
        fn_setValue("isLoginDirect", "N"); // SET 직접 로그인 여부
//        lig_msg.fn_alert('g', 'bypass', ["해당 페이지는 로그인이 필요한 페이지입니다\n로그인을 위해 로그인 페이지로 이동합니다"]);
        // 화면 호출
        link_to_ws("CDW_MD_EI_0001M", null, g_is_debug); // 전자금융거래 로그인 이동
        return false;
    } else {
        // UI 세션 체크
        if (is_empty_ws(fn_get_session_info("S_CUST_NO"))) { // VALIDATION
            lig_msg.fn_alert('g', 'notSession');
            // 화면 호출
            link_to_ws("CDW_MD_EI_0001M", null, g_is_debug); // 전자금융거래 로그인 이동            
            return false;
        }
        return true;
    }
}

/**
 * BizUtil - 보안등급에 따른 로그아웃 페이지 리다이렉트 처리한다
 * 
 * @returns
 */
function redrct_logout_ws() {
    // 로그아웃 컨펌창 체크 - 요건 변경으로 삭제
//    if(lig_msg.fn_confirm("g","logout") == false) {
//        return WS_LOGIN_FAILED;
//    }
    var scr_id = fn_getValue("g_ui_id");
    // 화면 ID NULL 체크
    if (is_empty_ws(scr_id)) {
        lig_msg.fn_alert('g', 'bypass', [ "현재의 화면 ID가 정의되지 않았습니다" ]);
        return WS_LOGIN_FAILED;
    }
    // 화면 ID VALIDATION 체크
    var arr_scr_id_path = scr_id.toUpperCase().split("_");
    if (arr_scr_id_path.length <= 2) {
        lig_msg.fn_alert('g', 'bypass', [ "[" + scr_id + "] ID가 화면 ID 형식에 맞지 않습니다" ]);
        return WS_LOGIN_FAILED;
    }
    // 로그인 필요여부 체크
    if (is_empty_ws(WS_UI_SECLV_MAP[scr_id])) {
        lig_msg.fn_alert('g', 'bypass', [ "[" + scr_id + "] ID가 /js/ws_ui_constant.js의 웹사이트 보안등급 JSON MAP 누락되었습니다\n/js/ws_ui_constant.js를 갱신해 주세요" ]);
        return WS_LOGIN_FAILED;
    }
    // web_logout.jsp로의 post 데이터 생성
    var form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "/websquare/web_logout.jsp");
    var input = document.createElement("input");
    input.setAttribute("name", "link_to");
    form.appendChild(input);
    document.body.appendChild(form);
    // 화면 ID 로그인 필수여부 체크
    if (WS_LOGIN_NOT_NEEDED == WS_UI_SECLV_MAP[scr_id]) {
        input.setAttribute("value", "CURRENT_PAGE"); //// 현재 페이지
        form.submit();
        return WS_LOGIN_NOT_NEEDED;
    }
    switch (arr_scr_id_path[1]) {
        case "MD": // 전자금융거래관리
            input.setAttribute("value", get_ui_path_ws("CDW_MA_IN_0001M")); // 메인 이동
            break;
        case "PD": // 보험상품
        case "CT": // 계약관리
        case "CL": // 보상서비스
        case "AS": // 부가서비스
        case "CU": // 고객센터
            input.setAttribute("value", get_ui_path_ws("CDW_" + arr_scr_id_path[1] + "_SB_0001M")); // 각 분류별 서브메인 이동            
            break;
        case "WS": // 보험상품 (WS는 PD 서브메인으로 연결)
            input.setAttribute("value", get_ui_path_ws("CDW_PD_SB_0001M")); // 보험상품 서브메인 이동
            break;
        default:
            input.setAttribute("value", "CURRENT_PAGE"); //// 현재 페이지
            return WS_LOGIN_NOT_NEEDED;
            break;
    }
    form.submit();
    return WS_LOGIN_NEEDED;
}

/**
 * BizUtil - 유입경로 URL을 반환한다
 * 
 * @returns
 */
/**
 * @returns
 */
function get_refer_url_ws() {
    return substr_byte_ws(document.referrer, 0, 150);
}

/**
 * SecretUtil - 헬지 탈출 일자가 가까워지면 이모티콘이 변화한다
 * 
 * @returns
 */
function get_emoticon_ws(left_days) {
    var days = parse_num_ws(left_days);
    if (days >= (7 * 4))
        return "OTL";
    else if (days < (7 * 4) && days >= (7 * 3))
        return "T_T";
    else if (days < (7 * 3) && days >= (7 * 2))
        return "-_-";
    else if (days < (7 * 2) && days >= (7 * 1))
        return "^.^";
    else
        return "^O^";
}

/*----------------------------------------------------------------------------------------------------------------------------------
 * END OF BizUtil
 *----------------------------------------------------------------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------------------------------------------------------------
 * BEGIN OF WebSquareUtil
 *----------------------------------------------------------------------------------------------------------------------------------*/

/**
 * WebSquareUtil - 공통팝업호출
 * 
 * @param param
 *            팝업호출 시 필요한 데이타
 * @param param[0] :
 *            팝업 url
 * @param param[1] :
 *            팝업 ID
 * @param param[2] :
 *            팝업 Type (고정값)
 * @param param[3] :
 *            팝업 width
 * @param param[4] :
 *            팝업 height
 * @param param[5] :
 *            팝업 top
 * @param param[6] :
 *            팝업 left
 * @param param[7] :
 *            팝업 Name
 * @param param[8] :
 *            팝업 모달여부
 * @param param[9] :
 *            팝업 전송 parameter
 * @param param[10] :
 *            팝업 팝업객체의 type이 window일때 Parent에서 넘길 xpath
 * @param param[11] :
 *            팝업 팝업객체의 type이 window일때 popup에 설정할 xpath
 * @returns {void}
 */
function wsCommonPopup_ws(param) {
    //
	
	var left_center = ( screen.width - param[3] ) / 2;
	var top_center = ( screen.height - param[4] ) / 2;
	
    WebSquare.uiplugin.popup.openPopup(param[0], {
        id : param[1],
        type : param[2],
        width : String(param[3]).px(),
        height : String(param[4]).px(),
        top : top_center + "px",
        left : left_center + "px",
        //top : String(param[5]).px(),
        //left : String(param[6]).px(),
        popupName : param[7],
        modal : param[8],
        useIFrame : true,
        resizable : false,
        status : false,
        menubar : false,
        scrollbars : false,
        title : true,
        popupUrl : "popup.jsp",
        xml : param[9]
    });
}

/**
 * WebSquareUtil - 공통팝업호출 시 document타입의 파라메타 root노드명 반환
 * 
 * @param param
 *            void
 * @returns String
 */
function getPopupParamDocRoot_ws() {
    return "<PARAM></PARAM>";
}

/**
 * WebSquareUtil - 공통팝업호출 시 document타입의 파라메타 root Path 반환
 * 
 * @param param
 *            void
 * @returns String
 */
function getPopupParamDocRootPath_ws() {
    return "PARAM";
}

/*----------------------------------------------------------------------------------------------------------------------------------
 * END OF WebSquareUtil
 *----------------------------------------------------------------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------------------------------------------------------------
 * BEGIN OF 
 *----------------------------------------------------------------------------------------------------------------------------------*/

/**
 * 전화기 코드에 맞는 국번을 combobox에 넣어준다.
 * 
 * @param phone_code :
 *            전화기 종류 코드( 01=자택, 02=직장, 03=휴대폰 )
 * @param phone_combo_box :
 *            국번을 넣어줄 combobox
 */
function set_exchange_number(phone_code, phone_combo_box) {

    // 전화번호 데이터 변수
    var phone_numbers;

    if (phone_code == "03") {
        // 휴대전화 국번
        phone_numbers = [ "010", "011", "012", "013", "015", "016", "017", "018", "019", "0130", "0303" ];
    } else {
        // 일반전화 국번
        phone_numbers = [ "02", "031", "032", "033", "041", "042", "043", "051", "052", "053", "054", "055", "061", "062", "063", "064", "070", "080", "0303",
                "03030", "0502", "0504", "0505", "0506" ];
    }

    // 기존 전화번호 콤보박스 데이터 삭제
    while (phone_combo_box.getItemCount() > 0) {
        phone_combo_box.deleteItem(0);
    }

    // 전화기 종류에 따른 전화번호 콤보박스 데이터 설정
    for ( var i = 0; i < phone_numbers.length; i++) {
        phone_combo_box.addItem(phone_numbers[i], phone_numbers[i], i);
    }

    phone_combo_box.setSelectedIndex(0);
}

/**
 * 이메일 combobox에서 선택된 이메일 뒷주소를 inputbox에 넣어준다.
 * 
 * @param email_combobox :
 *            이메일 뒷주소가 들어있는 combobox
 * @param email_inputbox :
 *            선택된 이메일 뒷주소를 넣어줄 inputbox
 */
function set_email(email_combobox, email_inputbox) {
    if (email_combobox.getSelectedIndex() > 0) {
        email_inputbox.setValue(email_combobox.getText());
        if (email_combobox.getText() == "직접입력") {
            email_inputbox.setValue("");
        }
    } else {
        email_inputbox.setValue("");
    }
}

/**
 * 선택된 월에 맞는 일자를 윤달을 계산하여 combobox에 넣어준다.
 * 
 * @param year_code :
 *            년도 코드( 4자리 number ex:2012 )
 * @param month_code :
 *            월 코드 ( 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 )
 * @param day_combobox :
 *            일자가 들어가 combobox
 */
function set_days(year_code, month_code, day_combobox) {

    var n_year = Number(year_code);
    var n_month = Number(month_code);

    while (day_combobox.getItemCount() > 0) {
        day_combobox.deleteItem(0);
    }

    for ( var i = 0; i < get_days(n_year, n_month); i++) {
        day_combobox.addItem(i + 1, i + 1, i);
    }

    if (day_combobox.getItemCount() > 0) {
        day_combobox.setSelectedIndex(0);
    }
}

/**
 * 각 월에 맞는 일을 구해준다.
 * 
 * @param year :
 *            년도 코드( 4자리 number ex:2012 )
 * @param month :
 *            월 코드 ( 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 )
 */
function get_days(year, month) {

    var day = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        day[1] = 29;
    }

    return day[month - 1];
}

/**
 * inputbox에 초기값을 넣어준다. (ex:이름을 입력해주세요.)
 * 
 * @param target_input :
 *            적용할 inputbox
 * @param default_txt :
 *            기본입력 문자열
 */
function set_input_msg(target_input, default_txt) {

    target_input.setValue(default_txt);
    $("#" + target_input.getID()).addClass("default_msg");
    $("#" + target_input.getID()).data("txt", default_txt);
    $("#" + target_input.getID()).bind("focus", input_focus_handler);
    
    function input_focus_handler() {
    	if( $(this).val() == $(this).data("txt") ) {
    		$(this).removeClass("default_msg");
    		$(this).val("");
    		$(this).unbind("focus", input_focus_handler);
    	}
	}
}


/**
 * <PRE>
 * rootdocument에childdocument삭제
 * </PRE>
 * 
 * @name : removeDocument
 * @type : function
 * @param :
 *            rootDoc(root Document), rootDocNodeNm(root node명), xpath(root node명을 제외한 하위 노드의 xpath)
 * @author : joon yong park
 * @return : document
 * @see
 * @example : removeDocument(rootDoc, rootDocNodeNm, xpath);
 */
function removeDocument(rootDoc, rootDocNodeNm, xpath) {
    var resultDoc;

    WebSquare.ModelUtil.setInstanceNode(rootDoc, "etcRoot");
    WebSquare.ModelUtil.removeInstanceNode("etcRoot/" + rootDocNodeNm + "/" + xpath);
    resultDoc = WebSquare.xml.parse(WebSquare.ModelUtil.findInstanceNode("etcRoot/" + rootDocNodeNm));
    WebSquare.ModelUtil.removeInstanceNode("etcRoot");

    return resultDoc;
}

/**
 * <PRE>
 * rootdocument에childdocument추가
 * </PRE>
 * 
 * @name : appendDocument
 * @type : function
 * @param :
 *            rootDoc(root Document), rootDocNodeNm(root node명), childDoc(추가할 child document)
 * @author : joon yong park
 * @return : document
 * @see
 * @example : appendDocument(rootDoc, rootDocNodeNm, childDoc);
 */
function appendDocument(rootDoc, rootDocNodeNm, childDoc) {
    var resultDoc;

    WebSquare.ModelUtil.setInstanceNode(rootDoc, "etcRoot");
    WebSquare.ModelUtil.setInstanceNode(childDoc, "etcRoot/" + rootDocNodeNm, "", "append");
    resultDoc = WebSquare.xml.parse(WebSquare.ModelUtil.findInstanceNode("etcRoot/" + rootDocNodeNm));
    WebSquare.ModelUtil.removeInstanceNode("etcRoot");

    return resultDoc;
}

/**
 * <PRE>
 * document의root명변경
 * </PRE>
 * 
 * @name : changeRoot
 * @type : function
 * @param :
 *            targetDoc(원본 Document), targetRootNodeNm(원본 Document의 root node명), chgRootNodeNm(변경할 root node명)
 * @author : joon yong park
 * @return : document
 * @see
 * @example : changeRoot(targetDoc, targetRootNodeNm, chgRootNodeNm);
 */
function changeRoot(targetDoc, targetRootNodeNm, chgRootNodeNm) {
    var resultDoc;
    // 타겟에 되는 document를 현재의 *.xml페이지내에 'etcRoot'를 루트로 하는 xpath에 위치시킨다.
    WebSquare.ModelUtil.setInstanceNode(targetDoc, "etcRoot");
    // etcRoot의 자식노드인 타겟노드(하위노드포함)를 수정 할 노드(하위노드포함)로 복사한다.
    // 즉 구조가 etcRoot하위에 동레벨의 자식노드가 2개존재(타겟노드, 변경 할 노드)하게 된다.
    WebSquare.ModelUtil.copyChildrenNodes("etcRoot/" + targetRootNodeNm, "etcRoot/" + chgRootNodeNm, "overwrite");
    // etcRoot하위에 있는 다른이름의 노드로 변경한 노드를 찾아 하위노드까지 포함하여 Document타입으로 변환하여 변수에 담는다.
    resultDoc = WebSquare.xml.parse(WebSquare.ModelUtil.findInstanceNode("etcRoot/" + chgRootNodeNm));
    // 타겟의 루트노드명을 변경하기 위해 xpath에 사용했던 etcRoot xpath를 삭제한다.
    WebSquare.ModelUtil.removeInstanceNode("etcRoot");

    return resultDoc;
}

/**
 * <PRE>
 * 기간계서비스호출후결과내용
 * </PRE>
 * 
 * @name : pfm_result
 * @type : function
 * @param :
 *            doc(Document)
 * @author : joon yong park
 * @return : JSON MAP(msg - 결과메세지, code - 결과코드, title - 결과타이틀, type - 결과타입, chk - 결과[boolean])
 * @see
 * @example : pfm_result(doc);
 */
function pfm_result(doc) {

    var RESULT = {};

    RESULT.msg   = WebSquare.xml.getValue(doc, "data/@" + WS_PFMRESPONSE.RESPONSE_BASC ); // 결과메세지
    RESULT.code  = WebSquare.xml.getValue(doc, "data/@" + WS_PFMRESPONSE.RESPONSE_CODE ); // 결과코드
    RESULT.title = WebSquare.xml.getValue(doc, "data/@" + WS_PFMRESPONSE.RESPONSE_TITLE); // 결과타이틀
    RESULT.type  = WebSquare.xml.getValue(doc, "data/@" + WS_PFMRESPONSE.RESPONSE_TYPE ); // 결과타입
    RESULT.chk   = RESULT.type == "I" ? true : false; // 결과

    return RESULT;
}

/**
 * StringUtil - 입력값이 null 또는 undefined 인 경우 "" 반환
 * 
 * @param value :
 *            string : 원본문자열
 * @return String : 문자열
 */
function nts_ws(value) {
    if (value == null || value == undefined || value.toString().replace(/ /g, "") == "") {
        return "";
    }
    return value;
}

/**
 * BizUtil - <vector/>가 있는 DTO에서 <vector/>를 제거하고 리턴한다 (루트 노드 밑에 <vector/>가 존재하는 구조여야함)
 * 
 * @param root_node_nm : 루트 노드명
 * @returns XML Document : 원본 Document
 */
function remove_dto_vec_ws(src_doc, root_node_nm) {
    var tgt_doc = WebSquare.xml.parse("<" + root_node_nm + "/>");
    var vec_size = parse_num_ws(WebSquare.xml.getValue(src_doc, root_node_nm + "/vector/@result"));
    if (vec_size == 0) {
        return null;
    }
    for ( var i = 0; i < vec_size; i++) {
        var frag_doc = WebSquare.xml.findNode(src_doc, root_node_nm + "/vector/data[@vectorkey='" + i + "']/descendant::*");
        tgt_doc = appendDocument(tgt_doc, root_node_nm, frag_doc);
    }
    return tgt_doc;
}

/**
 * <PRE>
 * 입력받은 배열내의 중복되는 값의 인덱스 반환(단, null, undefined, "" 제외)
 * </PRE>
 * 
 * @name   : get_equal_element
 * @type   : function
 * @param  : arrObj(Array - 1차배열), chkStr(중복확인 제외 값)
 * @author : joon yong park
 * @return : rChk
 * @see
 * @example : get_equal_elementIdx(arrObj, chkStr);
 */
function get_equal_elementIdx(arrObj, chkStr) {
	//
	var chkIdx = -1;
	
	chkStr = is_empty_ws(chkStr) ? "" : chkStr;
	
	if ( !is_empty_ws(arrObj) && arrObj.length > 0 ) {
		//
    	for ( var i = 0; i < arrObj.length; i++ ) {
    		//
    		var tmpValue = arrObj[i];
    		var rChk = false;
    		for ( var j = (i+1); j < arrObj.length; j++ ) {
    			// alert("tmpValue : [" + tmpValue + "]\n\n"+ "arrObj[" + j + "] : [" + arrObj[j] + "]");
    			if ( !is_empty_ws(tmpValue) && tmpValue == arrObj[j] && tmpValue != chkStr ) {
    				//
    				chkIdx = j;
    				rChk = true;
    				break;
    			}
    		}
    		
    		if ( rChk ) {
    			break;
    		}
    	}
	}
	
	return chkIdx;
}

/*----------------------------------------------------------------------------------------------------------------------------------
 * END OF 
 *----------------------------------------------------------------------------------------------------------------------------------*/