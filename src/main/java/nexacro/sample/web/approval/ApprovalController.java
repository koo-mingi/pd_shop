package nexacro.sample.web.approval;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import nexacro.sample.service.approval.ApprovalService;
import nexacro.sample.vo.approval.ApprovalAllVo;
import nexacro.sample.vo.approval.ApprovalDefVO;
import nexacro.sample.vo.approval.ApprovalTotalVO;

import org.springframework.stereotype.Controller;
import org.springframework.validation.Validator;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.spring.annotation.ParamDataSet;
import com.nexacro.spring.annotation.ParamVariable;
import com.nexacro.spring.data.NexacroResult;
/*
import pd_law.lawsuit.service.Lawsuit_ListService;
import egovframework.rte.cmmn.ria.xplatform.XPlatformConstant;
import egovframework.rte.cmmn.ria.xplatform.map.DataSetMap;
import egovframework.rte.cmmn.ria.xplatform.map.XPlatformMapDTO;
import egovframework.rte.fdl.property.EgovPropertyService;
*/
@Controller
public class ApprovalController {
	@Resource(name = "approvalService")
	public ApprovalService approvalService;
	
	/*@Resource(name = "propertiesService")
	private EgovPropertyService propertiesService;*/
	
	@Resource
	private Validator validator;

	@InitBinder
	public void initBinder(WebDataBinder dataBinder) {
		dataBinder.setValidator(this.validator);
	}
	
