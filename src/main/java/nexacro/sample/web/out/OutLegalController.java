package nexacro.sample.web.out;

import java.util.List;

import javax.annotation.Resource;

import nexacro.sample.service.out.OutLegalService;
import nexacro.sample.vo.out.OutLegalVo;

import org.springframework.stereotype.Controller;
import org.springframework.validation.Validator;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.spring.annotation.ParamDataSet;
import com.nexacro.spring.data.NexacroResult;

@Controller
public class OutLegalController {

	@Resource(name="outLegalService")
	private OutLegalService outLegalService;
	
	@Resource
	private Validator validator;
	
	@InitBinder
	public void initBinder(WebDataBinder dataBinder){
		dataBinder.setValidator(this.validator);
	}
	
	//법률자문 조회
	@RequestMapping(value="/out/outLegalAdUpList.do")
	public NexacroResult outLegalAdList(
				@ParamDataSet(name="ds_search")OutLegalVo searchVo){
		System.out.println("ㅎ나소214r2 : ");
		System.out.println("ㅎ나소212 : "+searchVo.toString());
		List<OutLegalVo> outLegalAdList = 
				outLegalService.getOutLegalAdList(searchVo);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output", outLegalAdList);
		
		return result;
	}
	
	//법률자문 조회(모달창)
	@RequestMapping(value="/out/outLegalAdListModal.do")
	public NexacroResult outLegalListModal(
				@ParamDataSet(name="ds_search")OutLegalVo searchVo){
		
		List<OutLegalVo> outLegalAdList=
				outLegalService.getOutLegalAdList(searchVo);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output", outLegalAdList);
		
		return result;
	}
	
	//외부법률회신 - 법률자문 Info 조회
	@RequestMapping(value="/out/getOutLegalAdvInfo.do")
	public NexacroResult getOutLegalAdvInfo(
				@ParamDataSet(name="ds_search")OutLegalVo searchVo){
		
		List<OutLegalVo> outLegalAdList=
				outLegalService.getOutLegalAdList(searchVo);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output", outLegalAdList);
		
		return result;
	}
	
	//외부법률회신 - 자문비 Info 조회
	@RequestMapping(value="/out/getOutLegalAdvCostInfo.do")
	public NexacroResult getOutLegalAdvCostInfo(
				@ParamDataSet(name="ds_search")OutLegalVo searchVo){
		
		List<OutLegalVo> outLegalAdCostList = 
				outLegalService.getOutLegalAdCostList(searchVo);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output", outLegalAdCostList);
		
		return result;
	}
	
	//외부법률자문비 insert/update/delete
	@RequestMapping(value="/out/OutLegalCostListCud.do")
	public NexacroResult OutLegalCostListCud(
				@ParamDataSet(name="ds_cost")List<OutLegalVo> costVo,
				@ParamDataSet(name="ds_outLegalAdv")List<OutLegalVo> legalAdVo){
		
		outLegalService.OutlegalAdvCostCud(costVo, legalAdVo);
		NexacroResult result = new NexacroResult();
		
		return result;
	}
	
	//외부법률자문비 insert/update/delete
		@RequestMapping(value="/out/OutLegalCostDel.do")
		public NexacroResult OutLegalCostDel(
					@ParamDataSet(name="ds_cost")List<OutLegalVo> costVo){
			
			outLegalService.OutLegalCostDel(costVo);
			NexacroResult result = new NexacroResult();
			
			return result;
		}	
	
}//end class
