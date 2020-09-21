package nexacro.sample.web.prgr;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import nexacro.sample.service.prgr.MediationService;
import nexacro.sample.vo.prgr.MediationVO;
import nexacro.sample.vo.prgr.SimVO;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.spring.annotation.ParamDataSet;
import com.nexacro.spring.annotation.ParamVariable;
import com.nexacro.spring.data.NexacroResult;

@Controller
public class MediationController {

	@Resource(name = "mediationService")
	private MediationService mediationService;

	// 기본사항조회
	@RequestMapping(value = "mediation/mediationSelect.do")
	public NexacroResult mediationSelect(
			@ParamDataSet(name = "ds_search") MediationVO mediationVO) {

		Map<String, Object> selectMap = new HashMap<String, Object>();

		selectMap.put("lawsuitAdmNo", mediationVO.getLawsuitAdmNo());
		selectMap.put("instAdmCode", mediationVO.getInstAdmCode());

		List<MediationVO> mediationList = mediationService
				.mediationSelect(selectMap);

		NexacroResult result = new NexacroResult();

		result.addDataSet("ds_lawsuit", mediationList);

		return result;

	}

	// 원피고 목록조회
	@RequestMapping(value = "pladef/pladefSelect.do")
	public NexacroResult pladefSelect(
			@ParamDataSet(name = "ds_search") MediationVO mediationVO) {

		Map<String, Object> selectMap = new HashMap<String, Object>();

		selectMap.put("lawsuitAdmNo", mediationVO.getLawsuitAdmNo());
		selectMap.put("instAdmCode", mediationVO.getInstAdmCode());

		List<MediationVO> pladefList = mediationService.pladefSelect(selectMap);

		NexacroResult result = new NexacroResult();

		result.addDataSet("ds_output", pladefList);

		return result;

	}

	// 심급조회
	@RequestMapping(value = "mediation/getSimInfo.do")
	public NexacroResult getSimInfo(
			@ParamDataSet(name = "ds_search") MediationVO mediationVO) {

		Map<String, Object> selectMap = new HashMap<String, Object>();
		selectMap.put("lawsuitAdmNo", mediationVO.getLawsuitAdmNo());

		List<SimVO> simList = mediationService.getSimInfo(selectMap);

		NexacroResult result = new NexacroResult();

		System.out.println("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" + simList);

		result.addDataSet("ds_sim", simList);

		return result;
	}

	// 조정안 목록조회
	@RequestMapping(value = "bottom/bottomSelect.do")
	public NexacroResult bottomSearch(
			@ParamDataSet(name = "ds_search") MediationVO mediationVO) {
		System.out
				.println("=========================바텀 검색!!!============================");
		Map<String, Object> selectMap = new HashMap<String, Object>();

		selectMap.put("lawsuitAdmNo", mediationVO.getLawsuitAdmNo());
		selectMap.put("instAdmCode", mediationVO.getInstAdmCode());
		selectMap.put("pladefSeq", mediationVO.getPladefSeq());

		List<MediationVO> bottomList = mediationService.bottomSearch(selectMap);

		NexacroResult result = new NexacroResult();

		result.addDataSet("ds_mediation", bottomList);

		return result;

	}

	// 조정안 저장/수정/삭제
	@RequestMapping(value = "mediation/mediationSave.do")
	public NexacroResult mediationSave(
			@ParamDataSet(name = "ds_input") List<MediationVO> MediationVO,
			@ParamVariable(name = "lawsuitAdmNo", required = false) String lawsuitAdmNo,
			@ParamVariable(name = "instAdmCode", required = false) String instAdmCode,
			@ParamVariable(name = "pladefSepCode", required = false) String pladefSepCode,
			@ParamVariable(name = "pladefSeq", required = false) String pladefSeq,
			@ParamVariable(name = "mediationWritDate", required = false) String mediationWritDate) {
		System.out.println("VO 1 = " + MediationVO);

		MediationVO vo = MediationVO.get(0);
		vo.setLawsuitAdmNo(lawsuitAdmNo);
		vo.setInstAdmCode(instAdmCode);
		vo.setMediationWritDate(mediationWritDate);

		if (!pladefSepCode.isEmpty() && !pladefSeq.isEmpty()) {
			vo.setPladefSepCode(pladefSepCode);
			int pladefSeq1 = Integer.parseInt(pladefSeq);
			vo.setPladefSeq(pladefSeq1);
		}
		MediationVO.set(0, vo);

		String confirmStr = mediationService.mediationSave(MediationVO);

		NexacroResult result = new NexacroResult();

		result.addVariable("confirmStr", confirmStr);

		return result;

	}

	// 조정안 getCount
	@RequestMapping(value = "/mediation/getCount.do")
	public NexacroResult getCount(
			@ParamDataSet(name="ds_input") List<MediationVO> voList)throws Exception {

		NexacroResult result = new NexacroResult();

		try {

			String aprvCheck = mediationService.getCount(voList);
			MediationVO temp = new MediationVO(); // output 에 담길 데이터 셋 vo
			temp.setAprvCheck(aprvCheck); // 결과값을 담는다

			result.addDataSet("ds_output", temp);

		} catch (Exception e) {
			e.printStackTrace();
		}

		return result;
	}

}
