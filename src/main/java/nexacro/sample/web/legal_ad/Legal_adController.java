package nexacro.sample.web.legal_ad;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import nexacro.sample.service.legal_ad.Legal_adService;
import nexacro.sample.vo.legal_ad.LegalAdVo;
import nexacro.sample.vo.legal_ad.LegalAdListVo;



//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.spring.annotation.ParamDataSet;
import com.nexacro.spring.annotation.ParamVariable;
import com.nexacro.spring.data.NexacroResult;

@Controller
public class Legal_adController {
	
	//private static final Logger LOG = LoggerFactory.getLogger(Legal_adController.class);
	
	@Resource(name = "legal_adService")
	private Legal_adService legal_adService;
	
	// 법률자문의뢰 저장/수정/삭제 관련
	@RequestMapping(value="legal_ad/saveLegalAdDetail.do")
	public NexacroResult saveLegalAdDetail(@ParamDataSet(name = "ds_input") List<LegalAdListVo> legalAdListVo){
		
		//confirmStr라는 변수 이름으로 결과에 담아 리턴(뷰단의 스크립트에서 저장/수정 판단해 출력하는 용도)
		String confirmStr = legal_adService.saveLegalAdDetail(legalAdListVo);
		
		NexacroResult result = new NexacroResult();
		List<LegalAdListVo> voList = new ArrayList<LegalAdListVo>();
		LegalAdListVo vo = new LegalAdListVo();
		
		vo.setLegaladvLawAdvReqNo(confirmStr);
		voList.add(0, vo);
		
		result.addDataSet("ds_output", voList);
		
		return result; 
	}
	
	// 법률자문의뢰 조회 관련
	@RequestMapping(value = "legal_ad/selectLegalAdDetail.do")
	// 여러개의 화면에서 조회를 하게 되는데, 이때 공통적으로 이쪽으로 매핑해서 개발효율 높임
	// 공통모듈화 : 레코드셋은 좀 커지더라도 개발 및 유지보수에 효과적
	// 다만 데이터가 많은 경우 메모리 소모가 커지므로 이점도 고려해봐야 함
	public NexacroResult selectLegalAdList(
			@ParamVariable(name = "legaladvLawAdvReqNo", required = false) String no,
			@ParamVariable(name = "legaladvReqDeptCode", required = false) String deptcode,
			@ParamVariable(name = "legaladvReqDate1", required = false) String date1,
			@ParamVariable(name = "legaladvReqDate2", required = false) String date2,
			@ParamVariable(name = "legaladvRepWtr", required = false) String wtr,
			@ParamVariable(name = "legaladvLawAdvCode", required = false) String advcode,
			@ParamVariable(name = "legaladvOutReqWtr", required = false) String outAdv){
		
		Map<String, Object> selectMap = new HashMap<String, Object>();
		selectMap.put("legaladvLawAdvReqNo", no);
		selectMap.put("legaladvReqDeptCode", deptcode);
		selectMap.put("legaladvReqDate1", date1);
		selectMap.put("legaladvReqDate2", date2);
		selectMap.put("legaladvRepWtr", wtr);
		selectMap.put("legaladvLawAdvCode", advcode);
		selectMap.put("legaladvOutReqWtr", outAdv);
			
		List<LegalAdListVo> legal_adList = legal_adService.selectLegaladList(selectMap);
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output", legal_adList);
		return result;
	}
	
	// 법률자문위임 조회 관련
	@RequestMapping(value = "legal_ad/selectLegalAdOutDetail.do")
	public NexacroResult selectLegalAdOutList(
			@ParamVariable(name = "legaladvLawAdvReqNo", required = false) String no,
			@ParamVariable(name = "legalOfficialinfoLyrName", required = false) String lyrName,
			@ParamVariable(name = "legaladvOutReqDate1", required = false) String date1,
			@ParamVariable(name = "legaladvOutReqDate2", required = false) String date2,
			@ParamVariable(name = "legaladvOutRepWtr", required = false) String wtr,
			@ParamVariable(name = "legaladvLawAdvCode", required = false) String advcode){

		Map<String, Object> selectMap = new HashMap<String, Object>();
		selectMap.put("legaladvLawAdvReqNo", no);
		selectMap.put("legalOfficialinfoLyrName", lyrName);
		selectMap.put("legaladvOutReqDate1", date1);
		selectMap.put("legaladvOutReqDate2", date2);
		selectMap.put("legaladvOutRepWtr", wtr);
		selectMap.put("legaladvLawAdvCode", advcode);
			
		List<LegalAdListVo> legal_adList = legal_adService.selectLegaladOutList(selectMap);
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output", legal_adList);
		return result;
	}
	
	/**
	 * 
	 * @param legalAdListVo
	 * @return
	 */
	@RequestMapping(value="legal_ad/saveLegalAdRep.do")
	public NexacroResult saveLegalAdRep(
			@ParamDataSet(name = "ds_input") List<LegalAdListVo> legalAdListVo){
		
		legal_adService.saveLegalAdRep(legalAdListVo);
		
		NexacroResult result = new NexacroResult();
		return result;
	}
	
	//법률자문위임 저장
	@RequestMapping(value="legal_ad/saveLegalAdMandate.do")
	public NexacroResult saveLegalAdMandate(
			@ParamDataSet(name = "ds_input") List<LegalAdListVo> legalAdListVo){
		
		String confirmStr = legal_adService.saveLegalAdMandate(legalAdListVo);
		
		NexacroResult result = new NexacroResult();
		result.addVariable("confirmStr", confirmStr);
		return result;
	}
	
