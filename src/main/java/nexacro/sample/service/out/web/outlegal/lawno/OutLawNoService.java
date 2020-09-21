package nexacro.sample.service.out.web.outlegal.lawno;


import java.util.List;

import nexacro.sample.vo.out.web.outlegal.lawno.OutLawNoVO;

public interface OutLawNoService {

	public List outLawsuitAdmNoSelectWeb(OutLawNoVO outLawNoVO);
	
	/* 기일정보 조회 */
	public List selectOutFixInfo(OutLawNoVO outLawNoVO);
	
}
