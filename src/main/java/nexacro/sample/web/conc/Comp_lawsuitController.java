package nexacro.sample.web.conc;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import nexacro.sample.service.conc.Comp_lawsuitService;
import nexacro.sample.vo.comp.LawsuitCompVO;
import nexacro.sample.vo.conc.Comp_lawsuitVO;
import nexacro.sample.vo.conc.Judg_reportVO;
import nexacro.sample.vo.prgr.Ales_sueVO;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.spring.annotation.ParamDataSet;
import com.nexacro.spring.annotation.ParamVariable;
import com.nexacro.spring.data.NexacroResult;

@Controller
public class Comp_lawsuitController {

	
	@Resource(name = "comp_lawsuitService")
	Comp_lawsuitService comp_lawsuitService;

	
	@RequestMapping(value = "/comp_lawsuit/getlawsuitInfo.do")
	public NexacroResult getlawsuitInfo(
			@ParamDataSet(name="ds_search")Comp_lawsuitVO vo){
		
		System.out.println("여기니컨");
		NexacroResult result = new NexacroResult();
		
		List<Comp_lawsuitVO> list = comp_lawsuitService.getlawsuitInfo(vo);
		
		if(list.size()!=0){
			result.addDataSet("ds_lawsuit", list);
		}
		
		return result;
	}
	
	@RequestMapping(value = "/comp_lawsuit/getPladefInfo.do")
	public NexacroResult getPladefInfo(
			@ParamDataSet(name="ds_search")Comp_lawsuitVO vo)
	{
		
		NexacroResult result = new NexacroResult();
		
		List<Comp_lawsuitVO> list = comp_lawsuitService.getPladefInfo(vo);
		
		if(list.size()!=0){
			result.addDataSet("ds_pladef", list);
		}
		
		return result;
	}
	
	
	@RequestMapping(value = "/comp_lawsuit/dataSave.do")
	public NexacroResult dataSave(
			@ParamDataSet(name = "ds_lawsuit", required = false)List<Comp_lawsuitVO> lawsuit
			,@ParamDataSet(name = "ds_pladef", required = false)List<Comp_lawsuitVO> pladef){
		
		
		System.out.println("@@@@@@"+lawsuit.size());
		System.out.println("@@@@@@"+pladef.size());
		
		boolean resultBool=false;
		NexacroResult result = new NexacroResult();
		
		if(lawsuit.size()!=0)
		{
			resultBool=comp_lawsuitService.lawsuitUpdate(lawsuit);
		}
		
		if(pladef.size()!=0){
			resultBool=comp_lawsuitService.pladefUpdate(pladef);
		}
		
		result.addDataSet("ds_result", resultBool);
		
		return result;
	}
	

	// *  소송대장번호 & 원피고구분코드 피고사항목록 조회 (원피고일련번호당)
	@RequestMapping(value = "/comp_lawsuit/getPladeCountList.do")
	public NexacroResult getPladeCountList(
			@ParamDataSet(name="ds_search")Comp_lawsuitVO vo) throws Exception{
		List PladeCountList = comp_lawsuitService.getPladeCountList(vo);
		System.out.println("야  :"+vo.getLawsuitAdmNo());
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output0", PladeCountList);
		return result;
	}
	
	//입력, 수정, 삭제(insert, update, delete) --원피고 종결사항 업데이트
	@RequestMapping(value = "/comp_lawsuit/createPladefUp.do")
	public NexacroResult createPladefUp(
			@ParamDataSet(name="ds_input")List<Comp_lawsuitVO> pladef) throws Exception{

String saveKey = comp_lawsuitService.createPladef(pladef);
		
		NexacroResult result = new NexacroResult();
		result.addVariable("saveKey", saveKey);
		return result;
	}
	
	//입력, 수정, 삭제(insert, update, delete) --소송 종결사항 업데이트
	@RequestMapping(value = "/comp_lawsuit/createConcUp.do")
	public NexacroResult createConcUp(
			@ParamDataSet(name="ds_input")List<Comp_lawsuitVO> lawsuit) throws Exception{
		String saveKey = comp_lawsuitService.createConc(lawsuit);
		
		NexacroResult result = new NexacroResult();
		result.addVariable("saveKey", saveKey);
		return result;
	}
	
	//소송대장번호 & 원피고구분코드 피고사항목록 조회 (원피고일련번호당)
	@RequestMapping(value = "/comp_lawsuit/getPseqJudglist.do")
	public NexacroResult getPseqJudglist(
			@ParamDataSet(name="ds_search")Comp_lawsuitVO vo) throws Exception{
		
		List PseqJudglist = comp_lawsuitService.getPseqJudglist(vo);
		NexacroResult result = new NexacroResult();
		result.addVariable("saveKey", PseqJudglist);
		return result;
	}
	
	// 소송관리번호 별 전체 심급차수 조회
		@RequestMapping(value = "/comp_lawsuit/instanceall.do")
		public NexacroResult instanceListAll(
				@ParamVariable(name = "lawsuitAdmNo", required = false) String lawsuitAdmNo) throws Exception{
			System.out.println("/comp_lawsuit/instanceall.do"+lawsuitAdmNo);
			Map<String, Object> selectMap = new HashMap<String, Object>();
			selectMap.put("lawsuitAdmNo", lawsuitAdmNo); // Key, Value
			
			List  instanceListAll = comp_lawsuitService.getinstanceListAll(selectMap);
			NexacroResult result = new NexacroResult();
			result.addDataSet("ds_output", instanceListAll);
			return result;
		}
}
