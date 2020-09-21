package nexacro.sample.web.prgr;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import nexacro.sample.service.prgr.Pre_iwrService;
import nexacro.sample.vo.prgr.Pre_iwrVO;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.nexacro.spring.annotation.ParamDataSet;
import com.nexacro.spring.annotation.ParamVariable;
import com.nexacro.spring.data.NexacroResult;

@Controller
public class Pre_iwrController {
	
	@Resource(name="pre_iwrService")
	private Pre_iwrService pre_iwrService;
	
	//TAB_INST_ADM INFO
	@RequestMapping(value="/pre_iwr/getInstAdm.do")
	public NexacroResult getInstAdm(
			@ParamDataSet(name="ds_search") Pre_iwrVO vo) {
		
		NexacroResult result = new NexacroResult();
		List<Pre_iwrVO> list = pre_iwrService.getInstAdm(vo);
		if(list.size() != 0){
			result.addDataSet("ds_instAdm", list);
		}
		return result;
	}
	
	//TAB_PRE_IWR INFO
	@RequestMapping(value = "/pre_iwr/getPreIwr.do")
	public NexacroResult getPreIwr(
			@ParamDataSet(name="ds_search") Pre_iwrVO vo){
		
		NexacroResult result = new NexacroResult();
		List<Pre_iwrVO> list = pre_iwrService.getPreIwr(vo);
		if(list.size() != 0){
			result.addDataSet("ds_preIwr", list);
		}
		return result;
	}
	
	//판사의 ID 및 이름 정보
	@RequestMapping(value = "/pre_iwr/getJudgName.do")
	public NexacroResult getJudgName(){
		
		NexacroResult result = new NexacroResult();
		
		List<Pre_iwrVO> list = pre_iwrService.getJudgName();
		
		if(list.size() != 0){
			result.addDataSet("ds_judgCode" , list);
		}
		
		return result;
	}

	
	//변호사의 ID 및 이름 정보
	@RequestMapping(value = "/pre_iwr/getLawyerName.do")
	public NexacroResult getLawyerName(){
		
		NexacroResult result = new NexacroResult();
		
		List<Pre_iwrVO> list = pre_iwrService.getLawyerName();
		
		if(list.size() != 0){
			result.addDataSet("ds_lawyerCode" , list);
		}
		
		return result;
	}
	
	
	@RequestMapping(value = "/pre_iwr/pre_iwrSave.do")
	public NexacroResult pre_iwrSave
				(@ParamDataSet(name="ds_preIwr") List<Pre_iwrVO> list
				 ,@ParamVariable(name="lawsuitAdmNo")String lawsuitAdmNo
				 ,@ParamVariable(name="instAdmCode")String instAdmCode){
		
		List<Pre_iwrVO> saveList = new ArrayList<Pre_iwrVO>();
		
		for (Pre_iwrVO pre_iwrVO : list) {
			pre_iwrVO.setLawsuitAdmNo(lawsuitAdmNo);
			pre_iwrVO.setInstAdmCode(instAdmCode);
			saveList.add(pre_iwrVO);
		}
		
		NexacroResult result = new NexacroResult();
		
		String saveResult = pre_iwrService.pre_iwrSave(saveList);
		
		result.addVariable("saveResult", saveResult);
		
		return result;
	}
	
	
	/*//준비서면조회
	@RequestMapping(value="pre_iwr/get_pre_iwr.do")
	public NexacroResult get_pre_iwr(
			@ParamVariable(name = "lawsuitAdmNo") String lawsuitAdmNo,
			@ParamVariable(name = "instAdmCode") String instAdmCode) {
		
		Map<String, Object> get_pre_iwrMap = new HashMap<String, Object>();
		
		get_pre_iwrMap.put("lawsuitAdmNo", lawsuitAdmNo);
		get_pre_iwrMap.put("instAdmCode", instAdmCode);
		
		List<Pre_iwrVO> get_pre_iwr = pre_iwrService.get_pre_iwr(get_pre_iwrMap);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output", get_pre_iwr);
		return result;
	}*/
	
	/*//준비서면 저장/수정/삭제
			@RequestMapping(value="pre_iwr/pre_iwrSave.do")
			public NexacroResult pre_iwrsave(
					@ParamDataSet(name = "ds_input") List<Pre_iwrVO> Pre_iwrVO,
					@ParamVariable(name = "lawAdmNo" ,required=false) String lawAdmNo,
					@ParamVariable(name = "instCode" ,required=false) String instCode){
				
					Pre_iwrVO vo = Pre_iwrVO.get(0);
					vo.setLawAdmNo(lawAdmNo);
					vo.setInstCode(instCode);
					Pre_iwrVO.set(0, vo);
				
				String confirmStr = pre_iwrService.pre_iwrsave(Pre_iwrVO, lawAdmNo, instCode);
				
				NexacroResult result = new NexacroResult();
				
				
				result.addVariable("confirmStr", confirmStr);
				return result;
			}
			*/
	
}

