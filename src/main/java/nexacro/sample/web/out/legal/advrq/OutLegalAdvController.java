package nexacro.sample.web.out.legal.advrq;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import nexacro.sample.service.out.legal.advrq.OutLegalAdvService;
import nexacro.sample.web.rais.RaisController;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Validator;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.nexacro.spring.annotation.ParamVariable;
import com.nexacro.spring.data.NexacroResult;

@Controller
public class OutLegalAdvController {
	
	private static final Logger log = LoggerFactory
			.getLogger(RaisController.class);
	
	@Resource(name="outLegalAdvService")
	private OutLegalAdvService outLegalAdvService; 
	
	@Resource
	private Validator validator;

	@InitBinder
	public void initBinder(WebDataBinder dataBinder) {
		dataBinder.setValidator(this.validator);
	}
	
	@RequestMapping(value="selectOutLegalAdvList.do")
	public NexacroResult selectOutLegalAdvList(
		@ParamVariable(name = "id") String legaladvOutReqLyrid,
		@ParamVariable(name = "rqno") String legaladvLawAdvReqNo,
		@ParamVariable(name = "date1") String date1,
		@ParamVariable(name = "date2") String date2,
		@ParamVariable(name = "rqgb") String legaladvLawAdvCode,
		@ParamVariable(name = "rpwtr") String legaladvRepWtr){
		
		Map<String, Object> selectMap = new HashMap<String, Object>();
		
		selectMap.put("legaladvOutReqLyrid", legaladvOutReqLyrid);  
		selectMap.put("legaladvLawAdvReqNo", legaladvLawAdvReqNo);  
		selectMap.put("date1", date1);  
		selectMap.put("date2", date2);  
		selectMap.put("legaladvLawAdvCode", legaladvLawAdvCode);  
		selectMap.put("legaladvRepWtr", legaladvRepWtr);  
		
		List<Map> list = outLegalAdvService.selectOutLegalAdvList(selectMap);
	
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output", list);
		
		return result;
	}
}
