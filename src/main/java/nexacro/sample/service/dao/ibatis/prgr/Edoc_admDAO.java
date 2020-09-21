package nexacro.sample.service.dao.ibatis.prgr;

import java.util.List;
import java.util.Map;

import nexacro.sample.vo.prgr.Edoc_admVO;

import org.springframework.stereotype.Repository;

import com.nexacro.spring.dao.ibatis.NexacroIbatisAbstractDAO;

@Repository("edoc_admDao")
public class Edoc_admDAO extends NexacroIbatisAbstractDAO  {
	
	public List<Edoc_admVO> edoc_lawsuitSelect(Map<String, Object> selectMap) {

		return (List<Edoc_admVO>)list("prgr.Edoc_admDAO.getLawSuitSelect", selectMap);
	}
	
	public List<Edoc_admVO> edoc_pladefSelect(Map<String, Object> selectMap) {

		return (List<Edoc_admVO>)list("prgr.Edoc_admDAO.getPlaDefSelect", selectMap);
	}
	
	public List<Edoc_admVO> edoc_admSelect1(Map<String, Object> selectMap) {

		return (List<Edoc_admVO>)list("prgr.Edoc_admDAO.getEdocAdmSelect1", selectMap);
	}

	public List<Edoc_admVO> edoc_admSelect2(Map<String, Object> selectMap) {

		return (List<Edoc_admVO>)list("prgr.Edoc_admDAO.getEdocAdmSelect2", selectMap);
	}
	
	public void edoc_admSave(Edoc_admVO edoc_admVO) {

		insert("prgr.Edoc_admDAO.edoc_admSave", edoc_admVO);
	}

	public void edoc_admUpdate(Edoc_admVO edoc_admVO) {
		
		update("prgr.Edoc_admDAO.edoc_admUpdate", edoc_admVO);
	}
	public void edoc_admDelete(Edoc_admVO edoc_admVO) {
		
		delete("prgr.Edoc_admDAO.edoc_admDelete", edoc_admVO);
	}

	public List<Edoc_admVO> getEdocAdmList(String lawsuitAdmNo) {
		return (List<Edoc_admVO>) list("prgr.Edoc_admDAO.getEdocAdmList",lawsuitAdmNo);
	}

	public void edoc_admDelete2(Map<String, Object> deleteMap) {
		delete("prgr.Edoc_admDAO.edocAdmDelete2",deleteMap);
		
	}

}
