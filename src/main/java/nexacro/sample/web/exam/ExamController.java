package nexacro.sample.web.exam;

import java.util.List;

import javax.annotation.Resource;

import nexacro.sample.service.exam.ExamService;
import nexacro.sample.vo.exam.ExamVO;
import nexacro.sample.vo.exam.InjuryTypeList;
import nexacro.sample.vo.exam.PhyAprsCodeVO;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.spring.annotation.ParamDataSet;
import com.nexacro.spring.annotation.ParamVariable;
import com.nexacro.spring.data.NexacroResult;

@Controller
public class ExamController {

	@Resource(name = "examService")
	ExamService examService;

	// TAB_PHY_APRS조회
	@RequestMapping(value = "/exam/phyAprsSelect.do")
	public NexacroResult getPhyAprsInfo(
			@ParamDataSet(name = "ds_search") ExamVO vo) {

		List<ExamVO> list = examService.phyAprsSelect(vo);

		NexacroResult result = new NexacroResult();

		if(list.size()!=0){
			result.addDataSet("ds_phyAprs", list);
		}
		
		return result;
	}

	// TAB_EXAMINATION조회
	@RequestMapping(value = "/exam/examSelect.do")
	public NexacroResult getExamInfo(
				@ParamDataSet(name = "ds_search") ExamVO vo
			,	@ParamVariable(name = "lawsuit_adm_no", required = false) String lawsuit_adm_no
			,	@ParamVariable(name = "inst_adm_no", required = false) String inst_adm_no
			,	@ParamVariable(name = "phy_aprs_code", required = false) String phy_aprs_code
			) {

		System.out.println("=======EXAMINATION조회=======");

		NexacroResult result = new NexacroResult();
		
		if(lawsuit_adm_no != null){
			vo.setLawsuitAdmNo(lawsuit_adm_no);
		}
		if(inst_adm_no != null){
			vo.setInstAdmCode(inst_adm_no);
		}
		if(phy_aprs_code != null){
			vo.setPhyAprsCode(phy_aprs_code);
		}
		
		
		List<ExamVO> examVO = examService.examSelect(vo);
		
		if(examVO!=null){
			for(ExamVO tmp : examVO){
				tmp.setExaminationTime(tmp.getExaminationTime().substring(0, 10).replace("-", ""));
			}
			result.addDataSet("ds_examination", examVO);
			System.out.println("GETDATASET::"+result.getDataSets());
		}
		return result;
	}

	
	@RequestMapping(value = "/exam/injurySelect.do")
	public NexacroResult getInjury(@ParamDataSet(name = "ds_search") ExamVO vo) {

		List<ExamVO> list = examService.injurySelect(vo);
		NexacroResult result = new NexacroResult();
		
		if(list.size()==0){

		}
		else{
			result.addDataSet("ds_output", list);
			System.out.println("@@@@@@@@@@@@@"+result.getDataSets());
		}
		
		return result;
	}

	
	@RequestMapping(value="/exam/getPhyAprsCodeInfo.do")
	public NexacroResult getPhyAprsCodeInfo(@ParamDataSet(name="ds_search") ExamVO vo){
		
		List<PhyAprsCodeVO> listCode = examService.getPhyAprsCodeInfo(vo);
		
		NexacroResult result = new NexacroResult();
		
		result.addDataSet("ds_phyAprsCode", listCode);
		
		return result;
	}
	
	
	@RequestMapping(value="/exam/getPopExamList.do")
	public NexacroResult getPopExamList(){
		
		List<InjuryTypeList> list = examService.getPopExamList();
		
		NexacroResult result = new NexacroResult();
		
		result.addDataSet("ds_injuryDetail", list);
		return result;
	}
	
	
	@RequestMapping(value="/exam/injurySave.do")
	public NexacroResult injurySave(
			@ParamDataSet(name="ds_injury")List<ExamVO> ds_injury){

		String strResult=examService.injurySave(ds_injury);
		
		NexacroResult result = new NexacroResult();
		
		return result;
	}
		
	@RequestMapping(value="/exam/phySave.do")
	public NexacroResult phySave(
			@ParamDataSet(name="ds_phyAprs")List<ExamVO> vo){
		
		System.out.println("@@@@@@@"+vo);
		
		examService.phySave(vo);
		
		return new NexacroResult();
	}

	@RequestMapping(value="/exam/examSave.do")
	public NexacroResult examSave(
			@ParamDataSet(name="ds_examination")ExamVO vo){
		
		examService.examSave(vo);
		
		return new NexacroResult();
	}
	
}
