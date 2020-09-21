package nexacro.sample.web.lawsuit;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import nexacro.sample.service.lawsuit.Lawsuit_ListService;
import nexacro.sample.vo.depo.DepoVO;
import nexacro.sample.vo.lawsuit.Lawsuit_ListVO;

import org.springframework.stereotype.Controller;
import org.springframework.validation.Validator;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.spring.NexacroException;
import com.nexacro.spring.annotation.ParamDataSet;
import com.nexacro.spring.annotation.ParamVariable;
import com.nexacro.spring.data.NexacroResult;
import com.nexacro.spring.view.NexacroModelAndView;
import com.nexacro.xapi.data.VariableList;
/*
import pd_law.lawsuit.service.Lawsuit_ListService;
import egovframework.rte.cmmn.ria.xplatform.XPlatformConstant;
import egovframework.rte.cmmn.ria.xplatform.map.DataSetMap;
import egovframework.rte.cmmn.ria.xplatform.map.XPlatformMapDTO;
import egovframework.rte.fdl.property.EgovPropertyService;
*/
@Controller
public class Lawsuit_ListController {
	@Resource(name = "lawsuitlistservice")
	private Lawsuit_ListService lawsuitlistservice;
	
	/*@Resource(name = "propertiesService")
	private EgovPropertyService propertiesService;*/
	
	@Resource
	private Validator validator;

	@InitBinder
	public void initBinder(WebDataBinder dataBinder) {
		dataBinder.setValidator(this.validator);
	}
	
	

	@RequestMapping(value = "/lawsuit/selectCode.do")
	public NexacroResult selectCode(
			@ParamVariable(name = "selectedId") String selectedId,
			@ParamVariable(name = "selectedId1") String selectedId1) {
		Map<String, Object> selectMap = new HashMap<String, Object>();
		selectMap.put("selectedId", selectedId);
		selectMap.put("selectedId1", selectedId1);
		List<Lawsuit_ListVO> lawList = lawsuitlistservice.selectCode(selectMap);
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output", lawList);
		return result;
	}
	
	@RequestMapping(value = "/lawsuit/getLawsuitDetail.do")
	public NexacroResult getLawsuitDetail(@ParamVariable(name = "lawsuitAdmNo") String lawsuitAdmNo){
		Map<String, Object> LawsuitDetailtMap = new HashMap<String, Object>();
		LawsuitDetailtMap.put("lawsuitAdmNo",lawsuitAdmNo);
		List<Lawsuit_ListVO> LawsuitDetailList = lawsuitlistservice.getLawsuitDetail(LawsuitDetailtMap);
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output", LawsuitDetailList);
		return result;
	}
	
	@RequestMapping(value = "/lawsuit/getInstanceDetail.do")
	public NexacroResult getInstanceDetail(
			@ParamVariable(name = "lawsuitAdmNo") String lawsuitAdmNo,
			@ParamVariable(name = "instAdmCode") String instAdmCode) {
		Map<String, Object> getInstanceDetail = new HashMap<String, Object>();
		getInstanceDetail.put("lawsuitAdmNo",lawsuitAdmNo);
		getInstanceDetail.put("instAdmCode",instAdmCode);
		List<Lawsuit_ListVO> getInstanceDetail_List = lawsuitlistservice.getInstanceDetail(getInstanceDetail);
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output", getInstanceDetail_List);
		return result;
	}

	@RequestMapping(value = "/lawsuit/getLawsuitStatus.do")
	public NexacroResult getLawsuitStatus(
			@ParamVariable(name = "lawsuitAdmNo") String lawsuitAdmNo) {
		Map<String, Object> getLawsuitStatus = new HashMap<String, Object>();
		getLawsuitStatus.put("lawsuitAdmNo",lawsuitAdmNo);
		List<Lawsuit_ListVO> getInstanceDetail_List = lawsuitlistservice.getLawsuitStatus(getLawsuitStatus);
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output", getInstanceDetail_List);
		return result;
	}	
	

	@RequestMapping(value = "/lawsuit/getinstanceListAll.do")
	public NexacroResult getinstanceListAll(
			@ParamVariable(name = "lawsuitAdmNo") String lawsuitAdmNo) {
		Map<String, Object> getinstanceListAll = new HashMap<String, Object>();
		getinstanceListAll.put("lawsuitAdmNo",lawsuitAdmNo);
		List<Lawsuit_ListVO> getinstanceListAll_List = lawsuitlistservice.getinstanceListAll(getinstanceListAll);
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output", getinstanceListAll_List);
		return result;
	}
	
	@RequestMapping(value = "/lawsuit/getPlaDefDetail.do")
	public NexacroResult getPlaDefDetail(
			@ParamVariable(name = "lawsuitAdmNo") String lawsuitAdmNo,
			@ParamVariable(name = "instAdmCode") String instAdmCode,
			@ParamVariable(name = "lawsuitCpPladefSepcode") String lawsuitCpPladefSepcode) {
		Map<String, Object> getPlaDefDetail = new HashMap<String, Object>();
		getPlaDefDetail.put("lawsuitAdmNo",lawsuitAdmNo);
		getPlaDefDetail.put("instAdmCode",instAdmCode);
		getPlaDefDetail.put("lawsuitCpPladefSepcode",lawsuitCpPladefSepcode);
		List<Lawsuit_ListVO> getPlaDefDetail_List = lawsuitlistservice.getPlaDefDetail(getPlaDefDetail);
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output", getPlaDefDetail_List);
		return result;
	}
	
