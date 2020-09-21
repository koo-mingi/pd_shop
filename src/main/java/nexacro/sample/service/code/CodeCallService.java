package nexacro.sample.service.code;

import java.util.List;
import java.util.Map;

import nexacro.sample.vo.code.CodeVO;

public interface CodeCallService {

	//공통코드검색
	List<CodeVO> selectCodeList(Map<String, Object> codeMap);
	
	//전체 사유코드 리스트 검색
	List<CodeVO> getReasonList(Map<String, Object> codeMap);
	
}
