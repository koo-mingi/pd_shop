package nexacro.sample.service.dao.ibatis.out.web.login;


import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import egovframework.rte.psl.dataaccess.EgovAbstractDAO;

@Repository("outWebLoginDAO")
public class OutWebLoginDAO extends EgovAbstractDAO {
	
	@SuppressWarnings("rawtypes")
	public List selectOutWebLoginCheck(Map outWebLoginMap){
		return list("outwebSQL.selectOutWebLoginCheck", outWebLoginMap);
	}
}