	@RequestMapping(value = "/lawsuit/getApprovalLineList.do")
	public NexacroResult getApprovalLineList(
			@ParamVariable(name = "aprvprgrInfoStepCode") String aprvprgrInfoStepCode,
			@ParamVariable(name = "aprvprgrInfoBookNo") String aprvprgrInfoBookNo) {
	Map<String, Object> getApprovalLineList = new HashMap<String, Object>();
	getApprovalLineList.put("aprvprgrInfoStepCode",aprvprgrInfoStepCode);
	getApprovalLineList.put("aprvprgrInfoBookNo",aprvprgrInfoBookNo);
	List<Lawsuit_ListVO> getApprovalLineList_List = lawsuitlistservice.getApprovalLineList(getApprovalLineList);
	NexacroResult result = new NexacroResult();
	result.addDataSet("ds_output", getApprovalLineList_List);
	return result;
	}
	
	@RequestMapping(value = "/lawsuit/getMgrList.do")
	public NexacroResult getMgrList(
			@ParamVariable(name = "insaName",required=false) String insaName,
			@ParamVariable(name = "insaSabun",required=false) String insaSabun) {
		Map<String, Object> getMgrList = new HashMap<String, Object>();
		getMgrList.put("insaName",insaName);
		getMgrList.put("insaSabun",insaSabun);
		List<Lawsuit_ListVO> getMgrList_List = lawsuitlistservice.getMgrList(getMgrList);
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output", getMgrList_List);
		return result;

	}
	
	@RequestMapping(value = "/lawsuit/getMgrSelect.do")
	public NexacroResult getMgrSelect(
			@ParamVariable(name = "lawsuitAdmNo") String lawsuitAdmNo) {
		Map<String, Object> getMgrSelect = new HashMap<String, Object>();
		getMgrSelect.put("lawsuitAdmNo",lawsuitAdmNo);
		List<Lawsuit_ListVO> getMgrSelect_List = lawsuitlistservice.getMgrSelect(getMgrSelect);
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output", getMgrSelect_List);
		return result;
	}
	
	@RequestMapping(value = "/lawsuit/lawsuitMgrManage.do")
	public NexacroResult lawsuitMgrManage(
			@ParamDataSet(name = "ds_input") List<Lawsuit_ListVO> Lawsuit_ListVO) throws NexacroException   { 
		int result_int=lawsuitlistservice.lawsuitMgrManage(Lawsuit_ListVO);
		NexacroResult result = new NexacroResult();
		return result;
	}
	
	@RequestMapping(value = "/lawsuit/saveAddLawsuit.do")
	public NexacroResult saveAddLawsuit(
			@ParamDataSet(name = "ds_input") List<Lawsuit_ListVO> Lawsuit_ListVO) throws NexacroException  { 
		int result_int=lawsuitlistservice.saveAddLawsuit(Lawsuit_ListVO);
		NexacroResult result = new NexacroResult();
		return result;
	}
	
	@RequestMapping(value = "/lawsuit/getLawNotiNoSearch.do")
	public NexacroResult getLawNotiNoSearch(
			@ParamVariable(name = "selectedId") String selectedId,
			@ParamVariable(name = "selectedId1") String selectedId1) {
		Map<String, Object> getLawNotiNoSearch = new HashMap<String, Object>();
		getLawNotiNoSearch.put("selectedId",selectedId);
		getLawNotiNoSearch.put("selectedId1",selectedId1);
		List<Lawsuit_ListVO> getLawNotiNoSearch_List = lawsuitlistservice.getLawNotiNoSearch(getLawNotiNoSearch);
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output", getLawNotiNoSearch_List);
		return result;
	}
	
