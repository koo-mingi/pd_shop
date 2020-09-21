package nexacro.sample.web.code;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import nexacro.sample.service.code.CodeCallService;
import nexacro.sample.vo.code.CodeVO;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.spring.annotation.ParamVariable;
import com.nexacro.spring.data.NexacroResult;


@Controller
public class CodeController {
	
	
	private static final Logger log = LoggerFactory
			.getLogger(CodeController.class);
	
	@Resource(name = "codeCallService")
	private CodeCallService codeService;
	
	// 전체 코드 검색
	@RequestMapping(value = "/code/selectCodeList.do")
	public NexacroResult selectCodeList(
			@ParamVariable(name = "AllYn") String allYn,
			@ParamVariable(name = "AllCode") String allCode,
			@ParamVariable(name = "AllName") String allName,
			@ParamVariable(name = "CLASS_CODE") String classCode) {

		
		Map<String, Object> codeMap = new HashMap<String, Object>();
		codeMap.put("allYn", allYn);
		codeMap.put("allCode", allCode);
		codeMap.put("allName", allName);
		codeMap.put("classCode", classCode);
		
		List<CodeVO> codeList = codeService.selectCodeList(codeMap);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output", codeList);
		
		return result;
		
	}
	
	// 전체 사유코드 리스트 검색
	@RequestMapping(value = "/code/getReasonList.do")
	public NexacroResult getReasonList(
		@ParamVariable(name = "AllYn") String allYn,
		@ParamVariable(name = "CLASS_CODE") String classCode) {

	
		Map<String, Object> codeMap = new HashMap<String, Object>();
		codeMap.put("allYn", allYn);
		codeMap.put("classCode", classCode);
		
		List<CodeVO> codeList = codeService.getReasonList(codeMap);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output", codeList);
		
		return result;
	}
	
}
