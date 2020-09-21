package nexacro.sample.web.depo;

import java.util.List;

import javax.annotation.Resource;

import nexacro.sample.service.depo.DepositService;
import nexacro.sample.vo.depo.DepositVO;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.spring.annotation.ParamDataSet;
import com.nexacro.spring.data.NexacroResult;

@Controller
public class DepositController {

	@Resource(name = "depositService")
	DepositService depositService;
	
	@RequestMapping("/depo/getDepositList.do")
	public NexacroResult getDepositList(
			@ParamDataSet(name="ds_search") DepositVO vo){
		
		NexacroResult result = new NexacroResult();
		
		List<DepositVO> list = depositService.getDepositList(vo);
		
		if(list.size() != 0){
			result.addDataSet("ds_depo", list);
		}
		
		return result;
	}
	
	@RequestMapping("/depo/getDepositMgrList.do")
	public NexacroResult getDepositMgrList(
			@ParamDataSet(name="ds_search") DepositVO vo){
		
		NexacroResult result = new NexacroResult();
		
		List<DepositVO> list = depositService.getDepositMgrList(vo);
		
		if(list.size() != 0){
			result.addDataSet("ds_depoMgr", list);
		}
		
		return result;
	}

	@RequestMapping("/depo/updateDeposit.do")
	public NexacroResult updateDeposit(
			@ParamDataSet(name = "ds_depo") DepositVO vo){
		
		NexacroResult result = new NexacroResult();
		
		depositService.updateDeposit(vo);
		
		return result;
		
	}
	
	@RequestMapping("/depo/updateDepositMgr.do")
	public NexacroResult updateDepositMgr(
			@ParamDataSet(name = "ds_depoMgr") DepositVO vo){
		
		System.out.println("@@@@" + vo);
		
		NexacroResult result = new NexacroResult();
		
		depositService.updateDepositMgr(vo);
				
		return result;
	}
}
