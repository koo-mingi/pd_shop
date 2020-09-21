package nexacro.sample.web.apprline;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import nexacro.sample.service.apprline.ApprLineService;
import nexacro.sample.service.noti.LawsuitNotiService;
import nexacro.sample.vo.apprline.ApprInsaVO;
import nexacro.sample.vo.apprline.ApprLineVO;
import nexacro.sample.vo.lawsuit.Lawsuit_ListVO;
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
import com.nexacro.xapi.data.DataSet;

@Controller
public class ApprLineController {
	
	private static final Logger Log = LoggerFactory
			.getLogger(ApprLineController.class);
	
	@Resource(name = "apprlineservice")
	private ApprLineService apprlineservice;
	
	@Resource
	private Validator validator;
	
	@InitBinder
	public void initBinder(WebDataBinder dataBinder) {
		dataBinder.setValidator(this.validator);
	}
	@RequestMapping(value="/apprline/ApprovalLineList.do")
	public NexacroResult ApprovalLineList() throws Exception{
	
		List approvalLineList = apprlineservice.getApprovalLineList();
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output", approvalLineList);
		return result;
	}
	
	@RequestMapping(value="/apprline/ApprovalLineListCode.do")
	public NexacroResult ApprovalLineListCode(
			@ParamDataSet(name = "ds_appr", required = false) ApprLineVO apprLineVO	) throws Exception{

		System.out.println("ddddddddddddddfffㅇㅇㅇㅇㅇㅇㅇㅇㅇ이ㅣ: "+apprLineVO.getAprvlineAdmProcCode());
		List approvalLineList = apprlineservice.getApprovalLineListCode(apprLineVO);
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output", approvalLineList);

		return result;
	}
	
	@RequestMapping(value="/apprline/ApprLineDetailL.do")
	public NexacroResult ApprLineDetailL(
			@ParamDataSet(name = "ds_new", required = false) ApprLineVO apprLineVO	) throws Exception{

		List apprLineList = apprlineservice.getApprLineDetailList(apprLineVO); // 결재라인조회 리스트;
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output", apprLineList);

		return result;
	}

	//사원조회
	@RequestMapping(value="/apprline/ApprovalList.do")
	public NexacroResult ApprovalList(
			@ParamVariable(name = "sabun") String sabun,
			@ParamVariable(name = "deptI") String deptI) throws Exception{
		System.out.println("칸트롤 에러일리가...ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ");
		Map<String, Object> param  = new HashMap<String, Object>();
		param.put("sabun", sabun);
		param.put("deptI", deptI);
		List approvalList  = apprlineservice.getApprovalList(param); // 결재라인조회 리스트;
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output", approvalList );
		System.out.println("사원야 : "+result.getDataSets());
		return result;
	}
	
	//결재라인 삭제 
	@RequestMapping(value="/apprline/deleteappr.do")
	public NexacroResult deleteAppr(
			@ParamVariable(name = "code_no") String aprvlineAdmProcCode,
			@ParamVariable(name = "seq_no") String aprvlineAdmSeq,
			@ParamVariable(name = "id_no") String aprvlineAdmAprvId) throws Exception{
		
		Map<String, Object> param  = new HashMap<String, Object>();
		param.put("aprvlineAdmProcCode", aprvlineAdmProcCode);
		param.put("aprvlineAdmSeq", aprvlineAdmSeq);
		param.put("aprvlineAdmAprvId", aprvlineAdmAprvId);
		
		apprlineservice.DeleteAppr(param); // 결재라인조회 리스트;
		NexacroResult result = new NexacroResult();

		return result;
	}
	
	//결재라인 등록, 수정
	@RequestMapping(value="/apprline/insertappr.do")
	public NexacroResult insertAppr(
			@ParamDataSet(name = "ds_input", required = false) List<ApprLineVO> apprLineVO) throws Exception{
	System.out.println("등록 컨트터터터터"+apprLineVO.get(0).getAprvlineAdmAprvDeptId());
	int  savekkey=0;
	NexacroResult result  = new NexacroResult();
	try {
	
		apprlineservice.InsertAppr(apprLineVO);
		savekkey=0;
	} catch (Exception e) {
		savekkey=-1;
		result.setErrorCode(1);
		result.setErrorMsg("fail");
		System.out.println("야 : "+result.getErrorMsg());
		return result;
	}
	
	//
	//result.addVariable("ErrorCode",savekkey);
	result.setErrorCode(0);
	result.setErrorMsg("success");
	System.out.println("야호: "+result.getErrorMsg());
	return result;
	
	}
}

