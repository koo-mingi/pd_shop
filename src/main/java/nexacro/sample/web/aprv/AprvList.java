package nexacro.sample.web.aprv;

import java.util.List;

import javax.annotation.Resource;

import nexacro.sample.service.aprv.AprvListEmplService;
import nexacro.sample.service.aprv.AprvListService;
import nexacro.sample.vo.aprv.AprvListEmplVO;
import nexacro.sample.vo.aprv.AprvListVO;

import org.apache.logging.log4j.core.config.plugins.validation.constraints.Required;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.spring.annotation.ParamDataSet;
import com.nexacro.spring.data.NexacroResult;


@Controller
public class AprvList {
	
	
	@Resource(name="aprvListService")
	AprvListService aprvListService;
	
	@RequestMapping("/aprvList/getAprvInfo.do")
	public NexacroResult getAprvInfo(
			@ParamDataSet(name="ds_search", required=false)AprvListVO vo){
		
		NexacroResult result = new NexacroResult();
		
		List<AprvListVO> list = aprvListService.getAprvInfo(vo);
		
		if(list.size() != 0){
			result.addDataSet("ds_aprvList", list);
		}
		
		return result;
	}

	@RequestMapping("/aprvList/getAprvInfoCnt.do")
	public NexacroResult getAprvInfoCnt(){
		
		NexacroResult result = new NexacroResult();
		
		List<AprvListVO> list = aprvListService.getAprvInfoCnt();
		

		if(list.size() != 0){
			result.addDataSet("ds_aprvInfoCnt", list);
		}
		
		return result;
	}
}
