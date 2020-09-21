package nexacro.sample.service.dao.ibatis.com;

import java.util.List;
import java.util.Map;

import nexacro.sample.vo.administrator.AdmVO;
import nexacro.sample.vo.com.InsaAcptVO;

import org.springframework.stereotype.Repository;

import com.nexacro.spring.dao.ibatis.NexacroIbatisAbstractDAO;

@Repository("insaAcptDAO")
public class InsaAcptDAO extends NexacroIbatisAbstractDAO{

	// 인사관리 직원 정보 조회
	// 사원 승인내역 조회
	public List<InsaAcptVO> selectInsaAcptList(InsaAcptVO insaAcptVO){
		return (List<InsaAcptVO>) list("com.InsaAcptDAO.selectinsaAcptList", insaAcptVO);
	}
	
	// 사원 승인내역 정보 저장
	public void saveInsaAcptList(Map<String, Object> insaMap){
		update("com.InsaAcptDAO.updateInsaAcptList", insaMap);
	}
	
	// 인사관리 정보 저장 
	public void saveInsaList(Map<String, Object> insaMap){
		update("com.InsaAcptDAO.updateInsaList", insaMap);
	}

	// 인사관리 삽입
	public void insertInsaList(InsaAcptVO insaAcptVO) {
		insert("com.InsaAcptDAO.insertInsaList", insaAcptVO);
	}
	
	// 인사관리 삭제
	public void deleteInsaList(InsaAcptVO insaAcptVO) {
		delete("com.InsaAcptDAO.deleteInsaList", insaAcptVO);
	}
	
	
	
}
