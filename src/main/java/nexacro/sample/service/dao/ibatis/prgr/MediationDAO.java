package nexacro.sample.service.dao.ibatis.prgr;

import java.util.List;
import java.util.Map;

import nexacro.sample.vo.prgr.MediationVO;
import nexacro.sample.vo.prgr.SimVO;

import org.springframework.stereotype.Repository;

import com.nexacro.spring.dao.ibatis.NexacroIbatisAbstractDAO;

@Repository("mediationDao")
public class MediationDAO extends NexacroIbatisAbstractDAO {
	
	//기본사항조회
	@SuppressWarnings("unchecked")
	public List<MediationVO> mediationSelect(Map<String, Object> selectMap) {
		// TODO Auto-generated method stub
		return (List<MediationVO>)list("prgr.MediationDAO.mediationSelect", selectMap);
	}
	
	//원피고조회
	@SuppressWarnings("unchecked")
	public List<MediationVO> pladefSelect(Map<String, Object> selectMap) {
		// TODO Auto-generated method stub
		return (List<MediationVO>)list("prgr.MediationDAO.pladefSelect", selectMap);
	}
	
	//조정안조회
	@SuppressWarnings("unchecked")
	public List<MediationVO> bottomSearch(Map<String, Object> selectMap) {
		// TODO Auto-generated method stub
		return (List<MediationVO>)list("prgr.MediationDAO.bottomSearch", selectMap);
	}
	
	//심급조회
	public List<SimVO> getSimInfo (Map<String, Object> selectMap){
		return (List<SimVO>) list("prgr.MediationDAO.getSimInfo", selectMap);
	}
	
	//저장
	public void mediationSave(MediationVO mediationVO) {
		// TODO Auto-generated method stub
		insert("prgr.MediationDAO.mediationSave",mediationVO);
	}
	
	//수정
	public void mediationUpdate(MediationVO mediationVO) {
		// TODO Auto-generated method stub
		update("prgr.MediationDAO.mediationUpdate",mediationVO);		
	}
	
	//삭제
	public void mediationDelect(MediationVO mediationVO) {
		// TODO Auto-generated method stub
		delete("prgr.MediationDAO.mediationDelect",mediationVO);
	}

	public String getCount(MediationVO vo) {
		return (String)getSqlMapClientTemplate().queryForObject("prgr.MediationDAO.getCount", vo);
	}

	public String getLastCount(MediationVO vo) {
		return (String)getSqlMapClientTemplate().queryForObject("prgr.MediationDAO.getLastCount", vo);
	}

	public String selectMediationSeq(MediationVO vo) {
		return (String)getSqlMapClientTemplate().queryForObject("prgr.MediationDAO.selectMediationSeq", vo);
	}

}