	//전체결재진행상태 조회
	@RequestMapping(value = "/approval/approvalAll.do")
	public NexacroResult approvalTotal(@ParamVariable(name = "code") String code ) {
		
		Map<String, Object> param  = new HashMap<String, Object>();
		param.put("code", code);
		List<ApprovalAllVo> ApprovalAllList = approvalService.getApprovalAllList(param);
		NexacroResult result = new NexacroResult();

		result.addDataSet("ds_output", ApprovalAllList);
		return result;
	}
	//전체결재진행상태 POP조회
	@RequestMapping(value = "/approval/approvalAllPOP.do")
	public NexacroResult approvalTotalPOP(@ParamVariable(name = "code") String code ) {
		System.out.println("popppppppppppppp");
		Map<String, Object> param  = new HashMap<String, Object>();
		param.put("code", code);
		List<ApprovalAllVo> ApprovalAllList = approvalService.getApprovalAllListPOP(param);
		NexacroResult result = new NexacroResult();

		result.addDataSet("ds_output", ApprovalAllList);
		return result;
	}
	//결제라인 리스트 가져오기
	@RequestMapping(value="/approval/approvalLineList.do")
	public NexacroResult depositList(ApprovalTotalVO approvalTotalVO
			, @ParamVariable(name = "APRVPRGR_INFO_STEP_CODE") 	String aprvprgrInfoStepCode 
			, @ParamVariable(name = "APRVPRGR_INFO_BOOK_NO") 	String aprvprgrInfoBookNo 
			) throws Exception{
		
		NexacroResult result = new NexacroResult();
		try {
			
			approvalTotalVO.setAprvprgrInfoStepCode(aprvprgrInfoStepCode);
			approvalTotalVO.setAprvprgrInfoBookNo(aprvprgrInfoBookNo);
			
			List<ApprovalTotalVO> outList = approvalService.getApprovalLineList(approvalTotalVO);
			System.out.println("approvalLineList >> " + outList);
			

			if( outList.size() > 0){
				result.addDataSet("ds_output", outList);
			}
			
			

		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return result;
	}
	
	
	//결제라인 리스트 가져오기
	@RequestMapping(value="/approval/approvalPigList.do")
	public NexacroResult approvalPigList(ApprovalTotalVO approvalTotalVO,
			@ParamVariable(name = "out_no") String out_no,
			@ParamVariable(name = "out_no1") String out_no1,
			@ParamVariable(name = "out_no2", required = false) String out_no2) throws Exception{
		NexacroResult result = new NexacroResult();
		
		try {
			
			approvalTotalVO.setAprvlineAdmProcCode(out_no);
			approvalTotalVO.setClassCode(out_no1);
			approvalTotalVO.setAprvlineAdmSeq(out_no2);
			
			List<ApprovalTotalVO> outList = approvalService.getApprovalPigList(approvalTotalVO);
			
//			mav.addObject("MiResultCode", "0");
//			mav.addObject("MiResultMsg", "success");	

			result.addDataSet("ds_output", outList);
			

		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return result;
	}
	
	
/*	//작성자 정보 조회
	@RequestMapping(value = "/approval/getAprvWriter.do")
	public ModelAndView approvalList(@ParamVariable(name = "insaSabun") String sabun) {

			ModelAndView mav = new ModelAndView("miplatformViewByMap");

			try{
//				Map<String, String> param = miDTO.getVariableList(); // 마이플랫폼 값을 받아옴
				
//				String sabun = param.get("insaSabun");
				
				List<ApprovalProgVO> approvalWriter = approvalService.getApprovalWriter(sabun);
				// System.out.println("hj : "+approvalWriter.get(1));
				
				mav.addObject("MiResultCode", "0");
				mav.addObject("MiResultMsg", "success");

				mav.addObject("ds_output", approvalWriter);
*/

	// 결재전체조회
		@RequestMapping(value = "/approval/approvalStats.do")
		public NexacroResult approvalStats(@ParamDataSet(name = "ds_input") ApprovalTotalVO approvalTotalVO ) {
			
			List<ApprovalTotalVO> approvalStats = approvalService.getApprovalStats(approvalTotalVO);
			NexacroResult result = new NexacroResult();

			result.addDataSet("ds_output", approvalStats);
			return result;
		}
		
		// 결재리스트 전체조회
		@RequestMapping(value = "/approval/ApprovalTotalList.do")
		public NexacroResult approvalTotalList(@ParamDataSet(name = "ds_input") ApprovalTotalVO approvalTotalVO ) {
			
			List<ApprovalTotalVO> approvalTotalList = approvalService.getApprovalTotalList(approvalTotalVO);
			NexacroResult result = new NexacroResult();

			result.addDataSet("ds_output", approvalTotalList);
			return result;
		}

	
	
	//기안자&결재자 등록
	@RequestMapping(value="/approval/createProg.do")
	public NexacroResult createProg(
			@ParamDataSet(name = "ds_input", required = false) List<ApprovalDefVO> voObject,
			@ParamVariable(name = "rowType", required = false) String rowType 
			) throws Exception {
		
		NexacroResult result = new NexacroResult();
		
		//System.out.println("여기!!!!!!!!!!!!!!!!!!!!!!!! 5555555555" + voObject.toString());
		
		try {
//			System.out.println("hj100 ================================================= "+voObject.toString());
			approvalService.createProg(voObject,rowType);
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return result;
	}
	
	//결재자 정보 조회
	@RequestMapping(value = "/approval/aprvInsertList.do")
	public NexacroResult aprvInsertList(@ParamVariable(name = "aprvprgrInfoBookNo") String aprvprgrInfoBookNo
			, @ParamVariable(name = "aprvInfoSabun")String aprvInfoSabun) {
	
		NexacroResult result = new NexacroResult();

		try{
			ApprovalTotalVO approvalTotalVO = new ApprovalTotalVO();
			
			approvalTotalVO.setAprvprgrInfoBookNo(aprvprgrInfoBookNo);
			approvalTotalVO.setAprvInfoSabun(aprvInfoSabun);			
			
		//	System.out.println(approvalTotalVO.getAprvprgrInfoStepCode()+approvalTotalVO.getAprvprgrInfoStepCode()+"asdadsasa==============");
			
			
			List<ApprovalTotalVO> aprvInsertList = approvalService.getAprvInsertList(approvalTotalVO);
			
		//	System.out.println(aprvInsertList.size()+"1asdfgasdfgasdfasdf====================");
			

			result.addDataSet("ds_output", aprvInsertList);

		} catch (Exception e) {
			e.printStackTrace();
		}
			
		return result;
	}
	
	// 1차 Comment 수정
	@RequestMapping(value = "/approval/approvalCommentUpdate.do")
	public NexacroResult updateComment(@ParamDataSet(name = "ds_input", required = false) List<ApprovalTotalVO> voList) throws Exception {
		NexacroResult result = new NexacroResult();
		
		try	{
			approvalService.updateComment(voList);
		} catch ( Exception e ) {
			e.printStackTrace();
		}
		return result;
	}
	
	// 반려
	@RequestMapping(value = "/approval/approvalrejectComment.do")
	public NexacroResult rejectComment(@ParamDataSet(name = "ds_input", required = false) List<ApprovalTotalVO> voList) throws Exception {
		NexacroResult result = new NexacroResult();
		
		try
		{
			
			approvalService.rejectComment(voList);
			
		} catch ( Exception e )	{
			e.printStackTrace();
		}
		return result;
	}
	
	// 2,3차 결재자  삭제
	@RequestMapping(value="/approval/approvalDeleteComment.do")
	public NexacroResult approvalDeleteComment(
			@ParamVariable(name = "APRVPRGR_INFO_BOOK_NO", 	 required = false) String APRVPRGR_INFO_BOOK_NO
		,	@ParamVariable(name = "APRVPRGR_INFO_STEP_CODE", required = false) String APRVPRGR_INFO_STEP_CODE
			) throws Exception {
		
		ApprovalTotalVO approvalTotalVO  = new ApprovalTotalVO();
		NexacroResult result = new NexacroResult();
		
		try {
            approvalTotalVO.setAprvprgrInfoBookNo(APRVPRGR_INFO_BOOK_NO);
            approvalTotalVO.setAprvprgrInfoStepCode(APRVPRGR_INFO_STEP_CODE);
            //approvalTotalVO.setAprvInfoCondCode(param.get("APRV_INFO_COND_CODE"));
   			System.out.println("hhj : "+approvalTotalVO.getAprvprgrInfoBookNo());
            
            approvalService.approvalDeleteComment(approvalTotalVO);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
		
	}
	
	// Comment 등록
	@RequestMapping(value = "/approval/approvalComment.do")
	public NexacroResult insertComment(
				@ParamDataSet(name = "ds_input", required = false) List<ApprovalTotalVO> voList
			) throws Exception {
		NexacroResult result = new NexacroResult();
		
		try
		{
			approvalService.createComment(voList);
			
		} catch ( Exception e )	{
			e.printStackTrace();
		}
		return result;
	}
	
	// 4차 결재자  삭제
	@RequestMapping(value="/approval/approvalDeleteComment4.do")
	public NexacroResult approvalDeleteComment4(
			@ParamVariable(name = "APRVPRGR_INFO_BOOK_NO", required = false) String APRVPRGR_INFO_BOOK_NO
			) throws Exception {
		
		ApprovalTotalVO approvalTotalVO  = new ApprovalTotalVO();
		NexacroResult result = new NexacroResult();
		
		try {
		
            approvalTotalVO.setAprvprgrInfoBookNo(APRVPRGR_INFO_BOOK_NO);
   			System.out.println("hhj : "+approvalTotalVO.getAprvprgrInfoBookNo());
		
            approvalService.approvalDeleteComment4(approvalTotalVO);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
		
	}

}