	@RequestMapping(value = "/lawsuit/getLegalOfficials.do")
	public NexacroResult getLegalOfficials(
			@ParamVariable(name = "selectedId") String selectedId,
			@ParamVariable(name = "selectedId1") String selectedId1) {
		Map<String, Object> getLegalOfficials = new HashMap<String, Object>();
		getLegalOfficials.put("selectedId",selectedId);
		getLegalOfficials.put("selectedId1",selectedId1);
		List<Lawsuit_ListVO> getLegalOfficials_List = lawsuitlistservice.getLegalOfficials(getLegalOfficials);
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output", getLegalOfficials_List);
		return result;
	}
	// 소송접수 newAdmNo 생성
	@RequestMapping(value = "/lawsuit/getNewAdmNo.do")
	public NexacroResult getNewAdmNo(
			@ParamVariable(name = "lawsuitAplCaseCode") String lawsuitAplCaseCode,
			@ParamVariable(name = "selectedId") String selectedId) {
		Map<String, Object> getNewAdmNo = new HashMap<String, Object>();
		getNewAdmNo.put("lawsuitAplCaseCode",lawsuitAplCaseCode);
		getNewAdmNo.put("selectedId",selectedId);
		List<Lawsuit_ListVO> getNewAdmNo_List = lawsuitlistservice.getNewAdmNo(getNewAdmNo);
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output", getNewAdmNo_List);
		return result;
	}
	// 소송접수관리 저장.
	@RequestMapping(value = "/lawsuit/saveLawsuitAll.do")
	public NexacroResult saveLawsuitAll(
			@ParamDataSet(name = "ds_input") List<Lawsuit_ListVO> Lawsuit_ListVO,
			@ParamDataSet(name = "ds_input1") List<Lawsuit_ListVO> Lawsuit_ListVO1,
			@ParamDataSet(name = "ds_input2") List<Lawsuit_ListVO> Lawsuit_ListVO2
			)   {
		NexacroResult result = new NexacroResult();
		//VariableList varList = new VariableList();
		NexacroModelAndView mav =new NexacroModelAndView();
		
		/*Lawsuit_ListVO list = (nexacro.sample.vo.lawsuit.Lawsuit_ListVO) Lawsuit_ListVO;
		System.out.println("list : " + list);
		if(list.getLawsuitAdmNo() == null){
			int lawsuitResult = lawsuitlistservice.insertLawsuit(Lawsuit_ListVO);
			
			
		}*/
		
		String lawsuitAdmNo = "";
		
		System.out.println("Lawsuit_ListVO : " + Lawsuit_ListVO);
		System.out.println("Lawsuit_ListVO1 : " + Lawsuit_ListVO1);
		System.out.println("Lawsuit_ListVO2 : " + Lawsuit_ListVO2);
		
		try {
			lawsuitAdmNo =lawsuitlistservice.saveLawsuitAll(Lawsuit_ListVO,Lawsuit_ListVO1,Lawsuit_ListVO2);
		} catch (Exception e) {
			result.setErrorCode(-1);
			result.setErrorMsg(e.toString());
			//varList.add("ErrorCode", -1); 
			//varList.add("ErrorMsg", e);
			//result.addObject(NexacroConstants.ERROR_CODE, "-1");
			//result.addObject(NexacroException.DEFAULT_ERROR_CODE,"-1");
			//mav.addObject(XPlatformConstant.ERROR_CODE, "-1");
			//mav.addObject(XPlatformConstant.ERROR_MSG, e.toString());
		}
		
		/*for(int i=0; i<Lawsuit_ListVO.size(); i++){
			Lawsuit_ListVO.get(i).setLawsuitAdmNo(lawsuitAdmNo);
		}*/
		
		for(int i=0; i<Lawsuit_ListVO1.size(); i++){
			Lawsuit_ListVO1.get(i).setLawsuitAdmNo(lawsuitAdmNo);
		}
		
		//result.addDataSet("ds_output", Lawsuit_ListVO);
		result.addDataSet("ds_output", Lawsuit_ListVO1);

		return result;
	}
	
	/*@RequestMapping(value = "/lawsuit/getLawsuitList.do")
	public ModelAndView getLawsuitList(XPlatformMapDTO xpDto, Model model) {

		ModelAndView mav = new ModelAndView("xplatformMapView");

		try {
			DataSetMap tranInfo = xpDto.getTranInfoMap();
			Map<String, Object> inVar = xpDto.getInVariableMap();
			Map<String, DataSetMap> inDataset = xpDto.getInDataSetMap();
			Map<String, Object> outVar = xpDto.getOutVariableMap();
			Map<String, DataSetMap> outDataset = xpDto.getOutDataSetMap();

			lawsuitlistservice.getLawsuitList(tranInfo, inVar, inDataset, outVar, outDataset);
			mav.addObject(XPlatformConstant.OUT_VARIABLES_ATT_NAME,
					xpDto.getOutVariableMap());
			mav.addObject(XPlatformConstant.OUT_DATASET_ATT_NAME,
					xpDto.getOutDataSetMap());

			mav.addObject(XPlatformConstant.ERROR_CODE, "0");
			mav.addObject(XPlatformConstant.ERROR_MSG, "");

		} catch (Exception e) {
			e.printStackTrace();
			mav.addObject(XPlatformConstant.ERROR_CODE, "-1");
			mav.addObject(XPlatformConstant.ERROR_MSG, e.toString());
		}

		return mav;
	}*/
	
	/*//연구소 리스트 저장 , 수정, 삭제 
	@RequestMapping(value = "/lawsuit/saveLawsuit.do")
	public ModelAndView saveLawsuit(XPlatformMapDTO xpDto, Model model)   { 

		ModelAndView mav = new ModelAndView("xplatformMapView");
		
		try {
			DataSetMap tranInfo = xpDto.getTranInfoMap();
			Map<String, Object> inVar = xpDto.getInVariableMap();
			Map<String, DataSetMap> inDataset = xpDto.getInDataSetMap();
			Map<String, Object> outVar = xpDto.getOutVariableMap();
			Map<String, DataSetMap> outDataset = xpDto.getOutDataSetMap();

			lawsuitlistservice.saveLawsuit(tranInfo, inVar, inDataset, outVar, outDataset);
			mav.addObject(XPlatformConstant.ERROR_CODE, "0");
			mav.addObject(XPlatformConstant.ERROR_MSG, "");

		} catch (Exception e) {

			e.printStackTrace();
			mav.addObject(XPlatformConstant.ERROR_CODE, "-1");
			mav.addObject(XPlatformConstant.ERROR_MSG, e.toString());
		}
		return mav;
	}*/
	
