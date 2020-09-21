package nexacro.sample.service.dao.ibatis.prgr;

import java.util.List;
import java.util.Map;

import nexacro.sample.vo.prgr.Ales_sueVO;

import org.springframework.stereotype.Repository;

import com.nexacro.spring.dao.ibatis.NexacroIbatisAbstractDAO;

@Repository("ales_sueDao")
public class Ales_sueDAO extends NexacroIbatisAbstractDAO  {
	
	public List<Ales_sueVO> law_suitSelect(Map<String, Object> selectMap) {

		return (List<Ales_sueVO>)list("prgr.Ales_sueDAO.getLawSuitSelect", selectMap);
	}
	
	public List<Ales_sueVO> pla_defSelect(Map<String, Object> selectMap) {

		return (List<Ales_sueVO>)list("prgr.Ales_sueDAO.getPlaDefSelect", selectMap);
	}
	
	public List<Ales_sueVO> ales_sueSelect(Map<String, Object> selectMap) {

		return (List<Ales_sueVO>)list("prgr.Ales_sueDAO.getAlesSueSelect", selectMap);
	}
	
	public void ales_sueSave(Ales_sueVO ales_sueVO) {

		insert("prgr.Ales_sueDAO.ales_sueSave", ales_sueVO);
	}

	public void ales_sueUpdate(Ales_sueVO ales_sueVO) {
		
		update("prgr.Ales_sueDAO.ales_sueUpdate", ales_sueVO);
	}

	public void updateAlesSue(Ales_sueVO ales_sueVO) {
		update("prgr.Ales_sueDAO.updateAlesSue", ales_sueVO);
	}

}
