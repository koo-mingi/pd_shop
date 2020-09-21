package nexacro.sample.service.out.web.outlegal.total;


import java.util.List;

import nexacro.sample.vo.out.web.outlegal.total.OutLegalWebVo;



public interface OutPreiwrWebService {
	
	//준비서면 기본사항
	List getPreiwrListSelect(OutLegalWebVo outVO);
	
	//준비서면 상세내역 
	List getPreiwrDetailListSelect(OutLegalWebVo outVO);
	
	//준비서면 상세내역 (ajax)
	List getPreiwrDetailList(OutLegalWebVo outVO);
	
	//준비서면 입력
	int preiwr_insert(OutLegalWebVo outVO)	throws Exception;
	
	//준비서면 수정
	int preiwr_update(OutLegalWebVo outVO)	throws Exception;
	
	//준비서면 삭제
	int preiwr_delete(OutLegalWebVo outVO)	throws Exception;
	
	//준비서면 팝업
	List LawNoSearch(OutLegalWebVo outVO) throws Exception;
	
	//준비서면 목록 COUNT
	int getTotalCount(OutLegalWebVo outVO) throws Exception;
	
	//준비서면 팝업COUNT
	int getTotalCountPop(OutLegalWebVo outVO) throws Exception;
	
	//준비서면 파일COUNT
	int getTotalCountFile(OutLegalWebVo outVO) throws Exception;
	
	//준비서면 파일조회
	List getPreFile(OutLegalWebVo outVO);
	
	//파일등록 입력
	int getFileWrite(OutLegalWebVo outVO)	throws Exception;
	
	//준비서면 첨부파일내역 등록
	int insertFilePre(OutLegalWebVo outVO)	throws Exception;
	
	//준비서면 파일삭제
	int deletePreFile(OutLegalWebVo outVO)	throws Exception;
}
