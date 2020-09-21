package nexacro.sample.web.prgr;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import nexacro.sample.service.prgr.Ales_sueService;
import nexacro.sample.vo.prgr.Ales_sueVO;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.nexacro.spring.annotation.ParamDataSet;
import com.nexacro.spring.annotation.ParamVariable;
import com.nexacro.spring.data.NexacroResult;

@Controller
public class Ales_sueController {
	
	@Resource(name="ales_sueService")
	private Ales_sueService ales_sueService;
	
	@RequestMapping(value="ales_sue/law_suitSelect.do")
	public NexacroResult law_suitSelect(
			@ParamVariable(name = "lawsuitAdmNo") String lawsuitAdmNo){
		
		Map<String, Object> selectMap = new HashMap<String, Object>();
		selectMap.put("lawsuitAdmNo", lawsuitAdmNo);
		
		List<Ales_sueVO> law_suitList = ales_sueService.law_suitSelect(selectMap);
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output", law_suitList);
		
		return result;
	}
	
	@RequestMapping(value="ales_sue/pla_defSelect.do")
	public NexacroResult pla_defSelect(
			@ParamVariable(name = "lawsuitAdmNo") String lawsuitAdmNo){
		
		Map<String, Object> selectMap = new HashMap<String, Object>();
		selectMap.put("lawsuitAdmNo", lawsuitAdmNo);
		
		List<Ales_sueVO> pla_defList = ales_sueService.pla_defSelect(selectMap);
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output", pla_defList);
		
		return result;
	}
	
	@RequestMapping(value="ales_sue/ales_sueSelect.do")
	public NexacroResult ales_sueSelect(
			@ParamVariable(name = "lawsuitAdmNo") String lawsuitAdmNo){
		
		Map<String, Object> selectMap = new HashMap<String, Object>();
		selectMap.put("lawsuitAdmNo", lawsuitAdmNo);
		
		List<Ales_sueVO> ales_sueList = ales_sueService.ales_sueSelect(selectMap);
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output", ales_sueList);
		
		return result;
	}
	
	@RequestMapping(value="ales_sue/ales_sueSave.do")
	public NexacroResult ales_sueSave(
			@ParamDataSet(name = "ds_alessue") List<Ales_sueVO> Ales_sueVO){

		String strConfirm = ales_sueService.ales_sueSave(Ales_sueVO);
		
		NexacroResult result = new NexacroResult();		
		result.addVariable("strConfirm", strConfirm);
		
		return result;
	}
	
	@RequestMapping(value = "/progress/updateAlesSue.do")
	public NexacroResult updateAlesSue(
			Object alesSueVO, 
			HttpServletRequest request ) {
		
		NexacroResult result = new NexacroResult();
		
		try {			
			ales_sueService.updateAlesSue(alesSueVO);
            

		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}
	
	
	
}
