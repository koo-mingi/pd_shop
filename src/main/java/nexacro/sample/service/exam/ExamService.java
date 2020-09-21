package nexacro.sample.service.exam;

import java.util.List;

import nexacro.sample.vo.exam.ExamVO;
import nexacro.sample.vo.exam.InjuryTypeList;
import nexacro.sample.vo.exam.PhyAprsCodeVO;

public interface ExamService {

	public List<ExamVO> phyAprsSelect(ExamVO vo);
	
	public List<ExamVO> examSelect(ExamVO vo);
	
	public List<ExamVO> injurySelect(ExamVO vo);

	public List<PhyAprsCodeVO> getPhyAprsCodeInfo(ExamVO vo);
	
	public List<InjuryTypeList> getPopExamList();
	
	public String injurySave(List<ExamVO> list);
	
	public String phySave(List<ExamVO> vo);
	
	public String examSave(ExamVO vo);
}
