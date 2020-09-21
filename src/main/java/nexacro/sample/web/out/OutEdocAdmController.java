package nexacro.sample.web.out;

import java.util.List;

import javax.annotation.Resource;

import nexacro.sample.service.out.OutEdocAdmService;
import nexacro.sample.vo.out.OutEdocAdmVo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.validation.Validator;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.spring.annotation.ParamDataSet;
import com.nexacro.spring.data.NexacroResult;

@Controller
public class OutEdocAdmController {
	
	private static final Logger logger = LoggerFactory.getLogger(OutEdocAdmController.class);
	
	@Resource(name="EdocAdmService")
	private OutEdocAdmService outEdocAdmSkwService;
	
	@Resource
	private Validator validator;
	
	@InitBinder
	public void initBinder(WebDataBinder dataBinder){
		dataBinder.setValidator(this.validator);
	}
	
	//소송정보 조회
	@RequestMapping(value="/out/edoc_adm_lawsuitSelect.do")
	public NexacroResult getLawsuitSelect(
				@ParamDataSet(name="ds_search")OutEdocAdmVo searchVo){
		logger.info("서증관리 >> 소송정보 가져오는 컨트롤러 정상작동!!");
		
		List<OutEdocAdmVo> LawsuitList = outEdocAdmSkwService.getLawsuitSelect(searchVo);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output", LawsuitList);
		
		return result;
	}
	
	//서증 정보 조회
	@RequestMapping(value="/out/edoc_adm_getInfo.do")
	public NexacroResult getEdocAdmInfo(
				@ParamDataSet(name="ds_search")OutEdocAdmVo searchVo){
		logger.info("서증관리 >> 호증정보 조회하는 컨트롤러 정상작동!!");
		
		List<OutEdocAdmVo> EdocAdmInfo1 = outEdocAdmSkwService.getEdocAdmInfoGap(searchVo);
		List<OutEdocAdmVo> EdocAdmInfo2 = outEdocAdmSkwService.getEdocAdmInfoEul(searchVo);
		
		NexacroResult result = new NexacroResult();
		
		result.addDataSet("ds_output1", EdocAdmInfo1);
		result.addDataSet("ds_output2", EdocAdmInfo2);
				
		return result;
	}
	
	//서증 insert, update, delete
	@RequestMapping(value="/out/edoc_admCud.do")
	public NexacroResult OutEdocAdmCud(
				@ParamDataSet(name="ds_search1") List<OutEdocAdmVo> searchVo1,
				@ParamDataSet(name="ds_search2") List<OutEdocAdmVo> searchVo2){
		
		logger.info("서증관리 >> 호증정보 CUD 컨트롤러 정상작동!!");
		outEdocAdmSkwService.OutEdocAdmCud(searchVo1, searchVo2);
		
		NexacroResult result = new NexacroResult();
		
		return result;
	}
	
	
	
	
	
	
	
	
	
	
	
}
