package nexacro.sample.web.depo;

import java.util.List;

import javax.annotation.Resource;

import nexacro.sample.service.depo.DepoService;
import nexacro.sample.vo.depo.DepoVO;
import nexacro.sample.vo.depo.SawonVO;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.spring.NexacroException;
import com.nexacro.spring.annotation.ParamDataSet;
import com.nexacro.spring.data.NexacroResult;

@Controller
public class DepoController {

	private static final Logger log = LoggerFactory
			.getLogger(DepoController.class);

	@Resource(name = "depoService")
	private DepoService depoService;

	
	
	// 공탁번호 조회
	@RequestMapping(value = "/depo/Depo/selectDepoList.do")
	public NexacroResult selectDepoList(
			@ParamDataSet(name = "ds_search", required = false) DepoVO searchVO) {

		List<DepoVO> depoList = depoService.selectDepoVoList(searchVO);

		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output", depoList);

		return result;
	}
	
	// 공탁번호를 이용한 전체 정보 조회
	@RequestMapping(value = "/depo/Depo/selectDepoView.do")
	public NexacroResult selectDepoView(
			@ParamDataSet(name = "ds_search", required = false) DepoVO searchVO) {

		List<DepoVO> depoList = depoService.selectDepoVOView(searchVO);

		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output", depoList);

		return result;
	}
	
	// 담당자 정보 조회
	@RequestMapping(value = "/depo/Depo/selectCharList.do")
	public NexacroResult selectCharList(
			@ParamDataSet(name = "ds_search", required = false) SawonVO searchVO) {
	
		List<DepoVO> depoList = depoService.selectCharList(searchVO);

		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output", depoList);

		return result;
			
	}
	
	// 공탁정보 저장
	@RequestMapping(value = "depo/Depo/dbAccessDepo.do")
	public NexacroResult dbAccessDepo(
			@ParamDataSet(name = "ds_input") List<DepoVO> depoVO) throws NexacroException{
		
		String saveKey = depoService.dbAccessDepo(depoVO);
		
		NexacroResult result = new NexacroResult();
		result.addVariable("saveKey", saveKey);
		
		return result;
	}

}
