package nexacro.sample.service.dao.ibatis.out.legal.lawsuitno;


import java.util.List;
import java.util.Map;

import nexacro.sample.vo.out.legal.lawsuitno.LawsuitNoVo;

import org.springframework.stereotype.Repository;

import egovframework.rte.psl.dataaccess.EgovAbstractDAO;


@Repository("lawsuitNoDAO")
public class LawsuitNoDAO extends EgovAbstractDAO {
	@SuppressWarnings("rawtypes")
	public List selectLawsuitNo(Map<String, Object> map) {
		return list("lawsuitnoSQL.selectLawsuitNo", map);
	}
	
}
