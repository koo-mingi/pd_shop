package nexacro.sample.web.out.legal.lawsuitno;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import nexacro.sample.service.out.legal.lawsuitno.LawsuitNoService;
import nexacro.sample.web.rais.RaisController;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.validation.Validator;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.spring.annotation.ParamVariable;
import com.nexacro.spring.data.NexacroResult;

@Controller
public class LawsuitNoController {
	private static final Logger log = LoggerFactory
			.getLogger(RaisController.class);
	
	@Resource(name="lawsuitnoservice")
	private LawsuitNoService lawsuitnoservice;
	
	@Resource
	private Validator validator;
	
	@InitBinder
	public void initBinder(WebDataBinder dataBinder) {
		dataBinder.setValidator(this.validator);
	}
	
	@RequestMapping("outlawsuitadmnoselect.do")
	public NexacroResult out_lawsuit_adm_no_select(
			@ParamVariable(name = "gbcode") String gbcode
			,@ParamVariable(name = "keyword") String keyword
			){
		
		Map<String, Object> selectMap = new HashMap<String, Object>();
		
		selectMap.put("gbcode", gbcode);
		selectMap.put("keyword", keyword);
		System.out.println("============="+selectMap.toString());
		
		List<Map> list = lawsuitnoservice.selectLawsuitNo(selectMap);
			
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output", list);
		
		return result;
	}
	
}// class
