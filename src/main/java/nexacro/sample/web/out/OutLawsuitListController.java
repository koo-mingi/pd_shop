package nexacro.sample.web.out;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import nexacro.sample.service.out.OutLawsuitListService;
import nexacro.sample.vo.out.Law_fix_InfoVO;
import nexacro.sample.vo.out.OutLawNoSearchVO;
import nexacro.sample.vo.out.fixInfoInstanceVO;

import org.springframework.stereotype.Controller;
import org.springframework.validation.Validator;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.spring.annotation.ParamDataSet;
import com.nexacro.spring.annotation.ParamVariable;
import com.nexacro.spring.data.NexacroResult;


@Controller
public class OutLawsuitListController {

	@Resource(name="outlawsuitlistservice")
	 private OutLawsuitListService outlawsuitlistService;
	
	@Resource
	private Validator validator;
	
	@InitBinder
	public void initBinder(WebDataBinder dataBinder){
		dataBinder.setValidator(this.validator);
	}
	
	//소송관리번호 조회
	@RequestMapping(value="/out/selectlawsuitlist.do")
	public NexacroResult selectLawsuitList(
			@ParamVariable(name="selectedId")String selectedId,
			@ParamVariable(name="selectedId1")String selectedId1,
			@ParamVariable(name="lyrId")String lyrId){
		
		Map<String, Object> selectMap = new HashMap<String, Object>();
		selectMap.put("selectedId", selectedId);
		selectMap.put("selectedId1", selectedId1);
		selectMap.put("lyrId", lyrId);
		List<OutLawNoSearchVO> lawList = outlawsuitlistService.selectLawsuitList(selectMap);
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output", lawList);
		return result;
	}
	
	//소송 정보 조회
	@RequestMapping(value="/out/fixinfo_getLawsuitRecSelect.do")
	public NexacroResult getLawsuitRecSelect(
			@ParamDataSet(name="ds_search", required=false)Law_fix_InfoVO searchVo){
		
		List<Law_fix_InfoVO> law_fixinfoList = outlawsuitlistService.getLawsuitRecSelect(searchVo);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output", law_fixinfoList);
		
		return result;
	}
	
	//소송 정보 조회
	@RequestMapping(value="/out/getInstanceList.do")
	public NexacroResult getInstanceList(
			@ParamDataSet(name="ds_search", required=false)fixInfoInstanceVO searchVo){
		
		List<fixInfoInstanceVO> law_fixinfoList = outlawsuitlistService.getInstanceList(searchVo);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output", law_fixinfoList);
		
		return result;
	}
	
	//기일 정보 조회
	@RequestMapping(value="/out/fixinfo_getLawFixinfoSelect.do")
	public NexacroResult getLawFixinfoSelect(
				@ParamDataSet(name="ds_search", required=false) Law_fix_InfoVO searchVo){
		List<Law_fix_InfoVO> law_fixinfoList = outlawsuitlistService.getLawFixinfoSelect(searchVo);
		
		NexacroResult result = new NexacroResult();
		
		// nexacro로 넘어가는 값 없으면 dataset의 column까지 삭제된다.
		/*if(law_fixinfoList.size() != 0){
			result.addDataSet("ds_output", law_fixinfoList);
			System.out.println("기일정보 dataset(skw) : " + law_fixinfoList);
		}*/
		
		result.addDataSet("ds_output", law_fixinfoList);
		return result;
	}
	
	
	//기일 정보 insert, update, delete
	@RequestMapping(value="/out/fixinfo_getLawFixinfoCud.do")
	public NexacroResult getLawfixinfoCud(
			@ParamDataSet(name="ds_search") List<Law_fix_InfoVO> searchVo){
		
		outlawsuitlistService.getLawFixinfoCud(searchVo);
		
		NexacroResult result = new NexacroResult();
		//???
		return result;
	}
	
	//기일 정보 insert, update, delete
	@RequestMapping(value="/out/fixinfo_getLawFixinfoCud2.do")
	public NexacroResult getLawfixinfoCud2(
			@ParamDataSet(name="ds_search") List<Law_fix_InfoVO> searchVo){
		
		outlawsuitlistService.getLawFixinfoCud2(searchVo);
		
		NexacroResult result = new NexacroResult();
		//???
		return result;
	}
	
	
	
}
