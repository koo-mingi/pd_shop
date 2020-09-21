package nexacro.sample.service.out.web.outlegal.total;


/**  
 * @Class Name : OutLegalService.java
 * @Description : 
 * @Modification Information  
 * @
 * @  수정일      수정자              수정내용
 * @ ---------   ---------   -------------------------------
 * @ 2013.08.17   신미향              최초생성
 * 
 */

import java.util.List;

import nexacro.sample.vo.out.web.outlegal.total.OutLegalWebVo;



public interface OutLegalWebService {
	
	//법률자문 검색
	List getOutList(OutLegalWebVo outVO) throws Exception;
	
	//법률자문 상세 조회
	List getDetail(OutLegalWebVo outVO) throws Exception;
	
	//자문비내역 저장
	int costInsert(OutLegalWebVo outVO) throws Exception;
	
	//자문비내역 삭제
	int costDelete(OutLegalWebVo outVO) throws Exception;
	
	//법률자문비내역 수정(update) 
	int costUpdate(OutLegalWebVo outVO) throws Exception;
	
	//법률자문정보 수정(update) 
	int createOut(OutLegalWebVo outVO) throws Exception;
	
	//법률자문비 검색
	List getCostList(OutLegalWebVo outVO) throws Exception;
	
	//법률자문비 상세내역 (ajax)
	OutLegalWebVo getLegalAdReDetailList(OutLegalWebVo outVO);
	
	//법률자문조회 total COUNT
	int getTotalCount(OutLegalWebVo outVO) throws Exception;
	
}
