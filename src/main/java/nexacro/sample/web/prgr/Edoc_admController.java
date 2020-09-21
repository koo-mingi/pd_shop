package nexacro.sample.web.prgr;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import nexacro.sample.service.prgr.Edoc_admService;
import nexacro.sample.vo.prgr.Edoc_admVO;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.spring.annotation.ParamDataSet;
import com.nexacro.spring.annotation.ParamVariable;
import com.nexacro.spring.data.NexacroResult;

@Controller
public class Edoc_admController {
	
	@Resource(name="edoc_admService")
	private Edoc_admService edoc_admService;
	
	@RequestMapping(value="edoc_adm/edoc_lawsuitSelect.do")
	public NexacroResult edoc_lawsuitSelect(
			@ParamVariable(name = "lawsuitAdmNo") String lawsuitAdmNo){
		
		Map<String, Object> selectMap = new HashMap<String, Object>();
		selectMap.put("lawsuitAdmNo", lawsuitAdmNo);
		
		List<Edoc_admVO> law_suitList = edoc_admService.edoc_lawsuitSelect(selectMap);
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output", law_suitList);
		
		return result;
	}
	
	@RequestMapping(value="edoc_adm/edoc_pladefSelect.do")
	public NexacroResult pla_defSelect(
			@ParamVariable(name = "lawsuitAdmNo") String lawsuitAdmNo){
		
		Map<String, Object> selectMap = new HashMap<String, Object>();
		selectMap.put("lawsuitAdmNo", lawsuitAdmNo);
		
		List<Edoc_admVO> pla_defList = edoc_admService.edoc_pladefSelect(selectMap);
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output", pla_defList);
		
		return result;
	}
	
	@RequestMapping(value="edoc_adm/edoc_admSelect1.do")
	public NexacroResult edoc_admSelect1(
			@ParamVariable(name = "lawsuitAdmNo") String lawsuitAdmNo){
		
		Map<String, Object> selectMap = new HashMap<String, Object>();
		selectMap.put("lawsuitAdmNo", lawsuitAdmNo);
		
		List<Edoc_admVO> edoc_admList = edoc_admService.edoc_admSelect1(selectMap);
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output", edoc_admList);
		
		return result;
	}
	
	@RequestMapping(value="edoc_adm/edoc_admSelect2.do")
	public NexacroResult edoc_admSelect2(
			@ParamVariable(name = "lawsuitAdmNo") String lawsuitAdmNo){
		
		Map<String, Object> selectMap = new HashMap<String, Object>();
		selectMap.put("lawsuitAdmNo", lawsuitAdmNo);
		
		List<Edoc_admVO> edoc_admList = edoc_admService.edoc_admSelect2(selectMap);
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output", edoc_admList);
		
		return result;
	}
	
	@RequestMapping(value="edoc_adm/edoc_admSave.do")
	public NexacroResult edoc_admSave(
			@ParamDataSet(name = "ds_input") List<Edoc_admVO> Edoc_admVO){
		
		String strConfirm = edoc_admService.edoc_admSave(Edoc_admVO);
		
		NexacroResult result = new NexacroResult();		
		result.addVariable("strConfirm", strConfirm);
		
		return result;
	}
	
	@RequestMapping(value = "/progress/getEdocAdmList.do")
	public NexacroResult getEdocAdmList(@ParamVariable(name = "lawsuitAdmNo") String lawsuitAdmNo) {

		NexacroResult result = new NexacroResult();

		try {

			System.out.println("lawsuitAdmNo : "+lawsuitAdmNo);

			List<Edoc_admVO> edocAdmList = edoc_admService.getEdocAdmList(lawsuitAdmNo);


			if(edocAdmList.size()>0){
				result.addDataSet("ds_output", edocAdmList);
				result.addDataSet("ds_output1", edocAdmList);
			}

		} catch (Exception e) {
			e.printStackTrace();
		}

		return result;
	}
	
	
	@RequestMapping(value="edoc_adm/edoc_admDelete.do")
	public NexacroResult edoc_admDelete(
			@ParamVariable(name = "lawsuitAdmNo", required = false) String lawsuitAdmNo ,
			@ParamVariable(name = "edocSeq", required = false) String edocSeq
			){
		Map<String, Object> deleteMap = new HashMap<String, Object>();
		deleteMap.put("lawsuitAdmNo", lawsuitAdmNo);
		deleteMap.put("edocSeq", edocSeq);
		
		String strConfirm = edoc_admService.edoc_admDelete(deleteMap);
		
		NexacroResult result = new NexacroResult();		
		result.addVariable("strConfirm", strConfirm);
		
		return result;
	}
	
}
