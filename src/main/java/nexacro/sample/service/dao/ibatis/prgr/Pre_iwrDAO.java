package nexacro.sample.service.dao.ibatis.prgr;

import java.util.List;
import java.util.Map;

import nexacro.sample.vo.prgr.Pre_iwrVO;

import org.springframework.stereotype.Repository;

import com.nexacro.spring.dao.ibatis.NexacroIbatisAbstractDAO;

@Repository("pre_iwrDao")
public class Pre_iwrDAO extends NexacroIbatisAbstractDAO {

	
	@SuppressWarnings("unchecked")
	public List<Pre_iwrVO> getInstAdm(Pre_iwrVO vo) {
		return (List<Pre_iwrVO>)list("prgr.Pre_iwrDAO.getInstAdm", vo);
	}
	
	@SuppressWarnings("unchecked")
	public List<Pre_iwrVO> getPreIwr(Pre_iwrVO vo) {
		return (List<Pre_iwrVO>)list("prgr.Pre_iwrDAO.getPreIwr", vo);
	}

	@SuppressWarnings("unchecked")
	public List<Pre_iwrVO> getJudgName() {
		return (List<Pre_iwrVO>)list("prgr.Pre_iwrDAO.getJudgName");
	}
	
	@SuppressWarnings("unchecked")
	public List<Pre_iwrVO> getLawyerName() {
		return (List<Pre_iwrVO>)list("prgr.Pre_iwrDAO.getLawyerName");
	}
	
	@SuppressWarnings("unchecked")
	public void pre_iwrInsert(Pre_iwrVO vo) {
		insert("prgr.Pre_iwrDAO.pre_iwr_insert", vo);
	}

	@SuppressWarnings("unchecked")
	public void pre_iwrDelete(Pre_iwrVO vo) {
		insert("prgr.Pre_iwrDAO.pre_iwr_delete", vo);
	}
	
	@SuppressWarnings("unchecked")
	public void pre_iwrUpdate(Pre_iwrVO vo) {
		insert("prgr.Pre_iwrDAO.pre_iwr_update", vo);
	}
	
	
	
	/*
	
	@SuppressWarnings("unchecked")
	public List<Pre_iwrVO> get_pre_iwr(Map<String, Object> get_pre_iwrMap) {
		// TODO Auto-generated method stub
		return (List<Pre_iwrVO>)list("prgr.Pre_iwrDAO.get_pre_iwr", get_pre_iwrMap);
	}

	//저장
	public void pre_iwrSave1(Pre_iwrVO pre_iwrVO) {
		// TODO Auto-generated method stub
		insert("prgr.Pre_iwrDAO.pre_iwrSave",pre_iwrVO);
	}

	// 수정
		public void pre_iwrUpdate1(Pre_iwrVO pre_iwrVO) {
			update("prgr.Pre_iwrDAO.pre_iwrUpdate",pre_iwrVO);
			
		}
		
		// 삭제
		public void pre_iwrDelect(Pre_iwrVO pre_iwrVO) {
			delete("prgr.Pre_iwrDAO.pre_iwrDelect",pre_iwrVO);
			
		}*/
		
	/*// 저장
		public void pre_iwrsave(Pre_iwrVO pre_iwrVO) {
			// TODO Auto-generated method stub
			insert("pre_iwr.pre_iwrDao.pre_iwrsave",pre_iwrVO);
		}
		
		// 수정
		public void pre_iwrupdate(Pre_iwrVO pre_iwrVO) {
			update("pre_iwr.pre_iwrDao.pre_iwrupdate",pre_iwrVO);
			
		}
		
		// 삭제
		public void pre_iwrdelect(Pre_iwrVO pre_iwrVO) {
			delete("pre_iwr.pre_iwrDao.pre_iwrdelect",pre_iwrVO);
			
		}*/
		

}
