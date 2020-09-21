package nexacro.sample.service.dao.ibatis.out.web.outlegal.common;

import java.util.List;

import nexacro.sample.vo.out.web.outlegal.common.OutWebCommonVO;

import org.springframework.stereotype.Repository;

import egovframework.rte.psl.dataaccess.EgovAbstractDAO;


@Repository("outWebCommonDAO")
public class OutWebCommonDAO extends EgovAbstractDAO {

	/* 공통코드 호출 */ 
	public List selectOutCommonCode(OutWebCommonVO outWebCommonVO){
		return list("outlegalSQL.selectOutCommonCode",outWebCommonVO);
	}
	
	
}
