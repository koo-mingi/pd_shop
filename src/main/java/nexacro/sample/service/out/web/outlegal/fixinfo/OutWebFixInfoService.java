package nexacro.sample.service.out.web.outlegal.fixinfo;


import java.util.List;

import nexacro.sample.vo.out.web.outlegal.fixinfo.OutWebFixInfoVO;
import nexacro.sample.vo.out.web.outlegal.lawno.OutLawNoVO;

public interface OutWebFixInfoService {

	
	/* 소송조회 총 컨텐츠 수 */
	Object selectOutLawNoSearchPoppagingSet(OutLawNoVO outLawNoVO);
	
	/* 소송조회 총 컨텐츠 수 */
	Object selectOutWebFixInfoPagingSet(OutWebFixInfoVO outWebFixInfoVO);
	
	/* 심급 조회 */
	List selectOutWebFixInfoInstAdmCode(OutLawNoVO outLawNoVO);
	
	/* 소송번호와 심급코드로 기일정보 조회 */
	List selectOutWebFixInfoAll(OutWebFixInfoVO outWebFixInfoVO);
	
	/* 기일목록 조회 */
	List selectOutWebFixInfoListAll(OutWebFixInfoVO outWebFixInfoVO);
	
	/* 기일상세 조회 */
	List selectOutWebFixInfoListDetail(OutWebFixInfoVO outWebFixInfoVO);
	
	/* 기일정보 상세 입력, 수정, 삭제 */
	int saveOutWebFixInfoDetail(OutWebFixInfoVO outWebFixInfoVO);
}
