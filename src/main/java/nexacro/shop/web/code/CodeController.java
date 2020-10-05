package nexacro.shop.web.code;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import nexacro.shop.service.administrator.AdmService;
import nexacro.shop.service.code.CodeService;
import nexacro.shop.vo.administrator.AdmVO;
import nexacro.shop.vo.code.CodeVO;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.spring.annotation.ParamDataSet;
import com.nexacro.spring.annotation.ParamVariable;
import com.nexacro.spring.data.NexacroResult;

@Controller
public class CodeController {
	
	private static final Logger log = LoggerFactory
			.getLogger(CodeController.class);
	
	@Autowired
	private CodeService codeService;
	
	
	// 상품 분류 코드 검색
	@RequestMapping(value = "/code/selectShopCodeList.do")
	public NexacroResult getReasonList(
		@ParamVariable(name = "AllYn") String allYn,
		@ParamVariable(name = "CLASS_CODE") String class_Code,
		@ParamVariable(name = "CODE_NO") String code_no) {

	
		Map<String, String> codeMap = new HashMap<String, String>();
		codeMap.put("class_code", class_Code);
		codeMap.put("code_no", code_no);
		codeMap.put("allYn", allYn);
		List<CodeVO> codeList = null;
		
		if(code_no.equals("") || code_no ==null){
			codeList = codeService.getCodeMain(codeMap);
		}else if(class_Code.equals("P01")){
			codeList = codeService.getCodeMiddle(codeMap);
		}else if(class_Code.equals("P02")){
			codeList = codeService.getCodeSub(codeMap);
		}
		
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output", codeList);
		
		return result;
	}
	
}