	//자문비 조회
	@RequestMapping(value="legal_ad/selectCost.do")
	public NexacroResult selectCost(
			@ParamVariable(name = "legaladvCostLawadvReqno", required = false) String no){
		
		Map<String, Object> selectMap = new HashMap<String, Object>();
		selectMap.put("legaladvCostLawadvReqno", no);
		
		List<LegalAdListVo> legal_adList = legal_adService.selectCost(selectMap);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output", legal_adList);
		return result;
	}
	
	//자문비 추가,수정,삭제
	@RequestMapping(value="legal_ad/saveCost.do")
	public NexacroResult saveCost(
			@ParamDataSet(name = "ds_input") List<LegalAdListVo> legalAdListVo){
		
		legal_adService.saveCost(legalAdListVo);
		
		NexacroResult result = new NexacroResult();
		return result;
	}

	//외부법률관계자 조회
	@RequestMapping(value="legal_ad/selectLegalOfclList.do")
	public NexacroResult legalOfclList(
			@ParamVariable(name = "srcLegalOfclType") String type,
			@ParamVariable(name = "srcLegalOfclName") String name){
		
		// name값으로 가져온 파라미터를 맵에 넣어서
		Map<String, Object> selectMap = new HashMap<String, Object>();
		selectMap.put("srcLegalOfclType", type);
		selectMap.put("srcLegalOfclName", name);
		
		// 그 맵을 다시 파라미터로 서비스를 호출하고 결과를 리스트에 담아서
		List<LegalAdVo> legal_adList = legal_adService.selectLegalOfclList(selectMap);
		
		// 그 리스트를 NexacroResult의 데이터셋에 ds_output이라는 이름으로 리턴
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output", legal_adList);
		
		// 리턴된 결과는 넥사크로 스크립트에서 ds_output으로 받아서 사용함
		return result;
	}
	
	//외부법률관계자 추가/수정/삭제
	@RequestMapping(value="legal_ad/saveLegalOfclList.do")
	public NexacroResult saveLegalOfclInfo(
			@ParamDataSet(name = "ds_input") List<LegalAdVo> legalAdVo){
		
		String confirmStr = legal_adService.saveLegalOfclInfo(legalAdVo);
		
		NexacroResult result = new NexacroResult();
		result.addVariable("confirmStr", confirmStr);
		return result;
	}
	
	// 외부법률자문회신 저장
	@RequestMapping(value="legal_ad/saveLegalAdOutRep.do")
	public NexacroResult saveLegalAdOutRep(
			@ParamDataSet(name = "ds_input") List<LegalAdListVo> legalAdListVo){
		
		legal_adService.saveLegalAdOutRep(legalAdListVo);
		
		NexacroResult result = new NexacroResult();
		return result;
	}
	
	//법률자문건 현황
	@RequestMapping(value="legal_ad/legalAdStatList.do")
	public NexacroResult legalAdStatList(
			@ParamVariable(name = "combo_Dept") String dept,
			@ParamVariable(name = "edt_Name") String name,
			@ParamVariable(name = "combo_Open_Wtr") String yn,
			@ParamVariable(name = "cal_Req_Date1") String date1,
			@ParamVariable(name = "cal_Req_Date2") String date2){
		
		System.out.println("===========================================");
		System.out.println("cal_Req_Date1 = " + date1);
		System.out.println("cal_Req_Date2 = " + date2);
		System.out.println("===========================================");
		System.out.println("deptCode@cont = " + dept);
		System.out.println("OpenWtr@cont = " + yn);
		System.out.println("===========================================");
		
		Map<String, Object> selectMap = new HashMap<String, Object>();
		selectMap.put("legaladvReqDeptCode", dept);
		selectMap.put("reqMgr", name);
		selectMap.put("legaladvOpenWtr", yn);
		selectMap.put("legaladvReqDate1", date1);
		selectMap.put("legaladvReqDate2", date2);
		
		List<LegalAdListVo> list = legal_adService.legalAdStatList(selectMap);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output", list);

		
		return result;
	}
	
	// 법률자문건 현황 (JKIM)
	@RequestMapping(value="legal_ad/legal_advSelect.do")
	public NexacroResult legal_advSelect(
			@ParamVariable(name = "deptcode", required = false) String deptcode,
			@ParamVariable(name = "reqmgr", required = false) String reqmgr,
			@ParamVariable(name = "openyn", required = false) String openyn,
			@ParamVariable(name = "date1", required = false) String date1,
			@ParamVariable(name = "date2", required = false) String date2){
		
		Map<String, Object> selectMap = new HashMap<String, Object>();
		selectMap.put("legaladvReqDeptCode", deptcode); // Key, Value
		selectMap.put("legaladvRepMgr", reqmgr);
		selectMap.put("legaladvOpenWtr", openyn);
		selectMap.put("legaladvReqDate1", date1);
		selectMap.put("legaladvReqDate2", date2);
		System.out.println("법률ㄴㅇㄹㄴㄹㄴㄹㄴㅇㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹ");
		List<LegalAdListVo> legal_advList = legal_adService.legal_advSelect(selectMap);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output", legal_advList);
		return result;
	}
}
