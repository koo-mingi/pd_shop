package nexacro.sample.web.comp;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import nexacro.sample.service.comp.CompService;
import nexacro.sample.vo.comp.LawsuitCompVO;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.spring.annotation.ParamDataSet;
import com.nexacro.spring.annotation.ParamVariable;
import com.nexacro.spring.data.NexacroResult;

@Controller
public class CompController {
	@Resource(name = "compService")
	private CompService compService;	
	
	//소송번호로 소송완료 DS 얻기
	@RequestMapping(value = "/comp/getDsComp.do")
	public NexacroResult getDsComp(
			@ParamVariable(name = "lawsuitAdmNo") String lawsuitAdmNo,
			@ParamVariable(name = "instAdmCode") String instAdmCode) {
		System.out.println("=====================>>>>>>>>>>>>>> lawsuitAdmNo = " + lawsuitAdmNo);
		Map<String, Object> objMap = new HashMap<String, Object>();
		objMap.put("lawsuitAdmNo", lawsuitAdmNo);
		objMap.put("lawsuitAdmNo", instAdmCode);
		List<LawsuitCompVO> dsCompList = compService.selectDsComp(objMap);
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output", dsCompList);
		return result;
	}
	
}