	/*@RequestMapping(value = "/lawsuit/saveLawsuitAll.do")
	public ModelAndView saveLawsuitAll(XPlatformMapDTO xpDto, Model model)   { 

		ModelAndView mav = new ModelAndView("xplatformMapView");
		
		try {
			DataSetMap tranInfo = xpDto.getTranInfoMap();
			Map<String, Object> inVar = xpDto.getInVariableMap();
			Map<String, DataSetMap> inDataset = xpDto.getInDataSetMap();
			Map<String, Object> outVar = xpDto.getOutVariableMap();
			Map<String, DataSetMap> outDataset = xpDto.getOutDataSetMap();

			lawsuitlistservice.saveLawsuitAll(tranInfo, inVar, inDataset, outVar, outDataset);
			mav.addObject(XPlatformConstant.ERROR_CODE, "0");
			mav.addObject(XPlatformConstant.ERROR_MSG, "");

		} catch (Exception e) {

			e.printStackTrace();
			mav.addObject(XPlatformConstant.ERROR_CODE, "-1");
			mav.addObject(XPlatformConstant.ERROR_MSG, e.toString());
		}
		return mav;
	}*/
	
	/*@RequestMapping(value = "/lawsuit/getLawsuitAllDetail.do")
	public ModelAndView getLawsuitAllDetail(XPlatformMapDTO xpDto, Model model) {

		ModelAndView mav = new ModelAndView("xplatformMapView");

		try {
			DataSetMap tranInfo = xpDto.getTranInfoMap();
			Map<String, Object> inVar = xpDto.getInVariableMap();
			Map<String, DataSetMap> inDataset = xpDto.getInDataSetMap();
			Map<String, Object> outVar = xpDto.getOutVariableMap();
			Map<String, DataSetMap> outDataset = xpDto.getOutDataSetMap();

			lawsuitlistservice.getLawsuitAllDetail(tranInfo, inVar, inDataset, outVar, outDataset);
			mav.addObject(XPlatformConstant.OUT_VARIABLES_ATT_NAME,
					xpDto.getOutVariableMap());
			mav.addObject(XPlatformConstant.OUT_DATASET_ATT_NAME,
					xpDto.getOutDataSetMap());

			mav.addObject(XPlatformConstant.ERROR_CODE, "0");
			mav.addObject(XPlatformConstant.ERROR_MSG, "");

		} catch (Exception e) {
			e.printStackTrace();
			mav.addObject(XPlatformConstant.ERROR_CODE, "-1");
			mav.addObject(XPlatformConstant.ERROR_MSG, e.toString());
		}

		return mav;
	}*/
	
	/*@RequestMapping(value = "/lawsuit/saveInstanceAll.do")
	public ModelAndView saveInstanceAll(XPlatformMapDTO xpDto, Model model)   { 

		ModelAndView mav = new ModelAndView("xplatformMapView");
		
		try {
			DataSetMap tranInfo = xpDto.getTranInfoMap();
			Map<String, Object> inVar = xpDto.getInVariableMap();
			Map<String, DataSetMap> inDataset = xpDto.getInDataSetMap();
			Map<String, Object> outVar = xpDto.getOutVariableMap();
			Map<String, DataSetMap> outDataset = xpDto.getOutDataSetMap();

			lawsuitlistservice.saveInstanceAll(tranInfo, inVar, inDataset, outVar, outDataset);
			mav.addObject(XPlatformConstant.ERROR_CODE, "0");
			mav.addObject(XPlatformConstant.ERROR_MSG, "");

		} catch (Exception e) {

			e.printStackTrace();
			mav.addObject(XPlatformConstant.ERROR_CODE, "-1");
			mav.addObject(XPlatformConstant.ERROR_MSG, e.toString());
		}
		return mav;
	}*/
	
	/*@RequestMapping(value = "/lawsuit/savePladefAll.do")
	public ModelAndView savePladefAll(XPlatformMapDTO xpDto, Model model)   { 

		ModelAndView mav = new ModelAndView("xplatformMapView");
		
		try {
			DataSetMap tranInfo = xpDto.getTranInfoMap();
			Map<String, Object> inVar = xpDto.getInVariableMap();
			Map<String, DataSetMap> inDataset = xpDto.getInDataSetMap();
			Map<String, Object> outVar = xpDto.getOutVariableMap();
			Map<String, DataSetMap> outDataset = xpDto.getOutDataSetMap();

			lawsuitlistservice.savePladefAll(tranInfo, inVar, inDataset, outVar, outDataset);
			mav.addObject(XPlatformConstant.ERROR_CODE, "0");
			mav.addObject(XPlatformConstant.ERROR_MSG, "");

		} catch (Exception e) {

			e.printStackTrace();
			mav.addObject(XPlatformConstant.ERROR_CODE, "-1");
			mav.addObject(XPlatformConstant.ERROR_MSG, e.toString());
		}
		return mav;
	}*/
	
