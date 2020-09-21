package nexacro.sample.service.out.web.outlegal.total;


import java.util.List;

import nexacro.sample.vo.out.web.outlegal.total.OutLegalWebVo;



public interface OutEdocAdmWebService {
	
	//소송정보
	List getLawsuitInfo(OutLegalWebVo outVO);
	
	//갑호증목록
	List getEdocAdmList1(OutLegalWebVo outVO);
	
	//을호증목록
	List getEdocAdmList2(OutLegalWebVo outVO);
	
	//서증관리 상세내역(ajax) 
	OutLegalWebVo getEdocAdmDetailList(OutLegalWebVo outVO);
	
	//첨부파일 조회
	List getAddFile(OutLegalWebVo outVO);
	
	//서증관리 저장
	int edocAdmInsert(OutLegalWebVo outVO);
	
	//서증관리 수정
	int edocAdmUpdate(OutLegalWebVo outVO);
	
	//서증관리 삭제
	int edocAdmDelete(OutLegalWebVo outVO);
		
	// 공통 관리 - 소송번호검색
	List LawNoSearch(OutLegalWebVo selectVo) throws Exception;
	// list LawNoSearch의 값을 selectVo에 담음
	
	//첨부파일 COUNT
	int getTotalCount(OutLegalWebVo outVO) throws Exception;
	//COUNT
	int getTotalCount1(OutLegalWebVo outVO) throws Exception;
	//COUNT
	int getTotalCount2(OutLegalWebVo outVO) throws Exception;
	// 게시판 글(파일O) 등록
	int getFileWrite(OutLegalWebVo outVO) throws Exception;
	// 게시판 글(파일O) 등록
	int insertFileEdoc(OutLegalWebVo outVO) throws Exception;
	
	//서증관리 파일삭제
	int deleteEdocFile(OutLegalWebVo outVO)	throws Exception;
}
