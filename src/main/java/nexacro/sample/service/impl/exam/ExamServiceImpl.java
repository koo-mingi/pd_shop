package nexacro.sample.service.impl.exam;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.nexacro.spring.data.DataSetRowTypeAccessor;
import com.nexacro.xapi.data.DataSet;

import nexacro.sample.service.dao.ibatis.exam.ExamDAO;
import nexacro.sample.service.exam.ExamService;
import nexacro.sample.vo.exam.ExamVO;
import nexacro.sample.vo.exam.InjuryTypeList;
import nexacro.sample.vo.exam.PhyAprsCodeVO;

@Service("examService")
public class ExamServiceImpl implements ExamService {

	@Resource(name="examDao")
	ExamDAO examDao;
	
	@Override
	public List<ExamVO> phyAprsSelect(ExamVO vo) {
		return examDao.phyAprsSelect(vo);
	}

	@Override
	public List<ExamVO> examSelect(ExamVO vo) {
		return examDao.examSelect(vo);
	}

	@Override
	public List<ExamVO> injurySelect(ExamVO vo) {
		return examDao.injurySelect(vo);
	}

	@Override
	public List<PhyAprsCodeVO> getPhyAprsCodeInfo(ExamVO vo) {
		return examDao.getPhyAprsCodeInfo(vo);
	}

	@Override
	public List<InjuryTypeList> getPopExamList() {
		return examDao.getPopExamList();
	}

	@Override
	public String injurySave(List<ExamVO> list) {

		String result="";
		
		for(int i = 0 ; i < list.size(); i++){
			ExamVO vo = list.get(i);
			DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor) vo;
			
			System.out.println("@@@@@@"+accessor.getRowType());
			
			if(accessor.getRowType()==DataSet.ROW_TYPE_DELETED){
				result="Delete";
				examDao.injuryDelete(vo);
			}
			else if(accessor.getRowType()==DataSet.ROW_TYPE_UPDATED){
				
				result="Update";
			}
			else if(accessor.getRowType()==DataSet.ROW_TYPE_INSERTED){
				result="Insert";
				examDao.injuryInsert(vo);
			}
		}
		return result;
	}

	

	@Override
	public String phySave(List<ExamVO> voList) {
		
		String result="";
		
		for(int i = 0 ; i < voList.size() ; i++){
			ExamVO vo = voList.get(i);
			
			DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor) vo;
			System.out.println("@@@@@@"+accessor.getRowType());
			if(accessor.getRowType()==DataSet.ROW_TYPE_UPDATED){
				result="Update";
				examDao.phyAprsUpdate(vo);
			}
			else if(accessor.getRowType()==DataSet.ROW_TYPE_INSERTED){
				result="Insert";
				examDao.phyAprsInsert(vo);
			}
		}
		
		return result;
	}

	@Override
	public String examSave(ExamVO vo) {
		String result="";
		DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor) vo;
		
		System.out.println("@@@@@@"+accessor.getRowType());
		
		if(accessor.getRowType()==DataSet.ROW_TYPE_UPDATED){
			result="Update";
			examDao.examUpdate(vo);
		}
		else if(accessor.getRowType()==DataSet.ROW_TYPE_INSERTED){
			result="Insert";
			examDao.examInsert(vo);
		}
		
		return result;
	}

	

}
