package nexacro.sample.service.dao.ibatis.legalofficials;

import nexacro.sample.vo.legalofficials.LegalOfficialsVO;

import org.springframework.stereotype.Repository;

import egovframework.rte.psl.dataaccess.EgovAbstractDAO;

@Repository("legalOfficialsDAO")
public class LegalOfficialsDAO extends EgovAbstractDAO {
	
	public int updateLegalOfficials(LegalOfficialsVO ListVO) {
		return update("legalOfficials.LegalOfficialsDAO.updateLegalOfficials", ListVO);
	}
	
	public int insertLegalOfficials(LegalOfficialsVO ListVO) {
		return update("legalOfficials.LegalOfficialsDAO.insertLegalOfficials", ListVO);
	}
}
