package nexacro.sample.service.dao.ibatis.out.web.outlegal.lawno;

import java.util.List;

import nexacro.sample.vo.out.web.outlegal.lawno.OutLawNoVO;

import org.springframework.stereotype.Repository;

import egovframework.rte.psl.dataaccess.EgovAbstractDAO;



@Repository("outLawNoDAO")
public class OutLawNoDAO extends EgovAbstractDAO {

	
	@SuppressWarnings("rawtypes")
	/* 소송관리번호로 조회 */
	public List outLawsuitAdmNoSelectWeb(OutLawNoVO outLawNoVO){
		return list("outwebSQL.outLawsuitAdmNoSelectWeb",outLawNoVO);
	}// outLawsuitAdmNoSelectWeb()
	
	
	/* 기일정보 조회 */
	public List selectOutFixInfo(OutLawNoVO outLawNoVO){
		return list("outwebSQL.selectOutFixInfo",outLawNoVO);
	}// selectOutInstAdmCode()
	
	
}