	/*@RequestMapping(value = "/lawsuit/getLawsuitNo.do")
	public ModelAndView getLawsuitNo(XPlatformMapDTO xpDto, Model model) {

		ModelAndView mav = new ModelAndView("xplatformMapView");

		try {
			DataSetMap tranInfo = xpDto.getTranInfoMap();
			Map<String, Object> inVar = xpDto.getInVariableMap();
			Map<String, DataSetMap> inDataset = xpDto.getInDataSetMap();
			Map<String, Object> outVar = xpDto.getOutVariableMap();
			Map<String, DataSetMap> outDataset = xpDto.getOutDataSetMap();

			lawsuitlistservice.getLawsuitNo(tranInfo, inVar, inDataset, outVar, outDataset);
			mav.addObject(XPlatformConstant.OUT_VARIABLES_ATT_NAME,
					xpDto.getOutVariableMap());
			mav.addObject(XPlatformConstant.OUT_DATASET_ATT_NAME,
					xpDto.getOutDataSetMap());

			mav.addObject(XPlatformConstant.ERROR_CODE, "0");
			mav.addObject(XPlatformConstant.ERROR_MSG, "");

		} catch (Exception e) {
			e.printStackTrace();
			mav.addObject(XPlatformConstant.ERROR_CODE, "-1");
			mav.addObject(XPlatformConstant.ERROR_MSG, e.toString());
		}

		return mav;
	}*/
	
	/*@RequestMapping(value = "/lawsuit/getLawsuitStatus.do")
	public ModelAndView getLawsuitStatus(XPlatformMapDTO xpDto, Model model) {

		ModelAndView mav = new ModelAndView("xplatformMapView");

		try {
			DataSetMap tranInfo = xpDto.getTranInfoMap();
			Map<String, Object> inVar = xpDto.getInVariableMap();
			Map<String, DataSetMap> inDataset = xpDto.getInDataSetMap();
			Map<String, Object> outVar = xpDto.getOutVariableMap();
			Map<String, DataSetMap> outDataset = xpDto.getOutDataSetMap();

			lawsuitlistservice.getLawsuitStatus(tranInfo, inVar, inDataset, outVar, outDataset);
			mav.addObject(XPlatformConstant.OUT_VARIABLES_ATT_NAME,
					xpDto.getOutVariableMap());
			mav.addObject(XPlatformConstant.OUT_DATASET_ATT_NAME,
					xpDto.getOutDataSetMap());

			mav.addObject(XPlatformConstant.ERROR_CODE, "0");
			mav.addObject(XPlatformConstant.ERROR_MSG, "");

		} catch (Exception e) {
			e.printStackTrace();
			mav.addObject(XPlatformConstant.ERROR_CODE, "-1");
			mav.addObject(XPlatformConstant.ERROR_MSG, e.toString());
		}

		return mav;
	}*/
	
	/*@RequestMapping(value = "/lawsuit/selectCode.do")
	public XPlatformMapDTO selectCode(XPlatformMapDTO xpDto, Model model) {
		ModelAndView mav = new ModelAndView("xplatformMapView");

		try {
			DataSetMap tranInfo = xpDto.getTranInfoMap();
			Map<String, Object> inVar = xpDto.getInVariableMap();
			Map<String, DataSetMap> inDataset = xpDto.getInDataSetMap();
			Map<String, Object> outVar = xpDto.getOutVariableMap();
			Map<String, DataSetMap> outDataset = xpDto.getOutDataSetMap();

			lawsuitlistservice.selectCode(tranInfo, inVar, inDataset, outVar, outDataset);
			mav.addObject(XPlatformConstant.OUT_VARIABLES_ATT_NAME,
					xpDto.getOutVariableMap());
			mav.addObject(XPlatformConstant.OUT_DATASET_ATT_NAME,
					xpDto.getOutDataSetMap());

			mav.addObject(XPlatformConstant.ERROR_CODE, "0");
			mav.addObject(XPlatformConstant.ERROR_MSG, "");

		} catch (Exception e) {
			e.printStackTrace();
			mav.addObject(XPlatformConstant.ERROR_CODE, "-1");
			mav.addObject(XPlatformConstant.ERROR_MSG, e.toString());
		}

		return mav;
	}*/
	
	
	/*@RequestMapping(value = "/lawsuit/getInstanceDetail.do")
	public ModelAndView getInstanceDetail(XPlatformMapDTO xpDto, Model model) {

		ModelAndView mav = new ModelAndView("xplatformMapView");

		try {
			DataSetMap tranInfo = xpDto.getTranInfoMap();
			Map<String, Object> inVar = xpDto.getInVariableMap();
			Map<String, DataSetMap> inDataset = xpDto.getInDataSetMap();
			Map<String, Object> outVar = xpDto.getOutVariableMap();
			Map<String, DataSetMap> outDataset = xpDto.getOutDataSetMap();

			lawsuitlistservice.getInstanceDetail(tranInfo, inVar, inDataset, outVar, outDataset);
			mav.addObject(XPlatformConstant.OUT_VARIABLES_ATT_NAME,
					xpDto.getOutVariableMap());
			mav.addObject(XPlatformConstant.OUT_DATASET_ATT_NAME,
					xpDto.getOutDataSetMap());

			mav.addObject(XPlatformConstant.ERROR_CODE, "0");
			mav.addObject(XPlatformConstant.ERROR_MSG, "");

		} catch (Exception e) {
			e.printStackTrace();
			mav.addObject(XPlatformConstant.ERROR_CODE, "-1");
			mav.addObject(XPlatformConstant.ERROR_MSG, e.toString());
		}

		return mav;
	}*/
	
