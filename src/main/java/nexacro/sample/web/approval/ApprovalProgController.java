package nexacro.sample.web.approval;

import java.util.List;

import javax.annotation.Resource;

import nexacro.sample.service.approval.ApprovalService;
import nexacro.sample.vo.approval.ApprovalProgVO;

import org.springframework.stereotype.Controller;
import org.springframework.validation.Validator;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;

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
public class ApprovalProgController {
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
	
	//작성자 정보 조회
	@RequestMapping(value = "/approvalProg/getAprvWriter.do")
	public NexacroResult approvalList(@ParamVariable(name = "insaSabun") String sabun) {

		NexacroResult result = new NexacroResult();

		try{
			
			List<ApprovalProgVO> approvalWriter = approvalService.getApprovalWriter(sabun);
			// System.out.println("hj : "+approvalWriter.get(1));
			

			result.addDataSet("ds_output", approvalWriter);

		} catch (Exception e) {
			e.printStackTrace();
		}
			
		return result;
	}
	
}