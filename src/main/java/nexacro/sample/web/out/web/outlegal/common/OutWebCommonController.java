package nexacro.sample.web.out.web.outlegal.common;

import java.io.IOException;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

import nexacro.sample.service.out.web.outlegal.common.OutWebCommonService;
import nexacro.sample.vo.out.web.outlegal.common.OutWebCommonVO;
import nexacro.sample.web.out.web.json.ConvertJson;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class OutWebCommonController {

	
	@Resource(name="outWebCommonService")
	private OutWebCommonService outWebCommonService;
	
	/* 공통코드 호출 */
	@RequestMapping("selectOutCommonCode.do")
	public void selectOutCommonCode(HttpServletResponse response, OutWebCommonVO outWebCommonVO, ConvertJson convertJson) throws IOException{
		List list = outWebCommonService.selectOutCommonCode(outWebCommonVO);
	
		String jsonStr = "";
		convertJson.setList(list, outWebCommonVO);		
		jsonStr = convertJson.getJsonStr();
		response.getWriter().print(jsonStr);
		
	};// selectOutCommonCode()
	
}
