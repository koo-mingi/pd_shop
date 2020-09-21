package nexacro.sample.service.dao.ibatis.out.legal.advrq;



import java.util.List;
import java.util.Map;

import nexacro.sample.vo.out.legal.advrq.OutLegalAdvVO;

import org.springframework.stereotype.Repository;

import egovframework.rte.psl.dataaccess.EgovAbstractDAO;


@Repository("outLegalAdvDAO")
public class OutLegalAdvDAO extends EgovAbstractDAO {

	
	@SuppressWarnings("rawtypes")
	public List selectOutLegalAdvList(Map<String, Object> map){
		return list("outlegalSQL.selectOutLegalAdvList", map);
	}
	
	
}
