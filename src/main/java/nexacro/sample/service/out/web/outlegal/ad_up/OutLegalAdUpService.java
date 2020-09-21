package nexacro.sample.service.out.web.outlegal.ad_up;


import java.util.List;

import nexacro.sample.vo.out.web.outlegal.ad_up.OutLegalAdCostVO;
import nexacro.sample.vo.out.web.outlegal.ad_up.OutLegalAdUpVO;

public interface OutLegalAdUpService {

	List selectOutLegaladvLawAdvWeb(OutLegalAdUpVO outLegalAdUpVO); // 자문의뢰목록, 내용 조회
	List selectOutLegaladvLawAdvWebDetail(OutLegalAdUpVO outLegalAdUpVO); // 자문의뢰목록, 내용 조회
	
	int saveOutLegaladvLawAdvWeb(OutLegalAdUpVO outLegalAdUpVO); // 자문 회신 수정
	
	List selectOutLegaladvCostWeb(OutLegalAdCostVO outLegalAdCostVO); // 자문비 조회
	
	int saveOutLegaladvCostWeb(OutLegalAdCostVO outLegalAdCostVO); // 자문비 입력
	
	Object selectTotalItem(OutLegalAdUpVO outLegalAdUpVO);
}
