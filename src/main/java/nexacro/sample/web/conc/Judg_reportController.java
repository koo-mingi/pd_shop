package nexacro.sample.web.conc;

import java.util.List;

import javax.annotation.Resource;

import nexacro.sample.service.conc.Judg_reportService;
import nexacro.sample.vo.conc.Judg_reportVO;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.spring.annotation.ParamDataSet;
import com.nexacro.spring.data.NexacroResult;

@Controller
public class Judg_reportController {

	
	@Resource(name = "judgReportService")
	Judg_reportService judgReportService;

	
	@RequestMapping(value = "/conc/getlawsuitInfo.do")
	public NexacroResult getlawsuitInfo(
			@ParamDataSet(name="ds_search")Judg_reportVO vo){
		
		System.out.println("@@@@lawsuit검색!");
		
		NexacroResult result = new NexacroResult();
		
		List<Judg_reportVO> list = judgReportService.getlawsuitInfo(vo);
		
		if(list.size()!=0){
			result.addDataSet("ds_lawsuit", list);
		}
		
		return result;
	}
	
	
	@RequestMapping(value = "/conc/getInstAdmInfo.do")
	public NexacroResult getInstAdmInfo(
			@ParamDataSet(name="ds_search")Judg_reportVO vo){
		
		NexacroResult result = new NexacroResult();
		
		List<Judg_reportVO> list = judgReportService.getInstAdmInfo(vo);
		
		if(list.size()!=0){
			result.addDataSet("ds_instAdm", list);
		}
		
		return result;
	}
	
	@RequestMapping(value = "/conc/getPladefInfo.do")
	public NexacroResult getPladefInfo(
			@ParamDataSet(name="ds_search")Judg_reportVO vo)
	{
		System.out.println("getPladefInfo con : "+vo.getPladefSepCode());
		NexacroResult result = new NexacroResult();
		
		List<Judg_reportVO> list = judgReportService.getPladefInfo(vo);
		
		if(list.size()!=0){
			result.addDataSet("ds_pladef", list);
		}
		
		return result;
	}
	
	@RequestMapping(value = "conc/dataSave.do")
	public NexacroResult dataSave(
			@ParamDataSet(name = "ds_lawsuit", required = false)List<Judg_reportVO> lawsuit
			,@ParamDataSet(name = "ds_instAdm", required = false)List<Judg_reportVO> instAdm
			,@ParamDataSet(name = "ds_pladef", required = false)List<Judg_reportVO> pladef){
		
		
		System.out.println("@@@@@@"+lawsuit.size());
		System.out.println("@@@@@@"+instAdm.size());
		System.out.println("@@@@@@"+pladef.size());
		
		boolean resultBool=false;
		NexacroResult result = new NexacroResult();
		
		if(lawsuit.size()!=0)
		{
			resultBool=judgReportService.lawsuitUpdate(lawsuit);
		}
		
		if(instAdm.size()!=0){
			resultBool=judgReportService.instAdmUpdate(instAdm);
		}
		
		if(pladef.size()!=0){
			resultBool=judgReportService.pladefUpdate(pladef);
		}
		
		result.addDataSet("ds_result", resultBool);
		
		return result;
	}
}