	/*@RequestMapping(value = "/lawsuit/getinstanceListAll.do")
	public ModelAndView getinstanceListAll(XPlatformMapDTO xpDto, Model model) {

		ModelAndView mav = new ModelAndView("xplatformMapView");

		try {
			DataSetMap tranInfo = xpDto.getTranInfoMap();
			Map<String, Object> inVar = xpDto.getInVariableMap();
			Map<String, DataSetMap> inDataset = xpDto.getInDataSetMap();
			Map<String, Object> outVar = xpDto.getOutVariableMap();
			Map<String, DataSetMap> outDataset = xpDto.getOutDataSetMap();

			lawsuitlistservice.getinstanceListAll(tranInfo, inVar, inDataset, outVar, outDataset);
			mav.addObject(XPlatformConstant.OUT_VARIABLES_ATT_NAME,
					xpDto.getOutVariableMap());
			mav.addObject(XPlatformConstant.OUT_DATASET_ATT_NAME,
					xpDto.getOutDataSetMap());

			mav.addObject(XPlatformConstant.ERROR_CODE, "0");
			mav.addObject(XPlatformConstant.ERROR_MSG, "");

		} catch (Exception e) {
			e.printStackTrace();
			mav.addObject(XPlatformConstant.ERROR_CODE, "-1");
			mav.addObject(XPlatformConstant.ERROR_MSG, e.toString());
		}

		return mav;
	}*/
	
	/*@RequestMapping(value = "/lawsuit/getPlaDefDetail.do")
	public ModelAndView getPlaDefDetail(XPlatformMapDTO xpDto, Model model) {

		ModelAndView mav = new ModelAndView("xplatformMapView");

		try {
			DataSetMap tranInfo = xpDto.getTranInfoMap();
			Map<String, Object> inVar = xpDto.getInVariableMap();
			Map<String, DataSetMap> inDataset = xpDto.getInDataSetMap();
			Map<String, Object> outVar = xpDto.getOutVariableMap();
			Map<String, DataSetMap> outDataset = xpDto.getOutDataSetMap();

			lawsuitlistservice.getPlaDefDetail(tranInfo, inVar, inDataset, outVar, outDataset);
			mav.addObject(XPlatformConstant.OUT_VARIABLES_ATT_NAME,
					xpDto.getOutVariableMap());
			mav.addObject(XPlatformConstant.OUT_DATASET_ATT_NAME,
					xpDto.getOutDataSetMap());

			mav.addObject(XPlatformConstant.ERROR_CODE, "0");
			mav.addObject(XPlatformConstant.ERROR_MSG, "");

		} catch (Exception e) {
			e.printStackTrace();
			mav.addObject(XPlatformConstant.ERROR_CODE, "-1");
			mav.addObject(XPlatformConstant.ERROR_MSG, e.toString());
		}

		return mav;
	}*/
	
	/*@RequestMapping(value = "/lawsuit/getApprovalLineList.do")
	public ModelAndView getApprovalLineList(XPlatformMapDTO xpDto, Model model) {

		ModelAndView mav = new ModelAndView("xplatformMapView");

		try {
			DataSetMap tranInfo = xpDto.getTranInfoMap();
			Map<String, Object> inVar = xpDto.getInVariableMap();
			Map<String, DataSetMap> inDataset = xpDto.getInDataSetMap();
			Map<String, Object> outVar = xpDto.getOutVariableMap();
			Map<String, DataSetMap> outDataset = xpDto.getOutDataSetMap();

			lawsuitlistservice.getApprovalLineList(tranInfo, inVar, inDataset, outVar, outDataset);
			mav.addObject(XPlatformConstant.OUT_VARIABLES_ATT_NAME,
					xpDto.getOutVariableMap());
			mav.addObject(XPlatformConstant.OUT_DATASET_ATT_NAME,
					xpDto.getOutDataSetMap());

			mav.addObject(XPlatformConstant.ERROR_CODE, "0");
			mav.addObject(XPlatformConstant.ERROR_MSG, "");

		} catch (Exception e) {
			e.printStackTrace();
			mav.addObject(XPlatformConstant.ERROR_CODE, "-1");
			mav.addObject(XPlatformConstant.ERROR_MSG, e.toString());
		}

		return mav;
	}*/
	
