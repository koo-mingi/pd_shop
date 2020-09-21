package nexacro.sample.web.noti;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import nexacro.sample.service.noti.LawsuitNotiService;
import nexacro.sample.vo.lawsuit.Lawsuit_ListVO;
import nexacro.sample.vo.legal_ad.LegalAdListVo;
import nexacro.sample.vo.noti.LawsuitNotiVO;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.validation.Validator;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.spring.NexacroException;
import com.nexacro.spring.annotation.ParamDataSet;
import com.nexacro.spring.annotation.ParamVariable;
import com.nexacro.spring.data.NexacroResult;

@Controller
public class LawsuitNotiController {
	
	private static final Logger Log = LoggerFactory
			.getLogger(LawsuitNotiController.class);
	
	@Resource(name = "lawsuitnotiservice")
	private LawsuitNotiService lawsuitnotiservice;
	
	@Resource
	private Validator validator;
	
	@InitBinder
	public void initBinder(WebDataBinder dataBinder) {
		dataBinder.setValidator(this.validator);
	}
	
	// 소송고지 내용 가져오기
	@RequestMapping(value = "/noti/getLawsuitNotiList.do")
	public NexacroResult getLawsuitNotiList(
		@ParamDataSet(name = "ds_search", required = false) LawsuitNotiVO lawsuitNotiVO) {
		List<LawsuitNotiVO> lawsuitNotiList = lawsuitnotiservice.getLawsuitNotiList(lawsuitNotiVO);
		System.out.println("dd" +lawsuitNotiList.get(0).getLawsuitNotiInstSepcode() );
		NexacroResult result = new NexacroResult();
		
		result.addDataSet("ds_output", lawsuitNotiList);

		return result;
	}
	
	//소송고지 내용 insert
	@RequestMapping(value = "/noti/insertLawsuitNoti.do")
	public NexacroResult insertLawsuitNoti(
		@ParamDataSet(name = "ds_input") List<LawsuitNotiVO> lawsuitNotiVO) throws NexacroException  {
		
		String saveKey=lawsuitnotiservice.insertLawsuitNoti(lawsuitNotiVO);
		
		NexacroResult saveResult = new NexacroResult();	
		//saveResult.addVariable("saveKey",saveKey);
		
		LawsuitNotiVO vo = new LawsuitNotiVO();
		List<LawsuitNotiVO> voList = new ArrayList<>();
		
		vo.setLawsuitNotiAdmNo(saveKey);
		voList.add(vo);
		
		saveResult.addDataSet("ds_output",voList);
		//System.out.println("saveKEy ::++:::"+saveKey);
		return saveResult;

	}
	
	// 소송고지 명세
	@RequestMapping(value = "/noti/lawsuitNotiStatement.do")
	public NexacroResult lawsuitNotiStatement(
			@ParamVariable(name = "selectedId", required = false) String selectedId, // 검색조건
			@ParamVariable(name = "selectedId1", required = false) String selectedId1,//검색어
			@ParamVariable(name = "selectedId2", required = false) String selectedId2,// 검색어(법원)
			@ParamVariable(name = "selectedId3", required = false) String selectedId3,// 검색어(고지일자FROM)
			@ParamVariable(name = "selectedId4", required = false) String selectedId4) throws Exception {// 검색어(고지일자TO)
		System.out.println("0 :"+selectedId+", 1 :"+selectedId1+", 2 :"+selectedId2+", 3 :"+selectedId3+", 4 :"+selectedId4);
		Map<String, Object> selectMap = new HashMap<String, Object>();
		selectMap.put("selectedId", selectedId); // Key, Value
		selectMap.put("selectedId1", selectedId1);
		selectMap.put("selectedId2", selectedId2);
		selectMap.put("selectedId3", selectedId3);
		selectMap.put("selectedId4", selectedId4);
		
		List LawNotiNoStatement = lawsuitnotiservice.lawsuitNotiStatement(selectMap); 
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output", LawNotiNoStatement);
		return result;

	}
}

