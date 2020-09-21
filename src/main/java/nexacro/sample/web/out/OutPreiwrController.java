package nexacro.sample.web.out;

import java.util.List;

import javax.annotation.Resource;

import nexacro.sample.service.out.OutPreiwrService;
import nexacro.sample.vo.out.FileUploadVo;
import nexacro.sample.vo.out.OutPreiwrVo;

import org.springframework.stereotype.Controller;
import org.springframework.validation.Validator;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.spring.annotation.ParamDataSet;
import com.nexacro.spring.data.NexacroResult;

@Controller
public class OutPreiwrController {

	@Resource(name="outPreiwrService")
	private OutPreiwrService outPreiwrSkwService;
	
	@Resource
	private Validator validator;
	
	@InitBinder
	public void initBinder(WebDataBinder dataBinder){
		dataBinder.setValidator(this.validator);
	}
	
	//심급 정보 조회
	@RequestMapping(value="/out/pre_iwrSelect.do")
	public NexacroResult getPreiwrSelect(
				@ParamDataSet(name="ds_search")OutPreiwrVo  searchVo){
		
		List<OutPreiwrVo> OutPreiwrList = outPreiwrSkwService.getPreiwrSelect(searchVo);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output", OutPreiwrList);
		
		return result;
	}
	
	//준비서면 정보 조회
	@RequestMapping(value="/out/get_pre_iwr.do")
	public NexacroResult getPreiwrDetail(
			@ParamDataSet(name="ds_search") OutPreiwrVo searchVo){
		
		List<OutPreiwrVo> OutPreiwrDetail = outPreiwrSkwService.getPreiwrDetail(searchVo);
		
		NexacroResult result = new NexacroResult();
		
		/*if(OutPreiwrDetail.size()!=0){
			result.addDataSet("ds_output", OutPreiwrDetail);
		}*/
		
		result.addDataSet("ds_output", OutPreiwrDetail);
		return result;
	}
	
	// 준비서면 insert/update/delete
	@RequestMapping(value="/out/pre_iwrCud.do")
	public NexacroResult OutPreiwrCud(
			@ParamDataSet(name="ds_search") List<OutPreiwrVo> searchVo
			,@ParamDataSet(name="ds_file") List<FileUploadVo> fileVo){
			
		outPreiwrSkwService.OutpreiwrCud(searchVo, fileVo);
		System.out.println("+++++++++++" + fileVo);
		NexacroResult result = new NexacroResult();
				
		return result;
	}
	
}//end class
