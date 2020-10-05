package nexacro.shop.service.impl.code;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import nexacro.shop.service.code.CodeService;
import nexacro.shop.service.dao.mybatis.CodeMapper;
import nexacro.shop.vo.code.CodeVO;

@Service
public class CodeServiceImpl implements CodeService {

	@Autowired
	private CodeMapper codeMapper;
	
	@Override
	public List<CodeVO> getCodeMain(Map<String, String> codeMap) {
		
		return codeMapper.getCodeMain(codeMap);
	}

	@Override
	public List<CodeVO> getCodeMiddle(Map<String, String> codeMap) {
		return codeMapper.getCodeMiddle(codeMap);
	}

	@Override
	public List<CodeVO> getCodeSub(Map<String, String> codeMap) {
		return codeMapper.getCodeSub(codeMap);
	}

}
