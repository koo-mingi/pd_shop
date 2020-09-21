package nexacro.sample.web.aprv;

import java.util.List;

import javax.annotation.Resource;

import nexacro.sample.service.aprv.AprvListEmplService;
import nexacro.sample.vo.approval.ApprovalTotalVO;
import nexacro.sample.vo.aprv.AprvListEmplVO;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.spring.annotation.ParamDataSet;
import com.nexacro.spring.data.NexacroResult;


@Controller
public class AprvListEmpl {
	
	@Resource(name = "aprvListEmplService")
	AprvListEmplService aprvListEmplService;
	
	
	@RequestMapping("/aprvListEmpl/getAprvInfo.do")
	public NexacroResult getAprvInfo(
			@ParamDataSet(name="ds_search", required=false) ApprovalTotalVO vo){
		System.out.println("디ㅗ야지");
		NexacroResult result = new NexacroResult();
		System.out.println("con : "+vo.getAprvInfoSabun());
		List<ApprovalTotalVO> list = aprvListEmplService.getAprvInfo(vo);
		
		
			result.addDataSet("ds_aprv", list);
		
		
		return result;
	}
	
	@RequestMapping("/aprvListEmpl/getPayerInfo.do")
	public NexacroResult getPayerInfo(
			@ParamDataSet(name = "ds_search") AprvListEmplVO vo){
		NexacroResult result = new NexacroResult();
		
		List<AprvListEmplVO> list = aprvListEmplService.getPayerInfo(vo);
		
		if(list.size() != 0){
			result.addDataSet("ds_aprvInfo", list);
			System.out.println("@@@@@"+result.getDataSets());
		}
		
		
		return result;
	}
}