	/*@RequestMapping(value = "/lawsuit/getLegalOfficials.do")
	public ModelAndView getLegalOfficials(XPlatformMapDTO xpDto, Model model) {

		ModelAndView mav = new ModelAndView("xplatformMapView");

		try {
			DataSetMap tranInfo = xpDto.getTranInfoMap();
			Map<String, Object> inVar = xpDto.getInVariableMap();
			Map<String, DataSetMap> inDataset = xpDto.getInDataSetMap();
			Map<String, Object> outVar = xpDto.getOutVariableMap();
			Map<String, DataSetMap> outDataset = xpDto.getOutDataSetMap();

			lawsuitlistservice.getLegalOfficials(tranInfo, inVar, inDataset, outVar, outDataset);
			mav.addObject(XPlatformConstant.OUT_VARIABLES_ATT_NAME,
					xpDto.getOutVariableMap());
			mav.addObject(XPlatformConstant.OUT_DATASET_ATT_NAME,
					xpDto.getOutDataSetMap());

			mav.addObject(XPlatformConstant.ERROR_CODE, "0");
			mav.addObject(XPlatformConstant.ERROR_MSG, "");

		} catch (Exception e) {
			e.printStackTrace();
			mav.addObject(XPlatformConstant.ERROR_CODE, "-1");
			mav.addObject(XPlatformConstant.ERROR_MSG, e.toString());
		}

		return mav;
	}*/
	
	/*@RequestMapping(value = "/lawsuit/getMgrSelect.do")
	public ModelAndView getMgrSelect(XPlatformMapDTO xpDto, Model model) {

		ModelAndView mav = new ModelAndView("xplatformMapView");

		try {
			DataSetMap tranInfo = xpDto.getTranInfoMap();
			Map<String, Object> inVar = xpDto.getInVariableMap();
			Map<String, DataSetMap> inDataset = xpDto.getInDataSetMap();
			Map<String, Object> outVar = xpDto.getOutVariableMap();
			Map<String, DataSetMap> outDataset = xpDto.getOutDataSetMap();

			lawsuitlistservice.getMgrSelect(tranInfo, inVar, inDataset, outVar, outDataset);
			mav.addObject(XPlatformConstant.OUT_VARIABLES_ATT_NAME,
					xpDto.getOutVariableMap());
			mav.addObject(XPlatformConstant.OUT_DATASET_ATT_NAME,
					xpDto.getOutDataSetMap());

			mav.addObject(XPlatformConstant.ERROR_CODE, "0");
			mav.addObject(XPlatformConstant.ERROR_MSG, "");

		} catch (Exception e) {
			e.printStackTrace();
			mav.addObject(XPlatformConstant.ERROR_CODE, "-1");
			mav.addObject(XPlatformConstant.ERROR_MSG, e.toString());
		}

		return mav;
	}*/

	/*@RequestMapping(value = "/lawsuit/lawsuitMgrManage.do")
	public ModelAndView lawsuitMgrManage(XPlatformMapDTO xpDto, Model model)   { 
	
		ModelAndView mav = new ModelAndView("xplatformMapView");
		
		try {
			DataSetMap tranInfo = xpDto.getTranInfoMap();
			Map<String, Object> inVar = xpDto.getInVariableMap();
			Map<String, DataSetMap> inDataset = xpDto.getInDataSetMap();
			Map<String, Object> outVar = xpDto.getOutVariableMap();
			Map<String, DataSetMap> outDataset = xpDto.getOutDataSetMap();
	
			lawsuitlistservice.lawsuitMgrManage(tranInfo, inVar, inDataset, outVar, outDataset);
			mav.addObject(XPlatformConstant.ERROR_CODE, "0");
			mav.addObject(XPlatformConstant.ERROR_MSG, "");
	
		} catch (Exception e) {
	
			e.printStackTrace();
			mav.addObject(XPlatformConstant.ERROR_CODE, "-1");
			mav.addObject(XPlatformConstant.ERROR_MSG, e.toString());
		}
		return mav;
	}*/
	
	/*@RequestMapping(value = "/lawsuit/getMgrList.do")
	public ModelAndView getMgrList(XPlatformMapDTO xpDto, Model model) {

		ModelAndView mav = new ModelAndView("xplatformMapView");

		try {
			DataSetMap tranInfo = xpDto.getTranInfoMap();
			Map<String, Object> inVar = xpDto.getInVariableMap();
			Map<String, DataSetMap> inDataset = xpDto.getInDataSetMap();
			Map<String, Object> outVar = xpDto.getOutVariableMap();
			Map<String, DataSetMap> outDataset = xpDto.getOutDataSetMap();

			lawsuitlistservice.getMgrList(tranInfo, inVar, inDataset, outVar, outDataset);
			mav.addObject(XPlatformConstant.OUT_VARIABLES_ATT_NAME,
					xpDto.getOutVariableMap());
			mav.addObject(XPlatformConstant.OUT_DATASET_ATT_NAME,
					xpDto.getOutDataSetMap());

			mav.addObject(XPlatformConstant.ERROR_CODE, "0");
			mav.addObject(XPlatformConstant.ERROR_MSG, "");

		} catch (Exception e) {
			e.printStackTrace();
			mav.addObject(XPlatformConstant.ERROR_CODE, "-1");
			mav.addObject(XPlatformConstant.ERROR_MSG, e.toString());
		}

		return mav;
	}*/
	
