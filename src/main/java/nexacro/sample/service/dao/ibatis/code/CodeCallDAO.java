package nexacro.sample.service.dao.ibatis.code;

import java.util.List;
import java.util.Map;

import nexacro.sample.vo.code.CodeVO;

import org.springframework.stereotype.Repository;

import com.nexacro.spring.dao.ibatis.NexacroIbatisAbstractDAO;

@Repository("codeCallDAO")
public class CodeCallDAO extends NexacroIbatisAbstractDAO{

	//공통코드호출
	public List<CodeVO> selectCodeList(Map<String, Object> codeMap) {
		return (List<CodeVO>)list("code.CodeCallDAO.selectCodeList", codeMap);
	}
	
	//전체 사유코드 리스트 검색
	public List<CodeVO> getReasonList(Map<String, Object> codeMap) {
		return (List<CodeVO>)list("code.CodeCallDAO.selectCodeList", codeMap);
	}
}
