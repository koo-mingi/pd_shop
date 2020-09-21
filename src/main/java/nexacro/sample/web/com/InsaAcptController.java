package nexacro.sample.web.com;

import java.util.List;

import javax.annotation.Resource;

import nexacro.sample.service.com.InsaAcptService;
import nexacro.sample.vo.com.InsaAcptVO;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.spring.annotation.ParamDataSet;
import com.nexacro.spring.annotation.ParamVariable;
import com.nexacro.spring.data.NexacroResult;


@Controller
public class InsaAcptController {

	@Resource(name = "insaAcptService")
	private InsaAcptService insaAcptService;
	
	// 사원 승인내역 조회
	@RequestMapping(value = "com/insaAcpt/selectInsaAcptList.do")
	public NexacroResult selectInsaAcptList(
			@ParamDataSet(name = "ds_search", required = false) InsaAcptVO insaAcptVO){
		
		System.out.println(insaAcptVO.getSearchKeyword());
		System.out.println(insaAcptVO.getSearchCondition());
		
		List<InsaAcptVO> insaList = insaAcptService.selectInsaAcptList(insaAcptVO);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output", insaList);
		
		return result;
	}
	
	// 사원 승인내역 정보 저장
	@RequestMapping(value ="com/insaAcpt/saveInsaAcptList.do")
	public NexacroResult saveInsaAcptList(
			@ParamVariable(name = "registerId") String registerId,
			@ParamDataSet(name = "ds_input") List<InsaAcptVO> insaAcptVO){
		
		insaAcptService.saveInsaAcptList(insaAcptVO, registerId);
		
		NexacroResult result = new NexacroResult();
		return result;
	}
	
	// 인사관리 저장, 삽입, 삭제
	@RequestMapping(value ="com/insaAcpt/saveInsaList.do")
	public NexacroResult saveInsaList(
			@ParamVariable(name = "registerId") String registerId,
			@ParamDataSet(name = "ds_input") List<InsaAcptVO> insaAcptVO){
		
		insaAcptService.saveInsaList(insaAcptVO, registerId);
		
		NexacroResult result = new NexacroResult();
		return result;
	}
	
}
