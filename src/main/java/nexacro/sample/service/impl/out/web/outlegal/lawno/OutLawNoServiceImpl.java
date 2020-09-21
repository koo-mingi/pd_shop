package nexacro.sample.service.impl.out.web.outlegal.lawno;


import java.util.List;

import javax.annotation.Resource;

import nexacro.sample.service.dao.ibatis.out.web.outlegal.lawno.OutLawNoDAO;
import nexacro.sample.service.out.web.outlegal.lawno.OutLawNoService;
import nexacro.sample.vo.out.web.outlegal.lawno.OutLawNoVO;

import org.springframework.stereotype.Service;

import egovframework.rte.fdl.cmmn.AbstractServiceImpl;

@Service("outLawNoService")
public class OutLawNoServiceImpl extends AbstractServiceImpl implements OutLawNoService {

	@Resource(name="outLawNoDAO")
	private OutLawNoDAO outLawNoDAO;
	
	public List outLawsuitAdmNoSelectWeb(OutLawNoVO outLawNoVO) {
		// TODO Auto-generated method stub
		return outLawNoDAO.outLawsuitAdmNoSelectWeb(outLawNoVO);
	}

	/* 기일정보 조회 */
	public List selectOutFixInfo(OutLawNoVO outLawNoVO) {
		// TODO Auto-generated method stub
		return outLawNoDAO.selectOutFixInfo(outLawNoVO);
	}

}
