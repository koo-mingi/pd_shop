package nexacro.sample.service.dao.ibatis.exam;

import java.util.List;

import nexacro.sample.vo.exam.ExamVO;
import nexacro.sample.vo.exam.InjuryTypeList;
import nexacro.sample.vo.exam.PhyAprsCodeVO;

import org.springframework.stereotype.Repository;

import com.nexacro.spring.dao.ibatis.NexacroIbatisAbstractDAO;

@Repository("examDao")
public class ExamDAO extends NexacroIbatisAbstractDAO {

	//TAB_PHY_APRS조회
	public List<ExamVO> phyAprsSelect(ExamVO vo){
		return (List<ExamVO>) list("exam.ExamDAO.phyAprsSelect", vo);
	}
	
	public List<ExamVO> examSelect(ExamVO vo){
		return (List<ExamVO>) list("exam.ExamDAO.examSelect", vo);
	}
	
	public List<ExamVO> injurySelect(ExamVO vo){
		return (List<ExamVO>) list("exam.ExamDAO.InjurySelect", vo);
	}
	
	public List<PhyAprsCodeVO> getPhyAprsCodeInfo(ExamVO vo){
		return (List<PhyAprsCodeVO>) list("exam.ExamDAO.getPhyAprsCodeInfo", vo);
	}
	
	public List<InjuryTypeList> getPopExamList(){
		return (List<InjuryTypeList>) list("exam.ExamDAO.getPopExamList");
	}
	
	public void injuryDelete(ExamVO vo){
		delete("exam.ExamDAO.deleteInjury", vo);
	}
	
	public void injuryInsert(ExamVO vo){
		insert("exam.ExamDAO.insertInjury", vo);
	}

	
  	public void phyAprsInsert(ExamVO vo){
		insert("exam.ExamDAO.insertPhyAprs", vo);
	}
	
  	public void phyAprsUpdate(ExamVO vo){
  		update("exam.ExamDAO.updatePhyAprs", vo);
  	}
  	
  	
	public void examInsert(ExamVO vo){
		insert("exam.ExamDAO.insertExam", vo);
	}
 
	public void examUpdate(ExamVO vo){
		update("exam.ExamDAO.updateExam", vo);
	}
	
	
	
}
