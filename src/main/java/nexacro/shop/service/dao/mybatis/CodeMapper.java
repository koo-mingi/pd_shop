package nexacro.shop.service.dao.mybatis;

import java.util.List;
import java.util.Map;

import nexacro.shop.vo.code.CodeVO;

public interface CodeMapper {
	public List<CodeVO> getCodeMain(Map<String, String> codeMap);
	public List<CodeVO> getCodeMiddle(Map<String, String> codeMap);
	public List<CodeVO> getCodeSub(Map<String, String> codeMap);

}
