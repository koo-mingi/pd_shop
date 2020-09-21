package nexacro.sample.service.out.web.outlegal.common;


import java.util.List;

import nexacro.sample.vo.out.web.outlegal.common.OutWebCommonVO;


public interface OutWebCommonService {

	/* 공통코드호출 */
	List selectOutCommonCode(OutWebCommonVO outWebCommonVO);

}