	/*@RequestMapping(value = "/lawsuit/saveAddLawsuit.do")
	public ModelAndView saveAddLawsuit(XPlatformMapDTO xpDto, Model model)   { 

		ModelAndView mav = new ModelAndView("xplatformMapView");
		
		try {
			DataSetMap tranInfo = xpDto.getTranInfoMap();
			Map<String, Object> inVar = xpDto.getInVariableMap();
			Map<String, DataSetMap> inDataset = xpDto.getInDataSetMap();
			Map<String, Object> outVar = xpDto.getOutVariableMap();
			Map<String, DataSetMap> outDataset = xpDto.getOutDataSetMap();

			lawsuitlistservice.saveAddLawsuit(tranInfo, inVar, inDataset, outVar, outDataset);
			mav.addObject(XPlatformConstant.ERROR_CODE, "0");
			mav.addObject(XPlatformConstant.ERROR_MSG, "");

		} catch (Exception e) {

			e.printStackTrace();
			mav.addObject(XPlatformConstant.ERROR_CODE, "-1");
			mav.addObject(XPlatformConstant.ERROR_MSG, e.toString());
		}
		return mav;
	}*/
	
	/*@RequestMapping(value = "/lawsuit/getLawNotiNoSearch.do")
	public ModelAndView getLawNotiNoSearch(XPlatformMapDTO xpDto, Model model) {

		ModelAndView mav = new ModelAndView("xplatformMapView");

		try {
			DataSetMap tranInfo = xpDto.getTranInfoMap();
			Map<String, Object> inVar = xpDto.getInVariableMap();
			Map<String, DataSetMap> inDataset = xpDto.getInDataSetMap();
			Map<String, Object> outVar = xpDto.getOutVariableMap();
			Map<String, DataSetMap> outDataset = xpDto.getOutDataSetMap();

			lawsuitlistservice.getLawNotiNoSearch(tranInfo, inVar, inDataset, outVar, outDataset);
			mav.addObject(XPlatformConstant.OUT_VARIABLES_ATT_NAME,
					xpDto.getOutVariableMap());
			mav.addObject(XPlatformConstant.OUT_DATASET_ATT_NAME,
					xpDto.getOutDataSetMap());

			mav.addObject(XPlatformConstant.ERROR_CODE, "0");
			mav.addObject(XPlatformConstant.ERROR_MSG, "");

		} catch (Exception e) {
			e.printStackTrace();
			mav.addObject(XPlatformConstant.ERROR_CODE, "-1");
			mav.addObject(XPlatformConstant.ERROR_MSG, e.toString());
		}

		return mav;
	}*/
	
	/*@RequestMapping(value = "/lawsuit/getNewAdmNo.do")
	public ModelAndView getNewAdmNo(XPlatformMapDTO xpDto, Model model) {

		ModelAndView mav = new ModelAndView("xplatformMapView");

		try {
			DataSetMap tranInfo = xpDto.getTranInfoMap();
			Map<String, Object> inVar = xpDto.getInVariableMap();
			Map<String, DataSetMap> inDataset = xpDto.getInDataSetMap();
			Map<String, Object> outVar = xpDto.getOutVariableMap();
			Map<String, DataSetMap> outDataset = xpDto.getOutDataSetMap();

			lawsuitlistservice.getNewAdmNo(tranInfo, inVar, inDataset, outVar, outDataset);
			mav.addObject(XPlatformConstant.OUT_VARIABLES_ATT_NAME,
					xpDto.getOutVariableMap());
			mav.addObject(XPlatformConstant.OUT_DATASET_ATT_NAME,
					xpDto.getOutDataSetMap());

			mav.addObject(XPlatformConstant.ERROR_CODE, "0");
			mav.addObject(XPlatformConstant.ERROR_MSG, "");

		} catch (Exception e) {
			e.printStackTrace();
			mav.addObject(XPlatformConstant.ERROR_CODE, "-1");
			mav.addObject(XPlatformConstant.ERROR_MSG, e.toString());
		}

		return mav;
	}*/

	@RequestMapping(value = "/lawsuit/getPlaDefList.do")
	public NexacroResult getPlaDefList(
			@ParamVariable(name = "lawsuitAdmNo") String lawsuitAdmNo,
			@ParamVariable(name = "instAdmCode") String instAdmCode) {
		Map<String, Object> getPlaDefDetail = new HashMap<String, Object>();
		getPlaDefDetail.put("lawsuitAdmNo",lawsuitAdmNo);
		getPlaDefDetail.put("instAdmCode",instAdmCode);
		List<Lawsuit_ListVO> getPlaDefDetail_List = lawsuitlistservice.getPlaDefDetail(getPlaDefDetail);
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output", getPlaDefDetail_List);
		return result;
	}
	@RequestMapping(value = "/lawsuit/updatePlaDefAll.do")
	public NexacroResult updatePlaDefAll(
			@ParamDataSet(name = "ds_input") Lawsuit_ListVO pladefIn) {
		NexacroResult result = new NexacroResult();
		try{
			int upRes= lawsuitlistservice.updatePlaDefAll(pladefIn);
		}catch(Exception e){
			result.setErrorCode(-1);
			result.setErrorMsg(e.toString());
		}
		return result;
	}
	
}