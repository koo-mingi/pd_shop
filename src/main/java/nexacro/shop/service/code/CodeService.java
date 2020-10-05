package nexacro.shop.service.code;

import java.util.List;
import java.util.Map;

import nexacro.shop.vo.code.CodeVO;

public interface CodeService {
	public List<CodeVO> getCodeMain(Map<String, String> codeMap);
	public List<CodeVO> getCodeMiddle(Map<String, String> codeMap);
	public List<CodeVO> getCodeSub(Map<String, String> codeMap);
}
