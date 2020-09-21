package nexacro.sample.web.legalofficials;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import nexacro.sample.service.legalofficials.LagelOfficialsService;
import nexacro.sample.vo.lawsuit.Lawsuit_ListVO;
import nexacro.sample.vo.legalofficials.LegalOfficialsVO;

import org.springframework.stereotype.Controller;
import org.springframework.validation.Validator;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.spring.NexacroException;
import com.nexacro.spring.annotation.ParamDataSet;
import com.nexacro.spring.annotation.ParamVariable;
import com.nexacro.spring.data.NexacroResult;


@Controller
public class LegalOfficialsControlloer {
	
	@Resource(name = "lagelOfficialsService")
	private LagelOfficialsService lagelOfficialsService;
	
	@Resource
	private Validator validator;
	
	@RequestMapping(value = "/legalofficials/legalOfficialsMgr.do")
	public NexacroResult legalOfficialsMgr(
			@ParamDataSet(name = "ds_input") List<LegalOfficialsVO> LegalOfficialsVO) throws NexacroException   {
		int result_int = lagelOfficialsService.legalOfficialsMgr(LegalOfficialsVO);
		NexacroResult result = new NexacroResult();
		return result;
	}
	
	
}
